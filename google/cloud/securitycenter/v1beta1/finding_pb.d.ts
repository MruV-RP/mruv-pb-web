import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_cloud_securitycenter_v1beta1_security_marks_pb from '../../../../google/cloud/securitycenter/v1beta1/security_marks_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class Finding extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getParent(): string;
  setParent(value: string): void;

  getResourceName(): string;
  setResourceName(value: string): void;

  getState(): Finding.State;
  setState(value: Finding.State): void;

  getCategory(): string;
  setCategory(value: string): void;

  getExternalUri(): string;
  setExternalUri(value: string): void;

  getSourcePropertiesMap(): jspb.Map<string, google_protobuf_struct_pb.Value>;
  clearSourcePropertiesMap(): void;

  getSecurityMarks(): google_cloud_securitycenter_v1beta1_security_marks_pb.SecurityMarks | undefined;
  setSecurityMarks(value?: google_cloud_securitycenter_v1beta1_security_marks_pb.SecurityMarks): void;
  hasSecurityMarks(): boolean;
  clearSecurityMarks(): void;

  getEventTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEventTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasEventTime(): boolean;
  clearEventTime(): void;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreateTime(): boolean;
  clearCreateTime(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Finding.AsObject;
  static toObject(includeInstance: boolean, msg: Finding): Finding.AsObject;
  static serializeBinaryToWriter(message: Finding, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Finding;
  static deserializeBinaryFromReader(message: Finding, reader: jspb.BinaryReader): Finding;
}

export namespace Finding {
  export type AsObject = {
    name: string,
    parent: string,
    resourceName: string,
    state: Finding.State,
    category: string,
    externalUri: string,
    sourcePropertiesMap: Array<[string, google_protobuf_struct_pb.Value.AsObject]>,
    securityMarks?: google_cloud_securitycenter_v1beta1_security_marks_pb.SecurityMarks.AsObject,
    eventTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export enum State { 
    STATE_UNSPECIFIED = 0,
    ACTIVE = 1,
    INACTIVE = 2,
  }
}

