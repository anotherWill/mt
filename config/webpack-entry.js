const glob = require('glob')
const path = require('path')
const fs = require('fs')
const jsPath = path.resolve('src', 'js')
const jsEntries = glob.sync(jsPath + '/*.wp.js')
const cssPath = path.resolve('src', 'css')

module.exports = function () {

  let entries = {}

  for (let i = 0; i < jsEntries.length; i++) {

    let jsFile = jsEntries[i]
    let entry = []
    let chunkName = jsFile
                    .substring(jsFile.lastIndexOf('\/') + 1, jsFile.lastIndexOf('.'))
                    .split('.')[~-1]
    let cssFile = `${cssPath}/${chunkName}.css`
    entry.push(jsFile)
    if (fs.existsSync(cssFile)) {
      entry.push(cssFile)
    }
    entries[chunkName] = entry
  }
  return entries
}