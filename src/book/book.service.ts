import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book } from './book.schema';
import {BookDTO} from '../dtos/book.dto'

@Injectable()
export class BookService {
  constructor(@InjectModel(Book.name) private model: Model<Book>) {}

  async create(book: BookDTO): Promise<Book> {
    return await this.model.create(book);
  }

  async findAll(): Promise<Book[]> {
    return await this.model.find({});
  }

  async findAllActive(): Promise<Book[]> {
    return await this.model.find({active: true});
  }

  async update(book: BookDTO): Promise<Book> {
    return await this.model.findOneAndUpdate({ _id: book._id }, book, {new: true} );
  }
}
