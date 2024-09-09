import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateRelocationDto } from './dto/create-relocation.dto';
import { UpdateRelocationDto } from './dto/update-relocation.dto';
import { Relocation } from './entities/relocation.entity';

@Injectable()
export class RelocationService {
  private readonly relocations: Relocation[] = [];

  create(createRelocationDto: CreateRelocationDto): Relocation {
    const newRelocation: Relocation = {
      ...createRelocationDto,
      id: this.relocations.length + 1,
      dateRequested: new Date(),
      status: 'pending',
      user: null, // Assign the user appropriately
    };
    this.relocations.push(newRelocation);
    return newRelocation;
  }

  findAll(): Relocation[] {
    return this.relocations;
  }

  findOne(id: number): Relocation {
    return this.relocations.find(relocation => relocation.id === id);
  }

  update(id: number, updateRelocationDto: UpdateRelocationDto, userId: number): Relocation {
    const relocation = this.findOne(id);
    if (relocation && relocation.clientId !== userId) {
      throw new UnauthorizedException('You do not have permission to update this relocation request.');
    }
    Object.assign(relocation, updateRelocationDto);
    return relocation;
  }

  remove(id: number, userId: number): void {
    const relocation = this.findOne(id);
    if (relocation && relocation.clientId !== userId) {
      throw new UnauthorizedException('You do not have permission to delete this relocation request.');
    }
    const index = this.relocations.findIndex(relocation => relocation.id === id);
    if (index > -1) {
      this.relocations.splice(index, 1);
    }
  }
}
