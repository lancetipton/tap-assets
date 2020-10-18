const fs = require('fs')
const path = require('path')

/**
 * Ensures a directory exists
 * @param {string} dirPath - path to ensure
 *
 * @return {string} - directory path that was ensured
 */
const ensureDirSync = dirPath => {
  // make the directory if it doesn't exist
  !fs.existsSync(dirPath) && fs.mkdirSync(dirPath)
  return true
}

const checkLastSlash = filePath => {
  return filePath[filePath.length - 1] === '/'
    ? filePath.substring(0, filePath.length - 1)
    : filePath
}

const isPathDirectory = (rootPath, output, ensure) => {
  const fullPath = rootPath ? path.join(rootPath, output) : output
  try {
    const isDir = fs.statSync(fullPath).isDirectory()

    return { isDir, fullPath: fullPath }
  }
  catch(err){
    if(!ensure) throw err
    return { isDir: ensureDirSync(fullPath), fullPath: fullPath }
  }
}

const writeFile = (savePath, data) => {
  try {
    const saved = fs.writeFileSync(savePath, data, 'utf8')
    return true
  }
  catch(err) {
    console.error(err)
  }
}

const getSavePath = (outputPath, locationPath, isDir) => {
  if(isDir){
    ensureDirSync(outputPath)
    return outputPath
  }

  const fileName = locationPath.split('/').pop()
  const fileSplit = fileName.split('.')
  fileSplit.pop()

  outputPath = checkLastSlash(outputPath)

  return `${outputPath}/${fileSplit.join('.')}.js`
}


module.exports = {
  checkLastSlash,
  getSavePath,
  isPathDirectory,
  writeFile,
}