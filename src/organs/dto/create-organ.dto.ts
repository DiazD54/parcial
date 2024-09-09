export class CreateOrganDto {
    type: string;
    status: string;
    donorId: number;
    clientId?: number; // Cliente opcional al crear un órgano
}
