import express from 'express';
import cors from 'cors';
import userRouter from './routes/user.route';

const app = express();

app.use(
    cors({
      origin: '*',
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: ['Content-Type', 'Authorization'],
    })
  );
app.use(express.json());
app.use('/users', userRouter);

export default app;
