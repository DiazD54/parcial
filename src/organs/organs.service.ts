import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Organ } from './entities/organ.entity';
import { CreateOrganDto } from './dto/create-organ.dto';
import { UpdateOrganDto } from './dto/update-organ.dto';
import { UsersService } from '../users/users.service';

@Injectable()
export class OrgansService {
    constructor(
        @InjectRepository(Organ)
        private readonly organsRepository: Repository<Organ>,
        private readonly usersService: UsersService,
    ) {}

    async create(createOrganDto: CreateOrganDto): Promise<Organ> {
        const donor = await this.usersService.findOne(createOrganDto.donorId);
        if (!donor) {
        throw new NotFoundException('Donor not found');
        }
        const organ = this.organsRepository.create({
        ...createOrganDto,
        donor,
        });
        return this.organsRepository.save(organ);
    }

    async findAll(): Promise<Organ[]> {
        return this.organsRepository.find({ relations: ['donor', 'client'] });
    }

    async findOne(id: number): Promise<Organ> {
        const organ = await this.organsRepository.findOne({ where: { id }, relations: ['donor', 'client'] });
        if (!organ) {
        throw new NotFoundException('Organ not found');
        }
        return organ;
    }

    async update(id: number, updateOrganDto: UpdateOrganDto): Promise<Organ> {
        const organ = await this.findOne(id);
        if (updateOrganDto.donorId) {
        const donor = await this.usersService.findOne(updateOrganDto.donorId);
        if (!donor) {
            throw new NotFoundException('Donor not found');
        }
        organ.donor = donor;
        }
        if (updateOrganDto.clientId) {
        const client = await this.usersService.findOne(updateOrganDto.clientId);
        if (!client) {
            throw new NotFoundException('Client not found');
        }
        organ.client = client;
        }
        return this.organsRepository.save({ ...organ, ...updateOrganDto });
    }

    async remove(id: number): Promise<void> {
        const organ = await this.findOne(id);
        await this.organsRepository.remove(organ);
    }
}
