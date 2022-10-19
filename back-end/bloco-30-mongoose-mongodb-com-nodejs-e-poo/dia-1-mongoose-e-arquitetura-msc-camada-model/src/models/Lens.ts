import { model as mongooseCreateModel, Schema } from 'mongoose';
import ILens from '../interfaces/Lens';
import MongoModel from './MongoModel';

const lensSchema = new Schema<ILens>({
  degree: Number,
  antiGlare: Boolean,
  blueLightFilter: Boolean,
});

class LensModel extends MongoModel<ILens> {
  constructor(model = mongooseCreateModel<ILens>('Lens', lensSchema)) {
    super(model);
  }
}

export default LensModel;