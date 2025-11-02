import { Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  register(registerDto: RegisterDto) {
    /**
     * 1. Check email already exists?
     * 2. has the password
     * 3. create user
     * 4. generate jwt token
     * 5. return the token
     */
    return {
      message: registerDto,
    };
  }
}
