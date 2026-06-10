import {BaseAssembler} from '../../shared/infrastructure/base-assembler';
import {Device} from '../domain/model/device.entity';
import {DevicesResource, DevicesResponse} from './devices-response';

export class DeviceAssembler implements BaseAssembler<Device, DevicesResource, DevicesResponse> {
  toEntitiesFromResponse(response: DevicesResponse): Device[] {
    return response.devices.map(resource => this.toEntityFromResource(resource as DevicesResource));
  }

  toEntityFromResource(resource: DevicesResource): Device {
    return new Device(resource.id, resource.name, resource.site, resource.mode, resource.status);
  }

  toResourceFromEntity(entity: Device): DevicesResource {
    return {id: entity.id, name: entity.name, site: entity.site, mode: entity.mode, status: entity.status} as DevicesResource;
  }
}
