import { Component, OnInit } from '@angular/core';
import { Factura } from '../Models/factura';
import {FacturasService} from '../Services/facturas.service';
@Component({
  selector: 'app-list-ventas',
  templateUrl: './list-ventas.component.html',
  styleUrls: ['./list-ventas.component.css']
})
export class ListVentasComponent implements OnInit {
  listFacturas: Array<Factura>;
  constructor(private facturasService: FacturasService) { }

  ngOnInit() {
    this.getVentas();
  }

  getVentas() {
    this.facturasService.getFacturas().subscribe(result => this.listFacturas = result);
  }
}
