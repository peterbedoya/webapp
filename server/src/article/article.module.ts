import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';
import { HttpModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Article, ArticleSchema } from './schemas/article.schema';
import { ScheduleModule } from '@nestjs/schedule';
import { ConfigModule } from '@nestjs/config';
import configuration from '../config/configuration';
@Module({
  imports: [
    MongooseModule.forFeature([{ name:Article.name, schema: ArticleSchema }]),
    HttpModule,
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({
      load: [configuration],
    })
  ],
  controllers: [ArticleController],
  providers: [ArticleService],
})
export class ArticleModule {}