import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { QuestionType } from './question-type.entity';
import { Answer } from 'src/answers/entities/answer.entity';

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @ManyToOne(() => QuestionType, (questionType) => questionType.questions, {
    cascade: true,
  })
  questionType: string;

  @OneToMany(() => Answer, (answers) => answers.question)
  answers: string[];
}
