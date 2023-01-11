import { Component } from '@angular/core';
import { Heroes, Color } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent {

  ordenarPor:string = "";
  // Validaciones de Pipes
  enMayusculas:boolean = true;

  heroes:Heroes[] =[
    {nombre:"Superman",
    vuela: true,
    color:Color.azul},
    {nombre:"Batman",
    vuela: false,
    color:Color.negro},
    {nombre:"Robin",
    vuela: false,
    color:Color.rojo},
    {
    nombre:"Linterna Verde",
    vuela: true,
    color:Color.verde
  }
  ];

  // Metodos de ordenar

  cMayusculas(){
    this.enMayusculas = !this.enMayusculas
  }

  cambiarOrden(valor:string){
    this.ordenarPor = valor;
    console.log(valor);
  }

}
