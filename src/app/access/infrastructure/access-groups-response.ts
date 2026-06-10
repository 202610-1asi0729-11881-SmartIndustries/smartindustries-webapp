import {BaseResource, BaseResponse} from '../../shared/infrastructure/base-response';

export interface AccessGroupsResource extends BaseResource {
  id: number;
  name: string;
}

export interface AccessGroupsResponse extends BaseResponse {
  accessGroups: AccessGroupsResource[];
}
