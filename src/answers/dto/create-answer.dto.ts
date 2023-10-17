import { IsBoolean, IsString } from 'class-validator';

export class CreateAnswerDto {
  @IsString()
  readonly text: string;

  @IsBoolean()
  readonly isCorrect: boolean;

  @IsString()
  readonly question: string;
}
