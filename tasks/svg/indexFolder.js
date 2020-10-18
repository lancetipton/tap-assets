const path = require('path')
const { assetsRoot } = require('../helpers/tapRoot')
const { createIndex } = require('../helpers/createIndex')
const { executeTask } = require('../helpers/executeTask')
const { checkLastSlash } = require('../helpers/locations')

const buildIndex = async (args) => {
  const { params } = args
  const { location } = params
  const indexFolder = path.join(assetsRoot, checkLastSlash(location))

  createIndex(indexFolder)
}

const index = {
  name: 'index',
  action: buildIndex,
  example: 'yarn svg:index',
  description : 'Generates an index.js file for all files in a folder',
  options: {
    location: {
      alias: [ 'loc', 'in' ],
      description: 'The location of the root folder to generate the index file for',
      example: `yarn svg:tree --location /path/to/root/folder`,
      required: true,
    }
  }
}

executeTask(module, index, index.name)
