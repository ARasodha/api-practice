import axios from 'axios';

export const getBreeds = async () => {
  try {
    const response = await axios.get('https://dog.ceo/api/breeds/list/all');
    const message = response.data.message;
    const result = [];

    for (let key in message) {
      if (message[key].length === 0) {
        result.push(key);
      } else {
        message[key].forEach(val => {
          result.push(`${val} ${key}`);
        })
      }
    }

    return result;
  } catch (e) {
    console.log(e.message);
  }
}