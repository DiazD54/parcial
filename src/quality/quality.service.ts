import { Injectable } from '@nestjs/common';
import { CreateQualityDto } from './dto/create-quality.dto';
import { UpdateQualityDto } from './dto/update-quality.dto';
import { Quality } from './entities/quality.entity';

@Injectable()
export class QualityService {
  private readonly qualities: Quality[] = [];

  create(createQualityDto: CreateQualityDto): Quality {
    const newQuality: Quality = {
      ...createQualityDto,
      id: this.qualities.length + 1,
      verificationDate: new Date(),
    };
    this.qualities.push(newQuality);
    return newQuality;
  }

  findAll(): Quality[] {
    return this.qualities;
  }

  findOne(id: number): Quality {
    return this.qualities.find(quality => quality.id === id);
  }

  update(id: number, updateQualityDto: UpdateQualityDto): Quality {
    const quality = this.findOne(id);
    Object.assign(quality, updateQualityDto);
    return quality;
  }

  remove(id: number): void {
    const index = this.qualities.findIndex(quality => quality.id === id);
    if (index > -1) {
      this.qualities.splice(index, 1);
    }
  }
}
