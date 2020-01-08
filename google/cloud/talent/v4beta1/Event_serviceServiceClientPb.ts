/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.talent.v4beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';
import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb';
import * as google_cloud_talent_v4beta1_event_pb from '../../../../google/cloud/talent/v4beta1/event_pb';

import {CreateClientEventRequest} from './event_service_pb';

export class EventServiceClient {
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

  methodInfoCreateClientEvent = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_talent_v4beta1_event_pb.ClientEvent,
    (request: CreateClientEventRequest) => {
      return request.serializeBinary();
    },
    google_cloud_talent_v4beta1_event_pb.ClientEvent.deserializeBinary
  );

  createClientEvent(
    request: CreateClientEventRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_talent_v4beta1_event_pb.ClientEvent) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.talent.v4beta1.EventService/CreateClientEvent',
      request,
      metadata || {},
      this.methodInfoCreateClientEvent,
      callback);
  }

}

