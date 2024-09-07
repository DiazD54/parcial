import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Organ } from './entities/organ.entity';

@Injectable()
export class OrgansService {
    constructor(
        @InjectRepository(Organ)
        private organsRepository: Repository<Organ>,
    ) {}

    async create(type: string, status: string, donorId: number, clientId: number): Promise<Organ> {
        const organ = this.organsRepository.create({ type, status, donorId, clientId });
        return this.organsRepository.save(organ);
    }

    async findAll(): Promise<Organ[]> {
        return this.organsRepository.find();
    }

    async findOne(id: number): Promise<Organ> {
        return this.organsRepository.findOne(id);
    }

    async update(id: number, updateData: Partial<Organ>): Promise<Organ> {
        await this.organsRepository.update(id, updateData);
        return this.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.organsRepository.delete(id);
    }
}
