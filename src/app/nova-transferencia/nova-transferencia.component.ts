import { Transferencia } from './../models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

  @Output() aoTransferir = new EventEmitter<any>();

  constructor(private service: TransferenciaService) {

  }

  ngOnInit(): void {
  }

  valor: number = 0 ;
  destino: number = 0 ;

  transferir() {
    console.log("Solicitada nova transferencia.")
    console.log("Valor: ", this.valor);
    console.log("Destino: ", this.destino)

    const valorEmitir: Transferencia = {valor: this.valor, destino: this.destino};
    this.service.adicionar(valorEmitir).subscribe(
      (retorno) => {
        console.log(retorno);
        this.limparCampos();
      });

  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0
  }

}
