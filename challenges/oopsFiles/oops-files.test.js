const  { getFileNumbers, getPaths, getContents, getTimestamps } = require('./oops-files.js');

const folder = './folder/';

describe('File rename', () => {

  it('gets an array of the file numbers', () => {
    getFileNumbers(folder)
      .then(fileNumbers => {
        expect(fileNumbers).toEqual([
          '0', '16', '22'
        ]);
      })
      .catch(err => err);
  });

  it('gets an array of the file names', () => {
    getPaths(folder)
      .then(files => {
        expect(files).toEqual([
          './folder/0.txt', './folder/16.txt',
          './folder/22.txt'
        ]);
      })
      .catch(err => err);
  });

  it('gets an array of the file contents', () => {
    getPaths(folder)
      .then(files => {
        return getContents(files);
      })
      .then(results => {
        expect(results).toEqual([
          'zero',
          'sixteen',
          'twenty-two',
        ]);
      })
      .catch(err => err);
  });

  it('gets an array of the timestamps', () => {
    getPaths(folder)
      .then(files => {
        return getTimestamps(files)
          .then(results => {
            expect(results).toEqual(['2019-10-30T17:44:21.483Z', '2019-10-30T17:44:07.694Z', '2019-10-30T17:44:16.619Z']);
          });
      })
      .catch(err => err);
  });
});