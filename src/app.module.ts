import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/User.entities';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password:'12345',
      username: 'postgres',
      entities: [User],
      database: 'postgres',
      synchronize: true,
      logging: true
    }), 
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
