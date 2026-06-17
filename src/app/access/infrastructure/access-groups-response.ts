import {BaseResource, BaseResponse} from '../../shared/infrastructure/base-response';

export interface AccessGroupsResource extends BaseResource {
  id: number;
  organizationId: number;
  name: string;
  description: string;
}

export interface AccessGroupsResponse extends BaseResponse {
  accessGroups: AccessGroupsResource[];
}