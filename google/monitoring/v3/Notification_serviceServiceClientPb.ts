/**
 * @fileoverview gRPC-Web generated client stub for google.monitoring.v3
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_monitoring_v3_notification_pb from '../../../google/monitoring/v3/notification_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_api_client_pb from '../../../google/api/client_pb';

import {
  CreateNotificationChannelRequest,
  DeleteNotificationChannelRequest,
  GetNotificationChannelDescriptorRequest,
  GetNotificationChannelRequest,
  GetNotificationChannelVerificationCodeRequest,
  GetNotificationChannelVerificationCodeResponse,
  ListNotificationChannelDescriptorsRequest,
  ListNotificationChannelDescriptorsResponse,
  ListNotificationChannelsRequest,
  ListNotificationChannelsResponse,
  SendNotificationChannelVerificationCodeRequest,
  UpdateNotificationChannelRequest,
  VerifyNotificationChannelRequest} from './notification_service_pb';

export class NotificationChannelServiceClient {
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

  methodInfoListNotificationChannelDescriptors = new grpcWeb.AbstractClientBase.MethodInfo(
    ListNotificationChannelDescriptorsResponse,
    (request: ListNotificationChannelDescriptorsRequest) => {
      return request.serializeBinary();
    },
    ListNotificationChannelDescriptorsResponse.deserializeBinary
  );

  listNotificationChannelDescriptors(
    request: ListNotificationChannelDescriptorsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListNotificationChannelDescriptorsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.monitoring.v3.NotificationChannelService/ListNotificationChannelDescriptors',
      request,
      metadata || {},
      this.methodInfoListNotificationChannelDescriptors,
      callback);
  }

  methodInfoGetNotificationChannelDescriptor = new grpcWeb.AbstractClientBase.MethodInfo(
    google_monitoring_v3_notification_pb.NotificationChannelDescriptor,
    (request: GetNotificationChannelDescriptorRequest) => {
      return request.serializeBinary();
    },
    google_monitoring_v3_notification_pb.NotificationChannelDescriptor.deserializeBinary
  );

  getNotificationChannelDescriptor(
    request: GetNotificationChannelDescriptorRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_monitoring_v3_notification_pb.NotificationChannelDescriptor) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.monitoring.v3.NotificationChannelService/GetNotificationChannelDescriptor',
      request,
      metadata || {},
      this.methodInfoGetNotificationChannelDescriptor,
      callback);
  }

  methodInfoListNotificationChannels = new grpcWeb.AbstractClientBase.MethodInfo(
    ListNotificationChannelsResponse,
    (request: ListNotificationChannelsRequest) => {
      return request.serializeBinary();
    },
    ListNotificationChannelsResponse.deserializeBinary
  );

  listNotificationChannels(
    request: ListNotificationChannelsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListNotificationChannelsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.monitoring.v3.NotificationChannelService/ListNotificationChannels',
      request,
      metadata || {},
      this.methodInfoListNotificationChannels,
      callback);
  }

  methodInfoGetNotificationChannel = new grpcWeb.AbstractClientBase.MethodInfo(
    google_monitoring_v3_notification_pb.NotificationChannel,
    (request: GetNotificationChannelRequest) => {
      return request.serializeBinary();
    },
    google_monitoring_v3_notification_pb.NotificationChannel.deserializeBinary
  );

  getNotificationChannel(
    request: GetNotificationChannelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_monitoring_v3_notification_pb.NotificationChannel) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.monitoring.v3.NotificationChannelService/GetNotificationChannel',
      request,
      metadata || {},
      this.methodInfoGetNotificationChannel,
      callback);
  }

  methodInfoCreateNotificationChannel = new grpcWeb.AbstractClientBase.MethodInfo(
    google_monitoring_v3_notification_pb.NotificationChannel,
    (request: CreateNotificationChannelRequest) => {
      return request.serializeBinary();
    },
    google_monitoring_v3_notification_pb.NotificationChannel.deserializeBinary
  );

  createNotificationChannel(
    request: CreateNotificationChannelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_monitoring_v3_notification_pb.NotificationChannel) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.monitoring.v3.NotificationChannelService/CreateNotificationChannel',
      request,
      metadata || {},
      this.methodInfoCreateNotificationChannel,
      callback);
  }

  methodInfoUpdateNotificationChannel = new grpcWeb.AbstractClientBase.MethodInfo(
    google_monitoring_v3_notification_pb.NotificationChannel,
    (request: UpdateNotificationChannelRequest) => {
      return request.serializeBinary();
    },
    google_monitoring_v3_notification_pb.NotificationChannel.deserializeBinary
  );

  updateNotificationChannel(
    request: UpdateNotificationChannelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_monitoring_v3_notification_pb.NotificationChannel) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.monitoring.v3.NotificationChannelService/UpdateNotificationChannel',
      request,
      metadata || {},
      this.methodInfoUpdateNotificationChannel,
      callback);
  }

  methodInfoDeleteNotificationChannel = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteNotificationChannelRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteNotificationChannel(
    request: DeleteNotificationChannelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.monitoring.v3.NotificationChannelService/DeleteNotificationChannel',
      request,
      metadata || {},
      this.methodInfoDeleteNotificationChannel,
      callback);
  }

  methodInfoSendNotificationChannelVerificationCode = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: SendNotificationChannelVerificationCodeRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  sendNotificationChannelVerificationCode(
    request: SendNotificationChannelVerificationCodeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.monitoring.v3.NotificationChannelService/SendNotificationChannelVerificationCode',
      request,
      metadata || {},
      this.methodInfoSendNotificationChannelVerificationCode,
      callback);
  }

  methodInfoGetNotificationChannelVerificationCode = new grpcWeb.AbstractClientBase.MethodInfo(
    GetNotificationChannelVerificationCodeResponse,
    (request: GetNotificationChannelVerificationCodeRequest) => {
      return request.serializeBinary();
    },
    GetNotificationChannelVerificationCodeResponse.deserializeBinary
  );

  getNotificationChannelVerificationCode(
    request: GetNotificationChannelVerificationCodeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetNotificationChannelVerificationCodeResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.monitoring.v3.NotificationChannelService/GetNotificationChannelVerificationCode',
      request,
      metadata || {},
      this.methodInfoGetNotificationChannelVerificationCode,
      callback);
  }

  methodInfoVerifyNotificationChannel = new grpcWeb.AbstractClientBase.MethodInfo(
    google_monitoring_v3_notification_pb.NotificationChannel,
    (request: VerifyNotificationChannelRequest) => {
      return request.serializeBinary();
    },
    google_monitoring_v3_notification_pb.NotificationChannel.deserializeBinary
  );

  verifyNotificationChannel(
    request: VerifyNotificationChannelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_monitoring_v3_notification_pb.NotificationChannel) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.monitoring.v3.NotificationChannelService/VerifyNotificationChannel',
      request,
      metadata || {},
      this.methodInfoVerifyNotificationChannel,
      callback);
  }

}

