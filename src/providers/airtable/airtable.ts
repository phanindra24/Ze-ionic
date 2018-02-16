import { Injectable } from '@angular/core';

import { Item } from '../../models/item';
import { Api } from '../api/api';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class Airtable {

  constructor(public api: Api) { }

  getTimelineData(params?: any): Observable<any> {
    return this.api.get('Timeline%20-%20Process?api_key=keycD8huInQo9XgXJ');
  }

  getAlerts(params?: any): Observable<any>{
    return this.api.get('Alerts?api_key=keycD8huInQo9XgXJ');
  }

  delete(item: Item) {
  }

}
