#!/usr/bin/env node
const { join, resolve } = require('path')
const { readdirSync, existsSync, unlink, writeFile, appendFile } = require('fs')
const { camelCase } = require('lodash')
const indexPath = 'src/index.js'


const filterByExtension = (file, ext=`.js`) => {
  return file.indexOf(ext) !== -1
}

const getFilesFromDir = (dir, ext=`.js`) => {
  return readdirSync(dir).filter(file => filterByExtension(file, ext))
}

const removeExtensionFromFiles = (items) => {
  let componentsArr = []
  items.forEach(item => {
    let tempItem = {}
    tempItem['name'] = createComponentName(item)
    tempItem['file'] = item
    componentsArr.push(tempItem)
  })
  return componentsArr
}

const removeExtension = (file) => {
  return file.split('.').slice(0, -1).join('.')
}

const createComponentName = (component) => {
  let tempComponentName
  tempComponentName = removeExtension(component)
  tempComponentName = camelCase(tempComponentName)
  tempComponentName = capitalizeFirstLetter(tempComponentName)
  return tempComponentName
}

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const getComponents = (rootDir, ext=`.js`) => {
  const componentsArr = getFilesFromDir(rootDir, ext)
  return removeExtensionFromFiles(componentsArr)
}

const createDataString = (data, components) => {
  components.length &&
    components.forEach(
      component => data += `export * from './components/${component.file}'\n`
    )
  
  return data
}

const logError = err => {
  if (err) throw err
}

const deleteIndexFile = () => {
  unlink(indexPath, (err) => logError(err))
}

const createIndexFile = () => {
  writeFile(indexPath, '', (err) => logError(err))
}

const addDataToFile = () => {
  appendFile(indexPath, data, (err) => logError(err))
}

const exportComponents = () => {
  existsSync(indexPath) ? deleteIndexFile() : createIndexFile()
  addDataToFile()
}

const createIndex = rootDir => {
  let data = ''
  const components = getComponents(rootDir)
  data = createDataString(data, components)
  exportComponents(data)
}

module.exports = {
  createIndex
}