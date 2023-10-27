const mdLinks = require("./lib/app"); 

// Ejemplo de uso
// mdLinks('mdLinks.spec.js')
//   .then((links) => {
//     console.table(links); // Imprime la lista de links
//   })
//   .catch((error) => {
//     console.error(error); // Maneja cualquier error que pueda ocurrir
//   });

  mdLinks('./lib/Readme.md')
  .then((links) => {
    console.table(links); // Imprime la lista de links
  })
  .catch((error) => {
    console.error(error); // Maneja cualquier error que pueda ocurrir
  });

