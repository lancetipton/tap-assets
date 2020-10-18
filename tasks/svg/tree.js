const fs = require('fs')
const path = require('path')
const dirTree = require("directory-tree")
const { assetsRoot } = require('../helpers/tapRoot')
const { createIndex } = require('../helpers/createIndex')
const { executeTask } = require('../helpers/executeTask')
const { checkLastSlash } = require('../helpers/locations')

const buildLocation = location => {
  return path.join(assetsRoot, location)
}

const writeTree = (name, content) => {
  let data = JSON.stringify(content)
  fs.writeFileSync(name, data)
}

const buildTree = async (args) => {
  const { params } = args
  const { location, output, context } = params
  // const fullLoc = buildLocation(location)
  // const tree = dirTree(fullLoc)
  const outputSlash = checkLastSlash(output)
  const outputPath = `${outputSlash}/${context}`
  // writeTree(outputPath, tree)
  const indexFolder = path.join(assetsRoot, outputSlash)
  const tree = require('../../src/assets/tree.json')
  createIndex(indexFolder, tree)
  
}

const tree = {
  name: 'tree',
  action: buildTree,
  example: 'yarn svg:tree',
  description : 'Build a json representation of the file tree',
  options: {
    location: {
      alias: [ 'loc', 'in' ],
      description: 'The location for the root folder for the tree',
      example: `yarn svg:tree --location /path/to/root/folder`,
      required: true,
    },
    output: {
      alias: [ 'out' ],
      description: 'The location to save the json file tree too',
      example: `yarn svg:tree --output src/assets`,
      default: `src/assets`,
    },
    context: {
      alias: [ 'name' ],
      description: 'Name to same the json file tree as',
      example: `yarn svg:tree --output src/assets/svgs`,
      default: `tree.json`,
    },
  }
}

executeTask(module, tree, tree.name)
