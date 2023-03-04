import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { now } from 'mongoose';

import { HydratedDocument } from 'mongoose';

export type JobDocument = HydratedDocument<Job>;

@Schema()
export class Job {
  @Prop()
  title: string;

  @Prop()
  companyName: string;

  @Prop()
  companyImage: string;

  @Prop()
  citys: string[];

  @Prop()
  tags: string[];

  @Prop({ default: now() })
  createdAt: Date;

  @Prop()
  howToApply: string[];
}

export const JobSchema = SchemaFactory.createForClass(Job);
