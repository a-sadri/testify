import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { QuestionType } from './question-type.entity';

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @Column('json', { nullable: true })
  answers: string[];

  @ManyToOne(() => QuestionType, (questionType) => questionType.questions)
  questionType: QuestionType;
}
