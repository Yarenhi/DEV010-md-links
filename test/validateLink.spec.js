const axios = require('axios');
const validateLinks = require('../lib/validateLink');

jest.mock('axios');

describe('validateLinks', () => {
  test('validateLinks should return validated links', async () => {
    const links = [
      { href: 'https://google.com', text: 'prueba', file: 'ruta' },
      { href: 'https://gagle.com', text: 'prueba', file: 'ruta' },
      { href: 'https://youtube.com', text: 'prueba', file: 'ruta' },
      
    ];

    const resultados= [
      { status: 200 }, 
      { status: "(Canceled)" }, 
      { status: 200 }, 
    ];

    