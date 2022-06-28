import axios from 'axios';

import { getBreeds } from './dogService.js'

jest.mock('axios');

describe('getBreeds', () => {
  it('gets all dog breeds from the API', async () => {
    const data = {  
      message: {
        akita: [],
        buhund: ['norwegian'],
        bulldog: ['boston', 'english', 'french'],
        bullterrier: ['staffordshire'],
      }
    };

    const result = [
      'akita',
      'norwegian buhund',
      'boston bulldog',
      'english bulldog',
      'french bulldog',
      'staffordshire bullterrier'
    ];

    axios.get.mockImplementationOnce(() => Promise.resolve(data));

    await expect(getBreeds()).resolves.toEqual(result);
  });
})

// import axios from 'axios';

// import { fetchData } from './';

// jest.mock('axios');

// describe('fetchData', () => {
//   it('fetches successfully data from an API', async () => {
//     const data = {...};

//     axios.get.mockImplementationOnce(() => Promise.resolve(data));

//     await expect(fetchData('react')).resolves.toEqual(data);
//   });

//   it('fetches erroneously data from an API', async () => {
//     const errorMessage = 'Network Error';

//     axios.get.mockImplementationOnce(() =>
//       Promise.reject(new Error(errorMessage)),
//     );

//     await expect(fetchData('react')).rejects.toThrow(errorMessage);
//   });
// });