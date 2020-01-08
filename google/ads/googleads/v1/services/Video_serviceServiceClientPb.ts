/**
 * @fileoverview gRPC-Web generated client stub for google.ads.googleads.v1.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v1_resources_video_pb from '../../../../../google/ads/googleads/v1/resources/video_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

import {GetVideoRequest} from './video_service_pb';

export class VideoServiceClient {
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

  methodInfoGetVideo = new grpcWeb.AbstractClientBase.MethodInfo(
    google_ads_googleads_v1_resources_video_pb.Video,
    (request: GetVideoRequest) => {
      return request.serializeBinary();
    },
    google_ads_googleads_v1_resources_video_pb.Video.deserializeBinary
  );

  getVideo(
    request: GetVideoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v1_resources_video_pb.Video) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v1.services.VideoService/GetVideo',
      request,
      metadata || {},
      this.methodInfoGetVideo,
      callback);
  }

}

