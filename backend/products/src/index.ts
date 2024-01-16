import express from 'express';
import router from './api/router';
import cors from 'cors';


const app = express();
const port = 3000;

app.use(cors());

app.use('/api', router);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
