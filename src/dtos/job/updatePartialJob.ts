import { PartialType } from '@nestjs/mapped-types';
import { CreateJobDto } from './createJob.dto';

export class UpdatePartialJobDto extends PartialType(CreateJobDto) {}
