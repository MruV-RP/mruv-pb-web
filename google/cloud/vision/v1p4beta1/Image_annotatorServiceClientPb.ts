/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.vision.v1p4beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';
import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb';
import * as google_cloud_vision_v1p4beta1_face_pb from '../../../../google/cloud/vision/v1p4beta1/face_pb';
import * as google_cloud_vision_v1p4beta1_geometry_pb from '../../../../google/cloud/vision/v1p4beta1/geometry_pb';
import * as google_cloud_vision_v1p4beta1_product_search_pb from '../../../../google/cloud/vision/v1p4beta1/product_search_pb';
import * as google_cloud_vision_v1p4beta1_text_annotation_pb from '../../../../google/cloud/vision/v1p4beta1/text_annotation_pb';
import * as google_cloud_vision_v1p4beta1_web_detection_pb from '../../../../google/cloud/vision/v1p4beta1/web_detection_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_rpc_status_pb from '../../../../google/rpc/status_pb';
import * as google_type_color_pb from '../../../../google/type/color_pb';
import * as google_type_latlng_pb from '../../../../google/type/latlng_pb';

import {
  AsyncBatchAnnotateFilesRequest,
  AsyncBatchAnnotateImagesRequest,
  BatchAnnotateFilesRequest,
  BatchAnnotateFilesResponse,
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
        '/google.cloud.vision.v1p4beta1.ImageAnnotator/BatchAnnotateImages',
      request,
      metadata || {},
      this.methodInfoBatchAnnotateImages,
      callback);
  }

  methodInfoBatchAnnotateFiles = new grpcWeb.AbstractClientBase.MethodInfo(
    BatchAnnotateFilesResponse,
    (request: BatchAnnotateFilesRequest) => {
      return request.serializeBinary();
    },
    BatchAnnotateFilesResponse.deserializeBinary
  );

  batchAnnotateFiles(
    request: BatchAnnotateFilesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: BatchAnnotateFilesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.vision.v1p4beta1.ImageAnnotator/BatchAnnotateFiles',
      request,
      metadata || {},
      this.methodInfoBatchAnnotateFiles,
      callback);
  }

  methodInfoAsyncBatchAnnotateImages = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: AsyncBatchAnnotateImagesRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  asyncBatchAnnotateImages(
    request: AsyncBatchAnnotateImagesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.vision.v1p4beta1.ImageAnnotator/AsyncBatchAnnotateImages',
      request,
      metadata || {},
      this.methodInfoAsyncBatchAnnotateImages,
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
        '/google.cloud.vision.v1p4beta1.ImageAnnotator/AsyncBatchAnnotateFiles',
      request,
      metadata || {},
      this.methodInfoAsyncBatchAnnotateFiles,
      callback);
  }

}

