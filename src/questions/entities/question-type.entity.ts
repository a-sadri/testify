import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Question } from './question.entity';

@Entity()
export class QuestionType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Question, (question) => question.questionType)
  questions: Question[];
}
