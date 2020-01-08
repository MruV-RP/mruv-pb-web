/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.vision.v1p2beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_cloud_vision_v1p2beta1_geometry_pb from '../../../../google/cloud/vision/v1p2beta1/geometry_pb';
import * as google_cloud_vision_v1p2beta1_text_annotation_pb from '../../../../google/cloud/vision/v1p2beta1/text_annotation_pb';
import * as google_cloud_vision_v1p2beta1_web_detection_pb from '../../../../google/cloud/vision/v1p2beta1/web_detection_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_rpc_status_pb from '../../../../google/rpc/status_pb';
import * as google_type_color_pb from '../../../../google/type/color_pb';
import * as google_type_latlng_pb from '../../../../google/type/latlng_pb';

import {
  AsyncBatchAnnotateFilesRequest,
  BatchAnnotateImagesRequest,
  BatchAnnotateImagesResponse} from './image_annotator_pb';

export class ImageAnnotatorClient {
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

  methodInfoBatchAnnotateImages = new grpcWeb.AbstractClientBase.MethodInfo(
    BatchAnnotateImagesResponse,
    (request: BatchAnnotateImagesRequest) => {
      return request.serializeBinary();
    },
    BatchAnnotateImagesResponse.deserializeBinary
  );

  batchAnnotateImages(
    request: BatchAnnotateImagesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: BatchAnnotateImagesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.vision.v1p2beta1.ImageAnnotator/BatchAnnotateImages',
      request,
      metadata || {},
      this.methodInfoBatchAnnotateImages,
      callback);
  }

  methodInfoAsyncBatchAnnotateFiles = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: AsyncBatchAnnotateFilesRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  asyncBatchAnnotateFiles(
    request: AsyncBatchAnnotateFilesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.vision.v1p2beta1.ImageAnnotator/AsyncBatchAnnotateFiles',
      request,
      metadata || {},
      this.methodInfoAsyncBatchAnnotateFiles,
      callback);
  }

}

