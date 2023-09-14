import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = await app.get(ConfigService);

  const port = configService.get('APP_PORT');
  const host = configService.get('APP_HOST');
  await app.listen(port, () => {
    Logger.log(`
    =====================================================
      Application it's running on ${host}:${port}
    =====================================================
    `);
  });
}
bootstrap();
