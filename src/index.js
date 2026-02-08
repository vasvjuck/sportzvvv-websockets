import express from 'express';

const app = express();
const PORT = 8000;

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.get('/', (req, res) => {
  console.log('GET', req.url);
  res.send('Hello from Sportzvvv');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
