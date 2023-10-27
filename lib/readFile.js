const fs = require ("fs");

const readFile = (markdownFile) => {
  fs.readFile(markdownFile, 'utf-8', (err, data) => {
    if(err) {
      console.log('error: ', err);
      throw err;
    } else {
      console.log(data);
      return data;
    }
  });
};
module.exports = readFile;