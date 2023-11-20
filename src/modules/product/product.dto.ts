import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class addProductsDto {
  @IsString()
  @IsNotEmpty()
  brandName: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  amount: string;

  @IsString()
  @IsNotEmpty()
  type: string;

  @IsString()
  @IsNotEmpty()
  category: string;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}

export class getProductsDto {
  @IsNumber()
  startDate: number;

  @IsNumber()
  endDate: number;

  @IsString()
  category: string;

  @IsString()
  brandName: string;

  @IsString()
  type: string;

  @IsNumber()
  initialRange: number;

  @IsNumber()
  endRange: number;
}

export class getProductbyIdDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;
}
