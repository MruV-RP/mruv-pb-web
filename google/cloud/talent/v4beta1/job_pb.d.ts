import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb';
import * as google_cloud_talent_v4beta1_common_pb from '../../../../google/cloud/talent/v4beta1/common_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_type_postal_address_pb from '../../../../google/type/postal_address_pb';

export class Job extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getCompany(): string;
  setCompany(value: string): void;

  getRequisitionId(): string;
  setRequisitionId(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getAddressesList(): Array<string>;
  setAddressesList(value: Array<string>): void;
  clearAddressesList(): void;
  addAddresses(value: string, index?: number): void;

  getApplicationInfo(): Job.ApplicationInfo | undefined;
  setApplicationInfo(value?: Job.ApplicationInfo): void;
  hasApplicationInfo(): boolean;
  clearApplicationInfo(): void;

  getJobBenefitsList(): Array<google_cloud_talent_v4beta1_common_pb.JobBenefit>;
  setJobBenefitsList(value: Array<google_cloud_talent_v4beta1_common_pb.JobBenefit>): void;
  clearJobBenefitsList(): void;
  addJobBenefits(value: google_cloud_talent_v4beta1_common_pb.JobBenefit, index?: number): void;

  getCompensationInfo(): google_cloud_talent_v4beta1_common_pb.CompensationInfo | undefined;
  setCompensationInfo(value?: google_cloud_talent_v4beta1_common_pb.CompensationInfo): void;
  hasCompensationInfo(): boolean;
  clearCompensationInfo(): void;

  getCustomAttributesMap(): jspb.Map<string, google_cloud_talent_v4beta1_common_pb.CustomAttribute>;
  clearCustomAttributesMap(): void;

  getDegreeTypesList(): Array<google_cloud_talent_v4beta1_common_pb.DegreeType>;
  setDegreeTypesList(value: Array<google_cloud_talent_v4beta1_common_pb.DegreeType>): void;
  clearDegreeTypesList(): void;
  addDegreeTypes(value: google_cloud_talent_v4beta1_common_pb.DegreeType, index?: number): void;

  getDepartment(): string;
  setDepartment(value: string): void;

  getEmploymentTypesList(): Array<google_cloud_talent_v4beta1_common_pb.EmploymentType>;
  setEmploymentTypesList(value: Array<google_cloud_talent_v4beta1_common_pb.EmploymentType>): void;
  clearEmploymentTypesList(): void;
  addEmploymentTypes(value: google_cloud_talent_v4beta1_common_pb.EmploymentType, index?: number): void;

  getIncentives(): string;
  setIncentives(value: string): void;

  getLanguageCode(): string;
  setLanguageCode(value: string): void;

  getJobLevel(): google_cloud_talent_v4beta1_common_pb.JobLevel;
  setJobLevel(value: google_cloud_talent_v4beta1_common_pb.JobLevel): void;

  getPromotionValue(): number;
  setPromotionValue(value: number): void;

  getQualifications(): string;
  setQualifications(value: string): void;

  getResponsibilities(): string;
  setResponsibilities(value: string): void;

  getPostingRegion(): google_cloud_talent_v4beta1_common_pb.PostingRegion;
  setPostingRegion(value: google_cloud_talent_v4beta1_common_pb.PostingRegion): void;

  getVisibility(): google_cloud_talent_v4beta1_common_pb.Visibility;
  setVisibility(value: google_cloud_talent_v4beta1_common_pb.Visibility): void;

  getJobStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setJobStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasJobStartTime(): boolean;
  clearJobStartTime(): void;

  getJobEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setJobEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasJobEndTime(): boolean;
  clearJobEndTime(): void;

  getPostingPublishTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPostingPublishTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasPostingPublishTime(): boolean;
  clearPostingPublishTime(): void;

  getPostingExpireTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPostingExpireTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasPostingExpireTime(): boolean;
  clearPostingExpireTime(): void;

  getPostingCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPostingCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasPostingCreateTime(): boolean;
  clearPostingCreateTime(): void;

  getPostingUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPostingUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasPostingUpdateTime(): boolean;
  clearPostingUpdateTime(): void;

  getCompanyDisplayName(): string;
  setCompanyDisplayName(value: string): void;

  getDerivedInfo(): Job.DerivedInfo | undefined;
  setDerivedInfo(value?: Job.DerivedInfo): void;
  hasDerivedInfo(): boolean;
  clearDerivedInfo(): void;

  getProcessingOptions(): Job.ProcessingOptions | undefined;
  setProcessingOptions(value?: Job.ProcessingOptions): void;
  hasProcessingOptions(): boolean;
  clearProcessingOptions(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Job.AsObject;
  static toObject(includeInstance: boolean, msg: Job): Job.AsObject;
  static serializeBinaryToWriter(message: Job, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Job;
  static deserializeBinaryFromReader(message: Job, reader: jspb.BinaryReader): Job;
}

export namespace Job {
  export type AsObject = {
    name: string,
    company: string,
    requisitionId: string,
    title: string,
    description: string,
    addressesList: Array<string>,
    applicationInfo?: Job.ApplicationInfo.AsObject,
    jobBenefitsList: Array<google_cloud_talent_v4beta1_common_pb.JobBenefit>,
    compensationInfo?: google_cloud_talent_v4beta1_common_pb.CompensationInfo.AsObject,
    customAttributesMap: Array<[string, google_cloud_talent_v4beta1_common_pb.CustomAttribute.AsObject]>,
    degreeTypesList: Array<google_cloud_talent_v4beta1_common_pb.DegreeType>,
    department: string,
    employmentTypesList: Array<google_cloud_talent_v4beta1_common_pb.EmploymentType>,
    incentives: string,
    languageCode: string,
    jobLevel: google_cloud_talent_v4beta1_common_pb.JobLevel,
    promotionValue: number,
    qualifications: string,
    responsibilities: string,
    postingRegion: google_cloud_talent_v4beta1_common_pb.PostingRegion,
    visibility: google_cloud_talent_v4beta1_common_pb.Visibility,
    jobStartTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    jobEndTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    postingPublishTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    postingExpireTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    postingCreateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    postingUpdateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    companyDisplayName: string,
    derivedInfo?: Job.DerivedInfo.AsObject,
    processingOptions?: Job.ProcessingOptions.AsObject,
  }

  export class ApplicationInfo extends jspb.Message {
    getEmailsList(): Array<string>;
    setEmailsList(value: Array<string>): void;
    clearEmailsList(): void;
    addEmails(value: string, index?: number): void;

    getInstruction(): string;
    setInstruction(value: string): void;

    getUrisList(): Array<string>;
    setUrisList(value: Array<string>): void;
    clearUrisList(): void;
    addUris(value: string, index?: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ApplicationInfo.AsObject;
    static toObject(includeInstance: boolean, msg: ApplicationInfo): ApplicationInfo.AsObject;
    static serializeBinaryToWriter(message: ApplicationInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ApplicationInfo;
    static deserializeBinaryFromReader(message: ApplicationInfo, reader: jspb.BinaryReader): ApplicationInfo;
  }

  export namespace ApplicationInfo {
    export type AsObject = {
      emailsList: Array<string>,
      instruction: string,
      urisList: Array<string>,
    }
  }


  export class DerivedInfo extends jspb.Message {
    getLocationsList(): Array<google_cloud_talent_v4beta1_common_pb.Location>;
    setLocationsList(value: Array<google_cloud_talent_v4beta1_common_pb.Location>): void;
    clearLocationsList(): void;
    addLocations(value?: google_cloud_talent_v4beta1_common_pb.Location, index?: number): google_cloud_talent_v4beta1_common_pb.Location;

    getJobCategoriesList(): Array<google_cloud_talent_v4beta1_common_pb.JobCategory>;
    setJobCategoriesList(value: Array<google_cloud_talent_v4beta1_common_pb.JobCategory>): void;
    clearJobCategoriesList(): void;
    addJobCategories(value: google_cloud_talent_v4beta1_common_pb.JobCategory, index?: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DerivedInfo.AsObject;
    static toObject(includeInstance: boolean, msg: DerivedInfo): DerivedInfo.AsObject;
    static serializeBinaryToWriter(message: DerivedInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DerivedInfo;
    static deserializeBinaryFromReader(message: DerivedInfo, reader: jspb.BinaryReader): DerivedInfo;
  }

  export namespace DerivedInfo {
    export type AsObject = {
      locationsList: Array<google_cloud_talent_v4beta1_common_pb.Location.AsObject>,
      jobCategoriesList: Array<google_cloud_talent_v4beta1_common_pb.JobCategory>,
    }
  }


  export class ProcessingOptions extends jspb.Message {
    getDisableStreetAddressResolution(): boolean;
    setDisableStreetAddressResolution(value: boolean): void;

    getHtmlSanitization(): google_cloud_talent_v4beta1_common_pb.HtmlSanitization;
    setHtmlSanitization(value: google_cloud_talent_v4beta1_common_pb.HtmlSanitization): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProcessingOptions.AsObject;
    static toObject(includeInstance: boolean, msg: ProcessingOptions): ProcessingOptions.AsObject;
    static serializeBinaryToWriter(message: ProcessingOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProcessingOptions;
    static deserializeBinaryFromReader(message: ProcessingOptions, reader: jspb.BinaryReader): ProcessingOptions;
  }

  export namespace ProcessingOptions {
    export type AsObject = {
      disableStreetAddressResolution: boolean,
      htmlSanitization: google_cloud_talent_v4beta1_common_pb.HtmlSanitization,
    }
  }

}

