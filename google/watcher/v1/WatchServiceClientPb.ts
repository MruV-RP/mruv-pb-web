/**
 * @fileoverview gRPC-Web generated client stub for google.watcher.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';

import {
  ChangeBatch,
  Request} from './watch_pb';

export class WatcherClient {
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

  methodInfoWatch = new grpcWeb.AbstractClientBase.MethodInfo(
    ChangeBatch,
    (request: Request) => {
      return request.serializeBinary();
    },
    ChangeBatch.deserializeBinary
  );

  watch(
    request: Request,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/google.watcher.v1.Watcher/Watch',
      request,
      metadata || {},
      this.methodInfoWatch);
  }

}

