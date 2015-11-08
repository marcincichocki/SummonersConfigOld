import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core';


@Injectable()
export class MasteryService {
  public grid: any;
  public masteries: any;
  public categories: string[] = [
    'Resolve',
    'Cunning',
    'Ferocity'
  ];
  constructor(public http: Http) { }

  getMasteries() {
    this.http.get('./app/data/en/masteries.json')
      .map(res => res.json())
      .subscribe(
        data => {
          this.grid = data.masteries;
          this.masteries = data.data;
        },
        error => console.log(error)
      );
  }

  isEven(n) {
    return (n + 1) % 2 === 0;
  }
}