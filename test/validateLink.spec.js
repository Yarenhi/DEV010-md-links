const axios = require('axios');
const validateLinks = require('../lib/validateLink');

jest.mock('axios');

describe('validateLinks', () => {
  test('validateLinks should return validated links', async () => {
    const links = [
      { href: 'https://google.com', text: 'prueba', file: 'ruta' },
      
    ];

    const resultados= [
  
         { 
          file: "ruta",
          href :"https://google.com",
          ok: "ok",
          status : 200,
          text: "prueba",
    }
    ];
    axios.get.mockResolvedValue({
      status: 200
    })
    return validateLinks(links).then((res)=>{
    // console.log(res);
    expect(res).toEqual(resultados)
    })
  })
});

    