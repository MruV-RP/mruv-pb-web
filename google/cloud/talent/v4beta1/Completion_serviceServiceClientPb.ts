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
import * as google_cloud_talent_v4beta1_common_pb from '../../../../google/cloud/talent/v4beta1/common_pb';

import {
  CompleteQueryRequest,
  CompleteQueryResponse} from './completion_service_pb';

export class CompletionClient {
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

  methodInfoCompleteQuery = new grpcWeb.AbstractClientBase.MethodInfo(
    CompleteQueryResponse,
    (request: CompleteQueryRequest) => {
      return request.serializeBinary();
    },
    CompleteQueryResponse.deserializeBinary
  );

  completeQuery(
    request: CompleteQueryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: CompleteQueryResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.talent.v4beta1.Completion/CompleteQuery',
      request,
      metadata || {},
      this.methodInfoCompleteQuery,
      callback);
  }

}

