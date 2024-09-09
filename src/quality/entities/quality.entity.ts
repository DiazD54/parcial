export class Quality {
    id: number;
    organId: number;
    status: string; // Puede ser "verified", "pending", "failed"
    verifiedBy: string; // El nombre del verificador
    verificationDate: Date;
    comments?: string; // Comentarios adicionales
  }
  