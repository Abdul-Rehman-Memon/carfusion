import { Injectable } from '@nestjs/common';
import {
  addProductsDto,
  getProductbyIdDto,
  getProductsDto,
} from './product.dto';

@Injectable()
export class ProductService {
  addProducts(payload: addProductsDto) {}

  getProducts(payload: getProductsDto) {}

  getProductsbyId(payload: getProductbyIdDto) {}
}
