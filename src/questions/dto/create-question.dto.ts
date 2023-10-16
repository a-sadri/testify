import { IsString, IsArray, IsNumber } from 'class-validator';

export class CreateQuestionDto {
  @IsString()
  readonly text: string;

  @IsArray()
  readonly answers: string[];

  @IsNumber()
  readonly correctAnswer: number;
}
