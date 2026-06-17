import {BaseAssembler} from '../../shared/infrastructure/base-assembler';
import {Administrator} from '../domain/model/administrator.entity';
import {AdministratorsResource, AdministratorsResponse} from './administrators-response';

export class AdministratorAssembler implements BaseAssembler<Administrator, AdministratorsResource, AdministratorsResponse> {
  toEntitiesFromResponse(response: AdministratorsResponse): Administrator[] {
    return response.administrators.map(resource => this.toEntityFromResource(resource as AdministratorsResource));
  }

  toEntityFromResource(resource: AdministratorsResource): Administrator {
    return new Administrator(
      resource.userId,
      resource.email,
      resource.firstName,
      resource.lastName,
      resource.roleId,
      resource.roleName
    );
  }

  toResourceFromEntity(entity: Administrator): AdministratorsResource {
    return {
      id: entity.id,
      userId: entity.id,
      email: entity.email,
      firstName: entity.firstName,
      lastName: entity.lastName,
      roleId: entity.roleId,
      roleName: entity.roleName,
    } as AdministratorsResource;
  }
}