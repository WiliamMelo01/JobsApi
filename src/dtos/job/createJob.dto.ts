import { ApiProperty } from '@nestjs/swagger/dist';
import { IsString, IsArray, IsBoolean, IsOptional } from 'class-validator';

export class CreateJobDto {
  @IsString()
  @ApiProperty()
  title: string;

  @ApiProperty()
  @IsArray()
  citys: string[];

  @ApiProperty()
  @IsString()
  companyName: string;

  @ApiProperty()
  @IsString()
  companyImage: string;

  @ApiProperty()
  @IsArray()
  tags: string[];

  @ApiProperty()
  @IsArray()
  howToApply: string[];

  @ApiProperty()
  @IsArray()
  description: string[];

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  fulltime: boolean;
}
