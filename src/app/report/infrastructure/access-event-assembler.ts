import {BaseAssembler} from '../../shared/infrastructure/base-assembler';
import {AccessEvent} from '../domain/model/access-event.entity';
import {AccessEventsResource, AccessEventsResponse} from './access-events-response';

export class AccessEventAssembler implements BaseAssembler<AccessEvent, AccessEventsResource, AccessEventsResponse> {
  toEntitiesFromResponse(response: AccessEventsResponse): AccessEvent[] {
    return response.accessEvents.map(resource => this.toEntityFromResource(resource as AccessEventsResource));
  }

  toEntityFromResource(resource: AccessEventsResource): AccessEvent {
    return new AccessEvent(resource.id, resource.location, resource.person, resource.status, resource.date);
  }

  toResourceFromEntity(entity: AccessEvent): AccessEventsResource {
    return {id: entity.id, location: entity.location, person: entity.person, status: entity.status, date: entity.date} as AccessEventsResource;
  }
}
