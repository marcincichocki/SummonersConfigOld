import {Pipe} from 'angular2/angular2';


@Pipe({
  name: 'filterType',
  pure: true
})
export class FilterType {
  transform(value, [type]: [string]) {
    console.log(type);
    return value.filter(item => item['type'] === type);
  }
}
