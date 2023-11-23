import { Body, Controller, Post } from '@nestjs/common';
import { IcreateTestomonial } from './testimonial.dto';

@Controller('testimonial')
export class TestimonialController {
  @Post('/')
  post(@Body() payload: IcreateTestomonial) {}
}
