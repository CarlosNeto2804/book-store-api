import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Book extends Document {
  @Prop()
  name: string;

  @Prop()
  author: string;

  @Prop()
  publication_date: string;

  @Prop({ default: true, required: true })
  active: boolean;
}
export const BookSchema = SchemaFactory.createForClass(Book);
