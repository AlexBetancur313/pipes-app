import { Pipe, PipeTransform } from '@angular/core';
import { Heroes } from '../interfaces/ventas.interface';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(value: Heroes[], ordenarPor:string ="Sin valor"): Heroes[] {

    switch (ordenarPor) {
      case "nombre":
      return value = value.sort((a,b)=>(a.nombre> b.nombre) ? 1:-1);
      case "vuela":
      return value = value.sort((a,b)=>(a.vuela> b.vuela) ? 1:-1);
      // Al contrario
      //  return value = value.sort((a,b)=>(a.vuela> b.vuela) ? -1:1);
      case "color":
      return value = value.sort((a,b)=>(a.color> b.color) ? 1:-1);

      default:
        return value;
    }


    // if (ordenarPor==="Sin valor") {
    //   return value;
    // } else{
    //   value = value.sort((a,b)=>(a.nombre> b.nombre) ? 1:-1)
    //   return value;
    // }
  }

}
