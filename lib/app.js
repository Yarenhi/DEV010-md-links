const path = require('path');
const fs = require('fs');
const isMarkdownFile = require ('./isMarkdown')
const readFile = require ('./readFile')

const mdLinks = (filePath) => {
try {
    return new Promise((resolve, reject) => {
    // Convertimos la ruta a absoluta
    const absolutePath = path.resolve(filePath); 
    // Verificamos que la ruta exista  
    const pathExist= fs.existsSync(absolutePath);
    if (pathExist) {
    // Verificamos si el archivo es MarkDown
        if (isMarkdownFile(absolutePath)) {
            const contentFile= readFile(absolutePath);
            resolve(contentFile);
        } else {
            reject (new Error ("No es un archivo MarkDown"));
        }
    } else {
        reject(new Error("La ruta no existe"));
    }
    });
    }
    catch (e) {
        reject (e);
    }
};


    //       })
    //       .then((content) => {
//         const links = [];
//         const linkRegex = /(\[([^\]]*)\]\(([^)]*)\))/g;

//         let match;
//         // Encontramos y almacenamos los links en el archivo
//         while ((match = linkRegex.exec(content)) !== null) {
//           const [, fullMatch, text, href] = match;
//           links.push({ href, text, file: filePath });
//         }

//         // Resolvemos la promesa con la lista de links
//         resolve(links);
//       })
//       .catch((error) => {
//         // Si hay un error al leer el archivo o no es Markdown, rechazamos la promesa
//         reject(`Error: ${error.message}`);
//       });
//   });
// };

module.exports = mdLinks;