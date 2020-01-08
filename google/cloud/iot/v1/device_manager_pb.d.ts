import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';
import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb';
import * as google_api_resource_pb from '../../../../google/api/resource_pb';
import * as google_cloud_iot_v1_resources_pb from '../../../../google/cloud/iot/v1/resources_pb';
import * as google_iam_v1_iam_policy_pb from '../../../../google/iam/v1/iam_policy_pb';
import * as google_iam_v1_policy_pb from '../../../../google/iam/v1/policy_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_rpc_status_pb from '../../../../google/rpc/status_pb';

export class CreateDeviceRegistryRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getDeviceRegistry(): google_cloud_iot_v1_resources_pb.DeviceRegistry | undefined;
  setDeviceRegistry(value?: google_cloud_iot_v1_resources_pb.DeviceRegistry): void;
  hasDeviceRegistry(): boolean;
  clearDeviceRegistry(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDeviceRegistryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDeviceRegistryRequest): CreateDeviceRegistryRequest.AsObject;
  static serializeBinaryToWriter(message: CreateDeviceRegistryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDeviceRegistryRequest;
  static deserializeBinaryFromReader(message: CreateDeviceRegistryRequest, reader: jspb.BinaryReader): CreateDeviceRegistryRequest;
}

export namespace CreateDeviceRegistryRequest {
  export type AsObject = {
    parent: string,
    deviceRegistry?: google_cloud_iot_v1_resources_pb.DeviceRegistry.AsObject,
  }
}

export class GetDeviceRegistryRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDeviceRegistryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDeviceRegistryRequest): GetDeviceRegistryRequest.AsObject;
  static serializeBinaryToWriter(message: GetDeviceRegistryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDeviceRegistryRequest;
  static deserializeBinaryFromReader(message: GetDeviceRegistryRequest, reader: jspb.BinaryReader): GetDeviceRegistryRequest;
}

export namespace GetDeviceRegistryRequest {
  export type AsObject = {
    name: string,
  }
}

export class DeleteDeviceRegistryRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDeviceRegistryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDeviceRegistryRequest): DeleteDeviceRegistryRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteDeviceRegistryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDeviceRegistryRequest;
  static deserializeBinaryFromReader(message: DeleteDeviceRegistryRequest, reader: jspb.BinaryReader): DeleteDeviceRegistryRequest;
}

export namespace DeleteDeviceRegistryRequest {
  export type AsObject = {
    name: string,
  }
}

export class UpdateDeviceRegistryRequest extends jspb.Message {
  getDeviceRegistry(): google_cloud_iot_v1_resources_pb.DeviceRegistry | undefined;
  setDeviceRegistry(value?: google_cloud_iot_v1_resources_pb.DeviceRegistry): void;
  hasDeviceRegistry(): boolean;
  clearDeviceRegistry(): void;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDeviceRegistryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDeviceRegistryRequest): UpdateDeviceRegistryRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateDeviceRegistryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDeviceRegistryRequest;
  static deserializeBinaryFromReader(message: UpdateDeviceRegistryRequest, reader: jspb.BinaryReader): UpdateDeviceRegistryRequest;
}

