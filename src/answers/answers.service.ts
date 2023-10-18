import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { UpdateAnswerDto } from './dto/update-answer.dto';
import { Answer } from './entities/answer.entity';

@Injectable()
export class AnswersService {
  constructor(
    @InjectRepository(Answer)
    private readonly answerRepository: Repository<Answer>,
  ) {}

  create(createAnswerDto: CreateAnswerDto) {
    const answer = this.answerRepository.create(createAnswerDto);
    return this.answerRepository.save(answer);
  }

  findAll() {
    return this.answerRepository.find();
  }

  async findOne(id: number) {
    const answer = await this.answerRepository.findOne({ where: { id } });

    if (!answer) {
      throw new NotFoundException(`Answer ${id} not found`);
    }

    return answer;
  }

  async update(id: number, updateAnswerDto: UpdateAnswerDto) {
    const answer = await this.answerRepository.preload({
      id: +id,
      ...updateAnswerDto,
    });

    if (!answer) {
      throw new NotFoundException(`Answer ${id} not found`);
    }

    return this.answerRepository.save(answer);
  }

  async remove(id: number) {
    const answer = await this.findOne(id);
    return this.answerRepository.remove(answer);
  }
}
