import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class User extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getUserCase(): User.UserCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    userId: string,
    email: string,
  }

  export enum UserCase { 
    USER_NOT_SET = 0,
    USER_ID = 1,
    EMAIL = 2,
  }
}

export class Signal extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getEtag(): string;
  setEtag(value: string): void;

  getIncident(): string;
  setIncident(value: string): void;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreateTime(): boolean;
  clearCreateTime(): void;

  getCloseTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCloseTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCloseTime(): boolean;
  clearCloseTime(): void;

  getDetectTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDetectTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasDetectTime(): boolean;
  clearDetectTime(): void;

  getCreator(): User | undefined;
  setCreator(value?: User): void;
  hasCreator(): boolean;
  clearCreator(): void;

  getTitle(): string;
  setTitle(value: string): void;

  getContentType(): string;
  setContentType(value: string): void;

  getContent(): string;
  setContent(value: string): void;

  getSignalState(): Signal.State;
  setSignalState(value: Signal.State): void;

  getSignalArtifactsList(): Array<Signal.SignalArtifact>;
  setSignalArtifactsList(value: Array<Signal.SignalArtifact>): void;
  clearSignalArtifactsList(): void;
  addSignalArtifacts(value?: Signal.SignalArtifact, index?: number): Signal.SignalArtifact;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Signal.AsObject;
  static toObject(includeInstance: boolean, msg: Signal): Signal.AsObject;
  static serializeBinaryToWriter(message: Signal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Signal;
  static deserializeBinaryFromReader(message: Signal, reader: jspb.BinaryReader): Signal;
}

export namespace Signal {
  export type AsObject = {
    name: string,
    etag: string,
    incident: string,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    closeTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    detectTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    creator?: User.AsObject,
    title: string,
    contentType: string,
    content: string,
    signalState: Signal.State,
    signalArtifactsList: Array<Signal.SignalArtifact.AsObject>,
  }

  export class SignalArtifact extends jspb.Message {
    getUserType(): string;
    setUserType(value: string): void;

    getUri(): string;
    setUri(value: string): void;

    getArtifactTypeCase(): SignalArtifact.ArtifactTypeCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SignalArtifact.AsObject;
    static toObject(includeInstance: boolean, msg: SignalArtifact): SignalArtifact.AsObject;
    static serializeBinaryToWriter(message: SignalArtifact, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SignalArtifact;
    static deserializeBinaryFromReader(message: SignalArtifact, reader: jspb.BinaryReader): SignalArtifact;
  }

  export namespace SignalArtifact {
    export type AsObject = {
      userType: string,
      uri: string,
    }

    export enum ArtifactTypeCase { 
      ARTIFACT_TYPE_NOT_SET = 0,
      USER_TYPE = 2,
    }
  }


  export enum State { 
    STATE_UNSPECIFIED = 0,
    STATE_OPEN = 1,
    STATE_CLOSED = 2,
  }
}

export class Annotation extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getAuthor(): User | undefined;
  setAuthor(value?: User): void;
  hasAuthor(): boolean;
  clearAuthor(): void;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreateTime(): boolean;
  clearCreateTime(): void;

  getContent(): string;
  setContent(value: string): void;

  getContentType(): string;
  setContentType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Annotation.AsObject;
  static toObject(includeInstance: boolean, msg: Annotation): Annotation.AsObject;
  static serializeBinaryToWriter(message: Annotation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Annotation;
  static deserializeBinaryFromReader(message: Annotation, reader: jspb.BinaryReader): Annotation;
}

export namespace Annotation {
  export type AsObject = {
    name: string,
    author?: User.AsObject,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    content: string,
    contentType: string,
  }
}

export class Tag extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Tag.AsObject;
  static toObject(includeInstance: boolean, msg: Tag): Tag.AsObject;
  static serializeBinaryToWriter(message: Tag, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Tag;
  static deserializeBinaryFromReader(message: Tag, reader: jspb.BinaryReader): Tag;
}

export namespace Tag {
  export type AsObject = {
    name: string,
    displayName: string,
  }
}

export class Synopsis extends jspb.Message {
  getContentType(): string;
  setContentType(value: string): void;

  getContent(): string;
  setContent(value: string): void;

  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasUpdateTime(): boolean;
  clearUpdateTime(): void;

