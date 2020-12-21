import { HttpService, Injectable, Logger, OnApplicationBootstrap } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { Cron, CronExpression } from '@nestjs/schedule';
import { Model } from 'mongoose';
import { CreateArticleDto } from './dto/article.dto';
import { Article, ArticleDocument } from './schemas/article.schema';

@Injectable()
export class ArticleService implements OnApplicationBootstrap {

  private readonly logger = new Logger(ArticleService.name);

  API_URL: string = this.configService.get<string>('api.url');

  constructor(@InjectModel(Article.name) private articleModel: Model<ArticleDocument>,
    private httpService: HttpService,
    private configService: ConfigService) { }

  onApplicationBootstrap() {
    this.logger.debug(`Called @onApplicationBootstrap()`);
    this.handleCron();
  }

  @Cron(CronExpression.EVERY_HOUR)
  async handleCron() {
    this.logger.debug(`Called every EVERY_HOUR`);
    this.httpService.get(this.API_URL).subscribe(
      body => {
        let data: any[] = body.data?.hits;
        data.forEach(async item => {
          let createarticleDto: CreateArticleDto = {
            post: item
          }
          let article = await this.articleModel.updateOne(
            { 'post.objectID': item?.objectID },
            createarticleDto,
            { upsert: true });
        })
      },
      error => {
        this.logger.error(`Error =>${error}`);
      }
    );
  }

  async findAll(): Promise<Article[]> {
    return this.articleModel.find({status:null}).sort({ 'post.created_at': -1 }).exec();
  }

  
  async statusUpdate(objectID:string){
    return await this.articleModel.updateOne({'post.objectID':objectID },{status:true},{ upsert : true })
  }

}
