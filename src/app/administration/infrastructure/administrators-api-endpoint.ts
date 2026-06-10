import {BaseApiEndpoint} from '../../shared/infrastructure/base-api-endpoint';
import {Administrator} from '../domain/model/administrator.entity';
import {AdministratorsResource, AdministratorsResponse} from './administrators-response';
import {AdministratorAssembler} from './administrator-assembler';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment.development';

export class AdministratorsApiEndpoint extends BaseApiEndpoint<Administrator, AdministratorsResource, AdministratorsResponse, AdministratorAssembler> {
  constructor(http: HttpClient) {
    super(http, `${environment.platformProviderApiBaseUrl}${environment.administratorsEndPointPath}`, new AdministratorAssembler());
  }
}
