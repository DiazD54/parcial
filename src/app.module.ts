import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { OrgansModule } from './organs/organs.module';
import { QualityModule } from './quality/quality.module';
import { RelocationModule } from './relocation/relocation.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './users/entities/user.entity';
import { Relocation } from './relocation/entities/relocation.entity';
import { Organ } from './organs/entities/organ.entity';
import { Quality } from './quality/entities/quality.entity';

@Module({
  imports: [
    ConfigModule.forRoot(), TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: true, // solo para desarrollo
      autoLoadEntities: true,
      entities:[User,Relocation,Organ,Quality]
    }),
    AuthModule,
    UsersModule,
    OrgansModule,
    QualityModule,
    RelocationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}