import {
  ErrorRequestHandler,
  Request,
  Response,
  NextFunction
} from 'express';
import { CustomError } from '../errors/catalog';

const errorHandler: ErrorRequestHandler = ( 
  err: CustomError, 
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  console.log(err.message);

  if (!err.statusCode) {
    return res.status(500).json({ message: 'Server error.' });
  }

  return res.status(err.statusCode).json({ message: err.message });
};

export default errorHandler;