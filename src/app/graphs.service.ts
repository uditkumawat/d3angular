import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GraphsService {

  constructor(private http:Http) { }

  getGraphData() {
    return this.http.get('/api/graphData')
      .map(res => res.json());
  }
}
