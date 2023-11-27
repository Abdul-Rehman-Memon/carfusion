import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { IcreateTestomonialDto, IgetTestomonialDto } from './testimonial.dto';
import { TestimonialService } from './testimonial.service';

@Controller('testimonial')
export class TestimonialController {
  constructor(private testimonialService: TestimonialService) {}
  @Post('/')
  async post(@Body() payload: IcreateTestomonialDto) {
    return await this.testimonialService.insertTestimonial(payload);
  }

  @Get('/')
  async get(@Query() payload: IgetTestomonialDto) {
    return await this.testimonialService.getTestimonial(payload);
  }

  @Get('/:id')
  async getbyId(@Param() payload: { id: number }) {
    return await this.testimonialService.getTestimonialById(payload);
  }

  @Delete('/:id')
  async delete(@Param() payload: { id: number }) {
    return await this.testimonialService.deleteTestimonial(payload);
  }
}
