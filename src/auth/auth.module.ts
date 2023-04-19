import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthServcie } from './auth.service';

@Module({
  controllers: [AuthController],
  providers: [AuthServcie],
})
export class AuthModule {}
