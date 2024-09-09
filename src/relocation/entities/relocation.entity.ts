export class Relocation {
    id: number;
    clientId: number;
    country: string;
    riskLevel: string; // Baja, Media, Alta
    details: string; // Descripción de los riesgos
    dateRequested: Date;
    status: string; // "pending", "approved", "rejected"
}
  