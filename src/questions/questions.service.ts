import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { Question } from './entities/question.entity';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectRepository(Question)
    private readonly questionRepository: Repository<Question>,
  ) {}

  create(createQuestionDto: CreateQuestionDto) {
    const question = this.questionRepository.create(createQuestionDto);
    return this.questionRepository.save(question);
  }

  async findAll() {
    return await this.questionRepository.find();
  }

  async findOne(id: number) {
    const question = await this.questionRepository.findOneBy({ id });
    if (!question) {
      throw new NotFoundException(`Question ${id} not found`);
    }
    return question;
  }

  async update(id: number, updateQuestionDto: UpdateQuestionDto) {
    const question = await this.questionRepository.preload({
      id: +id,
      ...updateQuestionDto,
    });

    if (!question) {
      throw new NotFoundException(`Question ${id} not found`);
    }

    return this.questionRepository.save(question);
  }

  async remove(id: number) {
    const question = await this.findOne(id);
    return this.questionRepository.remove(question);
  }
}
