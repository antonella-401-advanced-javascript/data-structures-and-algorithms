const fs = require('fs').promises;

const getNums = dir => {
  return fs.readdir(dir)
    .then(files => files.map(name => name.slice(0, name.length - 4)))
    .catch(err => console.log(err));
};

const getPath = dir => {
  return fs.readdir(dir)
    .then(files => files.map(name => dir + name))
    .catch(err => console.log(err));
};

const getContent = arr => {
  return Promise.all(arr.map(path => fs.readFile(path, { encoding: 'utf8' })))
    .catch(err => console.log(err));
};

const getStamp = arr => {
  return Promise.all(arr.map(path => {
    return fs.stat(path)
      .then(stat => stat.mtime)
      .catch(err => console.log(err));
  }))
    .catch(err => console.log(err));
};

const rename = (paths, fileNumbers, contents, timestamps) => {
  return Promise.all([paths.forEach((file, index) => {
    fs.rename(file, `./challenges/oopsFiles/folder/${contents[index]}-${fileNumbers[index]}-${timestamps[index]}`, err => {
      if(err) {
        throw err;
      }
    });
  })])
    .catch(err => console.log(err));
};


const fileRenamer = directory => {
  let pathArr;
  let numArr;
  let contArr;
  return getNums(directory)
    .then(fileNumbers => (
      numArr = fileNumbers,
      getPath(directory)))
    .then(filePaths => (
      pathArr = filePaths,
      getContent(filePaths)))
    .then(fileContents => (
      contArr = fileContents,
      getStamp(pathArr)))
    .then(timestamps => {
      return rename(pathArr, numArr, contArr, timestamps);
    })
    .catch(err => console.log(err));
};

fileRenamer('./challenges/oopsFiles/folder/');

module.exports = {
  getNums,
  getPath,
  getContent,
  getStamp
};