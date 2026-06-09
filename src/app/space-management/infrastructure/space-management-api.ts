import {Injectable} from '@angular/core';
import {BaseApi} from '../../shared/infrastructure/base-api';
import {HttpClient} from '@angular/common/http';
import {OrganizationsApiEndpoint} from './organizations-api-endpoint';
import {Observable} from 'rxjs';
import {Organization} from '../domain/model/organization.entity';

@Injectable({providedIn: 'root'})
export class SpaceManagementApi extends BaseApi{
  private readonly organizationsEndpoint: OrganizationsApiEndpoint;

  constructor(http: HttpClient) {
    super();
    this. organizationsEndpoint = new OrganizationsApiEndpoint(http);
  }

  getOrganizations(): Observable<Organization[]>{
    return this.organizationsEndpoint.getAll();
  }
}
