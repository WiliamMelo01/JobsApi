import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Job, JobSchema } from '../schemas/Job.schema';
import { JobController } from './job.controller';
import { JobService } from './job.service';

@Module({
  controllers: [JobController],
  providers: [JobService, Job],
  imports: [MongooseModule.forFeature([{ name: Job.name, schema: JobSchema }])],
})
export class JobModule {}
