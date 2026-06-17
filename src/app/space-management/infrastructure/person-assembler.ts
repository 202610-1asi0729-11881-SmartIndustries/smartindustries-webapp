import {BaseAssembler} from '../../shared/infrastructure/base-assembler';
import {Person} from '../domain/model/person.entity';
import {PeopleResource, PeopleResponse} from './people-response';

export class PersonAssembler implements BaseAssembler<Person, PeopleResource, PeopleResponse> {
  toEntitiesFromResponse(response: PeopleResponse): Person[] {
    return response.people.map(resource => this.toEntityFromResource(resource as PeopleResource));
  }

  toEntityFromResource(resource: PeopleResource): Person {
    return new Person(resource.id, resource.organizationId, resource.firstName, resource.lastName, resource.identityDocument);
  }

  toResourceFromEntity(entity: Person): PeopleResource {
    return {
      id: entity.id,
      organizationId: entity.organizationId,
      firstName: entity.firstName,
      lastName: entity.lastName,
      identityDocument: entity.identityDocument
    } as PeopleResource;
  }
}