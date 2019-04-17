import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private msgToChild: string;
  private msgFromChild: string;
  title = 'app';
  constructor() {}

  ngOnInit(): void {
    this.msgToChild = 'message from parent'
  }

  receive(msg: string) {
    this.msgFromChild = msg
  }
}
