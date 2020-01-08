/**
 * @fileoverview gRPC-Web generated client stub for google.pubsub.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../google/api/client_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

import {
  AcknowledgeRequest,
  CreateSnapshotRequest,
  DeleteSnapshotRequest,
  DeleteSubscriptionRequest,
  DeleteTopicRequest,
  GetSnapshotRequest,
  GetSubscriptionRequest,
  GetTopicRequest,
  ListSnapshotsRequest,
  ListSnapshotsResponse,
  ListSubscriptionsRequest,
  ListSubscriptionsResponse,
  ListTopicSnapshotsRequest,
  ListTopicSnapshotsResponse,
  ListTopicSubscriptionsRequest,
  ListTopicSubscriptionsResponse,
  ListTopicsRequest,
  ListTopicsResponse,
  ModifyAckDeadlineRequest,
  ModifyPushConfigRequest,
  PublishRequest,
  PublishResponse,
  PullRequest,
  PullResponse,
  SeekRequest,
  SeekResponse,
  Snapshot,
  StreamingPullRequest,
  StreamingPullResponse,
  Subscription,
  Topic,
  UpdateSnapshotRequest,
  UpdateSubscriptionRequest,
  UpdateTopicRequest} from './pubsub_pb';

export class PublisherClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoCreateTopic = new grpcWeb.AbstractClientBase.MethodInfo(
    Topic,
    (request: Topic) => {
      return request.serializeBinary();
    },
    Topic.deserializeBinary
  );

  createTopic(
    request: Topic,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Topic) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.pubsub.v1.Publisher/CreateTopic',
      request,
      metadata || {},
      this.methodInfoCreateTopic,
      callback);
  }

  methodInfoUpdateTopic = new grpcWeb.AbstractClientBase.MethodInfo(
    Topic,
    (request: UpdateTopicRequest) => {
      return request.serializeBinary();
    },
    Topic.deserializeBinary
  );

  updateTopic(
    request: UpdateTopicRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Topic) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.pubsub.v1.Publisher/UpdateTopic',
      request,
      metadata || {},
      this.methodInfoUpdateTopic,
      callback);
  }

  methodInfoPublish = new grpcWeb.AbstractClientBase.MethodInfo(
    PublishResponse,
    (request: PublishRequest) => {
      return request.serializeBinary();
    },
    PublishResponse.deserializeBinary
  );

  publish(
    request: PublishRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: PublishResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.pubsub.v1.Publisher/Publish',
      request,
      metadata || {},
      this.methodInfoPublish,
      callback);
  }

  methodInfoGetTopic = new grpcWeb.AbstractClientBase.MethodInfo(
    Topic,
    (request: GetTopicRequest) => {
      return request.serializeBinary();
    },
    Topic.deserializeBinary
  );

  getTopic(
    request: GetTopicRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Topic) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.pubsub.v1.Publisher/GetTopic',
      request,
      metadata || {},
      this.methodInfoGetTopic,
      callback);
  }

  methodInfoListTopics = new grpcWeb.AbstractClientBase.MethodInfo(
    ListTopicsResponse,
    (request: ListTopicsRequest) => {
      return request.serializeBinary();
    },
    ListTopicsResponse.deserializeBinary
  );

  listTopics(
    request: ListTopicsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListTopicsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.pubsub.v1.Publisher/ListTopics',
      request,
      metadata || {},
      this.methodInfoListTopics,
      callback);
  }

  methodInfoListTopicSubscriptions = new grpcWeb.AbstractClientBase.MethodInfo(
    ListTopicSubscriptionsResponse,
    (request: ListTopicSubscriptionsRequest) => {
      return request.serializeBinary();
    },
    ListTopicSubscriptionsResponse.deserializeBinary
  );

  listTopicSubscriptions(
    request: ListTopicSubscriptionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListTopicSubscriptionsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.pubsub.v1.Publisher/ListTopicSubscriptions',
      request,
      metadata || {},
      this.methodInfoListTopicSubscriptions,
      callback);
  }

  methodInfoListTopicSnapshots = new grpcWeb.AbstractClientBase.MethodInfo(
    ListTopicSnapshotsResponse,
    (request: ListTopicSnapshotsRequest) => {
      return request.serializeBinary();
    },
    ListTopicSnapshotsResponse.deserializeBinary
  );

  listTopicSnapshots(
    request: ListTopicSnapshotsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListTopicSnapshotsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.pubsub.v1.Publisher/ListTopicSnapshots',
      request,
      metadata || {},
      this.methodInfoListTopicSnapshots,
      callback);
  }

  methodInfoDeleteTopic = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteTopicRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteTopic(
    request: DeleteTopicRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.pubsub.v1.Publisher/DeleteTopic',
      request,
      metadata || {},
      this.methodInfoDeleteTopic,
      callback);
  }

}

export class SubscriberClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoCreateSubscription = new grpcWeb.AbstractClientBase.MethodInfo(
    Subscription,
    (request: Subscription) => {
      return request.serializeBinary();
    },
    Subscription.deserializeBinary
  );

  createSubscription(
    request: Subscription,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Subscription) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.pubsub.v1.Subscriber/CreateSubscription',
      request,
      metadata || {},
      this.methodInfoCreateSubscription,
      callback);
  }

  methodInfoGetSubscription = new grpcWeb.AbstractClientBase.MethodInfo(
    Subscription,
    (request: GetSubscriptionRequest) => {
      return request.serializeBinary();
    },
    Subscription.deserializeBinary
  );

  getSubscription(
    request: GetSubscriptionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Subscription) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.pubsub.v1.Subscriber/GetSubscription',
      request,
      metadata || {},
      this.methodInfoGetSubscription,
      callback);
  }

  methodInfoUpdateSubscription = new grpcWeb.AbstractClientBase.MethodInfo(
    Subscription,
    (request: UpdateSubscriptionRequest) => {
      return request.serializeBinary();
    },
    Subscription.deserializeBinary
  );

  updateSubscription(
    request: UpdateSubscriptionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Subscription) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.pubsub.v1.Subscriber/UpdateSubscription',
      request,
      metadata || {},
      this.methodInfoUpdateSubscription,
      callback);
  }

  methodInfoListSubscriptions = new grpcWeb.AbstractClientBase.MethodInfo(
    ListSubscriptionsResponse,
    (request: ListSubscriptionsRequest) => {
      return request.serializeBinary();
    },
    ListSubscriptionsResponse.deserializeBinary
  );

  listSubscriptions(
    request: ListSubscriptionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListSubscriptionsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.pubsub.v1.Subscriber/ListSubscriptions',
      request,
      metadata || {},
      this.methodInfoListSubscriptions,
      callback);
  }

  methodInfoDeleteSubscription = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteSubscriptionRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteSubscription(
    request: DeleteSubscriptionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.pubsub.v1.Subscriber/DeleteSubscription',
      request,
      metadata || {},
      this.methodInfoDeleteSubscription,
      callback);
  }

  methodInfoModifyAckDeadline = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: ModifyAckDeadlineRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  modifyAckDeadline(
    request: ModifyAckDeadlineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.pubsub.v1.Subscriber/ModifyAckDeadline',
      request,
      metadata || {},
      this.methodInfoModifyAckDeadline,
      callback);
  }

  methodInfoAcknowledge = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: AcknowledgeRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  acknowledge(
    request: AcknowledgeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.pubsub.v1.Subscriber/Acknowledge',
      request,
      metadata || {},
      this.methodInfoAcknowledge,
      callback);
  }

  methodInfoPull = new grpcWeb.AbstractClientBase.MethodInfo(
    PullResponse,
    (request: PullRequest) => {
      return request.serializeBinary();
    },
    PullResponse.deserializeBinary
  );

  pull(
    request: PullRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: PullResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.pubsub.v1.Subscriber/Pull',
      request,
      metadata || {},
      this.methodInfoPull,
      callback);
  }

  methodInfoModifyPushConfig = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: ModifyPushConfigRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  modifyPushConfig(
    request: ModifyPushConfigRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.pubsub.v1.Subscriber/ModifyPushConfig',
      request,
      metadata || {},
      this.methodInfoModifyPushConfig,
      callback);
  }

  methodInfoGetSnapshot = new grpcWeb.AbstractClientBase.MethodInfo(
    Snapshot,
    (request: GetSnapshotRequest) => {
      return request.serializeBinary();
    },
    Snapshot.deserializeBinary
  );

  getSnapshot(
    request: GetSnapshotRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Snapshot) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.pubsub.v1.Subscriber/GetSnapshot',
      request,
      metadata || {},
      this.methodInfoGetSnapshot,
      callback);
  }

  methodInfoListSnapshots = new grpcWeb.AbstractClientBase.MethodInfo(
    ListSnapshotsResponse,
    (request: ListSnapshotsRequest) => {
      return request.serializeBinary();
    },
    ListSnapshotsResponse.deserializeBinary
  );

  listSnapshots(
    request: ListSnapshotsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListSnapshotsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.pubsub.v1.Subscriber/ListSnapshots',
      request,
      metadata || {},
      this.methodInfoListSnapshots,
      callback);
  }

  methodInfoCreateSnapshot = new grpcWeb.AbstractClientBase.MethodInfo(
    Snapshot,
    (request: CreateSnapshotRequest) => {
      return request.serializeBinary();
    },
    Snapshot.deserializeBinary
  );

  createSnapshot(
    request: CreateSnapshotRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Snapshot) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.pubsub.v1.Subscriber/CreateSnapshot',
      request,
      metadata || {},
      this.methodInfoCreateSnapshot,
      callback);
  }

  methodInfoUpdateSnapshot = new grpcWeb.AbstractClientBase.MethodInfo(
    Snapshot,
    (request: UpdateSnapshotRequest) => {
      return request.serializeBinary();
    },
    Snapshot.deserializeBinary
  );

  updateSnapshot(
    request: UpdateSnapshotRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Snapshot) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.pubsub.v1.Subscriber/UpdateSnapshot',
      request,
      metadata || {},
      this.methodInfoUpdateSnapshot,
      callback);
  }

  methodInfoDeleteSnapshot = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteSnapshotRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteSnapshot(
    request: DeleteSnapshotRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.pubsub.v1.Subscriber/DeleteSnapshot',
      request,
      metadata || {},
      this.methodInfoDeleteSnapshot,
      callback);
  }

  methodInfoSeek = new grpcWeb.AbstractClientBase.MethodInfo(
    SeekResponse,
    (request: SeekRequest) => {
      return request.serializeBinary();
    },
    SeekResponse.deserializeBinary
  );

  seek(
    request: SeekRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SeekResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.pubsub.v1.Subscriber/Seek',
      request,
      metadata || {},
      this.methodInfoSeek,
      callback);
  }

}

