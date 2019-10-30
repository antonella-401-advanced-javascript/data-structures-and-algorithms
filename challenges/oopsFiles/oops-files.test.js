const { getNums, getPath, getContent, getStamp } = require('./oops-files');

const folder = './folder/';

describe('File rename', () => {

  it('gets an array of the file numbers', () => {
    getNums(folder)
      .then(fileNumbers => {
        expect(fileNumbers).toEqual([
          '0', '16', '22'
        ]);
      })
      .catch(err => err);
  });

  it('gets an array of the file names', () => {
    getPath(folder)
      .then(files => {
        expect(files).toEqual([
          './folder/0.txt', './folder/16.txt',
          './folder/22.txt'
        ]);
      })
      .catch(err => err);
  });

  it('gets an array of the file contents', () => {
    getPath(folder)
      .then(files => {
        return getContent(files);
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
    getPath(folder)
      .then(files => {
        return getStamp(files)
          .then(results => {
            expect(results).toEqual(['2019-10-30T17:44:21.483Z', '2019-10-30T17:44:07.694Z', '2019-10-30T17:44:16.619Z']);
          });
      })
      .catch(err => err);
  });
});