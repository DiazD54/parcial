import { Controller, Post, Get, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { RelocationService } from './relocation.service';
import { CreateRelocationDto } from './dto/create-relocation.dto';
import { UpdateRelocationDto } from './dto/update-relocation.dto';
import { Relocation } from './entities/relocation.entity';
import { Roles } from '../auth/decorators/roles.decorator';
import { RolesGuard } from '../auth/guards/roles.guard';
import { User } from '../auth/decorators/user.decorator'; // Import the User decorator

@Controller('relocation')
@UseGuards(RolesGuard)
export class RelocationController {
  constructor(private readonly relocationService: RelocationService) {}

  @Post()
  @Roles('client') // Solo los clientes pueden solicitar relocalización
  create(@Body() createRelocationDto: CreateRelocationDto): Relocation {
    return this.relocationService.create(createRelocationDto);
  }

  @Get()
  @Roles('admin') // Solo los administradores pueden ver todas las solicitudes
  findAll(): Relocation[] {
    return this.relocationService.findAll();
  }

  @Get(':id')
  @Roles('admin', 'client') // Los administradores y el cliente que hizo la solicitud pueden ver la solicitud
  findOne(@Param('id') id: number): Relocation {
    return this.relocationService.findOne(id);
  }
  
  @Put(':id')
  @Roles('admin') // Solo los administradores pueden actualizar el estado de las solicitudes
  update(
    @Param('id') id: number, 
    @Body() updateRelocationDto: UpdateRelocationDto, 
    @User() user: any
  ): Relocation {
    return this.relocationService.update(id, updateRelocationDto, user.id);
  }
  
  @Delete(':id')
  @Roles('admin') // Solo los administradores pueden eliminar solicitudes
  remove(
    @Param('id') id: number, 
    @User() user: any
  ): void {
    this.relocationService.remove(id, user.id);
  }
}
