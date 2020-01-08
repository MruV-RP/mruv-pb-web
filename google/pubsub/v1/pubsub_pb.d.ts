import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../google/api/client_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class MessageStoragePolicy extends jspb.Message {
  getAllowedPersistenceRegionsList(): Array<string>;
  setAllowedPersistenceRegionsList(value: Array<string>): void;
  clearAllowedPersistenceRegionsList(): void;
  addAllowedPersistenceRegions(value: string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageStoragePolicy.AsObject;
  static toObject(includeInstance: boolean, msg: MessageStoragePolicy): MessageStoragePolicy.AsObject;
  static serializeBinaryToWriter(message: MessageStoragePolicy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageStoragePolicy;
  static deserializeBinaryFromReader(message: MessageStoragePolicy, reader: jspb.BinaryReader): MessageStoragePolicy;
}

export namespace MessageStoragePolicy {
  export type AsObject = {
    allowedPersistenceRegionsList: Array<string>,
  }
}

export class Topic extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): void;

  getMessageStoragePolicy(): MessageStoragePolicy | undefined;
  setMessageStoragePolicy(value?: MessageStoragePolicy): void;
  hasMessageStoragePolicy(): boolean;
  clearMessageStoragePolicy(): void;

  getKmsKeyName(): string;
  setKmsKeyName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Topic.AsObject;
  static toObject(includeInstance: boolean, msg: Topic): Topic.AsObject;
  static serializeBinaryToWriter(message: Topic, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Topic;
  static deserializeBinaryFromReader(message: Topic, reader: jspb.BinaryReader): Topic;
}

export namespace Topic {
  export type AsObject = {
    name: string,
    labelsMap: Array<[string, string]>,
    messageStoragePolicy?: MessageStoragePolicy.AsObject,
    kmsKeyName: string,
  }
}

export class PubsubMessage extends jspb.Message {
  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  getAttributesMap(): jspb.Map<string, string>;
  clearAttributesMap(): void;

  getMessageId(): string;
  setMessageId(value: string): void;

  getPublishTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPublishTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasPublishTime(): boolean;
  clearPublishTime(): void;

  getOrderingKey(): string;
  setOrderingKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PubsubMessage.AsObject;
  static toObject(includeInstance: boolean, msg: PubsubMessage): PubsubMessage.AsObject;
  static serializeBinaryToWriter(message: PubsubMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PubsubMessage;
  static deserializeBinaryFromReader(message: PubsubMessage, reader: jspb.BinaryReader): PubsubMessage;
}

export namespace PubsubMessage {
  export type AsObject = {
    data: Uint8Array | string,
    attributesMap: Array<[string, string]>,
    messageId: string,
    publishTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    orderingKey: string,
  }
}

export class GetTopicRequest extends jspb.Message {
  getTopic(): string;
  setTopic(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTopicRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTopicRequest): GetTopicRequest.AsObject;
  static serializeBinaryToWriter(message: GetTopicRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTopicRequest;
  static deserializeBinaryFromReader(message: GetTopicRequest, reader: jspb.BinaryReader): GetTopicRequest;
}

export namespace GetTopicRequest {
  export type AsObject = {
    topic: string,
  }
}

export class UpdateTopicRequest extends jspb.Message {
  getTopic(): Topic | undefined;
  setTopic(value?: Topic): void;
  hasTopic(): boolean;
  clearTopic(): void;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTopicRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTopicRequest): UpdateTopicRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateTopicRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTopicRequest;
  static deserializeBinaryFromReader(message: UpdateTopicRequest, reader: jspb.BinaryReader): UpdateTopicRequest;
}

export namespace UpdateTopicRequest {
  export type AsObject = {
    topic?: Topic.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class PublishRequest extends jspb.Message {
  getTopic(): string;
  setTopic(value: string): void;

  getMessagesList(): Array<PubsubMessage>;
  setMessagesList(value: Array<PubsubMessage>): void;
  clearMessagesList(): void;
  addMessages(value?: PubsubMessage, index?: number): PubsubMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublishRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PublishRequest): PublishRequest.AsObject;
  static serializeBinaryToWriter(message: PublishRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublishRequest;
  static deserializeBinaryFromReader(message: PublishRequest, reader: jspb.BinaryReader): PublishRequest;
}

export namespace PublishRequest {
  export type AsObject = {
    topic: string,
    messagesList: Array<PubsubMessage.AsObject>,
  }
}

export class PublishResponse extends jspb.Message {
  getMessageIdsList(): Array<string>;
  setMessageIdsList(value: Array<string>): void;
  clearMessageIdsList(): void;
  addMessageIds(value: string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublishResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PublishResponse): PublishResponse.AsObject;
  static serializeBinaryToWriter(message: PublishResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublishResponse;
  static deserializeBinaryFromReader(message: PublishResponse, reader: jspb.BinaryReader): PublishResponse;
}

export namespace PublishResponse {
  export type AsObject = {
    messageIdsList: Array<string>,
  }
}

export class ListTopicsRequest extends jspb.Message {
  getProject(): string;
  setProject(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTopicsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListTopicsRequest): ListTopicsRequest.AsObject;
  static serializeBinaryToWriter(message: ListTopicsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTopicsRequest;
  static deserializeBinaryFromReader(message: ListTopicsRequest, reader: jspb.BinaryReader): ListTopicsRequest;
}

export namespace ListTopicsRequest {
  export type AsObject = {
    project: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListTopicsResponse extends jspb.Message {
  getTopicsList(): Array<Topic>;
  setTopicsList(value: Array<Topic>): void;
  clearTopicsList(): void;
  addTopics(value?: Topic, index?: number): Topic;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTopicsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListTopicsResponse): ListTopicsResponse.AsObject;
  static serializeBinaryToWriter(message: ListTopicsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTopicsResponse;
  static deserializeBinaryFromReader(message: ListTopicsResponse, reader: jspb.BinaryReader): ListTopicsResponse;
}

export namespace ListTopicsResponse {
  export type AsObject = {
    topicsList: Array<Topic.AsObject>,
    nextPageToken: string,
  }
}

export class ListTopicSubscriptionsRequest extends jspb.Message {
  getTopic(): string;
  setTopic(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTopicSubscriptionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListTopicSubscriptionsRequest): ListTopicSubscriptionsRequest.AsObject;
  static serializeBinaryToWriter(message: ListTopicSubscriptionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTopicSubscriptionsRequest;
  static deserializeBinaryFromReader(message: ListTopicSubscriptionsRequest, reader: jspb.BinaryReader): ListTopicSubscriptionsRequest;
}

export namespace ListTopicSubscriptionsRequest {
  export type AsObject = {
    topic: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListTopicSubscriptionsResponse extends jspb.Message {
  getSubscriptionsList(): Array<string>;
  setSubscriptionsList(value: Array<string>): void;
  clearSubscriptionsList(): void;
  addSubscriptions(value: string, index?: number): void;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTopicSubscriptionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListTopicSubscriptionsResponse): ListTopicSubscriptionsResponse.AsObject;
  static serializeBinaryToWriter(message: ListTopicSubscriptionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTopicSubscriptionsResponse;
  static deserializeBinaryFromReader(message: ListTopicSubscriptionsResponse, reader: jspb.BinaryReader): ListTopicSubscriptionsResponse;
}

export namespace ListTopicSubscriptionsResponse {
  export type AsObject = {
    subscriptionsList: Array<string>,
    nextPageToken: string,
  }
}

export class ListTopicSnapshotsRequest extends jspb.Message {
  getTopic(): string;
  setTopic(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTopicSnapshotsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListTopicSnapshotsRequest): ListTopicSnapshotsRequest.AsObject;
  static serializeBinaryToWriter(message: ListTopicSnapshotsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTopicSnapshotsRequest;
  static deserializeBinaryFromReader(message: ListTopicSnapshotsRequest, reader: jspb.BinaryReader): ListTopicSnapshotsRequest;
}

export namespace ListTopicSnapshotsRequest {
  export type AsObject = {
    topic: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListTopicSnapshotsResponse extends jspb.Message {
  getSnapshotsList(): Array<string>;
  setSnapshotsList(value: Array<string>): void;
  clearSnapshotsList(): void;
  addSnapshots(value: string, index?: number): void;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTopicSnapshotsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListTopicSnapshotsResponse): ListTopicSnapshotsResponse.AsObject;
  static serializeBinaryToWriter(message: ListTopicSnapshotsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTopicSnapshotsResponse;
  static deserializeBinaryFromReader(message: ListTopicSnapshotsResponse, reader: jspb.BinaryReader): ListTopicSnapshotsResponse;
}

export namespace ListTopicSnapshotsResponse {
  export type AsObject = {
    snapshotsList: Array<string>,
    nextPageToken: string,
  }
}

export class DeleteTopicRequest extends jspb.Message {
  getTopic(): string;
  setTopic(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTopicRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTopicRequest): DeleteTopicRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteTopicRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTopicRequest;
  static deserializeBinaryFromReader(message: DeleteTopicRequest, reader: jspb.BinaryReader): DeleteTopicRequest;
}

export namespace DeleteTopicRequest {
  export type AsObject = {
    topic: string,
  }
}

export class Subscription extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getTopic(): string;
  setTopic(value: string): void;

  getPushConfig(): PushConfig | undefined;
  setPushConfig(value?: PushConfig): void;
  hasPushConfig(): boolean;
  clearPushConfig(): void;

  getAckDeadlineSeconds(): number;
  setAckDeadlineSeconds(value: number): void;

  getRetainAckedMessages(): boolean;
  setRetainAckedMessages(value: boolean): void;

  getMessageRetentionDuration(): google_protobuf_duration_pb.Duration | undefined;
  setMessageRetentionDuration(value?: google_protobuf_duration_pb.Duration): void;
  hasMessageRetentionDuration(): boolean;
  clearMessageRetentionDuration(): void;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): void;

  getEnableMessageOrdering(): boolean;
  setEnableMessageOrdering(value: boolean): void;

  getExpirationPolicy(): ExpirationPolicy | undefined;
  setExpirationPolicy(value?: ExpirationPolicy): void;
  hasExpirationPolicy(): boolean;
  clearExpirationPolicy(): void;

  getDeadLetterPolicy(): DeadLetterPolicy | undefined;
  setDeadLetterPolicy(value?: DeadLetterPolicy): void;
  hasDeadLetterPolicy(): boolean;
  clearDeadLetterPolicy(): void;

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
    topic: string,
    pushConfig?: PushConfig.AsObject,
    ackDeadlineSeconds: number,
    retainAckedMessages: boolean,
    messageRetentionDuration?: google_protobuf_duration_pb.Duration.AsObject,
    labelsMap: Array<[string, string]>,
    enableMessageOrdering: boolean,
    expirationPolicy?: ExpirationPolicy.AsObject,
    deadLetterPolicy?: DeadLetterPolicy.AsObject,
  }
}

export class DeadLetterPolicy extends jspb.Message {
  getDeadLetterTopic(): string;
  setDeadLetterTopic(value: string): void;

  getMaxDeliveryAttempts(): number;
  setMaxDeliveryAttempts(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeadLetterPolicy.AsObject;
  static toObject(includeInstance: boolean, msg: DeadLetterPolicy): DeadLetterPolicy.AsObject;
  static serializeBinaryToWriter(message: DeadLetterPolicy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeadLetterPolicy;
  static deserializeBinaryFromReader(message: DeadLetterPolicy, reader: jspb.BinaryReader): DeadLetterPolicy;
}

export namespace DeadLetterPolicy {
  export type AsObject = {
    deadLetterTopic: string,
    maxDeliveryAttempts: number,
  }
}

export class ExpirationPolicy extends jspb.Message {
  getTtl(): google_protobuf_duration_pb.Duration | undefined;
  setTtl(value?: google_protobuf_duration_pb.Duration): void;
  hasTtl(): boolean;
  clearTtl(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExpirationPolicy.AsObject;
  static toObject(includeInstance: boolean, msg: ExpirationPolicy): ExpirationPolicy.AsObject;
  static serializeBinaryToWriter(message: ExpirationPolicy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExpirationPolicy;
  static deserializeBinaryFromReader(message: ExpirationPolicy, reader: jspb.BinaryReader): ExpirationPolicy;
}

export namespace ExpirationPolicy {
  export type AsObject = {
    ttl?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class PushConfig extends jspb.Message {
  getPushEndpoint(): string;
  setPushEndpoint(value: string): void;

  getAttributesMap(): jspb.Map<string, string>;
  clearAttributesMap(): void;

  getOidcToken(): PushConfig.OidcToken | undefined;
  setOidcToken(value?: PushConfig.OidcToken): void;
  hasOidcToken(): boolean;
  clearOidcToken(): void;

  getAuthenticationMethodCase(): PushConfig.AuthenticationMethodCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PushConfig.AsObject;
  static toObject(includeInstance: boolean, msg: PushConfig): PushConfig.AsObject;
  static serializeBinaryToWriter(message: PushConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PushConfig;
  static deserializeBinaryFromReader(message: PushConfig, reader: jspb.BinaryReader): PushConfig;
}

export namespace PushConfig {
  export type AsObject = {
    pushEndpoint: string,
    attributesMap: Array<[string, string]>,
    oidcToken?: PushConfig.OidcToken.AsObject,
  }

  export class OidcToken extends jspb.Message {
    getServiceAccountEmail(): string;
    setServiceAccountEmail(value: string): void;

    getAudience(): string;
    setAudience(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OidcToken.AsObject;
    static toObject(includeInstance: boolean, msg: OidcToken): OidcToken.AsObject;
    static serializeBinaryToWriter(message: OidcToken, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OidcToken;
    static deserializeBinaryFromReader(message: OidcToken, reader: jspb.BinaryReader): OidcToken;
  }

  export namespace OidcToken {
    export type AsObject = {
      serviceAccountEmail: string,
      audience: string,
    }
  }


  export enum AuthenticationMethodCase { 
    AUTHENTICATION_METHOD_NOT_SET = 0,
    OIDC_TOKEN = 3,
  }
}

export class ReceivedMessage extends jspb.Message {
  getAckId(): string;
  setAckId(value: string): void;

  getMessage(): PubsubMessage | undefined;
  setMessage(value?: PubsubMessage): void;
  hasMessage(): boolean;
  clearMessage(): void;

  getDeliveryAttempt(): number;
  setDeliveryAttempt(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReceivedMessage.AsObject;
  static toObject(includeInstance: boolean, msg: ReceivedMessage): ReceivedMessage.AsObject;
  static serializeBinaryToWriter(message: ReceivedMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReceivedMessage;
  static deserializeBinaryFromReader(message: ReceivedMessage, reader: jspb.BinaryReader): ReceivedMessage;
}

export namespace ReceivedMessage {
  export type AsObject = {
    ackId: string,
    message?: PubsubMessage.AsObject,
    deliveryAttempt: number,
  }
}

export class GetSubscriptionRequest extends jspb.Message {
  getSubscription(): string;
  setSubscription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSubscriptionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSubscriptionRequest): GetSubscriptionRequest.AsObject;
  static serializeBinaryToWriter(message: GetSubscriptionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSubscriptionRequest;
  static deserializeBinaryFromReader(message: GetSubscriptionRequest, reader: jspb.BinaryReader): GetSubscriptionRequest;
}

export namespace GetSubscriptionRequest {
  export type AsObject = {
    subscription: string,
  }
}

export class UpdateSubscriptionRequest extends jspb.Message {
  getSubscription(): Subscription | undefined;
  setSubscription(value?: Subscription): void;
  hasSubscription(): boolean;
  clearSubscription(): void;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSubscriptionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSubscriptionRequest): UpdateSubscriptionRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateSubscriptionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSubscriptionRequest;
  static deserializeBinaryFromReader(message: UpdateSubscriptionRequest, reader: jspb.BinaryReader): UpdateSubscriptionRequest;
}

export namespace UpdateSubscriptionRequest {
  export type AsObject = {
    subscription?: Subscription.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class ListSubscriptionsRequest extends jspb.Message {
  getProject(): string;
  setProject(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSubscriptionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListSubscriptionsRequest): ListSubscriptionsRequest.AsObject;
  static serializeBinaryToWriter(message: ListSubscriptionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSubscriptionsRequest;
  static deserializeBinaryFromReader(message: ListSubscriptionsRequest, reader: jspb.BinaryReader): ListSubscriptionsRequest;
}

export namespace ListSubscriptionsRequest {
  export type AsObject = {
    project: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListSubscriptionsResponse extends jspb.Message {
  getSubscriptionsList(): Array<Subscription>;
  setSubscriptionsList(value: Array<Subscription>): void;
  clearSubscriptionsList(): void;
  addSubscriptions(value?: Subscription, index?: number): Subscription;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSubscriptionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListSubscriptionsResponse): ListSubscriptionsResponse.AsObject;
  static serializeBinaryToWriter(message: ListSubscriptionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSubscriptionsResponse;
  static deserializeBinaryFromReader(message: ListSubscriptionsResponse, reader: jspb.BinaryReader): ListSubscriptionsResponse;
}

export namespace ListSubscriptionsResponse {
  export type AsObject = {
    subscriptionsList: Array<Subscription.AsObject>,
    nextPageToken: string,
  }
}

export class DeleteSubscriptionRequest extends jspb.Message {
  getSubscription(): string;
  setSubscription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSubscriptionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSubscriptionRequest): DeleteSubscriptionRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteSubscriptionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSubscriptionRequest;
  static deserializeBinaryFromReader(message: DeleteSubscriptionRequest, reader: jspb.BinaryReader): DeleteSubscriptionRequest;
}

export namespace DeleteSubscriptionRequest {
  export type AsObject = {
    subscription: string,
  }
}

export class ModifyPushConfigRequest extends jspb.Message {
  getSubscription(): string;
  setSubscription(value: string): void;

  getPushConfig(): PushConfig | undefined;
  setPushConfig(value?: PushConfig): void;
  hasPushConfig(): boolean;
  clearPushConfig(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModifyPushConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ModifyPushConfigRequest): ModifyPushConfigRequest.AsObject;
  static serializeBinaryToWriter(message: ModifyPushConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModifyPushConfigRequest;
  static deserializeBinaryFromReader(message: ModifyPushConfigRequest, reader: jspb.BinaryReader): ModifyPushConfigRequest;
}

export namespace ModifyPushConfigRequest {
  export type AsObject = {
    subscription: string,
    pushConfig?: PushConfig.AsObject,
  }
}

export class PullRequest extends jspb.Message {
  getSubscription(): string;
  setSubscription(value: string): void;

  getReturnImmediately(): boolean;
  setReturnImmediately(value: boolean): void;

  getMaxMessages(): number;
  setMaxMessages(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PullRequest): PullRequest.AsObject;
  static serializeBinaryToWriter(message: PullRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullRequest;
  static deserializeBinaryFromReader(message: PullRequest, reader: jspb.BinaryReader): PullRequest;
}

export namespace PullRequest {
  export type AsObject = {
    subscription: string,
    returnImmediately: boolean,
    maxMessages: number,
  }
}

export class PullResponse extends jspb.Message {
  getReceivedMessagesList(): Array<ReceivedMessage>;
  setReceivedMessagesList(value: Array<ReceivedMessage>): void;
  clearReceivedMessagesList(): void;
  addReceivedMessages(value?: ReceivedMessage, index?: number): ReceivedMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PullResponse): PullResponse.AsObject;
  static serializeBinaryToWriter(message: PullResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullResponse;
  static deserializeBinaryFromReader(message: PullResponse, reader: jspb.BinaryReader): PullResponse;
}

export namespace PullResponse {
  export type AsObject = {
    receivedMessagesList: Array<ReceivedMessage.AsObject>,
  }
}

export class ModifyAckDeadlineRequest extends jspb.Message {
  getSubscription(): string;
  setSubscription(value: string): void;

  getAckIdsList(): Array<string>;
  setAckIdsList(value: Array<string>): void;
  clearAckIdsList(): void;
  addAckIds(value: string, index?: number): void;

  getAckDeadlineSeconds(): number;
  setAckDeadlineSeconds(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModifyAckDeadlineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ModifyAckDeadlineRequest): ModifyAckDeadlineRequest.AsObject;
  static serializeBinaryToWriter(message: ModifyAckDeadlineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModifyAckDeadlineRequest;
  static deserializeBinaryFromReader(message: ModifyAckDeadlineRequest, reader: jspb.BinaryReader): ModifyAckDeadlineRequest;
}

export namespace ModifyAckDeadlineRequest {
  export type AsObject = {
    subscription: string,
    ackIdsList: Array<string>,
    ackDeadlineSeconds: number,
  }
}

export class AcknowledgeRequest extends jspb.Message {
  getSubscription(): string;
  setSubscription(value: string): void;

  getAckIdsList(): Array<string>;
  setAckIdsList(value: Array<string>): void;
  clearAckIdsList(): void;
  addAckIds(value: string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AcknowledgeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AcknowledgeRequest): AcknowledgeRequest.AsObject;
  static serializeBinaryToWriter(message: AcknowledgeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AcknowledgeRequest;
  static deserializeBinaryFromReader(message: AcknowledgeRequest, reader: jspb.BinaryReader): AcknowledgeRequest;
}

export namespace AcknowledgeRequest {
  export type AsObject = {
    subscription: string,
    ackIdsList: Array<string>,
  }
}

export class StreamingPullRequest extends jspb.Message {
  getSubscription(): string;
  setSubscription(value: string): void;

  getAckIdsList(): Array<string>;
  setAckIdsList(value: Array<string>): void;
  clearAckIdsList(): void;
  addAckIds(value: string, index?: number): void;

  getModifyDeadlineSecondsList(): Array<number>;
  setModifyDeadlineSecondsList(value: Array<number>): void;
  clearModifyDeadlineSecondsList(): void;
  addModifyDeadlineSeconds(value: number, index?: number): void;

  getModifyDeadlineAckIdsList(): Array<string>;
  setModifyDeadlineAckIdsList(value: Array<string>): void;
  clearModifyDeadlineAckIdsList(): void;
  addModifyDeadlineAckIds(value: string, index?: number): void;

  getStreamAckDeadlineSeconds(): number;
  setStreamAckDeadlineSeconds(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamingPullRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamingPullRequest): StreamingPullRequest.AsObject;
  static serializeBinaryToWriter(message: StreamingPullRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamingPullRequest;
  static deserializeBinaryFromReader(message: StreamingPullRequest, reader: jspb.BinaryReader): StreamingPullRequest;
}

export namespace StreamingPullRequest {
  export type AsObject = {
    subscription: string,
    ackIdsList: Array<string>,
    modifyDeadlineSecondsList: Array<number>,
    modifyDeadlineAckIdsList: Array<string>,
    streamAckDeadlineSeconds: number,
  }
}

export class StreamingPullResponse extends jspb.Message {
  getReceivedMessagesList(): Array<ReceivedMessage>;
  setReceivedMessagesList(value: Array<ReceivedMessage>): void;
  clearReceivedMessagesList(): void;
  addReceivedMessages(value?: ReceivedMessage, index?: number): ReceivedMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamingPullResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StreamingPullResponse): StreamingPullResponse.AsObject;
  static serializeBinaryToWriter(message: StreamingPullResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamingPullResponse;
  static deserializeBinaryFromReader(message: StreamingPullResponse, reader: jspb.BinaryReader): StreamingPullResponse;
}

export namespace StreamingPullResponse {
  export type AsObject = {
    receivedMessagesList: Array<ReceivedMessage.AsObject>,
  }
}

export class CreateSnapshotRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getSubscription(): string;
  setSubscription(value: string): void;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSnapshotRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSnapshotRequest): CreateSnapshotRequest.AsObject;
  static serializeBinaryToWriter(message: CreateSnapshotRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSnapshotRequest;
  static deserializeBinaryFromReader(message: CreateSnapshotRequest, reader: jspb.BinaryReader): CreateSnapshotRequest;
}

export namespace CreateSnapshotRequest {
  export type AsObject = {
    name: string,
    subscription: string,
    labelsMap: Array<[string, string]>,
  }
}

export class UpdateSnapshotRequest extends jspb.Message {
  getSnapshot(): Snapshot | undefined;
  setSnapshot(value?: Snapshot): void;
  hasSnapshot(): boolean;
  clearSnapshot(): void;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSnapshotRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSnapshotRequest): UpdateSnapshotRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateSnapshotRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSnapshotRequest;
  static deserializeBinaryFromReader(message: UpdateSnapshotRequest, reader: jspb.BinaryReader): UpdateSnapshotRequest;
}

export namespace UpdateSnapshotRequest {
  export type AsObject = {
    snapshot?: Snapshot.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class Snapshot extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getTopic(): string;
  setTopic(value: string): void;

  getExpireTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpireTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasExpireTime(): boolean;
  clearExpireTime(): void;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Snapshot.AsObject;
  static toObject(includeInstance: boolean, msg: Snapshot): Snapshot.AsObject;
  static serializeBinaryToWriter(message: Snapshot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Snapshot;
  static deserializeBinaryFromReader(message: Snapshot, reader: jspb.BinaryReader): Snapshot;
}

export namespace Snapshot {
  export type AsObject = {
    name: string,
    topic: string,
    expireTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    labelsMap: Array<[string, string]>,
  }
}

export class GetSnapshotRequest extends jspb.Message {
  getSnapshot(): string;
  setSnapshot(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSnapshotRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSnapshotRequest): GetSnapshotRequest.AsObject;
  static serializeBinaryToWriter(message: GetSnapshotRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSnapshotRequest;
  static deserializeBinaryFromReader(message: GetSnapshotRequest, reader: jspb.BinaryReader): GetSnapshotRequest;
}

export namespace GetSnapshotRequest {
  export type AsObject = {
    snapshot: string,
  }
}

export class ListSnapshotsRequest extends jspb.Message {
  getProject(): string;
  setProject(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSnapshotsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListSnapshotsRequest): ListSnapshotsRequest.AsObject;
  static serializeBinaryToWriter(message: ListSnapshotsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSnapshotsRequest;
  static deserializeBinaryFromReader(message: ListSnapshotsRequest, reader: jspb.BinaryReader): ListSnapshotsRequest;
}

export namespace ListSnapshotsRequest {
  export type AsObject = {
    project: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListSnapshotsResponse extends jspb.Message {
  getSnapshotsList(): Array<Snapshot>;
  setSnapshotsList(value: Array<Snapshot>): void;
  clearSnapshotsList(): void;
  addSnapshots(value?: Snapshot, index?: number): Snapshot;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSnapshotsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListSnapshotsResponse): ListSnapshotsResponse.AsObject;
  static serializeBinaryToWriter(message: ListSnapshotsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSnapshotsResponse;
  static deserializeBinaryFromReader(message: ListSnapshotsResponse, reader: jspb.BinaryReader): ListSnapshotsResponse;
}

export namespace ListSnapshotsResponse {
  export type AsObject = {
    snapshotsList: Array<Snapshot.AsObject>,
    nextPageToken: string,
  }
}

export class DeleteSnapshotRequest extends jspb.Message {
  getSnapshot(): string;
  setSnapshot(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSnapshotRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSnapshotRequest): DeleteSnapshotRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteSnapshotRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSnapshotRequest;
  static deserializeBinaryFromReader(message: DeleteSnapshotRequest, reader: jspb.BinaryReader): DeleteSnapshotRequest;
}

export namespace DeleteSnapshotRequest {
  export type AsObject = {
    snapshot: string,
  }
}

export class SeekRequest extends jspb.Message {
  getSubscription(): string;
  setSubscription(value: string): void;

  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasTime(): boolean;
  clearTime(): void;

  getSnapshot(): string;
  setSnapshot(value: string): void;

  getTargetCase(): SeekRequest.TargetCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SeekRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SeekRequest): SeekRequest.AsObject;
  static serializeBinaryToWriter(message: SeekRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SeekRequest;
  static deserializeBinaryFromReader(message: SeekRequest, reader: jspb.BinaryReader): SeekRequest;
}

export namespace SeekRequest {
  export type AsObject = {
    subscription: string,
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    snapshot: string,
  }

  export enum TargetCase { 
    TARGET_NOT_SET = 0,
    TIME = 2,
    SNAPSHOT = 3,
  }
}

export class SeekResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SeekResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SeekResponse): SeekResponse.AsObject;
  static serializeBinaryToWriter(message: SeekResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SeekResponse;
  static deserializeBinaryFromReader(message: SeekResponse, reader: jspb.BinaryReader): SeekResponse;
}

export namespace SeekResponse {
  export type AsObject = {
  }
}

