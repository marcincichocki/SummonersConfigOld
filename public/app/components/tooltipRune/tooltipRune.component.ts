import {Component, ViewEncapsulation, Input} from 'angular2/angular2';


@Component({
  selector: 'tooltip-rune-component',
  styles: [`
    .tooltip-rune {
      padding: 0 1rem;
      text-align: center;
    }

    .name {
      font-size: 1.1rem;
      margin: 1.5rem 0 .5rem;
    }

    .description {
      font-size: .8rem;
    }

    .tier,
    .ip {
      font-size: .7rem;
      position: absolute;
      top: 2px;
    }

    .tier {
      left: 3px;
      color: orange;
    }

    .ip {
      right: 3px;
    }

    .mark { color: #a1161f; }
    .seal { color: #c7da27; }
    .glyph { color: #4fb0f9; }
    .quintessence { color: #9f60eb; }
  `],
  encapsulation: ViewEncapsulation.Native,
  template: `
    <div class="tooltip-rune">
      <h3 class="name {{ rune.type }}">{{ rune.name }}</h3>
      <p class="description">{{ rune.description }}</p>
      <span class="tier">Tier {{ rune.tier }}</span>
      <span class="ip">{{ rune.ip }} ip</span>
    </div>
  `
})
export class TooltipRuneComponent {
  @Input('data') rune;
}