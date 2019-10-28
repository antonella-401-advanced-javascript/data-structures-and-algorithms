const fs = require('fs').promises;

const readDir = path => fs.readdir(path, 'utf8');
const readFile = path => fs.readFile(path, 'utf8');
const renameFile = (path, newPath) => fs.rename(path, newPath, 'utf8');

module.exports = {
  readDir,
  readFile,
  renameFile
};