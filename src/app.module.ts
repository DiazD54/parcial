import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { OrgansModule } from './organs/organs.module';
import { QualityModule } from './quality/quality.module';
import { RelocationModule } from './relocation/relocation.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'dollarfen54',
      database: 'parcialweb',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // solo para desarrollo
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