import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CustomConsoleLogger } from './shared/application/CustomConsoleLogger';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './shared/application/http/HttpExceptionFilter';

async function bootstrap() {
  const logger = new CustomConsoleLogger(AppModule.name);
  const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
  const app = await NestFactory.create(AppModule, { logger });
  app.useGlobalPipes(
    new ValidationPipe({
      stopAtFirstError: true,
      forbidNonWhitelisted: true,
      whitelist: true
    })
  );

  app.useGlobalFilters(new HttpExceptionFilter());

  logger.debug(`Starting app on port ${port}`);

  await app.listen(port);
}
bootstrap();
