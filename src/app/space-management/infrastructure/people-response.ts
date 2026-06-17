import {BaseResource, BaseResponse} from '../../shared/infrastructure/base-response';

export interface PeopleResource extends BaseResource {
  id: number;
  organizationId: number;
  firstName: string;
  lastName: string;
  identityDocument: string;
}

export interface PeopleResponse extends BaseResponse {
  people: PeopleResource[];
}