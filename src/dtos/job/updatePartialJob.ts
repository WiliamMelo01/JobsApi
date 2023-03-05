import { CreateJobDto } from './createJob.dto';
import { PartialType } from '@nestjs/swagger';

export class UpdatePartialJobDto extends PartialType(CreateJobDto) {}
