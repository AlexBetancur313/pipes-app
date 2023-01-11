import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
//Todas la importaciones de los componentes que se mostraran segun la ruta
import { BasicosComponent } from './ventas/pages/basicos/basicos.component';
import { NumerosComponent } from './ventas/pages/numeros/numeros.component';
import { NoComunesComponent } from './ventas/pages/no-comunes/no-comunes.component';
import { OrdenarComponent } from './ventas/pages/ordenar/ordenar.component';

// La constante utilizada para guardar las rutas
const routes: Routes =[{
  // Cuando no haya una ruta especifica(Por defecto)
  path:"",
  component:BasicosComponent,
  pathMatch:"full"
},
{ // ruta de componente numeros
  path: "numeros",
  component: NumerosComponent
},
{ // ruta de componente no-comunes
  path: "no-comunes",
  component: NoComunesComponent
},
{// ruta de componente ordernar
  path: "ordenar",
  component: OrdenarComponent
},
{ // si la ruta no existe, la re dirigue al path vacio, osea a lo que se asigno por defecto
  path:"**",
  redirectTo:""
}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRouterModule {
   static forRoot: any;
}
