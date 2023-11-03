const fs = require ("fs");

const readFiles=(absolutePath) => {
    return  new Promise((resolve, rejects)=>{
        fs.readFile(absolutePath,'utf-8', (err, data) => {
            if (err) throw err;
            // console.log(data, '-----');
            resolve( data)
          });
    })

}
module.exports = readFiles;



 

 