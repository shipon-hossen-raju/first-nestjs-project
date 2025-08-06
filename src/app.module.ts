import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { bookModule } from './books/book.module';
import { LoggerMiddleware } from './logger.middleware';

@Module({
  imports: [bookModule],
  controllers: [AppController],
  providers: [AppService],
})
  
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('book');
  }
}
