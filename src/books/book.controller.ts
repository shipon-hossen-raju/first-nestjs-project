import { Controller, Get } from "@nestjs/common";
import { bookService } from "./book.service";

@Controller("book")
export class bookController {
   constructor(private readonly bookService: bookService) { }
   
   @Get()
   getBook(): string {
      return this.bookService.getBook();
   }
}
