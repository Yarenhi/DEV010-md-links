 const fs = require ('fs')
const absolutePath = ('./app.js')
// 
//  }
 
//  console.log(contentFile, '++++++');
//  console.log(links, 'ppppp');

const extractLinks = (data) => {
  const links = [];
  const linkRegex = /\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g;
  let match;
  // Encontramos y almacenamos los links en el archivo
  while ((match = linkRegex.exec(data)) !== null) {
    const [fullMatch, text, href] = match;
    links.push({ href, text, file: absolutePath});
  }

  return links; // Devuelve el arreglo de enlaces
};

module.exports = extractLinks;