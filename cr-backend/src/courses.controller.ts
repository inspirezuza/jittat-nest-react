import { Controller, Get } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  @Get('hello')
  findAll(): any {
    return {
      message: 'Hello from courses controller!',
    };
  }
}
