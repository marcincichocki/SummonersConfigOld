import {Pipe} from 'angular2/angular2';


@Pipe({
  name: 'search',
  pure: true
})
export class Search {
  transform(value, [field, query]: [string, string]) {
    return value.filter(item => item[field].includes(query));
  }
}
