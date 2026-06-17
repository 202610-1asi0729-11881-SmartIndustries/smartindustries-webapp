import {BaseResource, BaseResponse} from '../../shared/infrastructure/base-response';

export interface RolesResource extends BaseResource {
  id: number;
  organizationId: number;
  name: string;
  canCreateSites: boolean;
  canCreatePeople: boolean;
  canConnectDevices: boolean;
  deletable: boolean;
}

export interface RolesResponse extends BaseResponse {
  roles: RolesResource[];
}