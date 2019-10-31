const fs = require('fs').promises;

const getFileNumbers = directory => {
  return fs.readdir(directory)
    .then(files => {
      return files.map(entry => entry.slice(0, entry.length - 4));
    });
};

const getPaths = directory => {
  return fs.readdir(directory)
    .then(files => {
      return files.map(entry => './challenges/oopsFiles/folder/' + entry);
    });
};

const getContents = pathArray => {
  return Promise.all(pathArray.map(path => fs.readFile(path, { encoding: 'utf8' })));
};

const getTimestamps = pathArray => {
  return Promise.all(pathArray.map(path => {
    return fs.stat(path)
      .then(stats => {
        return stats.mtime;
      });
  }));
};

const rename = (pathArray, fileNumberArray, contentsArray, timestampsArray) => {
  return Promise.all(pathArray.forEach((file, index) => {
    fs.rename(file, `./challenges/oopsFiles/folder/${contentsArray[index]}-${fileNumberArray[index]}-${timestampsArray[index]}`, err => {
      if(err) {
        throw err;
      }
    });
  }));
};

const fileRenamer = directory => {
  return getFileNumbers(directory)
    .then(fileNumbers => {
      return getPaths(directory)
        .then(filePaths => {
          return getContents(filePaths)
            .then(fileContents => {
              return getTimestamps(filePaths)
                .then(timestamps => {
                  return rename(filePaths, fileNumbers, fileContents, timestamps);
                });
            });
        });
    });
};

fileRenamer('./challenges/oopsFiles/folder/');

module.exports = { getFileNumbers, getPaths, getContents, getTimestamps };