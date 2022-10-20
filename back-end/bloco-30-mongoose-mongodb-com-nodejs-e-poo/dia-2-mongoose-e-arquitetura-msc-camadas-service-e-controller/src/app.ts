import express from 'express';
import 'express-async-errors';
import errorHandler from './middlewares/error';
import frameRoute from './routes/frame';

const app = express();
app.use(express.json());
app.use(frameRoute);
app.use(errorHandler);

export default app;