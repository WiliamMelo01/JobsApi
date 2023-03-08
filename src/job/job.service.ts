import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { JobDocument } from '../schemas/Job.schema';
import { CreateJobDto } from '../dtos/job/createJob.dto';
import { UpdatePartialJobDto } from '../dtos/job/updatePartialJob';

interface IUpdatePartialJobResponse {
  updatePartialJob(
    id: string,
    body: UpdatePartialJobDto,
  ): Promise<JobDocument | { message: string; statusCode: number }>;
}

@Injectable()
export class JobService {
  constructor(@Inject('JobModel') private jobModel: Model<JobDocument>) {}

  async createJob(body: CreateJobDto) {
    const {
      citys,
      companyImage,
      companyName,
      howToApply,
      tags,
      title,
      description,
      fulltime,
    } = body;
    const newJob = new this.jobModel({
      title,
      citys,
      companyName,
      companyImage,
      tags,
      howToApply,
      description,
      fulltime,
    });
    return await newJob.save();
  }

  async findAllJobs(): Promise<JobDocument[]> {
    return await this.jobModel.find();
  }

  async updatePartialJob(
    id: string,
    body: UpdatePartialJobDto,
  ): Promise<JobDocument | { error: string; statusCode: number }> {
    try {
      const updatedJob = await this.jobModel.findOneAndUpdate(
        { _id: id },
        { $set: body },
        { new: true },
      );
      return updatedJob.save();
    } catch (error) {
      return { error: 'User was not found', statusCode: 404 };
    }
  }
  async deleteFromId(
    id: string,
  ): Promise<{ message: string } | { error: string; statusCode: number }> {
    try {
      await this.jobModel.findOneAndDelete({ _id: id }, { new: true });
      return { message: 'User has been deleted' };
    } catch (error) {
      console.log(error);
      return { error: 'USer was not found', statusCode: 404 };
    }
  }

  async findByTag(tag: string): Promise<JobDocument[] | { error: string }> {
    try {
      const job = await this.jobModel.find({
        tags: { $in: [tag] },
      });

      return job.length > 0 ? job : { error: 'No jobs found with this tag' };
    } catch (error) {
      console.log(error);
      return { error: 'No jobs found with this tag' };
    }
  }

  async findByCity(city: string): Promise<JobDocument[] | { error: string }> {
    try {
      const result = await this.jobModel.find({
        citys: { $in: [city] },
      });
      return result.length > 0
        ? result
        : { error: 'No jobs found with this city name' };
    } catch (error) {
      console.log(error);
      return { error: 'No jobs found with this city name' };
    }
  }
}