export namespace UpdateDeviceRegistryRequest {
  export type AsObject = {
    deviceRegistry?: google_cloud_iot_v1_resources_pb.DeviceRegistry.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class ListDeviceRegistriesRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDeviceRegistriesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDeviceRegistriesRequest): ListDeviceRegistriesRequest.AsObject;
  static serializeBinaryToWriter(message: ListDeviceRegistriesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDeviceRegistriesRequest;
  static deserializeBinaryFromReader(message: ListDeviceRegistriesRequest, reader: jspb.BinaryReader): ListDeviceRegistriesRequest;
}

export namespace ListDeviceRegistriesRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListDeviceRegistriesResponse extends jspb.Message {
  getDeviceRegistriesList(): Array<google_cloud_iot_v1_resources_pb.DeviceRegistry>;
  setDeviceRegistriesList(value: Array<google_cloud_iot_v1_resources_pb.DeviceRegistry>): void;
  clearDeviceRegistriesList(): void;
  addDeviceRegistries(value?: google_cloud_iot_v1_resources_pb.DeviceRegistry, index?: number): google_cloud_iot_v1_resources_pb.DeviceRegistry;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDeviceRegistriesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListDeviceRegistriesResponse): ListDeviceRegistriesResponse.AsObject;
  static serializeBinaryToWriter(message: ListDeviceRegistriesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDeviceRegistriesResponse;
  static deserializeBinaryFromReader(message: ListDeviceRegistriesResponse, reader: jspb.BinaryReader): ListDeviceRegistriesResponse;
}

export namespace ListDeviceRegistriesResponse {
  export type AsObject = {
    deviceRegistriesList: Array<google_cloud_iot_v1_resources_pb.DeviceRegistry.AsObject>,
    nextPageToken: string,
  }
}

export class CreateDeviceRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getDevice(): google_cloud_iot_v1_resources_pb.Device | undefined;
  setDevice(value?: google_cloud_iot_v1_resources_pb.Device): void;
  hasDevice(): boolean;
  clearDevice(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDeviceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDeviceRequest): CreateDeviceRequest.AsObject;
  static serializeBinaryToWriter(message: CreateDeviceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDeviceRequest;
  static deserializeBinaryFromReader(message: CreateDeviceRequest, reader: jspb.BinaryReader): CreateDeviceRequest;
}

export namespace CreateDeviceRequest {
  export type AsObject = {
    parent: string,
    device?: google_cloud_iot_v1_resources_pb.Device.AsObject,
  }
}

export class GetDeviceRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;
  hasFieldMask(): boolean;
  clearFieldMask(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDeviceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDeviceRequest): GetDeviceRequest.AsObject;
  static serializeBinaryToWriter(message: GetDeviceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDeviceRequest;
  static deserializeBinaryFromReader(message: GetDeviceRequest, reader: jspb.BinaryReader): GetDeviceRequest;
}

export namespace GetDeviceRequest {
  export type AsObject = {
    name: string,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateDeviceRequest extends jspb.Message {
  getDevice(): google_cloud_iot_v1_resources_pb.Device | undefined;
  setDevice(value?: google_cloud_iot_v1_resources_pb.Device): void;
  hasDevice(): boolean;
  clearDevice(): void;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDeviceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDeviceRequest): UpdateDeviceRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateDeviceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDeviceRequest;
  static deserializeBinaryFromReader(message: UpdateDeviceRequest, reader: jspb.BinaryReader): UpdateDeviceRequest;
}

export namespace UpdateDeviceRequest {
  export type AsObject = {
    device?: google_cloud_iot_v1_resources_pb.Device.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class DeleteDeviceRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDeviceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDeviceRequest): DeleteDeviceRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteDeviceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDeviceRequest;
  static deserializeBinaryFromReader(message: DeleteDeviceRequest, reader: jspb.BinaryReader): DeleteDeviceRequest;
}

export namespace DeleteDeviceRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListDevicesRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getDeviceNumIdsList(): Array<number>;
  setDeviceNumIdsList(value: Array<number>): void;
  clearDeviceNumIdsList(): void;
  addDeviceNumIds(value: number, index?: number): void;

  getDeviceIdsList(): Array<string>;
  setDeviceIdsList(value: Array<string>): void;
  clearDeviceIdsList(): void;
  addDeviceIds(value: string, index?: number): void;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;
  hasFieldMask(): boolean;
  clearFieldMask(): void;

  getGatewayListOptions(): GatewayListOptions | undefined;
  setGatewayListOptions(value?: GatewayListOptions): void;
  hasGatewayListOptions(): boolean;
  clearGatewayListOptions(): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDevicesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDevicesRequest): ListDevicesRequest.AsObject;
  static serializeBinaryToWriter(message: ListDevicesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDevicesRequest;
  static deserializeBinaryFromReader(message: ListDevicesRequest, reader: jspb.BinaryReader): ListDevicesRequest;
}

export namespace ListDevicesRequest {
  export type AsObject = {
    parent: string,
    deviceNumIdsList: Array<number>,
    deviceIdsList: Array<string>,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    gatewayListOptions?: GatewayListOptions.AsObject,
    pageSize: number,
    pageToken: string,
  }
}

export class GatewayListOptions extends jspb.Message {
  getGatewayType(): google_cloud_iot_v1_resources_pb.GatewayType;
  setGatewayType(value: google_cloud_iot_v1_resources_pb.GatewayType): void;

  getAssociationsGatewayId(): string;
  setAssociationsGatewayId(value: string): void;

  getAssociationsDeviceId(): string;
  setAssociationsDeviceId(value: string): void;

  getFilterCase(): GatewayListOptions.FilterCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GatewayListOptions.AsObject;
  static toObject(includeInstance: boolean, msg: GatewayListOptions): GatewayListOptions.AsObject;
  static serializeBinaryToWriter(message: GatewayListOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GatewayListOptions;
  static deserializeBinaryFromReader(message: GatewayListOptions, reader: jspb.BinaryReader): GatewayListOptions;
}

export namespace GatewayListOptions {
  export type AsObject = {
    gatewayType: google_cloud_iot_v1_resources_pb.GatewayType,
    associationsGatewayId: string,
    associationsDeviceId: string,
  }

