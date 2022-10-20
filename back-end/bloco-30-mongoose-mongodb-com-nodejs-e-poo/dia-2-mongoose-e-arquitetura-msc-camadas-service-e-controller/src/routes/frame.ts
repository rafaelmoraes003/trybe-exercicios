/* eslint-disable max-len */
import { NextFunction, Request, Response, Router } from 'express';
import FrameModel from '../models/Frame';
import FrameService from '../services/frame';
import FrameController from '../controllers/frame';

const frame = Router();

const frameModel = new FrameModel();
const frameService = new FrameService(frameModel);
const frameController = new FrameController(frameService);

frame.get('/frames', (req: Request, res: Response, next: NextFunction) => {
  frameController.read(req, res, next);
});

frame.post('/frames', (req: Request, res: Response, next: NextFunction) => {
  frameController.create(req, res, next);
});

frame.get('/frames/:id', (req: Request, res: Response, next: NextFunction) => {
  frameController.readOne(req, res, next);
});

frame.delete('/frames/:id', (req: Request, res: Response, next: NextFunction) => {
  frameController.destroy(req, res, next);
});

// BIND NECESSÁRIO - ARROW FUNCTIONS

export default frame;