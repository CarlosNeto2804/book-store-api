import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
const logger = new Logger('Main');
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = app.get('ConfigService').get('PORT');
  await app.listen(port);
  logger.log(`API started on ${port}`)
}
bootstrap();
 