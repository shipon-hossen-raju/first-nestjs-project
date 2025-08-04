import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { bookModule } from './books/book.module';

@Module({
  imports: [bookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
