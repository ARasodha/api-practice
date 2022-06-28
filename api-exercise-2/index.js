import express from 'express';
const app = express();
const PORT = 3000;
import { getBreeds } from './dogService.js';

app.get('/breeds', async (req, res) => {
  const result = await getBreeds();

  if (result) { 
    res.json(result);
  } else {
    res.status(404).json({ "error": "API request failed" })
  }
});

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));