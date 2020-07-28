import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { BookService } from './book.service';
import { Book, BookInterface } from './book.schema';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  async create(@Body() book: BookInterface): Promise<Book> {
    return await this.bookService.create(book);
  }

  @Get()
  async findAllActive(): Promise<Book[]> {
    return await this.bookService.findAllActive();
  }

  @Put()
  async update(@Body() book: BookInterface): Promise<Book> {
    return await this.bookService.update(book);
  }

  @Get('/all')
  async findAll(): Promise<Book[]> {
    return await this.bookService.findAll();
  }
}
