import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { database } from './configs/files/database';
import { AuthModule } from './modules/auth/auth.module';
import { AuthController } from './nest/modules/auth/auth.controller';
import { ProductModule } from './modules/product/product.module';
import { TestimonialModule } from './modules/testimonial/testimonial.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync(database),
    AuthModule,
    ProductModule,
    TestimonialModule,
  ],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
