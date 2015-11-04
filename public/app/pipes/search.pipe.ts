import {Pipe} from 'angular2/angular2';


// TODO: async observable search
@Pipe({
  name: 'search',
  pure: true
})
export class SearchPipe {
  transform(value, [field, query]: [string, string]) {
    return value.filter(item => new RegExp(query, 'i').test(item[field]));
  }
}
