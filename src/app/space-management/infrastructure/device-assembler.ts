import {BaseAssembler} from '../../shared/infrastructure/base-assembler';
import {Device} from '../domain/model/device.entity';
import {DevicesResource, DevicesResponse} from './devices-response';

export class DeviceAssembler implements BaseAssembler<Device, DevicesResource, DevicesResponse> {
  toEntitiesFromResponse(response: DevicesResponse): Device[] {
    return response.devices.map(resource => this.toEntityFromResource(resource as DevicesResource));
  }

  toEntityFromResource(resource: DevicesResource): Device {
    return new Device(
      resource.id,
      resource.siteId,
      resource.siteName,
      resource.siteDescription,
      resource.name,
      this.formatEnum(resource.status),
      this.formatEnum(resource.mode)
    );
  }

  private formatEnum(value: string): string {
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  }

  toResourceFromEntity(entity: Device): DevicesResource {
    return {
      id: entity.id,
      siteId: entity.siteId,
      siteName: entity.siteName,
      siteDescription: entity.siteDescription,
      name: entity.name,
      status: entity.status,
      mode: entity.mode,
    } as DevicesResource;
  }
}