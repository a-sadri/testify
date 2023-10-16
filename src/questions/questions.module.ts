import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionsService } from './questions.service';
import { QuestionsController } from './questions.controller';
import { Question } from './entities/question.entity';
import { QuestionType } from './entities/question-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Question, QuestionType])],
  controllers: [QuestionsController],
  providers: [QuestionsService],
})
export class QuestionsModule {}
