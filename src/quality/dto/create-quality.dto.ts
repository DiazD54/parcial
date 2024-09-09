export class CreateQualityDto {
    organId: number;
    status: string; // Puede ser "verified", "pending", "failed"
    verifiedBy: string;
    comments?: string;
  }
  