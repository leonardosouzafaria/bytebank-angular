import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  transferencia : any = {};

  transferir($event: any) {
    console.log($event);
    this.transferencia.valor = $event.valor;
    this.transferencia.destino =$event.destino;
  }
}
