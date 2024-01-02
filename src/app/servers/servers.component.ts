import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  allowNewServer = false;
  serverCreated = false;
  serverName: string = '';
  serverCreationStatus = 'No server was created!';
  servers = ['Testserver', 'Testserver 2'];


  constructor(){
    setTimeout(()=>{
      this.allowNewServer = true
    }, 2000);
  }

  onCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created with name '+this.serverName;
    this.servers.push(this.serverName)
  }

  onNameUpdate(event: any){
    this.serverName =(<HTMLInputElement>event.target).value;
  }
}
