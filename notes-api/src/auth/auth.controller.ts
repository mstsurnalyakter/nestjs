import { Controller, Post, Body as BodyDecorator } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';

@Controller('api')
export class AuthController {
  @Post('register')
  register(@BodyDecorator() registerDto: RegisterDto) {
    return registerDto;
  }
}
