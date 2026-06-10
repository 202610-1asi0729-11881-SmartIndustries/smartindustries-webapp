import {Injectable} from '@angular/core';
import {BaseApi} from '../../shared/infrastructure/base-api';
import {HttpClient} from '@angular/common/http';
import {AdministratorsApiEndpoint} from './administrators-api-endpoint';
import {Observable} from 'rxjs';
import {Administrator} from '../domain/model/administrator.entity';

@Injectable({providedIn: 'root'})
export class AdministrationApi extends BaseApi {
  private readonly administratorsEndpoint: AdministratorsApiEndpoint;

  constructor(http: HttpClient) {
    super();
    this.administratorsEndpoint = new AdministratorsApiEndpoint(http);
  }

  getAdministrators(): Observable<Administrator[]> {
    return this.administratorsEndpoint.getAll();
  }
}
