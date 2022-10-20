import { isValidObjectId } from 'mongoose';
import IService from '../interfaces/IService';
import IFrame, { frameZodSchema } from '../interfaces/Frame';
import { IModel } from '../interfaces/IModel';
import ErrorTypes, { CustomError } from '../errors/catalog';

class FrameService implements IService<IFrame> {
  private _frame: IModel<IFrame>;

  constructor(model: IModel<IFrame>) {
    this._frame = model;
  }

  public async create(obj: unknown): Promise<IFrame> {
    const parsed = frameZodSchema.safeParse(obj);

    if (!parsed.success) {
      const zodError = parsed.error.issues[0].message;
      throw new CustomError(zodError, 400);
    }

    const createdFrame = await this._frame.create(parsed.data);
    return createdFrame;
  }

  public async readOne(_id: string): Promise<IFrame> {
    if (!isValidObjectId(_id)) {
      throw new CustomError(ErrorTypes.InvalidMongoId, 400);
    }
    const frame = await this._frame.readOne(_id);
    if (!frame) throw new CustomError(ErrorTypes.EntityNotFound, 404);
    return frame;
  }

  public async read(): Promise<IFrame[]> {
    const frames = await this._frame.read();
    return frames;
  }

  public async destroy(_id: string): Promise<void> {
    if (!isValidObjectId(_id)) {
      throw new CustomError(ErrorTypes.InvalidMongoId, 400);
    }
    await this.readOne(_id);
    await this._frame.destroy(_id);
  }
}

export default FrameService;