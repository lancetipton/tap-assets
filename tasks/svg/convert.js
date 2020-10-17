#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const { yarn } = require('../helpers/process')
const { executeTask } = require('../helpers/executeTask')
const { assetsRoot } = require('../helpers/tapRoot')

const defArgs = [
  `svgr`,
  `--config-file`,
  path.join(__dirname, '../../configs/svgr.config.js')
]

const isFolderPath = (cmd, location, isDir) => {
  return isDir
    ? cmd.concat([`-d`, location])
    : cmd.concat([location])
}

const addTemplate = (cmd, template) => {
  const templateArr = template
    ? [`--template`, template]
    : [`--template`, path.join(__dirname, `../templates/components.temp.js`)]
    
  return cmd.concat(templateArr)
}

const getOutputPath = (cmd, output, location, isDir) => {
  return output && isDir
    ? cmd.concat([`--out-dir`, output])
    : cmd
}


const convertSvg = async (args) => {
  const { params } = args
  const { dimensions, location, native, output, template } = params
  const fullLocation = path.join(assetsRoot, location)
  const isDir = fs.statSync(fullLocation).isDirectory()

  let cmd = Array.from(defArgs)
  native && cmd.push(`--native`)
  !dimensions && cmd.push(`--no-dimensions`)
  
  cmd = isFolderPath(cmd, fullLocation, isDir)
  cmd =  output ? getOutputPath(cmd, output, location, isDir) : cmd
  cmd = addTemplate(cmd, template)

  const resp = await yarn(cmd)

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
      default: `assets/svgs`,
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