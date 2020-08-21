const fs = require('fs');
const sass = require('node-sass');
const { TYPES, input, output, baseFile } = require('./vars.js');

function readFile (path) {
  return fs.readFileSync(path, 'utf8');
}

function makeFile (path, value) {
  fs.writeFile(path, value, error => {
    if (error) {
      console.error(error);
    }
  });
}

function convertSASSToCSS (data) {
  return sass.renderSync({
    data,
    indentedSyntax: true,
  }).css.toString();
}

function mergeBaseFileAndConvertSASSToCSS (dirFile) {
  const baseFile = readFile(baseFile);
  const fileToConvert = readFile(dirFile.path);

  return convertSASSToCSS(baseFile + '\n' + fileToConvert);
}

function recursiveConvertAndMake (dirTree) {
  if (dirTree.type === TYPES.directory) {
    if (dirTree.children.length > 0) {
      for (const childrenDir of dirTree.children) {
        recursiveConvertAndMake(childrenDir);
      }
    }
  } else if (dirTree.type === TYPES.file) {
    const value = mergeBaseFileAndConvertSASSToCSS(dirTree);
    const newPath = dirTree.path.replace(input, output).replace(/\.sass$/, '.css');
    makeFile(newPath, value);
  }
}

module.exports = {
  read: readFile,
  make: makeFile,
  convertSASSToCSS,
  recursiveConvertAndMake,
};