  export enum FilterCase { 
    FILTER_NOT_SET = 0,
    GATEWAY_TYPE = 1,
    ASSOCIATIONS_GATEWAY_ID = 2,
    ASSOCIATIONS_DEVICE_ID = 3,
  }
}

export class ListDevicesResponse extends jspb.Message {
  getDevicesList(): Array<google_cloud_iot_v1_resources_pb.Device>;
  setDevicesList(value: Array<google_cloud_iot_v1_resources_pb.Device>): void;
  clearDevicesList(): void;
  addDevices(value?: google_cloud_iot_v1_resources_pb.Device, index?: number): google_cloud_iot_v1_resources_pb.Device;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDevicesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListDevicesResponse): ListDevicesResponse.AsObject;
  static serializeBinaryToWriter(message: ListDevicesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDevicesResponse;
  static deserializeBinaryFromReader(message: ListDevicesResponse, reader: jspb.BinaryReader): ListDevicesResponse;
}

export namespace ListDevicesResponse {
  export type AsObject = {
    devicesList: Array<google_cloud_iot_v1_resources_pb.Device.AsObject>,
    nextPageToken: string,
  }
}

export class ModifyCloudToDeviceConfigRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getVersionToUpdate(): number;
  setVersionToUpdate(value: number): void;

  getBinaryData(): Uint8Array | string;
  getBinaryData_asU8(): Uint8Array;
  getBinaryData_asB64(): string;
  setBinaryData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModifyCloudToDeviceConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ModifyCloudToDeviceConfigRequest): ModifyCloudToDeviceConfigRequest.AsObject;
  static serializeBinaryToWriter(message: ModifyCloudToDeviceConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModifyCloudToDeviceConfigRequest;
  static deserializeBinaryFromReader(message: ModifyCloudToDeviceConfigRequest, reader: jspb.BinaryReader): ModifyCloudToDeviceConfigRequest;
}

export namespace ModifyCloudToDeviceConfigRequest {
  export type AsObject = {
    name: string,
    versionToUpdate: number,
    binaryData: Uint8Array | string,
  }
}

export class ListDeviceConfigVersionsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getNumVersions(): number;
  setNumVersions(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDeviceConfigVersionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDeviceConfigVersionsRequest): ListDeviceConfigVersionsRequest.AsObject;
  static serializeBinaryToWriter(message: ListDeviceConfigVersionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDeviceConfigVersionsRequest;
  static deserializeBinaryFromReader(message: ListDeviceConfigVersionsRequest, reader: jspb.BinaryReader): ListDeviceConfigVersionsRequest;
}

export namespace ListDeviceConfigVersionsRequest {
  export type AsObject = {
    name: string,
    numVersions: number,
  }
}

export class ListDeviceConfigVersionsResponse extends jspb.Message {
  getDeviceConfigsList(): Array<google_cloud_iot_v1_resources_pb.DeviceConfig>;
  setDeviceConfigsList(value: Array<google_cloud_iot_v1_resources_pb.DeviceConfig>): void;
  clearDeviceConfigsList(): void;
  addDeviceConfigs(value?: google_cloud_iot_v1_resources_pb.DeviceConfig, index?: number): google_cloud_iot_v1_resources_pb.DeviceConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDeviceConfigVersionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListDeviceConfigVersionsResponse): ListDeviceConfigVersionsResponse.AsObject;
  static serializeBinaryToWriter(message: ListDeviceConfigVersionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDeviceConfigVersionsResponse;
  static deserializeBinaryFromReader(message: ListDeviceConfigVersionsResponse, reader: jspb.BinaryReader): ListDeviceConfigVersionsResponse;
}

export namespace ListDeviceConfigVersionsResponse {
  export type AsObject = {
    deviceConfigsList: Array<google_cloud_iot_v1_resources_pb.DeviceConfig.AsObject>,
  }
}

export class ListDeviceStatesRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getNumStates(): number;
  setNumStates(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDeviceStatesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDeviceStatesRequest): ListDeviceStatesRequest.AsObject;
  static serializeBinaryToWriter(message: ListDeviceStatesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDeviceStatesRequest;
  static deserializeBinaryFromReader(message: ListDeviceStatesRequest, reader: jspb.BinaryReader): ListDeviceStatesRequest;
}

export namespace ListDeviceStatesRequest {
  export type AsObject = {
    name: string,
    numStates: number,
  }
}

export class ListDeviceStatesResponse extends jspb.Message {
  getDeviceStatesList(): Array<google_cloud_iot_v1_resources_pb.DeviceState>;
  setDeviceStatesList(value: Array<google_cloud_iot_v1_resources_pb.DeviceState>): void;
  clearDeviceStatesList(): void;
  addDeviceStates(value?: google_cloud_iot_v1_resources_pb.DeviceState, index?: number): google_cloud_iot_v1_resources_pb.DeviceState;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDeviceStatesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListDeviceStatesResponse): ListDeviceStatesResponse.AsObject;
  static serializeBinaryToWriter(message: ListDeviceStatesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDeviceStatesResponse;
  static deserializeBinaryFromReader(message: ListDeviceStatesResponse, reader: jspb.BinaryReader): ListDeviceStatesResponse;
}

export namespace ListDeviceStatesResponse {
  export type AsObject = {
    deviceStatesList: Array<google_cloud_iot_v1_resources_pb.DeviceState.AsObject>,
  }
}

export class SendCommandToDeviceRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getBinaryData(): Uint8Array | string;
  getBinaryData_asU8(): Uint8Array;
  getBinaryData_asB64(): string;
  setBinaryData(value: Uint8Array | string): void;

