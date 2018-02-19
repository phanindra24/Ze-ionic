import { Injectable } from '@angular/core';

import { Item } from '../../models/item';
import { Api } from '../api/api';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class Airtable {

  constructor(public api: Api) { }

  getTimelineData(params?: any): Observable<any> {
    return this.api.get('Timeline?api_key=keycD8huInQo9XgXJ');
  }

  getAlerts(params?: any): Observable<any>{
    return this.api.get('Process%20And%20Equipment?api_key=keycD8huInQo9XgXJ');
  }

  getEquipmentMetric(params?: any): Observable<any> {
    return this.api.get('Equipment%20Metric?api_key=keycD8huInQo9XgXJ');
    
  }
  getWatchlist(params?: any): Observable<any> {
    return this.api.get('Watchlist?api_key=keycD8huInQo9XgXJ');
  }

}
