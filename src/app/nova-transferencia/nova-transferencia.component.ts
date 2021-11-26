import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

  ngOnInit(): void {
  }

  valor: number |undefined;
  destino: number | undefined;

  transferir() {
    console.log("Solicitada nova transferencia.")
    console.log("Valor: ", this.valor);
    console.log("Destino: ", this.destino)
  }

}
