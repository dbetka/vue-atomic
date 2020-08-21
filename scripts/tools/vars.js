const { argv } = require('yargs');

const TYPES = {
  directory: 'directory',
  file: 'file',
};

const input = argv.input;
const output = argv.output;
const baseFile = argv.baseFile;

module.exports = {
  TYPES,
  input,
  output,
  baseFile,
}
