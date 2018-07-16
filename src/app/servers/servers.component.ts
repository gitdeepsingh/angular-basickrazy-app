import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  template: `<div class="main">
              <app-server></app-server>
              <span>Here I come again :)</span>
            <app-server></app-server>
            </div>`,
  //templateUrl: './server/server.component.html'
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
