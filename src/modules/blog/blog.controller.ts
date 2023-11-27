import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ICreateBlog, IGetBlog } from './blog.dto';
import { BlogService } from './blog.service';

@Controller('blog')
export class BlogController {
  constructor(private blogService: BlogService) {}

  @Get('/')
  get(@Query() payload: IGetBlog) {
    return this.blogService.getBlog(payload);
  }

  @Get('/:id')
  getBlogById(@Param() payload: { id: number }) {
    return this.blogService.getBlogById(payload);
  }

  @Post()
  create(@Param() payload: ICreateBlog) {
    return this.blogService.createBlog(payload);
  }
}
