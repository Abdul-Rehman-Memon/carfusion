import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class IcreateTestomonial {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  testimonial: string;
}

export class IgetTestomonial {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  testimonial: string;
}
