import { Injectable } from '@angular/core';

import { Item } from '../../models/item';
import { Api } from '../api/api';
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class Airtable {

  constructor(public api: Api) { }

  query(params?: any): Observable<any> {
    return this.api.get('Timeline%20-%20Process?api_key=keycD8huInQo9XgXJ');
  }

  add(item: Item) {
  }

  delete(item: Item) {
  }

}
