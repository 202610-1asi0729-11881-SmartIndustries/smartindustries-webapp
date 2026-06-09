import {BaseApiEndpoint} from '../../shared/infrastructure/base-api-endpoint';
import {Organization} from '../domain/model/organization.entity';
import {OrganizationsResource, OrganizationsResponse} from './organizations-response';
import {OrganizationAssembler} from './organization-assembler';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment.development';

export class OrganizationsApiEndpoint extends BaseApiEndpoint<Organization, OrganizationsResource, OrganizationsResponse, OrganizationAssembler> {
  constructor(http: HttpClient) {
    super(http, `${environment.platformProviderApiBaseUrl}${environment.organizationsEndPointPath}`, new OrganizationAssembler());
  }
}
