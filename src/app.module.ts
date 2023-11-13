import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { database } from './configs/database';

@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forRoot(database)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
