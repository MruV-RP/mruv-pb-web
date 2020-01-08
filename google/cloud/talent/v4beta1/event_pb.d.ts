import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class ClientEvent extends jspb.Message {
  getRequestId(): string;
  setRequestId(value: string): void;

  getEventId(): string;
  setEventId(value: string): void;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreateTime(): boolean;
  clearCreateTime(): void;

  getJobEvent(): JobEvent | undefined;
  setJobEvent(value?: JobEvent): void;
  hasJobEvent(): boolean;
  clearJobEvent(): void;

  getProfileEvent(): ProfileEvent | undefined;
  setProfileEvent(value?: ProfileEvent): void;
  hasProfileEvent(): boolean;
  clearProfileEvent(): void;

  getEventNotes(): string;
  setEventNotes(value: string): void;

  getEventCase(): ClientEvent.EventCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientEvent.AsObject;
  static toObject(includeInstance: boolean, msg: ClientEvent): ClientEvent.AsObject;
  static serializeBinaryToWriter(message: ClientEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientEvent;
  static deserializeBinaryFromReader(message: ClientEvent, reader: jspb.BinaryReader): ClientEvent;
}

export namespace ClientEvent {
  export type AsObject = {
    requestId: string,
    eventId: string,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    jobEvent?: JobEvent.AsObject,
    profileEvent?: ProfileEvent.AsObject,
    eventNotes: string,
  }

  export enum EventCase { 
    EVENT_NOT_SET = 0,
    JOB_EVENT = 5,
    PROFILE_EVENT = 6,
  }
}

export class JobEvent extends jspb.Message {
  getType(): JobEvent.JobEventType;
  setType(value: JobEvent.JobEventType): void;

  getJobsList(): Array<string>;
  setJobsList(value: Array<string>): void;
  clearJobsList(): void;
  addJobs(value: string, index?: number): void;

  getProfile(): string;
  setProfile(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JobEvent.AsObject;
  static toObject(includeInstance: boolean, msg: JobEvent): JobEvent.AsObject;
  static serializeBinaryToWriter(message: JobEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JobEvent;
  static deserializeBinaryFromReader(message: JobEvent, reader: jspb.BinaryReader): JobEvent;
}

export namespace JobEvent {
  export type AsObject = {
    type: JobEvent.JobEventType,
    jobsList: Array<string>,
    profile: string,
  }

  export enum JobEventType { 
    JOB_EVENT_TYPE_UNSPECIFIED = 0,
    IMPRESSION = 1,
    VIEW = 2,
    VIEW_REDIRECT = 3,
    APPLICATION_START = 4,
    APPLICATION_FINISH = 5,
    APPLICATION_QUICK_SUBMISSION = 6,
    APPLICATION_REDIRECT = 7,
    APPLICATION_START_FROM_SEARCH = 8,
    APPLICATION_REDIRECT_FROM_SEARCH = 9,
    APPLICATION_COMPANY_SUBMIT = 10,
    BOOKMARK = 11,
    NOTIFICATION = 12,
    HIRED = 13,
    SENT_CV = 14,
    INTERVIEW_GRANTED = 15,
  }
}

export class ProfileEvent extends jspb.Message {
  getType(): ProfileEvent.ProfileEventType;
  setType(value: ProfileEvent.ProfileEventType): void;

  getProfilesList(): Array<string>;
  setProfilesList(value: Array<string>): void;
  clearProfilesList(): void;
  addProfiles(value: string, index?: number): void;

  getJobsList(): Array<string>;
  setJobsList(value: Array<string>): void;
  clearJobsList(): void;
  addJobs(value: string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProfileEvent.AsObject;
  static toObject(includeInstance: boolean, msg: ProfileEvent): ProfileEvent.AsObject;
  static serializeBinaryToWriter(message: ProfileEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProfileEvent;
  static deserializeBinaryFromReader(message: ProfileEvent, reader: jspb.BinaryReader): ProfileEvent;
}

export namespace ProfileEvent {
  export type AsObject = {
    type: ProfileEvent.ProfileEventType,
    profilesList: Array<string>,
    jobsList: Array<string>,
  }

  export enum ProfileEventType { 
    PROFILE_EVENT_TYPE_UNSPECIFIED = 0,
    IMPRESSION = 1,
    VIEW = 2,
    BOOKMARK = 3,
  }
}

