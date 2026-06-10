import {Injectable} from '@angular/core';
import {BaseApi} from '../../shared/infrastructure/base-api';
import {HttpClient} from '@angular/common/http';
import {AccessEventsApiEndpoint} from './access-events-api-endpoint';
import {Observable} from 'rxjs';
import {AccessEvent} from '../domain/model/access-event.entity';

@Injectable({providedIn: 'root'})
export class ReportApi extends BaseApi {
  private readonly accessEventsEndpoint: AccessEventsApiEndpoint;

  constructor(http: HttpClient) {
    super();
    this.accessEventsEndpoint = new AccessEventsApiEndpoint(http);
  }

  getAccessEvents(): Observable<AccessEvent[]> {
    return this.accessEventsEndpoint.getAll();
  }
}
