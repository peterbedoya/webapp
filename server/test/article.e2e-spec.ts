import { AppModule } from './../src/app.module';
import { ArticleService } from './../src/article/article.service';
import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';

describe('Cats', () => {
  let app: INestApplication;
  let articleService = { findAll: () => [] };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(ArticleService)
      .useValue(articleService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/GET articles`, () => {
    return request(app.getHttpServer())
      .get('/article')
      .expect(200)
      .expect(Array)
      
  });

  afterAll(async () => {
    await app.close();
  });
});