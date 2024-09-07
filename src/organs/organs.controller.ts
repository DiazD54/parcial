import { Controller, Post, Get, Put, Delete, Body, Param } from '@nestjs/common';
import { OrgansService } from './organs.service';
import { Organ } from './entities/organ.entity';

@Controller('organs')
export class OrgansController {
    constructor(private readonly organsService: OrgansService) {}
    
    @Post()
    async create(@Body() body: { type: string; status: string; donorId: number; clientId: number }) {
        const { type, status, donorId, clientId } = body;
        return this.organsService.create(type, status, donorId, clientId);
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
    async update(@Param('id') id: number, @Body() updateData: Partial<Organ>): Promise<Organ> {
        return this.organsService.update(id, updateData);
    }

    @Delete(':id')
    async remove(@Param('id') id: number): Promise<void> {
        return this.organsService.remove(id);
    }
}
