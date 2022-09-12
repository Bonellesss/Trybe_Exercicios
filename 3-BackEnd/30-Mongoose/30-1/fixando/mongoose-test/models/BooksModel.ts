import { model } from 'mongoose';
import bookSchema, { IBook } from './schemas/BookSchema';

const bookModel = model<IBook>('Book', bookSchema);