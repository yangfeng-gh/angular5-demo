import {Component, OnInit, ViewChild} from '@angular/core';
import {PaneDirective} from '../pane.directive';

@Component({
  selector: 'view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  @ViewChild(PaneDirective)
  set pane(v: PaneDirective) {
    setTimeout(() => {
      this.selectedPane = v.id;
    }, 0);
  }

  selectedPane: string = '';
  shouldShow = true;

  toggle() {
    this.shouldShow = !this.shouldShow;
  }

}
