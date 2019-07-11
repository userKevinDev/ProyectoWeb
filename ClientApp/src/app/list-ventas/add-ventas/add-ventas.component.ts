import { Component, OnInit } from '@angular/core';
import {ProductoService} from '../../Services/producto.service';
import { Producto } from 'src/app/Models/producto';
@Component({
  selector: 'app-add-ventas',
  templateUrl: './add-ventas.component.html',
  styleUrls: ['./add-ventas.component.css']
})
export class AddVentasComponent implements OnInit {
  listProduct: Producto[];
  fdate: Date = new Date() ;
  fechaHoy: string = this.fdate.getDate() + '/' + (this.fdate.getMonth() + 1) + '/' + this.fdate.getFullYear();
  constructor(private productosService: ProductoService) { }

  ngOnInit() {
    this.getProductos();
  }

  getProductos() {
    this.productosService.getProducts().subscribe(result => this.listProduct = result);
  }
}
