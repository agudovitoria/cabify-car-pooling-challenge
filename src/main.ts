import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from './shared/Logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new Logger(AppModule.name)
  });
  await app.listen(process.env.PORT ? parseInt(process.env.PORT) : 3000);
}
bootstrap();
