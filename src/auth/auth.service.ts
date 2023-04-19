import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';

@Injectable({})
export class AuthServcie {
  constructor(private prisma: PrismaService) {}
  signup(dto: AuthDto) {
    return { msg: 'Sign Up' };
  }
  signin() {
    return { msg: 'Sign In' };
  }
}
