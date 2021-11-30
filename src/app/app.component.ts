import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  transferencias : any[] = [];

  transferir($event: any) {
    const transferencia = {...$event, data : new Date()}
    console.log(transferencia);
    this.transferencias.push(transferencia);
  }
}
