import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  addProductsDto,
  getProductbyIdDto,
  getProductsDto,
} from './product.dto';
import { ProductEntity } from 'src/models';
import { Like, Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private productRepo: Repository<ProductEntity>,
  ) {}

  async addProducts(payload: addProductsDto) {
    return await this.productRepo.save(payload);
  }

  getProducts(payload: getProductsDto) {
    return this.productRepo.find({
      where: {
        ...(payload.brandName && { brandName: Like(`%${payload.brandName}%`) }),
        ...(payload.type && { type: Like(`%${payload.type}%`) }),
        ...(payload.carType && { carType: Like(`%${payload.carType}%`) }),
        ...(payload.modelYear && { modelYear: Like(`%${payload.modelYear}%`) }),
        ...(payload.price && { price: Like(`%${payload.price}%`) }),
      },
    });
  }

  getProductsbyId(payload: getProductbyIdDto) {
    return this.productRepo.find({
      where: {
        id: +payload.id,
      },
    });
  }

  async deleteProduct(payload: { id: number }) {
    return await this.productRepo.delete(payload);
  }
}
