import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 422 - dados cliente invalidos
  app.useGlobalPipes(new ValidationPipe({errorHttpStatusCode: 422}))
  await app.listen(3000);
}
bootstrap();

//modulo - controllers, providers, outros modulos