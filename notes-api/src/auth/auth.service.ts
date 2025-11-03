import { ConflictException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from './dto/register.dto';
import { UserService } from 'src/user/user.service';
import { config } from 'src/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}
  async register(registerDto: RegisterDto) {
    /**
     * 1. Check email already exists?(done)
     * 2. has the password (done)
     * 3. create user
     * 4. generate jwt token
     * 5. return the token
     */
    // 1. Check email already exists?(done)
    const user = await this.userService.getUserByEmail(registerDto.email);

    if (user) {
      throw new ConflictException('Email Already exist');
    }

    //2. has the password
    const hashedPassword = await bcrypt.hash(
      registerDto.password,
      config.saltRounds,
    );

    //3. create user
    const newUser = await this.userService.createUser({
      ...registerDto,
      password: hashedPassword,
    });

    //4. generate jwt token
    const payload = {
      id: newUser.id,
      email: newUser.email,
      name: newUser.name,
    };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
