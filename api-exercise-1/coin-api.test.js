// index.test.js
// const getFirstAlbumTitle = require("./index");
// const axios = require("axios");

// jest.mock("axios");

// it("returns the title of the first album", async () => {
//   axios.get.mockResolvedValue({
//     data: [
//       {
//         userId: 1,
//         id: 1,
//         title: "My First Album",
//       },
//       {
//         userId: 1,
//         id: 2,
//         title: "Album: The Sequel",
//       },
//     ],
//   });

//   const title = await getFirstAlbumTitle();
//   expect(title).toEqual("My First Album");
// });

const calculateExchange = require("./coin-api");
const axios = require("axios");

jest.mock("axios");

it("return the correct value of the cryto", async () => {
  const { data } = axios.get.mockResolvedValue({
    data: {
      "time": "2017-08-09T14:31:18.3150000Z",
      "asset_id_base": "BTC",
      "asset_id_quote": "USD",
      "rate": 3260.3514321215056208129867667
    }
  });

  const result = await calculateExchange();

  expect(result).toEqual(3260.3514321215056208129867667);
});