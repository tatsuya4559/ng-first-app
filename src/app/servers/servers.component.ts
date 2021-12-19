import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Test';
  username = '';
  serverCreated = false;
  servers = ['TestServer', 'TestServer2']
  showDetail = false;
  buttonClickLogs = [];

  get isAssignmentButtonAvailable() {
    return this.username !== '';
  }

  resetUsername() {
    this.username = '';
  }

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created!';
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  toggleShowDetail() {
    this.showDetail = !this.showDetail;
    this.buttonClickLogs.push(this.buttonClickLogs.length + 1);
  }
}
