import {BaseResource, BaseResponse} from '../../shared/infrastructure/base-response';

export interface AdministratorsResource extends BaseResource {
  userId: number;
  email: string;
  firstName: string;
  lastName: string;
  roleId: number;
  roleName: string;
}

export interface AdministratorsResponse extends BaseResponse {
  administrators: AdministratorsResource[];
}