import { model as mongooseCreateModel, Schema } from 'mongoose';
import IFrame from '../interfaces/Frame';
import MongoModel from './MongoModel';

const frameSchema = new Schema<IFrame>({
  material: String,
  color: String,
});

class FrameModel extends MongoModel<IFrame> {
  constructor(model = mongooseCreateModel<IFrame>('Frame', frameSchema)) {
    super(model);
  }
}

export default FrameModel;