import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './book.schema';
import {BookDTO} from '../dtos/book.dto'

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  async create(@Body() book: BookDTO): Promise<Book> {
    return await this.bookService.create(book);
  }

  @Get()
  async findAllActive(): Promise<Book[]> {
    return await this.bookService.findAllActive();
  }

  @Put()
  async update(@Body() book: BookDTO): Promise<Book> {
    return await this.bookService.update(book);
  }

  @Get('/all')
  async findAll(): Promise<Book[]> {
    return await this.bookService.findAll();
  }
}
