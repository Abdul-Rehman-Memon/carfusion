import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from 'src/models';
import { ValidateService } from 'src/shared/services';

@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity])],
  providers: [AuthService, ValidateService],
  controllers: [AuthController],
})
export class AuthModule {}
