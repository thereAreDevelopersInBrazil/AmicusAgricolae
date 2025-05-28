import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { useContainer } from 'class-validator';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));

  const config = new DocumentBuilder()
    .setTitle('Amicus Agricolae')
    .setDescription('Documentação API REST do Amigo do Agricultor')
    .setVersion('1.0')
    .build();

  const options = {
    ignoreGlobalPrefix: false,
    deepScanRoutes: true,
    autoTagControllers: true
  }
  const documentFactory = () => SwaggerModule.createDocument(app, config, options);
  SwaggerModule.setup('docs', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
