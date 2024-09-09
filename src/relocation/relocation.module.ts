import { Module } from '@nestjs/common';
import { RelocationService } from './relocation.service';
import { RelocationController } from './relocation.controller';

@Module({
  providers: [RelocationService],
  controllers: [RelocationController]
})
export class RelocationModule {}
