import { Component} from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent
{
  nombreLower:string= "Brayam";
  nombreUpper:string="BRAYAM";
  nombreCompleto:string="BrAyaM cHicA"
  fecha:Date = new Date(); // Fecha el día de hoy: Wed Dec 14 2022 10:48:10 GMT-0500 (hora estándar de Colombia)
}
