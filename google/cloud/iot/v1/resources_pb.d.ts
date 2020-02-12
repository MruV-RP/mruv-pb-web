import * as jspb from "google-protobuf"

import * as google_api_resource_pb from '../../../../google/api/resource_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_rpc_status_pb from '../../../../google/rpc/status_pb';

export class Device extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getNumId(): number;
  setNumId(value: number): void;

  getCredentialsList(): Array<DeviceCredential>;
  setCredentialsList(value: Array<DeviceCredential>): void;
  clearCredentialsList(): void;
  addCredentials(value?: DeviceCredential, index?: number): DeviceCredential;

  getLastHeartbeatTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastHeartbeatTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasLastHeartbeatTime(): boolean;
  clearLastHeartbeatTime(): void;

  getLastEventTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastEventTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasLastEventTime(): boolean;
  clearLastEventTime(): void;

  getLastStateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastStateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasLastStateTime(): boolean;
  clearLastStateTime(): void;

  getLastConfigAckTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastConfigAckTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasLastConfigAckTime(): boolean;
  clearLastConfigAckTime(): void;

  getLastConfigSendTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastConfigSendTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasLastConfigSendTime(): boolean;
  clearLastConfigSendTime(): void;

  getBlocked(): boolean;
  setBlocked(value: boolean): void;

  getLastErrorTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastErrorTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasLastErrorTime(): boolean;
  clearLastErrorTime(): void;

  getLastErrorStatus(): google_rpc_status_pb.Status | undefined;
  setLastErrorStatus(value?: google_rpc_status_pb.Status): void;
  hasLastErrorStatus(): boolean;
  clearLastErrorStatus(): void;

  getConfig(): DeviceConfig | undefined;
  setConfig(value?: DeviceConfig): void;
  hasConfig(): boolean;
  clearConfig(): void;

  getState(): DeviceState | undefined;
  setState(value?: DeviceState): void;
  hasState(): boolean;
  clearState(): void;

  getLogLevel(): LogLevel;
  setLogLevel(value: LogLevel): void;

  getMetadataMap(): jspb.Map<string, string>;
  clearMetadataMap(): void;

  getGatewayConfig(): GatewayConfig | undefined;
  setGatewayConfig(value?: GatewayConfig): void;
  hasGatewayConfig(): boolean;
  clearGatewayConfig(): void;

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
    name: string,
    numId: number,
    credentialsList: Array<DeviceCredential.AsObject>,
    lastHeartbeatTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastEventTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastStateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastConfigAckTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastConfigSendTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    blocked: boolean,
    lastErrorTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastErrorStatus?: google_rpc_status_pb.Status.AsObject,
    config?: DeviceConfig.AsObject,
    state?: DeviceState.AsObject,
    logLevel: LogLevel,
    metadataMap: Array<[string, string]>,
    gatewayConfig?: GatewayConfig.AsObject,
  }
}

export class GatewayConfig extends jspb.Message {
  getGatewayType(): GatewayType;
  setGatewayType(value: GatewayType): void;

  getGatewayAuthMethod(): GatewayAuthMethod;
  setGatewayAuthMethod(value: GatewayAuthMethod): void;

  getLastAccessedGatewayId(): string;
  setLastAccessedGatewayId(value: string): void;

  getLastAccessedGatewayTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastAccessedGatewayTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasLastAccessedGatewayTime(): boolean;
  clearLastAccessedGatewayTime(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GatewayConfig.AsObject;
  static toObject(includeInstance: boolean, msg: GatewayConfig): GatewayConfig.AsObject;
  static serializeBinaryToWriter(message: GatewayConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GatewayConfig;
  static deserializeBinaryFromReader(message: GatewayConfig, reader: jspb.BinaryReader): GatewayConfig;
}

export namespace GatewayConfig {
  export type AsObject = {
    gatewayType: GatewayType,
    gatewayAuthMethod: GatewayAuthMethod,
    lastAccessedGatewayId: string,
    lastAccessedGatewayTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class DeviceRegistry extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getEventNotificationConfigsList(): Array<EventNotificationConfig>;
  setEventNotificationConfigsList(value: Array<EventNotificationConfig>): void;
  clearEventNotificationConfigsList(): void;
  addEventNotificationConfigs(value?: EventNotificationConfig, index?: number): EventNotificationConfig;

  getStateNotificationConfig(): StateNotificationConfig | undefined;
  setStateNotificationConfig(value?: StateNotificationConfig): void;
  hasStateNotificationConfig(): boolean;
  clearStateNotificationConfig(): void;

  getMqttConfig(): MqttConfig | undefined;
  setMqttConfig(value?: MqttConfig): void;
  hasMqttConfig(): boolean;
  clearMqttConfig(): void;

  getHttpConfig(): HttpConfig | undefined;
  setHttpConfig(value?: HttpConfig): void;
  hasHttpConfig(): boolean;
  clearHttpConfig(): void;

  getLogLevel(): LogLevel;
  setLogLevel(value: LogLevel): void;

  getCredentialsList(): Array<RegistryCredential>;
  setCredentialsList(value: Array<RegistryCredential>): void;
  clearCredentialsList(): void;
  addCredentials(value?: RegistryCredential, index?: number): RegistryCredential;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceRegistry.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceRegistry): DeviceRegistry.AsObject;
  static serializeBinaryToWriter(message: DeviceRegistry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceRegistry;
  static deserializeBinaryFromReader(message: DeviceRegistry, reader: jspb.BinaryReader): DeviceRegistry;
}

export namespace DeviceRegistry {
  export type AsObject = {
    id: string,
    name: string,
    eventNotificationConfigsList: Array<EventNotificationConfig.AsObject>,
    stateNotificationConfig?: StateNotificationConfig.AsObject,
    mqttConfig?: MqttConfig.AsObject,
    httpConfig?: HttpConfig.AsObject,
    logLevel: LogLevel,
    credentialsList: Array<RegistryCredential.AsObject>,
  }
}

export class MqttConfig extends jspb.Message {
  getMqttEnabledState(): MqttState;
  setMqttEnabledState(value: MqttState): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MqttConfig.AsObject;
  static toObject(includeInstance: boolean, msg: MqttConfig): MqttConfig.AsObject;
  static serializeBinaryToWriter(message: MqttConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MqttConfig;
  static deserializeBinaryFromReader(message: MqttConfig, reader: jspb.BinaryReader): MqttConfig;
}

export namespace MqttConfig {
  export type AsObject = {
    mqttEnabledState: MqttState,
  }
}

export class HttpConfig extends jspb.Message {
  getHttpEnabledState(): HttpState;
  setHttpEnabledState(value: HttpState): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HttpConfig.AsObject;
  static toObject(includeInstance: boolean, msg: HttpConfig): HttpConfig.AsObject;
  static serializeBinaryToWriter(message: HttpConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HttpConfig;
  static deserializeBinaryFromReader(message: HttpConfig, reader: jspb.BinaryReader): HttpConfig;
}

export namespace HttpConfig {
  export type AsObject = {
    httpEnabledState: HttpState,
  }
}

export class EventNotificationConfig extends jspb.Message {
  getSubfolderMatches(): string;
  setSubfolderMatches(value: string): void;

  getPubsubTopicName(): string;
  setPubsubTopicName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventNotificationConfig.AsObject;
  static toObject(includeInstance: boolean, msg: EventNotificationConfig): EventNotificationConfig.AsObject;
  static serializeBinaryToWriter(message: EventNotificationConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventNotificationConfig;
  static deserializeBinaryFromReader(message: EventNotificationConfig, reader: jspb.BinaryReader): EventNotificationConfig;
}

export namespace EventNotificationConfig {
  export type AsObject = {
    subfolderMatches: string,
    pubsubTopicName: string,
  }
}

export class StateNotificationConfig extends jspb.Message {
  getPubsubTopicName(): string;
  setPubsubTopicName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StateNotificationConfig.AsObject;
  static toObject(includeInstance: boolean, msg: StateNotificationConfig): StateNotificationConfig.AsObject;
  static serializeBinaryToWriter(message: StateNotificationConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StateNotificationConfig;
  static deserializeBinaryFromReader(message: StateNotificationConfig, reader: jspb.BinaryReader): StateNotificationConfig;
}

export namespace StateNotificationConfig {
  export type AsObject = {
    pubsubTopicName: string,
  }
}

export class RegistryCredential extends jspb.Message {
  getPublicKeyCertificate(): PublicKeyCertificate | undefined;
  setPublicKeyCertificate(value?: PublicKeyCertificate): void;
  hasPublicKeyCertificate(): boolean;
  clearPublicKeyCertificate(): void;

  getCredentialCase(): RegistryCredential.CredentialCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegistryCredential.AsObject;
  static toObject(includeInstance: boolean, msg: RegistryCredential): RegistryCredential.AsObject;
  static serializeBinaryToWriter(message: RegistryCredential, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegistryCredential;
  static deserializeBinaryFromReader(message: RegistryCredential, reader: jspb.BinaryReader): RegistryCredential;
}

export namespace RegistryCredential {
  export type AsObject = {
    publicKeyCertificate?: PublicKeyCertificate.AsObject,
  }

  export enum CredentialCase { 
    CREDENTIAL_NOT_SET = 0,
    PUBLIC_KEY_CERTIFICATE = 1,
  }
}

export class X509CertificateDetails extends jspb.Message {
  getIssuer(): string;
  setIssuer(value: string): void;

  getSubject(): string;
  setSubject(value: string): void;

  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasStartTime(): boolean;
  clearStartTime(): void;

  getExpiryTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpiryTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasExpiryTime(): boolean;
  clearExpiryTime(): void;

  getSignatureAlgorithm(): string;
  setSignatureAlgorithm(value: string): void;

  getPublicKeyType(): string;
  setPublicKeyType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): X509CertificateDetails.AsObject;
  static toObject(includeInstance: boolean, msg: X509CertificateDetails): X509CertificateDetails.AsObject;
  static serializeBinaryToWriter(message: X509CertificateDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): X509CertificateDetails;
  static deserializeBinaryFromReader(message: X509CertificateDetails, reader: jspb.BinaryReader): X509CertificateDetails;
}

export namespace X509CertificateDetails {
  export type AsObject = {
    issuer: string,
    subject: string,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    expiryTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    signatureAlgorithm: string,
    publicKeyType: string,
  }
}

export class PublicKeyCertificate extends jspb.Message {
  getFormat(): PublicKeyCertificateFormat;
  setFormat(value: PublicKeyCertificateFormat): void;

  getCertificate(): string;
  setCertificate(value: string): void;

  getX509Details(): X509CertificateDetails | undefined;
  setX509Details(value?: X509CertificateDetails): void;
  hasX509Details(): boolean;
  clearX509Details(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicKeyCertificate.AsObject;
  static toObject(includeInstance: boolean, msg: PublicKeyCertificate): PublicKeyCertificate.AsObject;
  static serializeBinaryToWriter(message: PublicKeyCertificate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicKeyCertificate;
  static deserializeBinaryFromReader(message: PublicKeyCertificate, reader: jspb.BinaryReader): PublicKeyCertificate;
}

export namespace PublicKeyCertificate {
  export type AsObject = {
    format: PublicKeyCertificateFormat,
    certificate: string,
    x509Details?: X509CertificateDetails.AsObject,
  }
}

export class DeviceCredential extends jspb.Message {
  getPublicKey(): PublicKeyCredential | undefined;
  setPublicKey(value?: PublicKeyCredential): void;
  hasPublicKey(): boolean;
  clearPublicKey(): void;

  getExpirationTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpirationTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasExpirationTime(): boolean;
  clearExpirationTime(): void;

  getCredentialCase(): DeviceCredential.CredentialCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceCredential.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceCredential): DeviceCredential.AsObject;
  static serializeBinaryToWriter(message: DeviceCredential, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceCredential;
  static deserializeBinaryFromReader(message: DeviceCredential, reader: jspb.BinaryReader): DeviceCredential;
}

export namespace DeviceCredential {
  export type AsObject = {
    publicKey?: PublicKeyCredential.AsObject,
    expirationTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export enum CredentialCase { 
    CREDENTIAL_NOT_SET = 0,
    PUBLIC_KEY = 2,
  }
}

export class PublicKeyCredential extends jspb.Message {
  getFormat(): PublicKeyFormat;
  setFormat(value: PublicKeyFormat): void;

  getKey(): string;
  setKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicKeyCredential.AsObject;
  static toObject(includeInstance: boolean, msg: PublicKeyCredential): PublicKeyCredential.AsObject;
  static serializeBinaryToWriter(message: PublicKeyCredential, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicKeyCredential;
  static deserializeBinaryFromReader(message: PublicKeyCredential, reader: jspb.BinaryReader): PublicKeyCredential;
}

export namespace PublicKeyCredential {
  export type AsObject = {
    format: PublicKeyFormat,
    key: string,
  }
}

export class DeviceConfig extends jspb.Message {
  getVersion(): number;
  setVersion(value: number): void;

  getCloudUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCloudUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCloudUpdateTime(): boolean;
  clearCloudUpdateTime(): void;

  getDeviceAckTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeviceAckTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasDeviceAckTime(): boolean;
  clearDeviceAckTime(): void;

  getBinaryData(): Uint8Array | string;
  getBinaryData_asU8(): Uint8Array;
  getBinaryData_asB64(): string;
  setBinaryData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceConfig.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceConfig): DeviceConfig.AsObject;
  static serializeBinaryToWriter(message: DeviceConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceConfig;
  static deserializeBinaryFromReader(message: DeviceConfig, reader: jspb.BinaryReader): DeviceConfig;
}

export namespace DeviceConfig {
  export type AsObject = {
    version: number,
    cloudUpdateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deviceAckTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    binaryData: Uint8Array | string,
  }
}

export class DeviceState extends jspb.Message {
  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasUpdateTime(): boolean;
  clearUpdateTime(): void;

  getBinaryData(): Uint8Array | string;
  getBinaryData_asU8(): Uint8Array;
  getBinaryData_asB64(): string;
  setBinaryData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceState.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceState): DeviceState.AsObject;
  static serializeBinaryToWriter(message: DeviceState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceState;
  static deserializeBinaryFromReader(message: DeviceState, reader: jspb.BinaryReader): DeviceState;
}

export namespace DeviceState {
  export type AsObject = {
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    binaryData: Uint8Array | string,
  }
}

export enum MqttState { 
  MQTT_STATE_UNSPECIFIED = 0,
  MQTT_ENABLED = 1,
  MQTT_DISABLED = 2,
}
export enum HttpState { 
  HTTP_STATE_UNSPECIFIED = 0,
  HTTP_ENABLED = 1,
  HTTP_DISABLED = 2,
}
export enum LogLevel { 
  LOG_LEVEL_UNSPECIFIED = 0,
  NONE = 10,
  ERROR = 20,
  INFO = 30,
  DEBUG = 40,
}
export enum GatewayType { 
  GATEWAY_TYPE_UNSPECIFIED = 0,
  GATEWAY = 1,
  NON_GATEWAY = 2,
}
export enum GatewayAuthMethod { 
  GATEWAY_AUTH_METHOD_UNSPECIFIED = 0,
  ASSOCIATION_ONLY = 1,
  DEVICE_AUTH_TOKEN_ONLY = 2,
  ASSOCIATION_AND_DEVICE_AUTH_TOKEN = 3,
}
export enum PublicKeyCertificateFormat { 
  UNSPECIFIED_PUBLIC_KEY_CERTIFICATE_FORMAT = 0,
  X509_CERTIFICATE_PEM = 1,
}
export enum PublicKeyFormat { 
  UNSPECIFIED_PUBLIC_KEY_FORMAT = 0,
  RSA_PEM = 3,
  RSA_X509_PEM = 1,
  ES256_PEM = 2,
  ES256_X509_PEM = 4,
}
