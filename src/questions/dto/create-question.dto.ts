import { IsString, IsArray, IsNumber } from 'class-validator';

export class CreateQuestionDto {
  @IsString()
  readonly text: string;

  @IsString()
  readonly questionType: string;

  @IsString({ each: true })
  readonly answers: string[];
}
