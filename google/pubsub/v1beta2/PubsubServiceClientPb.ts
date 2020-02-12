/**
 * @fileoverview gRPC-Web generated client stub for google.pubsub.v1beta2
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';

import {
  AcknowledgeRequest,
  DeleteSubscriptionRequest,
  DeleteTopicRequest,
  GetSubscriptionRequest,
  GetTopicRequest,
  ListSubscriptionsRequest,
  ListSubscriptionsResponse,
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
  Subscription,
  Topic} from './pubsub_pb';

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
        '/google.pubsub.v1beta2.Subscriber/CreateSubscription',
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
        '/google.pubsub.v1beta2.Subscriber/GetSubscription',
      request,
      metadata || {},
      this.methodInfoGetSubscription,
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
        '/google.pubsub.v1beta2.Subscriber/ListSubscriptions',
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
        '/google.pubsub.v1beta2.Subscriber/DeleteSubscription',
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
        '/google.pubsub.v1beta2.Subscriber/ModifyAckDeadline',
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
        '/google.pubsub.v1beta2.Subscriber/Acknowledge',
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
        '/google.pubsub.v1beta2.Subscriber/Pull',
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
        '/google.pubsub.v1beta2.Subscriber/ModifyPushConfig',
      request,
      metadata || {},
      this.methodInfoModifyPushConfig,
      callback);
  }

}

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
        '/google.pubsub.v1beta2.Publisher/CreateTopic',
      request,
      metadata || {},
      this.methodInfoCreateTopic,
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
        '/google.pubsub.v1beta2.Publisher/Publish',
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
        '/google.pubsub.v1beta2.Publisher/GetTopic',
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
        '/google.pubsub.v1beta2.Publisher/ListTopics',
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
        '/google.pubsub.v1beta2.Publisher/ListTopicSubscriptions',
      request,
      metadata || {},
      this.methodInfoListTopicSubscriptions,
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
        '/google.pubsub.v1beta2.Publisher/DeleteTopic',
      request,
      metadata || {},
      this.methodInfoDeleteTopic,
      callback);
  }

}

