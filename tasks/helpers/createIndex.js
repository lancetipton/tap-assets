#!/usr/bin/env node
const path = require('path')
const fs = require('fs')

const filterByExtension = (file, ext=`.js`) => {
  return file.indexOf(ext) !== -1
}

const getFilesFromDir = (dir, ext=`.js`) => {
  return fs.readdirSync(dir)
}

const indexChildFolder = (childPath) => {
  const isDir = fs.statSync(childPath).isDirectory()
  isDir && createIndex(childPath)
}

const checkFilesAndChildren = (items, rootDir) => {
  return items.reduce((components, item) => {
    if(item === 'index.js') return components

    indexChildFolder(path.join(rootDir, item))

    const tempItem = {}
    tempItem['name'] = createComponentName(item)
    tempItem['file'] = item
    components.push(tempItem)

    return components
  }, [])
}

const removeExtension = file => {
  return file.split('.').slice(0, -1).join('.')
}

const createComponentName = component => {
  let tempComponentName
  tempComponentName = removeExtension(component)
  tempComponentName = capitalizeFirstLetter(tempComponentName)
  return tempComponentName
}

const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const getComponents = (rootDir, ext=`.js`) => {
  const componentsArr = getFilesFromDir(rootDir, ext)
  return checkFilesAndChildren(componentsArr, rootDir)
}

const createDataString = (data, components) => {
  components.length &&
    components.forEach(
      component => data += `export * from './${component.file}'\n`
    )
  
  return data
}

const logError = err => {
  err && console.error(err.stack)
}

const deleteIndexFile = indexPath => {
  fs.unlinkSync(indexPath)
}

const createIndexFile = indexPath => {
  fs.writeFileSync(indexPath, '')
}

const addDataToFile = (indexPath, data) => {
  fs.appendFileSync(indexPath, data)
}

const exportComponents = (data, indexPath) => {
  fs.existsSync(indexPath) ? deleteIndexFile(indexPath) : createIndexFile(indexPath)
  addDataToFile(indexPath, data)
}

const createIndex = (rootDir) => {
  let data = ''
  const components = getComponents(rootDir)
  data = createDataString(data, components)
  exportComponents(data, path.join(rootDir, `index.js`))
}

module.exports = {
  createIndex
}