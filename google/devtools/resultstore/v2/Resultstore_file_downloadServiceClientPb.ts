/**
 * @fileoverview gRPC-Web generated client stub for google.devtools.resultstore.v2
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';

import {
  GetFileRequest,
  GetFileResponse,
  GetFileTailRequest,
  GetFileTailResponse} from './resultstore_file_download_pb';

export class ResultStoreFileDownloadClient {
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

  methodInfoGetFile = new grpcWeb.AbstractClientBase.MethodInfo(
    GetFileResponse,
    (request: GetFileRequest) => {
      return request.serializeBinary();
    },
    GetFileResponse.deserializeBinary
  );

  getFile(
    request: GetFileRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/google.devtools.resultstore.v2.ResultStoreFileDownload/GetFile',
      request,
      metadata || {},
      this.methodInfoGetFile);
  }

  methodInfoGetFileTail = new grpcWeb.AbstractClientBase.MethodInfo(
    GetFileTailResponse,
    (request: GetFileTailRequest) => {
      return request.serializeBinary();
    },
    GetFileTailResponse.deserializeBinary
  );

  getFileTail(
    request: GetFileTailRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetFileTailResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.resultstore.v2.ResultStoreFileDownload/GetFileTail',
      request,
      metadata || {},
      this.methodInfoGetFileTail,
      callback);
  }

}

