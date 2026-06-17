import {BaseApiEndpoint} from '../../shared/infrastructure/base-api-endpoint';
import {AccessGroup} from '../domain/model/access-group.entity';
import {AccessGroupsResource, AccessGroupsResponse} from './access-groups-response';
import {AccessGroupAssembler} from './access-group-assembler';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment.development';
import {Observable, map} from 'rxjs';

export class AccessGroupsApiEndpoint extends BaseApiEndpoint<AccessGroup, AccessGroupsResource, AccessGroupsResponse, AccessGroupAssembler> {
  constructor(http: HttpClient) {
    super(http, `${environment.platformProviderApiBaseUrl}${environment.accessGroupsEndPointPath}`, new AccessGroupAssembler());
  }

  getByOrganizationId(organizationId: number): Observable<AccessGroup[]> {
    return this.http.get<AccessGroupsResource[]>(`${this.endpointUrl}?organizationId=${organizationId}`).pipe(
      map(resources => resources.map(r => this.assembler.toEntityFromResource(r)))
    );
  }

  createAccessGroup(organizationId: number, name: string, description: string): Observable<AccessGroup> {
    return this.http.post<AccessGroupsResource>(this.endpointUrl, { organizationId, name, description }).pipe(
      map(resource => this.assembler.toEntityFromResource(resource))
    );
  }
}