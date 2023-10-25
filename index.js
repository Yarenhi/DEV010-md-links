// module.exports = () => {
//   // ...
// const mdLinks = require("md-links");

// mdLinks("./some/example.md")
//   .then(links => {
//     // => [{ href, text, file }, ...]
//   })
//   .catch(console.error);

//Creamos la promesa MDLINKS
const path = require('path');
const fs = require('fs').promises;

const mdLinks = (filePath) => {
  return new Promise((resolve, reject) => {
    // Verificamos que la ruta exista
    fs.access(filePath)
      .then(() => {
        // La ruta existe, continuamos con el procesamiento
        const absolutePath = path.resolve(filePath); // Convertimos la ruta a absoluta
        console.log(absolutePath); // Mueve el console.log aquí
        return fs.readFile(absolutePath, 'utf-8');
      })
      .then((content) => {
        const links = [];
        const linkRegex = /(\[([^\]]*)\]\(([^)]*)\))/g;

        let match;
        while ((match = linkRegex.exec(content)) !== null) {
          const [, fullMatch, text, href] = match;
          links.push({ href, text, file: filePath });
        }

        resolve(links);
      })
      .catch((error) => {
        reject(`Error al leer el archivo: ${error.message}`);
      });
  });
};

// Ejemplo de uso
mdLinks('C:/Users/Yaya/Laboratoria/DEV010-md-links/lib/Readme.md')
  .then((links) => {
    console.table(links);
  })
  .catch((error) => {
    console.error(error);
  });
