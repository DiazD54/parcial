import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrgansService } from './organs.service';
import { OrgansController } from './organs.controller';
import { Organ } from './entities/organ.entity';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Organ]), UsersModule],
  providers: [OrgansService],
  controllers: [OrgansController],
  exports: [OrgansService],
})
export class OrgansModule {}