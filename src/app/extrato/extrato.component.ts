import { TransferenciaService } from './../services/transferencia.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  constructor(private service: TransferenciaService) { }

  @Input() transferencias: any[] = [];

  ngOnInit(): void {
    this.service.todas().subscribe((transferencias) => {
      this.transferencias = transferencias;
    })
  }



}
