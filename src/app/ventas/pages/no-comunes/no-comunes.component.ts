import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
})
export class NoComunesComponent {
  //i18SelectPipe
 nombre:string = "Alex Bentancur";
 genero: string ="masculino";
 invitacionMapa ={
  "masculino":"invitarlo",
  "femenino":"invitarla"
 }
//  i18PluralePipe
 clientes:string[]=["Maria","Juan","Pedro","Lucas","Juanita"];
 clientesMapa={
  "=0":"no tenemos ningun cliente esperando.",
  "=1":"tenemos un cliente esperando",
  "=2":"tenemos dos clientes esperando",
  "other": "tenemos # clientes esperando"
 }

 cambiarCliente(){
  this.nombre = "Juanita Perez";
  this.genero = "femenino"
 }

 borrarCliente(){
  this.clientes.shift();
  console.log(this.clientes)
 }

 //KeyValue Pipe

 persona={
  nombre:"Alex",
  edad:22,
  direccion:"Rionegro"
 }

 // JsonPipe

 heroes=[
  {
    nombre:"Superman",
    vuela:true
 },
 {
    nombre:"Batman",
    vuela:false
 },
 {
    nombre:"Acuaman",
    vuela:false
 }
]

// Async Pipe

  miObservable = interval(1000);

  valorPromesa = new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve("Tenemos data de promesa")
    }, 3500);
  });

}
