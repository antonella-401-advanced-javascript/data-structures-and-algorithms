const fs = require('fs');

const getNums = dir => {
  return fs.promises.readdir(dir)
    .then(files => {
      return files.map(name => name.slice(0, name.length - 4));
    });
};

const getPath = dir => {
  return fs.promises.readdir(dir)
    .then(files => {
      return files.map(name => './challenges/oopsFiles/folder/' + name);
    });
};

const getContent = arr => {
  return Promise.all(arr.map(path => fs.promises.readFile(path, 'utf8')));
};

const getStamp = arr => {
  return Promise.all(arr.map(path => {
    return fs.promises.stat(path)
      .then(stat => stat.mtime);
  }));
};

const rename = (paths, fileNumbers, contents, timestamps) => {
  return Promise.all(paths.forEach((file, index) => {
    fs.rename(file, `./challenges/oopsFiles/folder/${contents[index]}-${fileNumbers[index]}-${timestamps[index]}`, err => {
      if(err) {
        throw err;
      }
    });
  }));
};

const fileRenamer = directory => {
  return getNums(directory)
    .then(fileNumbers => {
      return getPath(directory)
        .then(filePaths => {
          return getContent(filePaths)
            .then(fileContents => {
              return getStamp(filePaths)
                .then(timestamps => {
                  return rename(filePaths, fileNumbers, fileContents, timestamps);
                });
            });
        });
    });
};

fileRenamer('./challenges/oopsFiles/folder/');

module.exports = {
  getNums,
  getPath,
  getContent,
  getStamp
};