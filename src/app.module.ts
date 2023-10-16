import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestionsModule } from './questions/questions.module';
import { AnswersModule } from './answers/answers.module';
import { ExamsModule } from './exams/exams.module';

@Module({
  imports: [QuestionsModule, AnswersModule, ExamsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
