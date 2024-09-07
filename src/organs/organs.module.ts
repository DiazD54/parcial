import { Module } from '@nestjs/common';
import { OrgansService } from './organs.service';
import { OrgansController } from './organs.controller';

@Module({
  providers: [OrgansService],
  controllers: [OrgansController]
})
export class OrgansModule {}
