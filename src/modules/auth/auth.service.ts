import { Injectable } from '@nestjs/common';
import { ILogin, Isignup } from './auth.dto';
import * as bcrypt from 'bcrypt';
import { roundPasswordLength } from 'src/shared/files/constant';

@Injectable()
export class AuthService {
  roundPasswordLength = roundPasswordLength;

  async signup(payload: Isignup) {
    payload.password = await bcrypt.hash(payload.password, roundPasswordLength);

    return payload;
  }

  login(payload: ILogin) {
    return 'hello world';
  }
}
