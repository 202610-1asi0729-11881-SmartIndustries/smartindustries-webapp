import {BaseAssembler} from '../../shared/infrastructure/base-assembler';
import {AccessGroup} from '../domain/model/access-group.entity';
import {AccessGroupsResource, AccessGroupsResponse} from './access-groups-response';

export class AccessGroupAssembler implements BaseAssembler<AccessGroup, AccessGroupsResource, AccessGroupsResponse> {
  toEntitiesFromResponse(response: AccessGroupsResponse): AccessGroup[] {
    return response.accessGroups.map(resource => this.toEntityFromResource(resource as AccessGroupsResource));
  }

  toEntityFromResource(resource: AccessGroupsResource): AccessGroup {
    return new AccessGroup(resource.id, resource.organizationId, resource.name, resource.description);
  }

  toResourceFromEntity(entity: AccessGroup): AccessGroupsResource {
    return {
      id: entity.id,
      organizationId: entity.organizationId,
      name: entity.name,
      description: entity.description,
    } as AccessGroupsResource;
  }
}