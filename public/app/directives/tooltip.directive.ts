import {Directive} from 'angular2/angular2';

import {Rune} from '../services/rune/Rune';


@Directive({
  selector: '[tooltip]',
  inputs: [
    'rune: tooltip'
  ],
  host: {
    '(mouseenter)': 'show()',
    '(mousemove)': 'follow($event)',
    '(mouseleave)': 'hide()'
  }
})
export class Tooltip {
  public rune: Rune;

  show() {
    console.log(`Enter: ${this.rune.name}`);
  }

  follow(event: MouseEvent) {
    console.log(`pageX: ${event.pageX}, pageY: ${event.pageY}`);
  }

  hide() {
    console.log('Hide');
  }
}