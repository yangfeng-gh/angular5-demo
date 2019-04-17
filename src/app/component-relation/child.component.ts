import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() private message: string;
  @Output() private outer = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void { }

  sendToParent() {
    this.outer.emit('来自子组件的消息')
  }
}
