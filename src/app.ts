import express from 'express';
import oracledb from 'oracledb';
import cors from 'cors';
import userRouter from './routes/user.route';

const app = express();

oracledb.initOracleClient({ libDir: process.env.ORACLE_CLIENT_LIB_DIR });

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
