import {BaseResource, BaseResponse} from '../../shared/infrastructure/base-response';

export interface DevicesResource extends BaseResource {
  id: number;
  siteId: number;
  siteName: string;
  siteDescription: string;
  name: string;
  status: string;
  mode: string;
}

export interface DevicesResponse extends BaseResponse {
  devices: DevicesResource[];
}