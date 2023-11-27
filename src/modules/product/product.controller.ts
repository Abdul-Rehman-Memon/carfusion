import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import {
  addProductsDto,
  getProductbyIdDto,
  getProductsDto,
} from './product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post('/')
  async addProducts(@Body() payload: addProductsDto) {
    return await this.productService.addProducts(payload);
  }

  @Get('/')
  async getProducts(@Query() payload: getProductsDto) {
    return await this.productService.getProducts(payload);
  }

  @Get('/:id')
  async getProductsbyId(@Param() payload: getProductbyIdDto) {
    await this.productService.getProductsbyId(payload);
    return payload;
  }

  @Delete()
  deleteProduct(@Query() payload: { id: number }) {
    return this.productService.deleteProduct(payload);
  }
}