  getSubfolder(): string;
  setSubfolder(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendCommandToDeviceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendCommandToDeviceRequest): SendCommandToDeviceRequest.AsObject;
  static serializeBinaryToWriter(message: SendCommandToDeviceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendCommandToDeviceRequest;
  static deserializeBinaryFromReader(message: SendCommandToDeviceRequest, reader: jspb.BinaryReader): SendCommandToDeviceRequest;
}

export namespace SendCommandToDeviceRequest {
  export type AsObject = {
    name: string,
    binaryData: Uint8Array | string,
    subfolder: string,
  }
}

export class SendCommandToDeviceResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendCommandToDeviceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SendCommandToDeviceResponse): SendCommandToDeviceResponse.AsObject;
  static serializeBinaryToWriter(message: SendCommandToDeviceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendCommandToDeviceResponse;
  static deserializeBinaryFromReader(message: SendCommandToDeviceResponse, reader: jspb.BinaryReader): SendCommandToDeviceResponse;
}

export namespace SendCommandToDeviceResponse {
  export type AsObject = {
  }
}

export class BindDeviceToGatewayRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getGatewayId(): string;
  setGatewayId(value: string): void;

  getDeviceId(): string;
  setDeviceId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BindDeviceToGatewayRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BindDeviceToGatewayRequest): BindDeviceToGatewayRequest.AsObject;
  static serializeBinaryToWriter(message: BindDeviceToGatewayRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BindDeviceToGatewayRequest;
  static deserializeBinaryFromReader(message: BindDeviceToGatewayRequest, reader: jspb.BinaryReader): BindDeviceToGatewayRequest;
}

export namespace BindDeviceToGatewayRequest {
  export type AsObject = {
    parent: string,
    gatewayId: string,
    deviceId: string,
  }
}

export class BindDeviceToGatewayResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BindDeviceToGatewayResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BindDeviceToGatewayResponse): BindDeviceToGatewayResponse.AsObject;
  static serializeBinaryToWriter(message: BindDeviceToGatewayResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BindDeviceToGatewayResponse;
  static deserializeBinaryFromReader(message: BindDeviceToGatewayResponse, reader: jspb.BinaryReader): BindDeviceToGatewayResponse;
}

export namespace BindDeviceToGatewayResponse {
  export type AsObject = {
  }
}

export class UnbindDeviceFromGatewayRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getGatewayId(): string;
  setGatewayId(value: string): void;

  getDeviceId(): string;
  setDeviceId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnbindDeviceFromGatewayRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UnbindDeviceFromGatewayRequest): UnbindDeviceFromGatewayRequest.AsObject;
  static serializeBinaryToWriter(message: UnbindDeviceFromGatewayRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnbindDeviceFromGatewayRequest;
  static deserializeBinaryFromReader(message: UnbindDeviceFromGatewayRequest, reader: jspb.BinaryReader): UnbindDeviceFromGatewayRequest;
}

export namespace UnbindDeviceFromGatewayRequest {
  export type AsObject = {
    parent: string,
    gatewayId: string,
    deviceId: string,
  }
}

export class UnbindDeviceFromGatewayResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnbindDeviceFromGatewayResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UnbindDeviceFromGatewayResponse): UnbindDeviceFromGatewayResponse.AsObject;
  static serializeBinaryToWriter(message: UnbindDeviceFromGatewayResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnbindDeviceFromGatewayResponse;
  static deserializeBinaryFromReader(message: UnbindDeviceFromGatewayResponse, reader: jspb.BinaryReader): UnbindDeviceFromGatewayResponse;
}

export namespace UnbindDeviceFromGatewayResponse {
  export type AsObject = {
  }
}

