import { Body, Controller, Get, Param, Post, ValidationPipe,  } from "@nestjs/common";
import { bookService } from "./book.service";
import { CreateBookDto } from "./dtos/createBook.dto";

@Controller('book')
export class bookController {
  constructor(private readonly bookService: bookService) {}

  @Get()
  getBook(): string {
    return this.bookService.getBook();
   }
   
   @Get(":bookId")
   getBookById(@Param() bookId: string): string {
    return this.bookService.getBookById(bookId);
    }

  @Post("create")
// controller validation: createBook(@Body(new ValidationPipe()) body: CreateBookDto): string {
  createBook(@Body() body: CreateBookDto): string {
    console.log('book create data ', body);
    return this.bookService.createBook(body);
  }
}
