import {BaseResource, BaseResponse} from '../../shared/infrastructure/base-response';

export interface RolesResource extends BaseResource {
  id: number;
  name: string;
}

export interface RolesResponse extends BaseResponse {
  roles: RolesResource[];
}
