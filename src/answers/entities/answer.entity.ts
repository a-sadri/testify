import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Question } from '../../questions/entities/question.entity';
@Entity()
export class Answer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @Column({ default: false })
  isCorrect: boolean;

  @ManyToOne(() => Question, (question) => question.answers)
  question: string;
}
