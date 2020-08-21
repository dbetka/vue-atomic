const dirTree = require('directory-tree');
const fs = require('fs');
const sass = require('node-sass');

const TYPES = {
  directory: 'directory',
  file: 'file',
};

const baseDir = 'src/styles/components';
const destinationDir = 'dist2';

function makeDir (dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
}

function recursiveMakeDir (dirTree) {
  if (dirTree.type === TYPES.directory) {
    if (dirTree.path !== baseDir) {
      makeDir(dirTree.path.replace(baseDir, destinationDir));
    }
    if (dirTree.children.length > 0) {
      for (const childrenDir of dirTree.children) {
        recursiveMakeDir(childrenDir);
      }
    }
  }
}

function makeFile (path, value) {
  fs.writeFile(path, value, error => {
    if(error){
      console.error(error)
    } else {
      console.log('file has been written on disk')
    }
  });
}

function recursiveMakeFile (dirTree) {
  if (dirTree.type === TYPES.directory) {
    if (dirTree.children.length > 0) {
      for (const childrenDir of dirTree.children) {
        recursiveMakeFile(childrenDir);
      }
    }
  } else if (dirTree.type === TYPES.file) {
    const value = convertSASSToCSS(dirTree);
    const newPath = dirTree.path.replace(baseDir, destinationDir).replace(/\.sass$/, '.css')
    makeFile(newPath, value)
  }
}

function convertSASSToCSS (dirFile) {
  return sass.renderSync({
    file: dirFile.path,
  });
}

const stylesTree = dirTree(baseDir, { extensions: /\.sass/ });

recursiveMakeDir(stylesTree);

recursiveMakeFile(stylesTree);
