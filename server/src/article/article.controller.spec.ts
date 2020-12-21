
import { HttpModule } from '@nestjs/common';
import { getModelToken } from '@nestjs/mongoose';
import { Test} from '@nestjs/testing';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';
import { Article } from './schemas/article.schema';

describe('AticleController', () => {
  let articleController: ArticleController;
  let articleService: ArticleService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
        imports:[ HttpModule],
        controllers: [ArticleController],
        providers: [ArticleService,{
          provide: getModelToken(Article.name),
          useValue: Article,
        }],
      }).compile();

    articleService = moduleRef.get<ArticleService>(ArticleService);
    articleController = moduleRef.get<ArticleController>(ArticleController);
  });

  describe('findAll', () => {
    it('should return an array of articles', async () => {
      const result:any = [{
        post:[],
        status:false
      }];
      jest.spyOn(articleService, 'findAll').mockImplementation(() => result);

      expect(await articleController.findAll()).toBe(result);
    });
  });
});
