import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface Producto {
  nombre: string;
  precio: number;
  disponible: boolean;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // Datos de la tienda 
  nombreTienda: string = 'Tienda El Pococito Jhonss';
  encargado: string = 'Alvaro Guillermo Huanca Taco';
  numeroSucursal: number = 1;
  tiendaAbierta: boolean = true;
  categorias: string[] = ['Mochilas', 'Cuadernos', 'Celulares'];

  // Producto
  producto: Producto = {
    nombre: 'Mochila juvenil Irun',
    precio: 150,
    disponible: true
  };
}
