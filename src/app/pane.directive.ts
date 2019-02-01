import { Directive, Input } from '@angular/core';

@Directive({
  selector: 'pane'
})
export class PaneDirective {

  constructor() { }

  @Input() id: string;

}
