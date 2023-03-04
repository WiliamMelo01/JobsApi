import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Inject,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { JobService } from './job.service';
import { JobDocument } from '../schemas/Job.schema';
import { CreateJobDto } from '../dtos/job/createJob.dto';
import { UpdatePartialJobDto } from '../dtos/job/updatePartialJob';

@Controller('jobs')
export class JobController {
  constructor(@Inject(JobService) private jobService: JobService) {}
  @Get('/')
  getAllJobs(): Promise<JobDocument[]> {
    return this.jobService.findAllJobs();
  }

  @Post('/')
  createJob(@Body() body: CreateJobDto): Promise<JobDocument> {
    return this.jobService.createJob(body);
  }

  @Patch('/:id')
  async updatePartialJob(
    @Param('id') id: string,
    @Body() body: UpdatePartialJobDto,
    @Res() response: Response,
  ) {
    const result = await this.jobService.updatePartialJob(id, body);
    if ('error' in result) {
      return response
        .status(HttpStatus.NOT_FOUND)
        .json({ error: result.error });
    }
    return response.status(HttpStatus.OK).json(result);
  }

  @Delete('/:id')
  async deleteFromId(@Param('id') id: string, @Res() response: Response) {
    const result = await this.jobService.deleteFromId(id);
    if ('error' in result) {
      return response
        .status(HttpStatus.NOT_FOUND)
        .json({ error: result.error });
    }
    return response.status(HttpStatus.OK).json(result);
  }
}
