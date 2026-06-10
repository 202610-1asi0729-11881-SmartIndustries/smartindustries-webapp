import {BaseApiEndpoint} from '../../shared/infrastructure/base-api-endpoint';
import {AccessEvent} from '../domain/model/access-event.entity';
import {AccessEventsResource, AccessEventsResponse} from './access-events-response';
import {AccessEventAssembler} from './access-event-assembler';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment.development';

export class AccessEventsApiEndpoint extends BaseApiEndpoint<AccessEvent, AccessEventsResource, AccessEventsResponse, AccessEventAssembler> {
  constructor(http: HttpClient) {
    super(http, `${environment.platformProviderApiBaseUrl}${environment.accessEventsEndPointPath}`, new AccessEventAssembler());
  }
}
