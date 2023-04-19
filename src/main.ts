import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      // extracts extra parameters included in the request body
      whitelist: true,
    }),
  );
  await app.listen(3002);
}
bootstrap();
