/**
 * @fileoverview gRPC-Web generated client stub for google.ads.googleads.v2.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v2_resources_media_file_pb from '../../../../../google/ads/googleads/v2/resources/media_file_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_rpc_status_pb from '../../../../../google/rpc/status_pb';
import * as google_api_client_pb from '../../../../../google/api/client_pb';

import {
  GetMediaFileRequest,
  MutateMediaFilesRequest,
  MutateMediaFilesResponse} from './media_file_service_pb';

export class MediaFileServiceClient {
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

  methodInfoGetMediaFile = new grpcWeb.AbstractClientBase.MethodInfo(
    google_ads_googleads_v2_resources_media_file_pb.MediaFile,
    (request: GetMediaFileRequest) => {
      return request.serializeBinary();
    },
    google_ads_googleads_v2_resources_media_file_pb.MediaFile.deserializeBinary
  );

  getMediaFile(
    request: GetMediaFileRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v2_resources_media_file_pb.MediaFile) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v2.services.MediaFileService/GetMediaFile',
      request,
      metadata || {},
      this.methodInfoGetMediaFile,
      callback);
  }

  methodInfoMutateMediaFiles = new grpcWeb.AbstractClientBase.MethodInfo(
    MutateMediaFilesResponse,
    (request: MutateMediaFilesRequest) => {
      return request.serializeBinary();
    },
    MutateMediaFilesResponse.deserializeBinary
  );

  mutateMediaFiles(
    request: MutateMediaFilesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MutateMediaFilesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v2.services.MediaFileService/MutateMediaFiles',
      request,
      metadata || {},
      this.methodInfoMutateMediaFiles,
      callback);
  }

}

