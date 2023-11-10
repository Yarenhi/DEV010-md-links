const readFiles = require("./lib/readFile.js");
const isMarkdownFile = require("./lib/isMarkdown.js");
const extractLinks = require("./lib/contentLinks.js");


//Test isMarkdownFile
describe("test isMarkdownFile", () => {
  it("isMarkdownFile must return me a boolean", () => {
    expect(isMarkdownFile("./docs")).toBe(false);
  });
});

describe("test extractLinks", () => {
  it("extractLinks must return me an array with links ", () => {
    const text = `Hola Mundo!  
    ![prueba](https://www.youtube.com/watch?v=_2VHVIJCtGk&list=PL3aEngjGbYhnrRfZKMxzn79qdgPx)
    ![prueba](https://www.youtube.com/watch?v=J3QUbmNk3Esq&AL7OWM&index=5)`;
    const result = [
      {
        href: "https://www.youtube.com/watch?v=_2VHVIJCtGk&list=PL3aEngjGbYhnrRfZKMxzn79qdgPx",
        text: "prueba",
        file: "ruta",
      },
      {
        href: "https://www.youtube.com/watch?v=J3QUbmNk3Esq&AL7OWM&index=5",
        text: "prueba",
        file: "ruta",
      },
    ];
expect (extractLinks (text, 'ruta')).toEqual(result)

  });
});

describe ('test readFiles', () =>{
it ('readFiles must be return me a text', () => {
readFiles('./lib/Readme.md')
  .then((result) => {
    expect(result).toEqual(`Hola Mundo!

    ![prueba](https://www.youtube.com/watch?v=yxLOBFXSkv0&pp=ygUNdmVyY2VsIGRlcGxveQ%3D%3D)`)
});
});
});
