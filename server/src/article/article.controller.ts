
import { Controller, Get, Logger } from '@nestjs/common';
import { ArticleService } from './article.service';
import { Article } from './schemas/article.schema';

@Controller('/article')
export class ArticleController {

  private readonly logger = new Logger(ArticleController.name);

  constructor(private readonly articleService: ArticleService) {}


  @Get()
  async findAll(): Promise<Article[]> {
    return this.articleService.findAll();
  }
  
  
}
