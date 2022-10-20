/* eslint-disable max-len */
import { NextFunction, Request, Response } from 'express';
import IService from '../interfaces/IService';
import IFrame from '../interfaces/Frame';

class FrameController {
  constructor(private _service: IService<IFrame>) { }

  public async create(req: Request, res: Response<IFrame>, next: NextFunction) {
    try {
      const { material, color } = req.body;
      const createdFrame = await this._service.create({ material, color });
      return res.status(201).json(createdFrame);
    } catch (error) {
      next(error);
    }
  }

  public async readOne(req: Request, res: Response<IFrame>, next: NextFunction) {
    try {
      const { id } = req.params;
      const frame = await this._service.readOne(id);
      return res.status(200).json(frame);
    } catch (error) {
      next(error);
    }
  }

  public async read(_req: Request, res: Response<IFrame[]>, next: NextFunction) {
    try {
      const frames = await this._service.read();
      return res.status(200).json(frames);
    } catch (error) {
      next(error);
    }
  }

  public async destroy(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      await this._service.destroy(id);
      return res.status(202).json({ deleted: true });
    } catch (error) {
      next(error);
    }
  }
}

export default FrameController;