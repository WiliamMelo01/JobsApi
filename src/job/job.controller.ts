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
  Req,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { JobService } from './job.service';
import { JobDocument } from '../schemas/Job.schema';
import { CreateJobDto } from '../dtos/job/createJob.dto';
import { UpdatePartialJobDto } from '../dtos/job/updatePartialJob';
import { ApiResponse } from '@nestjs/swagger/dist/decorators';

@Controller('jobs')
export class JobController {
  constructor(@Inject(JobService) private jobService: JobService) {}
  @Get('/')
  @ApiResponse({
    status: 200,
    description: 'All user finded',
  })
  getAllJobs(): Promise<JobDocument[]> {
    return this.jobService.findAllJobs();
  }

  @Post('/')
  @ApiResponse({
    status: 201,
    description: 'The job has been successfully created.',
  })
  createJob(@Body() body: CreateJobDto): Promise<JobDocument> {
    return this.jobService.createJob(body);
  }

  @Patch('/:id')
  @ApiResponse({
    status: 200,
    description: 'The job has been successfully updated.',
  })
  @ApiResponse({
    status: 404,
    description: 'The job has not been found and cannot be updated.',
  })
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
  @ApiResponse({
    status: 200,
    description: 'The job has been successfully deleted.',
  })
  @ApiResponse({
    status: 404,
    description: 'The job has not been found and cannot be deleted.',
  })
  async deleteFromId(@Param('id') id: string, @Res() response: Response) {
    const result = await this.jobService.deleteFromId(id);
    if ('error' in result) {
      return response
        .status(HttpStatus.NOT_FOUND)
        .json({ error: result.error });
    }
    return response.status(HttpStatus.OK).json(result);
  }

  @Get('/tags/:tags')
  async findByTag(@Param('tags') tag: string, @Res() response: Response) {
    const result = await this.jobService.findByTag(tag);
    if ('error' in result) {
      return response.status(HttpStatus.NOT_FOUND).json(result);
    }
    return response.status(HttpStatus.OK).json(result);
  }
}
