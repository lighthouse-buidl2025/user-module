import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRouter from './routes/user.route';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

console.log(process.env.MONGODB_URI);

mongoose
  .connect(process.env.MONGODB_URI as string)
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  });

app.use(
    cors({
      origin: '*',
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: ['Content-Type', 'Authorization'],
    })
  );
app.use(express.json());
app.use('/api/user', userRouter);

export default app;
