import {Component, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import {PaneDirective} from '../../directive/pane.directive';

@Component({
  selector: 'view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit, AfterViewInit {
  selectedPane: string = '';
  shouldShow = true;
  name: string = 'yvan';

  @ViewChild('greet')
  greetElem: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.dir(this.greetElem);
  }

  @ViewChild(PaneDirective)
  set pane(pane: PaneDirective) {
    setTimeout(() => {
      this.selectedPane = pane.id;
    }, 0);
  }

  toggle() {
    this.shouldShow = !this.shouldShow;
  }

}
