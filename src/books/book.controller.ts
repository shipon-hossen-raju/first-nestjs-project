import { Body, Controller, Get, Post, ValidationPipe,  } from "@nestjs/common";
import { bookService } from "./book.service";
import { CreateBookDto } from "./dtos/createBook.dto";

@Controller('book')
export class bookController {
  constructor(private readonly bookService: bookService) {}

  @Get()
  getBook(): string {
    return this.bookService.getBook();
  }

  @Post()
// controller validation: createBook(@Body(new ValidationPipe()) body: CreateBookDto): string {
  createBook(@Body(new ValidationPipe()) body: CreateBookDto): string {
    console.log('book create data ', body);
    return this.bookService.createBook(body);
  }
}
