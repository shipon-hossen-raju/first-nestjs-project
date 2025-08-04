import { Module } from "@nestjs/common";
import { bookController } from "./book.controller";
import { bookService } from "./book.service";


@Module({
   imports: [],
   controllers: [bookController],
   providers: [bookService],
})

export class bookModule {}

