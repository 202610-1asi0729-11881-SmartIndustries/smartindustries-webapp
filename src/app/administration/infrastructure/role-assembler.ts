import {BaseAssembler} from '../../shared/infrastructure/base-assembler';
import {Role} from '../domain/model/role.entity';
import {RolesResource, RolesResponse} from './roles-response';

export class RoleAssembler implements BaseAssembler<Role, RolesResource, RolesResponse> {
  toEntitiesFromResponse(response: RolesResponse): Role[] {
    return response.roles.map(resource => this.toEntityFromResource(resource as RolesResource));
  }

  toEntityFromResource(resource: RolesResource): Role {
    return new Role(
      resource.id,
      resource.organizationId,
      resource.name,
      resource.canCreateSites,
      resource.canCreatePeople,
      resource.canConnectDevices,
      resource.deletable
    );
  }

  toResourceFromEntity(entity: Role): RolesResource {
    return {
      id: entity.id,
      organizationId: entity.organizationId,
      name: entity.name,
      canCreateSites: entity.canCreateSites,
      canCreatePeople: entity.canCreatePeople,
      canConnectDevices: entity.canConnectDevices,
      deletable: entity.deletable,
    } as RolesResource;
  }
}