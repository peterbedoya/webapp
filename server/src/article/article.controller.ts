
import { Controller, Get, Logger, Param, Post } from '@nestjs/common';
import { ArticleService } from './article.service';
import { Article } from './schemas/article.schema';

@Controller('/article')
export class ArticleController {


  constructor(private readonly articleService: ArticleService) {}


  @Get()
  async findAll(): Promise<Article[]> {
    return this.articleService.findAll();
  }
  
  @Post('/:objectID')
  async statusUpdate(@Param('objectID') objectID: string) : Promise<Article>{
     return this.articleService.statusUpdate(objectID);
  }
  
  
}
