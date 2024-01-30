import express from 'express';
import bodyParser from 'body-parser';
import router from './api/router';
import cors from 'cors';


const app = express();
const port = 3000;

// parse application/json
app.use(bodyParser.json());

app.use(cors());

app.use('/api', router);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
