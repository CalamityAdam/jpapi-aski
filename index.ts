require('dotenv').config();
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { router } from './routes';
import { db } from './models';
const PORT = process.env.PORT || 2223;
const app = express();

app.use(cors());

app.use(morgan('dev'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', router);

async function init() {
  try {
    await db.sync();

    app.listen(PORT, () => {
      console.log(`swiggity swooty, server running on port ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
}

init();
