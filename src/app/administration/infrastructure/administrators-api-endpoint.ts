import {BaseApiEndpoint} from '../../shared/infrastructure/base-api-endpoint';
import {Administrator} from '../domain/model/administrator.entity';
import {AdministratorsResource, AdministratorsResponse} from './administrators-response';
import {AdministratorAssembler} from './administrator-assembler';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment.development';
import {Observable, map} from 'rxjs';

export class AdministratorsApiEndpoint extends BaseApiEndpoint<Administrator, AdministratorsResource, AdministratorsResponse, AdministratorAssembler> {
  constructor(http: HttpClient) {
    super(http, `${environment.platformProviderApiBaseUrl}${environment.usersEndPointPath}`, new AdministratorAssembler());
  }

  getByOrganizationId(organizationId: number): Observable<Administrator[]> {
    return this.http.get<AdministratorsResource[]>(`${this.endpointUrl}?organizationId=${organizationId}`).pipe(
      map(resources => resources.map(r => this.assembler.toEntityFromResource(r)))
    );
  }
}