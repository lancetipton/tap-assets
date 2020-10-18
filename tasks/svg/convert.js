#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const { yarn } = require('../helpers/process')
const { executeTask } = require('../helpers/executeTask')
const { assetsRoot } = require('../helpers/tapRoot')
const { isPathDirectory, writeFile, getSavePath } = require('../helpers/locations')

const outputIdentifier = `import React from "react";`

const defArgs = [`svgr`]

const addOutputParams = (cmd, locPath, outPath, isDir) => {
  return isDir
    ? cmd.concat([`-d`, outPath, locPath])
    : cmd.concat([locPath])
}

const addTemplate = (cmd, template) => {
  const templateArr = template
    ? [`--template`, template]
    : [`--template`, path.join(__dirname, `../templates/components.temp.js`)]
    
  return cmd.concat(templateArr)
}

const onStdOut = outPath => {
  return data => {
    data.indexOf(outputIdentifier) !== -1
      ? writeFile(outPath, data)
      : process.stdout.write(data)
  }
}

const getPaths = (location, output) => {
  const locationData = isPathDirectory(assetsRoot, location)
  const outputData = isPathDirectory(assetsRoot, output, locationData.isDir)
  const isDir = locationData.isDir && outputData.isDir

  return {
    isDir,
    locPath: locationData.fullPath,
    outPath: getSavePath(outputData.fullPath, locationData.fullPath, isDir),
  }
}

const convertSvg = async (args) => {
  const { params } = args
  const { dimensions, location, native, output, template } = params

  let cmd = Array.from(defArgs)
  native && cmd.push(`--native`)
  !dimensions && cmd.push(`--no-dimensions`)
  cmd = addTemplate(cmd, template)

  const { locPath, outPath, isDir } = getPaths(location, output)
  cmd = addOutputParams(cmd, locPath, outPath, isDir)

  const configOpts = !isDir && { onStdOut: onStdOut(outPath), options: { stdio: 'pipe' } } || {}
  const resp = await yarn(cmd, configOpts)

  return resp

}

const convert = {
  name: 'create',
  action: convertSvg,
  example: 'yarn svg:convert',
  description : 'Converts an svg file or folder to Keg consumable format',
  options: {
    location: {
      alias: [ 'loc', 'in' ],
      description: 'The location for the file or folder to con vert',
      example: `yarn svg:convert --location /path/to/svg/(file || folder)`,
      required: true,
    },
    output: {
      alias: [ 'out' ],
      description: 'The output location for exported svgs',
      example: `yarn svg:convert --output src/assets/svgs`,
      default: `src/assets/svgs`,
    },
    native: {
      alias: [ 'nat' ],
      description: `Set the SVG transform to be react-native compatible`,
      example: `yarn svg:convert --no-native`,
      default: true,
    },
    overwrite: {
      alias: [ 'over' ],
      description: 'Overwrite and existing files in the output',
      example: 'yarn svg:convert --no-overwrite',
      default: true
    },
    dimensions: {
      alias: [ 'dims' ],
      description: 'Keep the SVG height and width dimensions',
      example: 'yarn svg:convert --dimensions',
      default: false
    },
    template: {
      alias: [ 'temp' ],
      description: 'The name of the template to use for the conversion',
      example: 'yarn svg:convert --template path/to/template',
      default: `./tasks/templates/components.temp.js`
    }
  }
}

executeTask(module, convert, convert.name)