  getAuthor(): User | undefined;
  setAuthor(value?: User): void;
  hasAuthor(): boolean;
  clearAuthor(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Synopsis.AsObject;
  static toObject(includeInstance: boolean, msg: Synopsis): Synopsis.AsObject;
  static serializeBinaryToWriter(message: Synopsis, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Synopsis;
  static deserializeBinaryFromReader(message: Synopsis, reader: jspb.BinaryReader): Synopsis;
}

export namespace Synopsis {
  export type AsObject = {
    contentType: string,
    content: string,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    author?: User.AsObject,
  }
}

export class Incident extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getEscalationLevel(): Incident.EscalationLevel;
  setEscalationLevel(value: Incident.EscalationLevel): void;

  getEtag(): string;
  setEtag(value: string): void;

  getSeverity(): Incident.Severity;
  setSeverity(value: Incident.Severity): void;

  getStage(): Incident.Stage;
  setStage(value: Incident.Stage): void;

  getDuplicateIncident(): string;
  setDuplicateIncident(value: string): void;

  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasStartTime(): boolean;
  clearStartTime(): void;

  getSynopsis(): Synopsis | undefined;
  setSynopsis(value?: Synopsis): void;
  hasSynopsis(): boolean;
  clearSynopsis(): void;

  getCommunicationVenue(): Incident.CommunicationVenue | undefined;
  setCommunicationVenue(value?: Incident.CommunicationVenue): void;
  hasCommunicationVenue(): boolean;
  clearCommunicationVenue(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Incident.AsObject;
  static toObject(includeInstance: boolean, msg: Incident): Incident.AsObject;
  static serializeBinaryToWriter(message: Incident, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Incident;
  static deserializeBinaryFromReader(message: Incident, reader: jspb.BinaryReader): Incident;
}

export namespace Incident {
  export type AsObject = {
    name: string,
    title: string,
    escalationLevel: Incident.EscalationLevel,
    etag: string,
    severity: Incident.Severity,
    stage: Incident.Stage,
    duplicateIncident: string,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    synopsis?: Synopsis.AsObject,
    communicationVenue?: Incident.CommunicationVenue.AsObject,
  }

  export class CommunicationVenue extends jspb.Message {
    getUri(): string;
    setUri(value: string): void;

    getDisplayName(): string;
    setDisplayName(value: string): void;

    getChannelType(): Incident.CommunicationVenue.ChannelType;
    setChannelType(value: Incident.CommunicationVenue.ChannelType): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CommunicationVenue.AsObject;
    static toObject(includeInstance: boolean, msg: CommunicationVenue): CommunicationVenue.AsObject;
    static serializeBinaryToWriter(message: CommunicationVenue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CommunicationVenue;
    static deserializeBinaryFromReader(message: CommunicationVenue, reader: jspb.BinaryReader): CommunicationVenue;
  }

  export namespace CommunicationVenue {
    export type AsObject = {
      uri: string,
      displayName: string,
      channelType: Incident.CommunicationVenue.ChannelType,
    }

    export enum ChannelType { 
      CHANNEL_TYPE_UNSPECIFIED = 0,
      CHANNEL_TYPE_URI = 1,
      CHANNEL_TYPE_SLACK = 5,
    }
  }


  export enum EscalationLevel { 
    ESCALATION_LEVEL_UNSPECIFIED = 0,
    ESCALATION_LEVEL_ORGANIZATION = 1,
  }

  export enum Severity { 
    SEVERITY_UNSPECIFIED = 0,
    SEVERITY_HUGE = 1,
    SEVERITY_MAJOR = 2,
    SEVERITY_MEDIUM = 3,
    SEVERITY_MINOR = 4,
    SEVERITY_NEGLIGIBLE = 5,
  }

  export enum Stage { 
    STAGE_UNSPECIFIED = 0,
    STAGE_DETECTED = 4,
    STAGE_TRIAGED = 1,
    STAGE_MITIGATED = 2,
    STAGE_RESOLVED = 3,
    STAGE_DOCUMENTED = 5,
    STAGE_DUPLICATE = 6,
  }
}

export class IncidentRole extends jspb.Message {
  getType(): IncidentRole.Type;
  setType(value: IncidentRole.Type): void;

  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IncidentRole.AsObject;
  static toObject(includeInstance: boolean, msg: IncidentRole): IncidentRole.AsObject;
  static serializeBinaryToWriter(message: IncidentRole, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IncidentRole;
  static deserializeBinaryFromReader(message: IncidentRole, reader: jspb.BinaryReader): IncidentRole;
}

export namespace IncidentRole {
  export type AsObject = {
    type: IncidentRole.Type,
    title: string,
    description: string,
  }

  export enum Type { 
    TYPE_UNSPECIFIED = 0,
    TYPE_INCIDENT_COMMANDER = 1,
    TYPE_COMMUNICATIONS_LEAD = 2,
    TYPE_OPERATIONS_LEAD = 3,
    TYPE_EXTERNAL_CUSTOMER_COMMUNICATIONS_LEAD = 4,
    TYPE_PRIMARY_ONCALL = 5,
    TYPE_SECONDARY_ONCALL = 6,
    TYPE_OTHER = 7,
  }
}

export class IncidentRoleAssignment extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getEtag(): string;
  setEtag(value: string): void;

  getRole(): IncidentRole | undefined;
  setRole(value?: IncidentRole): void;
  hasRole(): boolean;
  clearRole(): void;

  getAssignee(): User | undefined;
  setAssignee(value?: User): void;
  hasAssignee(): boolean;
  clearAssignee(): void;

  getProposedAssignee(): User | undefined;
  setProposedAssignee(value?: User): void;
  hasProposedAssignee(): boolean;
  clearProposedAssignee(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IncidentRoleAssignment.AsObject;
  static toObject(includeInstance: boolean, msg: IncidentRoleAssignment): IncidentRoleAssignment.AsObject;
  static serializeBinaryToWriter(message: IncidentRoleAssignment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IncidentRoleAssignment;
  static deserializeBinaryFromReader(message: IncidentRoleAssignment, reader: jspb.BinaryReader): IncidentRoleAssignment;
}

export namespace IncidentRoleAssignment {
  export type AsObject = {
    name: string,
    etag: string,
    role?: IncidentRole.AsObject,
    assignee?: User.AsObject,
    proposedAssignee?: User.AsObject,
  }
}

export class Artifact extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getEtag(): string;
  setEtag(value: string): void;

  getUrl(): string;
  setUrl(value: string): void;

  getType(): Artifact.Type;
  setType(value: Artifact.Type): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Artifact.AsObject;
  static toObject(includeInstance: boolean, msg: Artifact): Artifact.AsObject;
  static serializeBinaryToWriter(message: Artifact, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Artifact;
  static deserializeBinaryFromReader(message: Artifact, reader: jspb.BinaryReader): Artifact;
}

export namespace Artifact {
  export type AsObject = {
    name: string,
    displayName: string,
    etag: string,
    url: string,
    type: Artifact.Type,
  }

  export enum Type { 
    TYPE_UNSPECIFIED = 0,
    TYPE_URL = 1,
    TYPE_JIRA_ISSUE = 4,
  }
}

export class CommunicationChannel extends jspb.Message {
  getEmail(): CommunicationChannel.Email | undefined;
  setEmail(value?: CommunicationChannel.Email): void;
  hasEmail(): boolean;
  clearEmail(): void;

  getNotificationChannel(): CommunicationChannel.NotificationChannel | undefined;
  setNotificationChannel(value?: CommunicationChannel.NotificationChannel): void;
  hasNotificationChannel(): boolean;
  clearNotificationChannel(): void;

  getEndpointCase(): CommunicationChannel.EndpointCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommunicationChannel.AsObject;
  static toObject(includeInstance: boolean, msg: CommunicationChannel): CommunicationChannel.AsObject;
  static serializeBinaryToWriter(message: CommunicationChannel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommunicationChannel;
  static deserializeBinaryFromReader(message: CommunicationChannel, reader: jspb.BinaryReader): CommunicationChannel;
}

export namespace CommunicationChannel {
  export type AsObject = {
    email?: CommunicationChannel.Email.AsObject,
    notificationChannel?: CommunicationChannel.NotificationChannel.AsObject,
  }

  export class Email extends jspb.Message {
    getAddress(): string;
    setAddress(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Email.AsObject;
    static toObject(includeInstance: boolean, msg: Email): Email.AsObject;
    static serializeBinaryToWriter(message: Email, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Email;
    static deserializeBinaryFromReader(message: Email, reader: jspb.BinaryReader): Email;
  }

  export namespace Email {
    export type AsObject = {
      address: string,
    }
  }


  export class NotificationChannel extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NotificationChannel.AsObject;
    static toObject(includeInstance: boolean, msg: NotificationChannel): NotificationChannel.AsObject;
    static serializeBinaryToWriter(message: NotificationChannel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NotificationChannel;
    static deserializeBinaryFromReader(message: NotificationChannel, reader: jspb.BinaryReader): NotificationChannel;
  }

  export namespace NotificationChannel {
    export type AsObject = {
      name: string,
    }
  }


  export enum EndpointCase { 
    ENDPOINT_NOT_SET = 0,
    EMAIL = 1,
    NOTIFICATION_CHANNEL = 2,
  }
}

export class Subscription extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getEtag(): string;
  setEtag(value: string): void;

  getSubscriptionChannel(): CommunicationChannel | undefined;
  setSubscriptionChannel(value?: CommunicationChannel): void;
  hasSubscriptionChannel(): boolean;
  clearSubscriptionChannel(): void;

  getEventTypesList(): Array<Subscription.EventType>;
  setEventTypesList(value: Array<Subscription.EventType>): void;
  clearEventTypesList(): void;
  addEventTypes(value: Subscription.EventType, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Subscription.AsObject;
  static toObject(includeInstance: boolean, msg: Subscription): Subscription.AsObject;
  static serializeBinaryToWriter(message: Subscription, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Subscription;
  static deserializeBinaryFromReader(message: Subscription, reader: jspb.BinaryReader): Subscription;
}

export namespace Subscription {
  export type AsObject = {
    name: string,
    etag: string,
    subscriptionChannel?: CommunicationChannel.AsObject,
    eventTypesList: Array<Subscription.EventType>,
  }

  export enum EventType { 
    EVENT_TYPE_UNSPECIFIED = 0,
    EVENT_TYPE_TITLE_CHANGE = 1,
    EVENT_TYPE_SYNOPSIS_CHANGE = 2,
    EVENT_TYPE_STAGE_CHANGE = 3,
    EVENT_TYPE_SEVERITY_CHANGE = 4,
    EVENT_TYPE_ANNOTATION_ADD = 5,
    EVENT_TYPE_ANNOTATION_CHANGE = 6,
  }
}

