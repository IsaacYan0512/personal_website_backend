import { Controller, Get } from '@nestjs/common';

@Controller('connents')
export class CommentController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}
