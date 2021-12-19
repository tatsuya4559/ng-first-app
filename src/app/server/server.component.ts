import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  // styleUrls: ['./server.component.scss']
  styles: [`
    .online {
      color: white;
    }
  `]
})
export class ServerComponent implements OnInit {
  serverId: number = 10;
  serverStatus: string = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
   }

   getColor() {
     if (this.serverStatus === 'online') {
       return 'green';
     }
     return 'red';
   }

  ngOnInit(): void {
  }

  getServerStatus() {
    return this.serverStatus;
  }
}
