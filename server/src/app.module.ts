import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticleModule } from './article/article.module';

@Module({
  imports: [
  MongooseModule.forRoot('mongodb://localhost:27017/test'),
  ArticleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
