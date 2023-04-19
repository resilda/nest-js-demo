import { Controller, Post } from '@nestjs/common';
import { AuthServcie } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthServcie) {}

  @Post('signup')
  signup() {
    return this.authService.signup();
  }

  @Post('signin')
  signin() {
    return this.authService.signin();
  }
}
