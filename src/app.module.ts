import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookModule } from './book/book.module';
import { ConfigModule } from './config/config.module';
import ConfigService from './config/config.service'

@Module({
  imports: [
    MongooseModule.forRoot(ConfigService.get('MONGO_URL')), 
    BookModule,
   ConfigModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
