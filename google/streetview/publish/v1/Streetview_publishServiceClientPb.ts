/**
 * @fileoverview gRPC-Web generated client stub for google.streetview.publish.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_streetview_publish_v1_resources_pb from '../../../../google/streetview/publish/v1/resources_pb';
import * as google_streetview_publish_v1_rpcmessages_pb from '../../../../google/streetview/publish/v1/rpcmessages_pb';

export class StreetViewPublishServiceClient {
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

  methodInfoStartUpload = new grpcWeb.AbstractClientBase.MethodInfo(
    google_streetview_publish_v1_resources_pb.UploadRef,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    google_streetview_publish_v1_resources_pb.UploadRef.deserializeBinary
  );

  startUpload(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_streetview_publish_v1_resources_pb.UploadRef) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.streetview.publish.v1.StreetViewPublishService/StartUpload',
      request,
      metadata || {},
      this.methodInfoStartUpload,
      callback);
  }

  methodInfoCreatePhoto = new grpcWeb.AbstractClientBase.MethodInfo(
    google_streetview_publish_v1_resources_pb.Photo,
    (request: google_streetview_publish_v1_rpcmessages_pb.CreatePhotoRequest) => {
      return request.serializeBinary();
    },
    google_streetview_publish_v1_resources_pb.Photo.deserializeBinary
  );

  createPhoto(
    request: google_streetview_publish_v1_rpcmessages_pb.CreatePhotoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_streetview_publish_v1_resources_pb.Photo) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.streetview.publish.v1.StreetViewPublishService/CreatePhoto',
      request,
      metadata || {},
      this.methodInfoCreatePhoto,
      callback);
  }

  methodInfoGetPhoto = new grpcWeb.AbstractClientBase.MethodInfo(
    google_streetview_publish_v1_resources_pb.Photo,
    (request: google_streetview_publish_v1_rpcmessages_pb.GetPhotoRequest) => {
      return request.serializeBinary();
    },
    google_streetview_publish_v1_resources_pb.Photo.deserializeBinary
  );

  getPhoto(
    request: google_streetview_publish_v1_rpcmessages_pb.GetPhotoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_streetview_publish_v1_resources_pb.Photo) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.streetview.publish.v1.StreetViewPublishService/GetPhoto',
      request,
      metadata || {},
      this.methodInfoGetPhoto,
      callback);
  }

  methodInfoBatchGetPhotos = new grpcWeb.AbstractClientBase.MethodInfo(
    google_streetview_publish_v1_rpcmessages_pb.BatchGetPhotosResponse,
    (request: google_streetview_publish_v1_rpcmessages_pb.BatchGetPhotosRequest) => {
      return request.serializeBinary();
    },
    google_streetview_publish_v1_rpcmessages_pb.BatchGetPhotosResponse.deserializeBinary
  );

  batchGetPhotos(
    request: google_streetview_publish_v1_rpcmessages_pb.BatchGetPhotosRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_streetview_publish_v1_rpcmessages_pb.BatchGetPhotosResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.streetview.publish.v1.StreetViewPublishService/BatchGetPhotos',
      request,
      metadata || {},
      this.methodInfoBatchGetPhotos,
      callback);
  }

  methodInfoListPhotos = new grpcWeb.AbstractClientBase.MethodInfo(
    google_streetview_publish_v1_rpcmessages_pb.ListPhotosResponse,
    (request: google_streetview_publish_v1_rpcmessages_pb.ListPhotosRequest) => {
      return request.serializeBinary();
    },
    google_streetview_publish_v1_rpcmessages_pb.ListPhotosResponse.deserializeBinary
  );

  listPhotos(
    request: google_streetview_publish_v1_rpcmessages_pb.ListPhotosRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_streetview_publish_v1_rpcmessages_pb.ListPhotosResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.streetview.publish.v1.StreetViewPublishService/ListPhotos',
      request,
      metadata || {},
      this.methodInfoListPhotos,
      callback);
  }

  methodInfoUpdatePhoto = new grpcWeb.AbstractClientBase.MethodInfo(
    google_streetview_publish_v1_resources_pb.Photo,
    (request: google_streetview_publish_v1_rpcmessages_pb.UpdatePhotoRequest) => {
      return request.serializeBinary();
    },
    google_streetview_publish_v1_resources_pb.Photo.deserializeBinary
  );

  updatePhoto(
    request: google_streetview_publish_v1_rpcmessages_pb.UpdatePhotoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_streetview_publish_v1_resources_pb.Photo) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.streetview.publish.v1.StreetViewPublishService/UpdatePhoto',
      request,
      metadata || {},
      this.methodInfoUpdatePhoto,
      callback);
  }

  methodInfoBatchUpdatePhotos = new grpcWeb.AbstractClientBase.MethodInfo(
    google_streetview_publish_v1_rpcmessages_pb.BatchUpdatePhotosResponse,
    (request: google_streetview_publish_v1_rpcmessages_pb.BatchUpdatePhotosRequest) => {
      return request.serializeBinary();
    },
    google_streetview_publish_v1_rpcmessages_pb.BatchUpdatePhotosResponse.deserializeBinary
  );

  batchUpdatePhotos(
    request: google_streetview_publish_v1_rpcmessages_pb.BatchUpdatePhotosRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_streetview_publish_v1_rpcmessages_pb.BatchUpdatePhotosResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.streetview.publish.v1.StreetViewPublishService/BatchUpdatePhotos',
      request,
      metadata || {},
      this.methodInfoBatchUpdatePhotos,
      callback);
  }

  methodInfoDeletePhoto = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: google_streetview_publish_v1_rpcmessages_pb.DeletePhotoRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deletePhoto(
    request: google_streetview_publish_v1_rpcmessages_pb.DeletePhotoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.streetview.publish.v1.StreetViewPublishService/DeletePhoto',
      request,
      metadata || {},
      this.methodInfoDeletePhoto,
      callback);
  }

  methodInfoBatchDeletePhotos = new grpcWeb.AbstractClientBase.MethodInfo(
    google_streetview_publish_v1_rpcmessages_pb.BatchDeletePhotosResponse,
    (request: google_streetview_publish_v1_rpcmessages_pb.BatchDeletePhotosRequest) => {
      return request.serializeBinary();
    },
    google_streetview_publish_v1_rpcmessages_pb.BatchDeletePhotosResponse.deserializeBinary
  );

  batchDeletePhotos(
    request: google_streetview_publish_v1_rpcmessages_pb.BatchDeletePhotosRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_streetview_publish_v1_rpcmessages_pb.BatchDeletePhotosResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.streetview.publish.v1.StreetViewPublishService/BatchDeletePhotos',
      request,
      metadata || {},
      this.methodInfoBatchDeletePhotos,
      callback);
  }

}

