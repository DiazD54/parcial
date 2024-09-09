import { Controller, Post, Get, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { OrgansService } from './organs.service';
import { Organ } from './entities/organ.entity';
import { CreateOrganDto } from './dto/create-organ.dto';
import { UpdateOrganDto } from './dto/update-organ.dto';
import { Roles } from '../auth/decorators/roles.decorator';
import { RolesGuard } from '../auth/guards/roles.guard';

@Controller('organs')
@UseGuards(RolesGuard) // Usa el RolesGuard para este controlador
export class OrgansController {
    constructor(private readonly organsService: OrgansService) {}

    @Post()
    @Roles('provider') // Solo los usuarios con el rol 'provider' pueden acceder
    async create(@Body() createOrganDto: CreateOrganDto) {
        return this.organsService.create(createOrganDto);
    }

    @Get()
    async findAll(): Promise<Organ[]> {
        return this.organsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<Organ> {
        return this.organsService.findOne(id);
    }

    @Put(':id')
    @Roles('provider') // Solo los proveedores pueden actualizar los órganos
    async update(@Param('id') id: number, @Body() updateOrganDto: UpdateOrganDto): Promise<Organ> {
        return this.organsService.update(id, updateOrganDto);
    }

    @Delete(':id')
    @Roles('provider') // Solo los proveedores pueden eliminar órganos
    async remove(@Param('id') id: number): Promise<void> {
        return this.organsService.remove(id);
    }
}

