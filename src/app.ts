import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { userRoutes } from './app/modules/users/user.route';


const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

// application routes

app.use('/api/users', userRoutes);

const getAController = (req: Request, res: Response) => {
  
  res.send('Server is running bro');
};

app.get('/', getAController);

export default app;
