import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {
  
  //i18nSelect
  cambio: boolean = true;
  nombre: string = 'Susana';
  genero: string = 'femenino';

  invitacionMapa = {
    'masculino' : 'invitarlo',
    'femenino' : 'invitarla'
  }

  //i18NpLURAL
  clientes: string[] = ['Maria', 'Mario', 'Alicia', 'Carlos', 'Paco'];

  clientesMapa = {
    '=0' : 'no tenemos ningun cliente esperando',
    '=1' : 'tenemos un cliente esperando',
    'other' : 'tenemos # clientes esperando'
  }

  cambiarCliente(){

    if(this.cambio){
      this.nombre = 'Erick';
      this.genero = 'masculino'
    }else{
      this.nombre = 'Susana';
      this.genero = 'femenino'
    }

    this.cambio = !this.cambio;
  }

  borrarCliente(){
    console.log(this.clientes);
    this.clientes.shift();
    console.log(this.clientes);
  }
}
