import { Model, isValidObjectId } from 'mongoose';
import { IModel } from '../interfaces/IModel';

abstract class MongoModel<T> implements IModel<T> {
  protected _model: Model<T>;

  constructor(model: Model<T>) {
    this._model = model;
  }

  public async create(obj: T): Promise<T> {
    const createdDoc = await this._model.create(obj);
    return createdDoc;
  }

  public async readOne(_id: string): Promise<T | null> {
    if (!isValidObjectId(_id)) throw Error('InvalidMongoId');
    const document = this._model.findOne({ _id });
    return document;
  }

  public async read(): Promise<T[]> {
    const documents = await this._model.find();
    return documents;
  }

  public async destroy(_id: string): Promise<void | null> {
    if (!isValidObjectId(_id)) throw Error('InvalidMongoId');
    await this._model.deleteOne({ _id });
  }
}

export default MongoModel;