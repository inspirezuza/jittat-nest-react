import { Controller, Get } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  @Get()
  findAll(): any {
    return [
      { id: '100', title: 'Computer and Programming1', number: '01204111' },
      { id: '200', title: 'Computer and Programming2', number: '01204112' },
      { id: '300', title: 'Computer and Programming3', number: '01204113' },
    ];
  }
}
