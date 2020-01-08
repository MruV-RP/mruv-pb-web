import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb';
import * as google_cloud_talent_v4beta1_common_pb from '../../../../google/cloud/talent/v4beta1/common_pb';

export class Company extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getExternalId(): string;
  setExternalId(value: string): void;

  getSize(): google_cloud_talent_v4beta1_common_pb.CompanySize;
  setSize(value: google_cloud_talent_v4beta1_common_pb.CompanySize): void;

  getHeadquartersAddress(): string;
  setHeadquartersAddress(value: string): void;

  getHiringAgency(): boolean;
  setHiringAgency(value: boolean): void;

  getEeoText(): string;
  setEeoText(value: string): void;

  getWebsiteUri(): string;
  setWebsiteUri(value: string): void;

  getCareerSiteUri(): string;
  setCareerSiteUri(value: string): void;

  getImageUri(): string;
  setImageUri(value: string): void;

  getKeywordSearchableJobCustomAttributesList(): Array<string>;
  setKeywordSearchableJobCustomAttributesList(value: Array<string>): void;
  clearKeywordSearchableJobCustomAttributesList(): void;
  addKeywordSearchableJobCustomAttributes(value: string, index?: number): void;

  getDerivedInfo(): Company.DerivedInfo | undefined;
  setDerivedInfo(value?: Company.DerivedInfo): void;
  hasDerivedInfo(): boolean;
  clearDerivedInfo(): void;

  getSuspended(): boolean;
  setSuspended(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Company.AsObject;
  static toObject(includeInstance: boolean, msg: Company): Company.AsObject;
  static serializeBinaryToWriter(message: Company, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Company;
  static deserializeBinaryFromReader(message: Company, reader: jspb.BinaryReader): Company;
}

export namespace Company {
  export type AsObject = {
    name: string,
    displayName: string,
    externalId: string,
    size: google_cloud_talent_v4beta1_common_pb.CompanySize,
    headquartersAddress: string,
    hiringAgency: boolean,
    eeoText: string,
    websiteUri: string,
    careerSiteUri: string,
    imageUri: string,
    keywordSearchableJobCustomAttributesList: Array<string>,
    derivedInfo?: Company.DerivedInfo.AsObject,
    suspended: boolean,
  }

  export class DerivedInfo extends jspb.Message {
    getHeadquartersLocation(): google_cloud_talent_v4beta1_common_pb.Location | undefined;
    setHeadquartersLocation(value?: google_cloud_talent_v4beta1_common_pb.Location): void;
    hasHeadquartersLocation(): boolean;
    clearHeadquartersLocation(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DerivedInfo.AsObject;
    static toObject(includeInstance: boolean, msg: DerivedInfo): DerivedInfo.AsObject;
    static serializeBinaryToWriter(message: DerivedInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DerivedInfo;
    static deserializeBinaryFromReader(message: DerivedInfo, reader: jspb.BinaryReader): DerivedInfo;
  }

  export namespace DerivedInfo {
    export type AsObject = {
      headquartersLocation?: google_cloud_talent_v4beta1_common_pb.Location.AsObject,
    }
  }

}

