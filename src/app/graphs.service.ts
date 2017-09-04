import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

const endpoint = "http://localhost:3000/api";

@Injectable()
export class GraphsService {

  constructor(private http:Http) { }

  getGraphData() {
    return this.http.get(endpoint)
      .map(res => res.json());
  }

}
