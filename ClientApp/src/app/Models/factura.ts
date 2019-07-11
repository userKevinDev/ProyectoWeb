import { Cliente } from './cliente';
import { DFactura } from './d-factura';

export class Factura {
    codigoFactura: string;
    fechaFactura: Date;
    cliente: Cliente;
    listDetalles: Array<DFactura>;
    totalCompra: number;
}
