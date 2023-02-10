import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

import { connectToDatabase } from './db';
import { roleRoute } from './routes/role.route';
import { todoRoute } from './routes/todo.route';

dotenv.config();

const HOST = process.env.HOST || 'http://localhost';
const PORT = parseInt(process.env.PORT || '4500');

const app: Express = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', roleRoute());
app.use('/', todoRoute());

app.get('/', (req: Request, res: Response) => {
  res.send('sess  ver is running');
});

app.listen(PORT, async () => {
  await connectToDatabase();

  console.log(`Application started on URL ${HOST}:${PORT} 🎉`);
});