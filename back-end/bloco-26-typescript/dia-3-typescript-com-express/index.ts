import express, { NextFunction, Request, Response } from 'express';
import { StatusCode } from './helpers/statusCode';
import userRoute from './routes/user';
import 'express-async-errors';

const app = express();

app.use(express.json());
const PORT = 8080;

app.use('/users', userRoute);

app.use((err: any, _req: Request, res: Response, next: NextFunction) => {
    const { message } = err;

    if (err.isJoi) {
        return res.status(StatusCode.BAD_REQUEST).json({ message });
    }

    return res.status(StatusCode.SERVER_ERROR).json({ message });
})

app.listen(PORT, () => {
    console.log(`Running at port ${PORT}`);
});