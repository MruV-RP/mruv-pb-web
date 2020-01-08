import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_cloud_securitycenter_v1_security_marks_pb from '../../../../google/cloud/securitycenter/v1/security_marks_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class Asset extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getSecurityCenterProperties(): Asset.SecurityCenterProperties | undefined;
  setSecurityCenterProperties(value?: Asset.SecurityCenterProperties): void;
  hasSecurityCenterProperties(): boolean;
  clearSecurityCenterProperties(): void;

  getResourcePropertiesMap(): jspb.Map<string, google_protobuf_struct_pb.Value>;
  clearResourcePropertiesMap(): void;

  getSecurityMarks(): google_cloud_securitycenter_v1_security_marks_pb.SecurityMarks | undefined;
  setSecurityMarks(value?: google_cloud_securitycenter_v1_security_marks_pb.SecurityMarks): void;
  hasSecurityMarks(): boolean;
  clearSecurityMarks(): void;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreateTime(): boolean;
  clearCreateTime(): void;

  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasUpdateTime(): boolean;
  clearUpdateTime(): void;

  getIamPolicy(): Asset.IamPolicy | undefined;
  setIamPolicy(value?: Asset.IamPolicy): void;
  hasIamPolicy(): boolean;
  clearIamPolicy(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Asset.AsObject;
  static toObject(includeInstance: boolean, msg: Asset): Asset.AsObject;
  static serializeBinaryToWriter(message: Asset, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Asset;
  static deserializeBinaryFromReader(message: Asset, reader: jspb.BinaryReader): Asset;
}

export namespace Asset {
  export type AsObject = {
    name: string,
    securityCenterProperties?: Asset.SecurityCenterProperties.AsObject,
    resourcePropertiesMap: Array<[string, google_protobuf_struct_pb.Value.AsObject]>,
    securityMarks?: google_cloud_securitycenter_v1_security_marks_pb.SecurityMarks.AsObject,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    iamPolicy?: Asset.IamPolicy.AsObject,
  }

  export class SecurityCenterProperties extends jspb.Message {
    getResourceName(): string;
    setResourceName(value: string): void;

    getResourceType(): string;
    setResourceType(value: string): void;

    getResourceParent(): string;
    setResourceParent(value: string): void;

    getResourceProject(): string;
    setResourceProject(value: string): void;

    getResourceOwnersList(): Array<string>;
    setResourceOwnersList(value: Array<string>): void;
    clearResourceOwnersList(): void;
    addResourceOwners(value: string, index?: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SecurityCenterProperties.AsObject;
    static toObject(includeInstance: boolean, msg: SecurityCenterProperties): SecurityCenterProperties.AsObject;
    static serializeBinaryToWriter(message: SecurityCenterProperties, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SecurityCenterProperties;
    static deserializeBinaryFromReader(message: SecurityCenterProperties, reader: jspb.BinaryReader): SecurityCenterProperties;
  }

  export namespace SecurityCenterProperties {
    export type AsObject = {
      resourceName: string,
      resourceType: string,
      resourceParent: string,
      resourceProject: string,
      resourceOwnersList: Array<string>,
    }
  }


  export class IamPolicy extends jspb.Message {
    getPolicyBlob(): string;
    setPolicyBlob(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IamPolicy.AsObject;
    static toObject(includeInstance: boolean, msg: IamPolicy): IamPolicy.AsObject;
    static serializeBinaryToWriter(message: IamPolicy, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IamPolicy;
    static deserializeBinaryFromReader(message: IamPolicy, reader: jspb.BinaryReader): IamPolicy;
  }

  export namespace IamPolicy {
    export type AsObject = {
      policyBlob: string,
    }
  }

}

