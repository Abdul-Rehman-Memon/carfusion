import { Injectable } from '@nestjs/common';
import { ILogin, Isignup } from './auth.dto';
import * as bcrypt from 'bcrypt';
import { roundPasswordLength } from 'src/shared/files/constant';
import { ValidateService } from 'src/shared/services';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from 'src/models';
import { Repository } from 'typeorm';
import * as Exception from '@nestjs/common/exceptions';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  roundPasswordLength = roundPasswordLength;

  constructor(
    @InjectRepository(UsersEntity) private userRepo: Repository<UsersEntity>,
    private validateService: ValidateService,
    private jwt: JwtService,
  ) {}

  async signup(payload: Isignup) {
    if (payload.email) {
      const email = await this.validateService.IsUserExistByEmail(
        payload.email,
      );
      if (email) {
        throw new Exception.ConflictException(
          'This email is already registered',
        );
      }
    }
    if (payload.phone) {
      const phone = await this.validateService.IsUserExistByPhone(
        payload.phone,
      );
      if (phone) {
        throw new Exception.ConflictException(
          'This phone number is already registered',
        );
      }
    }

    payload.password = await bcrypt.hash(payload.password, roundPasswordLength);

    const response = await this.userRepo.save(payload);

    return {
      token: response.token,
    };
  }

  login(payload: ILogin) {
    return 'hello world';
  }

  createToken(payload: ILogin) {}
}
