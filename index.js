const mdLinks = require("./lib/app.js"); 

//Ejemplo de uso
mdLinks('./lib/Readme.md')
  .then((links) => {
    console.log(links); // Imprime la lista de links
  })
  .catch((error) => {
    console.error(error); // Maneja cualquier error que pueda ocurrir
  });

  // mdLinks('./README.md')
  // .then((links) => {
  //   console.log(links); // Imprime la lista de links
  // })
  // .catch((error) => {
  //   console.error(error); // Maneja cualquier error que pueda ocurrir
  //  });

