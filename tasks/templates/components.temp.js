const { isArr, get } = require('@keg-hub/jsutils')

const getAttrVal = (attrs, matchAttr) => {
  return isArr(attrs) &&
    attrs.reduce((viewBox, attr) => {
      return viewBox
        ? viewBox
        : get(attr, `name.name`) === matchAttr 
          ? get(attr, `value.value`)
          : viewBox
    }, false)
}

const getDelta = children => {
  let delta
  const resp = isArr(children) &
    children.map(child => {
      if(delta) return delta
      if(!delta && child.openingElement){
        delta = getAttrVal(child.openingElement.attributes, 'd')
      }
      if(!delta && child.children && child.children.length){
        delta = getDelta(child.children)
      }
    })

  return delta
}

const template = ({ template }, opts, { componentName, jsx },) => {
  const plugins = ['jsx']
  if (opts.typescript) plugins.push('typescript')
  const typeScriptTpl = template.smart({ plugins })

  const viewBox = jsx.openingElement && getAttrVal(jsx.openingElement.attributes, 'viewBox')
  const delta = jsx.children && getDelta(jsx.children)

  return typeScriptTpl.ast`import React from 'react'
import { SvgIcon } from '@keg-hub/keg-components'

export const ${componentName} = props => {
  return (
    <SvgIcon
      {...props}
      viewBox={'${viewBox}'}
      delta={'${delta}'}
    />
  )
}
  `
}

module.exports = template