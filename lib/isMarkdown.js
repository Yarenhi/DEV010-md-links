const path = require('path');


const mdExtensions = ['.md', '.mkd', '.mdwn', '.mdown', '.mdtxt', '.mdtext', '.markdown', '.text'];

// Función para verificar si el archivo es de tipo Markdown
const isMarkdownFile = (filePath)=> {
  const fileExtension = path.extname(filePath);
  return mdExtensions.includes(fileExtension);
};
module.exports = isMarkdownFile;