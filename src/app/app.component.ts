import { Component, OnInit, View } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  msgToChild: string;
  msgFromChild: string;
  title = 'app';

  constructor() {}

  ngOnInit(): void {
    this.msgToChild = 'message from parent'
  }

  receive(msg: string) {
    this.msgFromChild = msg
  }
}
