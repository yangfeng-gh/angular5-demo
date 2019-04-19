import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  // 所有数据绑定属性必须是 TypeScript 的公共属性，Angular 永远不会绑定到 TypeScript 中的私有属性
  // 你不能用 TypeScript 的 public 和 private 访问控制符来标明组件的公共 API
  // 你总是可以在组件自己的模板中绑定到组件的公共属性，而不用管它们是否输入（Input）属性或输出（Output）属性。
  // Angular 编译器不会绑定到其它组件的属性上 —— 除非这些属性是输入或输出属性
  @Input() message: string;
  @Output() messageChange = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void { }

  sendToParent() {
    this.messageChange.emit('message from child')
  }
}
