import {BaseResource, BaseResponse} from '../../shared/infrastructure/base-response';

export interface AdministratorsResource extends BaseResource {
  id: number;
  name: string;
  role: string;
  status: string;
}

export interface AdministratorsResponse extends BaseResponse {
  administrators: AdministratorsResource[];
}
