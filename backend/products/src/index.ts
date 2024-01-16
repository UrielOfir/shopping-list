import express from 'express';
import cors from 'cors';
import router from './api/router';

const app = express();
const port = 3000;

app.use(cors());

app.get('/categories', (req, res) => {
  res.send(JSON.stringify(['מוצרי ניקיון', 'גבינות', 'ירקות ופירות', 'בשר ודגים', 'מאפים']));
});

app.use('/api', router);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});