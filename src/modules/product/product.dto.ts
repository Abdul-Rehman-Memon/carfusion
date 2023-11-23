import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class addProductsDto {
  @IsString()
  @IsNotEmpty()
  name: number;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsNotEmpty()
  year: string;

  @IsString()
  @IsNotEmpty()
  brandName: string;

  @IsString()
  @IsNotEmpty()
  carType: string;

  @IsString()
  @IsNotEmpty()
  mileage: string;

  @IsString()
  @IsNotEmpty()
  exterior: string;

  @IsString()
  @IsNotEmpty()
  interior: string;

  @IsString()
  @IsNotEmpty()
  accidented: string;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}

export class getProductsDto {
  @IsString()
  @IsOptional()
  carType: string;

  @IsString()
  @IsOptional()
  modelYear: string;

  @IsString()
  @IsOptional()
  brandName: string;

  @IsNumber()
  @IsOptional()
  type: number;

  @IsNumber()
  @IsOptional()
  price: number;
}

export class getProductbyIdDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;
}
