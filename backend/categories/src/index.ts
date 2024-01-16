import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());

app.get('/categories', (req, res) => {
  res.send(JSON.stringify(['Category 1', 'Category 2', 'Category 3']));
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});