const mdLinks = require('./mdLinks'); // Reemplaza './mdLinks' con la ruta correcta a tu archivo

// Prueba básica para verificar si la función mdLinks resuelve correctamente
test('mdLinks resuelve correctamente', () => {
  return mdLinks('./lib/Readme.md').then((links) => {
    expect(links).toEqual(expect.arrayContaining([
      expect.objectContaining({ href: expect.any(String), text: expect.any(String), file: expect.any(String) })
    ]));
  });
});

// Prueba para verificar si se maneja correctamente un archivo que no es de tipo Markdown
test('mdLinks rechaza archivos que no son Markdown', () => {
  return expect(mdLinks('./lib/NotMarkdown.txt')).rejects.toEqual('El archivo no es de tipo Markdown');
});
