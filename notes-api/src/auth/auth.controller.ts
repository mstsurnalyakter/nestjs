import { Controller, Post, Body as BodyDecorator } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { AuthService } from './auth.service';

@Controller('api')
export class AuthController {
  // authService: AuthService;
  // constructor(authService: AuthService){
  //   this.authService = authService;
  // }

  constructor(private readonly authService: AuthService) {}
  @Post('register')
  register(@BodyDecorator() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }
}
