const fs = require('fs');
const { importGlob } = require('./tools/importGlob')
const file = require('./tools/file');
const { input, output } = require('./tools/vars.js');


function convertWithGlobImport () {
  const content = file.read(input)
  const cssContent = file.convertSASSToCSS(content)
  file.make(output + '/index.css', cssContent)
}

convertWithGlobImport()
