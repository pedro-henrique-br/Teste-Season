import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const port = 3005;

app.use(cors());

app.post('/api/proxy/usuario', async (req, res) => {
  try {
    const token = req.headers.authorization;
    const response = await axios.post('https://pethub-hml.cgtecnologia.com.br/api/v1/usuario', req.body, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': token,
      },
    });
    res.json(response.data);
    console.log(response.data)
  } catch (error) {
    res.status(error.response.status || 500).json({ message: error.message });
  }
});

app.listen(port, () => {
  console.log(`Proxy server listening at http://localhost:${port}`);
});

console.log("teste")