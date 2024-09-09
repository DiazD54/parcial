import { Controller, Post, Get, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { QualityService } from './quality.service';
import { CreateQualityDto } from './dto/create-quality.dto';
import { UpdateQualityDto } from './dto/update-quality.dto';
import { Quality } from './entities/quality.entity';
import { Roles } from '../auth/decorators/roles.decorator';
import { RolesGuard } from '../auth/guards/roles.guard';

@Controller('quality')
@UseGuards(RolesGuard)
export class QualityController {
  constructor(private readonly qualityService: QualityService) {}

  @Post()
  @Roles('provider') // Solo los proveedores pueden verificar la calidad
  create(@Body() createQualityDto: CreateQualityDto): Quality {
    return this.qualityService.create(createQualityDto);
  }

  @Get()
  findAll(): Quality[] {
    return this.qualityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Quality {
    return this.qualityService.findOne(id);
  }

  @Put(':id')
  @Roles('provider') // Solo los proveedores pueden actualizar la verificación
  update(@Param('id') id: number, @Body() updateQualityDto: UpdateQualityDto): Quality {
    return this.qualityService.update(id, updateQualityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): void {
    this.qualityService.remove(id);
  }
}
