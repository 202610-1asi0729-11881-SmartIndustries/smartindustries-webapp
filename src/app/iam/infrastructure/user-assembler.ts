import { User } from '../domain/model/user.entity';
import { AuthenticatedUser } from '../domain/model/authenticated-user.entity';
import { UserResource } from './user-resource';
import { AuthenticatedUserResource } from './authenticated-user-resource';

export class UserAssembler {
  toUserFromResource(resource: UserResource): User {
    return new User(resource.id, resource.firstName, resource.lastName, resource.email);
  }

  toAuthenticatedUserFromResource(resource: AuthenticatedUserResource): AuthenticatedUser {
    return new AuthenticatedUser(resource.id, resource.firstName, resource.lastName, resource.token);
  }
}
