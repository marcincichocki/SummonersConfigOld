import {Component, CORE_DIRECTIVES} from 'angular2/angular2';

import {RuneService} from '../../services/rune/rune.service';


@Component({
  selector: 'pages-component',
  styleUrls: ['./app/components/pages/style.css'],
  templateUrl: './app/components/pages/pages.component.html',
  directives: [CORE_DIRECTIVES]
})
export class PagesComponent {
  constructor(public runeService: RuneService) {}
}