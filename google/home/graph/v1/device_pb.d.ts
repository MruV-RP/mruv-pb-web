import * as jspb from "google-protobuf"

import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';

export class Device extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getType(): string;
  setType(value: string): void;

  getTraitsList(): Array<string>;
  setTraitsList(value: Array<string>): void;
  clearTraitsList(): void;
  addTraits(value: string, index?: number): void;

  getName(): DeviceNames | undefined;
  setName(value?: DeviceNames): void;
  hasName(): boolean;
  clearName(): void;

  getWillReportState(): boolean;
  setWillReportState(value: boolean): void;

  getRoomHint(): string;
  setRoomHint(value: string): void;

  getStructureHint(): string;
  setStructureHint(value: string): void;

  getDeviceInfo(): DeviceInfo | undefined;
  setDeviceInfo(value?: DeviceInfo): void;
  hasDeviceInfo(): boolean;
  clearDeviceInfo(): void;

  getAttributes(): google_protobuf_struct_pb.Struct | undefined;
  setAttributes(value?: google_protobuf_struct_pb.Struct): void;
  hasAttributes(): boolean;
  clearAttributes(): void;

  getCustomData(): string;
  setCustomData(value: string): void;

  getOtherDeviceIdsList(): Array<AgentOtherDeviceId>;
  setOtherDeviceIdsList(value: Array<AgentOtherDeviceId>): void;
  clearOtherDeviceIdsList(): void;
  addOtherDeviceIds(value?: AgentOtherDeviceId, index?: number): AgentOtherDeviceId;

  getNotificationSupportedByAgent(): boolean;
  setNotificationSupportedByAgent(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Device.AsObject;
  static toObject(includeInstance: boolean, msg: Device): Device.AsObject;
  static serializeBinaryToWriter(message: Device, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Device;
  static deserializeBinaryFromReader(message: Device, reader: jspb.BinaryReader): Device;
}

export namespace Device {
  export type AsObject = {
    id: string,
    type: string,
    traitsList: Array<string>,
    name?: DeviceNames.AsObject,
    willReportState: boolean,
    roomHint: string,
    structureHint: string,
    deviceInfo?: DeviceInfo.AsObject,
    attributes?: google_protobuf_struct_pb.Struct.AsObject,
    customData: string,
    otherDeviceIdsList: Array<AgentOtherDeviceId.AsObject>,
    notificationSupportedByAgent: boolean,
  }
}

export class DeviceNames extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getNicknamesList(): Array<string>;
  setNicknamesList(value: Array<string>): void;
  clearNicknamesList(): void;
  addNicknames(value: string, index?: number): void;

  getDefaultNamesList(): Array<string>;
  setDefaultNamesList(value: Array<string>): void;
  clearDefaultNamesList(): void;
  addDefaultNames(value: string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceNames.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceNames): DeviceNames.AsObject;
  static serializeBinaryToWriter(message: DeviceNames, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceNames;
  static deserializeBinaryFromReader(message: DeviceNames, reader: jspb.BinaryReader): DeviceNames;
}

export namespace DeviceNames {
  export type AsObject = {
    name: string,
    nicknamesList: Array<string>,
    defaultNamesList: Array<string>,
  }
}

export class DeviceInfo extends jspb.Message {
  getManufacturer(): string;
  setManufacturer(value: string): void;

  getModel(): string;
  setModel(value: string): void;

  getHwVersion(): string;
  setHwVersion(value: string): void;

  getSwVersion(): string;
  setSwVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceInfo.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceInfo): DeviceInfo.AsObject;
  static serializeBinaryToWriter(message: DeviceInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceInfo;
  static deserializeBinaryFromReader(message: DeviceInfo, reader: jspb.BinaryReader): DeviceInfo;
}

export namespace DeviceInfo {
  export type AsObject = {
    manufacturer: string,
    model: string,
    hwVersion: string,
    swVersion: string,
  }
}

export class AgentOtherDeviceId extends jspb.Message {
  getAgentId(): string;
  setAgentId(value: string): void;

  getDeviceId(): string;
  setDeviceId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentOtherDeviceId.AsObject;
  static toObject(includeInstance: boolean, msg: AgentOtherDeviceId): AgentOtherDeviceId.AsObject;
  static serializeBinaryToWriter(message: AgentOtherDeviceId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentOtherDeviceId;
  static deserializeBinaryFromReader(message: AgentOtherDeviceId, reader: jspb.BinaryReader): AgentOtherDeviceId;
}

export namespace AgentOtherDeviceId {
  export type AsObject = {
    agentId: string,
    deviceId: string,
  }
}

