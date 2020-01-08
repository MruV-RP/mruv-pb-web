import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb';
import * as google_cloud_talent_v4beta1_common_pb from '../../../../google/cloud/talent/v4beta1/common_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_type_date_pb from '../../../../google/type/date_pb';

export class Application extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getExternalId(): string;
  setExternalId(value: string): void;

  getProfile(): string;
  setProfile(value: string): void;

  getJob(): string;
  setJob(value: string): void;

  getCompany(): string;
  setCompany(value: string): void;

  getApplicationDate(): google_type_date_pb.Date | undefined;
  setApplicationDate(value?: google_type_date_pb.Date): void;
  hasApplicationDate(): boolean;
  clearApplicationDate(): void;

  getStage(): Application.ApplicationStage;
  setStage(value: Application.ApplicationStage): void;

  getState(): Application.ApplicationState;
  setState(value: Application.ApplicationState): void;

  getInterviewsList(): Array<google_cloud_talent_v4beta1_common_pb.Interview>;
  setInterviewsList(value: Array<google_cloud_talent_v4beta1_common_pb.Interview>): void;
  clearInterviewsList(): void;
  addInterviews(value?: google_cloud_talent_v4beta1_common_pb.Interview, index?: number): google_cloud_talent_v4beta1_common_pb.Interview;

  getReferral(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setReferral(value?: google_protobuf_wrappers_pb.BoolValue): void;
  hasReferral(): boolean;
  clearReferral(): void;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreateTime(): boolean;
  clearCreateTime(): void;

  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasUpdateTime(): boolean;
  clearUpdateTime(): void;

  getOutcomeNotes(): string;
  setOutcomeNotes(value: string): void;

  getOutcome(): google_cloud_talent_v4beta1_common_pb.Outcome;
  setOutcome(value: google_cloud_talent_v4beta1_common_pb.Outcome): void;

  getIsMatch(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setIsMatch(value?: google_protobuf_wrappers_pb.BoolValue): void;
  hasIsMatch(): boolean;
  clearIsMatch(): void;

  getJobTitleSnippet(): string;
  setJobTitleSnippet(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Application.AsObject;
  static toObject(includeInstance: boolean, msg: Application): Application.AsObject;
  static serializeBinaryToWriter(message: Application, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Application;
  static deserializeBinaryFromReader(message: Application, reader: jspb.BinaryReader): Application;
}

export namespace Application {
  export type AsObject = {
    name: string,
    externalId: string,
    profile: string,
    job: string,
    company: string,
    applicationDate?: google_type_date_pb.Date.AsObject,
    stage: Application.ApplicationStage,
    state: Application.ApplicationState,
    interviewsList: Array<google_cloud_talent_v4beta1_common_pb.Interview.AsObject>,
    referral?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    outcomeNotes: string,
    outcome: google_cloud_talent_v4beta1_common_pb.Outcome,
    isMatch?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    jobTitleSnippet: string,
  }

  export enum ApplicationState { 
    APPLICATION_STATE_UNSPECIFIED = 0,
    IN_PROGRESS = 1,
    CANDIDATE_WITHDREW = 2,
    EMPLOYER_WITHDREW = 3,
    COMPLETED = 4,
    CLOSED = 5,
  }

  export enum ApplicationStage { 
    APPLICATION_STAGE_UNSPECIFIED = 0,
    NEW = 1,
    SCREEN = 2,
    HIRING_MANAGER_REVIEW = 3,
    INTERVIEW = 4,
    OFFER_EXTENDED = 5,
    OFFER_ACCEPTED = 6,
    STARTED = 7,
  }
}

