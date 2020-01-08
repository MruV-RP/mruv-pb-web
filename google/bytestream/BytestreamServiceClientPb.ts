/**
 * @fileoverview gRPC-Web generated client stub for google.bytestream
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../google/api/annotations_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';

import {
  QueryWriteStatusRequest,
  QueryWriteStatusResponse,
  ReadRequest,
  ReadResponse,
  WriteRequest,
  WriteResponse} from './bytestream_pb';

export class ByteStreamClient {
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

  methodInfoRead = new grpcWeb.AbstractClientBase.MethodInfo(
    ReadResponse,
    (request: ReadRequest) => {
      return request.serializeBinary();
    },
    ReadResponse.deserializeBinary
  );

  read(
    request: ReadRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/google.bytestream.ByteStream/Read',
      request,
      metadata || {},
      this.methodInfoRead);
  }

  methodInfoQueryWriteStatus = new grpcWeb.AbstractClientBase.MethodInfo(
    QueryWriteStatusResponse,
    (request: QueryWriteStatusRequest) => {
      return request.serializeBinary();
    },
    QueryWriteStatusResponse.deserializeBinary
  );

  queryWriteStatus(
    request: QueryWriteStatusRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: QueryWriteStatusResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.bytestream.ByteStream/QueryWriteStatus',
      request,
      metadata || {},
      this.methodInfoQueryWriteStatus,
      callback);
  }

}

