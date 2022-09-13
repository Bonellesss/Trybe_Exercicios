import { isValidObjectId, Model } from 'mongoose';
import { IModel } from '../interfaces';

abstract class MongoModel<T> implements IModel<T> {
  protected _model: Model<T>;

  constructor(model: Model<T>) {
    this._model = model;
  }
  create(obj: T): Promise<T> {
    return this._model.create({ ...obj });
  }
  readOne(_id: string): Promise<T | null> {
    if (!isValidObjectId(_id)) throw Error('InvalidMongoId');
    const response = this._model.findOne({ _id });
    return response as any;
  }
}

export default MongoModel;
