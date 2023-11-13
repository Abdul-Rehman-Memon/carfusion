import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('fusion/api/v1');

  const port = process.env.PORT || 3000;

  await app.listen(port).then(() => {
    console.log(`Application is working on port ${port}`);
  });
}
bootstrap();
