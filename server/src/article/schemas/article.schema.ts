import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as Schematype } from 'mongoose';

export type ArticleDocument = Article & Document;

@Schema()
export class Article {
  @Prop()
  post: Schematype.Types.Mixed;

  @Prop()
  status: boolean;

}

export const ArticleSchema = SchemaFactory.createForClass(Article);

