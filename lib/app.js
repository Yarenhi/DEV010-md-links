const path = require('path');
const fs = require('fs');
const isMarkdownFile = require('./isMarkdown');
const readFiles = require('./readFile');
const extractLinks = require('./contentLinks');

const mdLinks = (filePath) => {
  return new Promise((resolve, reject) => {
    try {
      // Convertimos la ruta a absoluta
      const absolutePath = path.resolve(filePath);
      // Verificamos que la ruta exista
      const pathExist = fs.existsSync(absolutePath);
      if (pathExist) {
        // Verificamos si el archivo es MarkDown
        if (isMarkdownFile(absolutePath)) {
          readFiles(absolutePath) // leemos el archivo
            .then((fileContent) => {
              const links = extractLinks(fileContent, absolutePath); // Extraer los enlaces
              resolve(links);
            })
            .catch((error) => {
              reject(error);
            });
        } else {
          reject(new Error("No es un archivo MarkDown"));
        }
      } else {
        reject(new Error("La ruta no existe"));
      }
    } catch (e) {
      reject(e);
    }
  });
};


module.exports = mdLinks;
                  
