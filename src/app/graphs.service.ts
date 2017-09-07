import { Injectable } from '@angular/core';
import { Http,URLSearchParams,RequestOptions,Response,Headers} from '@angular/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';

@Injectable()
export class GraphsService {

  private endpoint:string = "http://localhost:3000/api";

  constructor(private http:Http) { }

  getGraphData() {

    return this.http.get(this.endpoint)
      .map(res => res.json())
      .catch(this.handleError);
  }


  getGraphDataByFilter(filterType:string) {

    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    let params = new URLSearchParams();
    params.append('filterType', filterType);

    let options = new RequestOptions({ headers:myHeaders, params: params });

    return this.http.get(this.endpoint+"/filter",options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }

}
