import { HttpModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Article, ArticleSchema } from './schemas/article.schema';
import { ScheduleModule } from '@nestjs/schedule';


@Module({
  imports: [
    MongooseModule.forFeature([{ name:Article.name, schema: ArticleSchema }]),
    HttpModule,
    ScheduleModule.forRoot(),
  ],
  controllers: [],
  providers: [],
})
export class ArticleModule {}