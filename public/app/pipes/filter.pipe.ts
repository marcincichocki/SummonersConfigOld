import {Pipe} from 'angular2/angular2';


@Pipe({
  name: 'filter',
  pure: true
})
export class FilterType {
  transform(arr, [prop, value]: [string, string]) {
    return arr.filter(obj => obj[prop].toString() === value);
  }
}
