import {BaseResource, BaseResponse} from '../../shared/infrastructure/base-response';

export interface AccessEventsResource extends BaseResource {
  id: number;
  location: string;
  person: string;
  status: string;
  date: string;
}

export interface AccessEventsResponse extends BaseResponse {
  accessEvents: AccessEventsResource[];
}
