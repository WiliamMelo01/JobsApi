import { IsString, IsArray } from 'class-validator';

export class CreateJobDto {
  @IsString()
  title: string;
  @IsArray()
  citys: string[];
  @IsString()
  companyName: string;
  @IsString()
  companyImage: string;
  @IsArray()
  tags: string[];
  @IsArray()
  howToApply: string[];
}
