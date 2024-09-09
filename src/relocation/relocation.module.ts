import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RelocationService } from './relocation.service';
import { RelocationController } from './relocation.controller';
import { Relocation } from './entities/relocation.entity';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Relocation]), UsersModule],
  providers: [RelocationService],
  controllers: [RelocationController],
})
export class RelocationModule {}