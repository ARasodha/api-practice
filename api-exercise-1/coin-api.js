// PEDAC
// Take 2 arguents from the command line
// Create GET request for the first argument (coin)
// wait for response
// log the rate * second argument (number of coins)



// The above command returns JSON structured like this:

// {
//   "time": "2017-08-09T14:31:18.3150000Z",
//   "asset_id_base": "BTC",
//   "asset_id_quote": "USD",
//   "rate": 3260.3514321215056208129867667
// }

const axios = require('axios');
require('dotenv').config();

const calculateExchange = async () => {
  const [coin, quantity] = process.argv.slice(2);

  const headers = {
    headers: {
      'X-CoinAPI-Key': process.env.KEY,
    }
  }
  
  try {
    const {data} = await axios.get(`https://rest.coinapi.io/v1/exchangerate/${coin}/USD`, headers);
    console.log(Number(data.rate) * Number(quantity));
  } catch (e) {
    console.log(e.message);
  }
}

calculateExchange();

exports.module = calculateExchange;