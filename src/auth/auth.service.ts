import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthServcie {
  signup() {
    return { msg: 'Sign Up' };
  }
  signin() {
    return { msg: 'Sign In' };
  }
}
