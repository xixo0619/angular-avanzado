import { Component, EventEmitter, Input, Output  } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent {

  //RECIBE UNA PROPIEDAD DESDE EL PADRE LLAMADA PROGRESO
  @Input() progreso: number = 10;
  @Input() btnClass: string = 'btn btn-primary'

  //RENOMBRAR PROPIEDAD
  //@Input('valor') progreso: number = 50;

  //EMITIR EVENTOS AL PADRE
  @Output('valor') salida: EventEmitter<number> = new EventEmitter();


  cambiarValor(valor: number){

    if( this.progreso > 100) {
      this.salida.emit(100);
      this.progreso = 100
    }

    if( this.progreso < 0 ) {
      this.salida.emit(0);
      this.progreso = 0;
    }
    
    this.salida.emit( this.progreso );
    this.progreso = this.progreso + valor
  }

  onChange( valorBarra: number){
    if (valorBarra >= 100){
      this.progreso = 100
    } else if ( valorBarra <= 0) {
      this.progreso = 0
    } else {
      this.progreso = valorBarra
    }

    this.salida.emit( this.progreso )
  }


}
