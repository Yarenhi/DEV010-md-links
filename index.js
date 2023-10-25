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

const mdExtensions = ['.md', '.mkd', '.mdwn', '.mdown', '.mdtxt', '.mdtext', '.markdown', '.text'];

// Función para verificar si el archivo es de tipo Markdown
function isMarkdownFile(filePath) {
  const fileExtension = path.extname(filePath);
  return mdExtensions.includes(fileExtension);
}

const mdLinks = (filePath) => {
  return new Promise((resolve, reject) => {
    // Verificamos que la ruta exista
    fs.access(filePath)
      .then(() => {
        // La ruta existe, continuamos con el procesamiento
        const absolutePath = path.resolve(filePath); // Convertimos la ruta a absoluta
        console.log(absolutePath); // Mueve el console.log aquí para mostrar la ruta absoluta

        // Verificamos si el archivo es de Markdown
        if (isMarkdownFile(filePath)) {
          // Leemos el contenido del archivo
          return fs.readFile(absolutePath, 'utf-8');
        } else {
          reject('El archivo no es de tipo Markdown');
        }
      })
      .then((content) => {
        const links = [];
        const linkRegex = /(\[([^\]]*)\]\(([^)]*)\))/g;

        let match;
        // Encontramos y almacenamos los links en el archivo
        while ((match = linkRegex.exec(content)) !== null) {
          const [, fullMatch, text, href] = match;
          links.push({ href, text, file: filePath });
        }

        // Resolvemos la promesa con la lista de links
        resolve(links);
      })
      .catch((error) => {
        // Si hay un error al leer el archivo o no es Markdown, rechazamos la promesa
        reject(`Error: ${error.message}`);
      });
  });
};

// Ejemplo de uso
mdLinks('./lib/Readme.md')
  .then((links) => {
    console.log(links); // Imprime la lista de links
  })
  .catch((error) => {
    console.error(error); // Maneja cualquier error que pueda ocurrir
  });
