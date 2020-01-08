/**
 * @fileoverview gRPC-Web generated client stub for google.genomics.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_rpc_status_pb from '../../../google/rpc/status_pb';

import {
  Annotation,
  AnnotationSet,
  BatchCreateAnnotationsRequest,
  BatchCreateAnnotationsResponse,
  CreateAnnotationRequest,
  CreateAnnotationSetRequest,
  DeleteAnnotationRequest,
  DeleteAnnotationSetRequest,
  GetAnnotationRequest,
  GetAnnotationSetRequest,
  SearchAnnotationSetsRequest,
  SearchAnnotationSetsResponse,
  SearchAnnotationsRequest,
  SearchAnnotationsResponse,
  UpdateAnnotationRequest,
  UpdateAnnotationSetRequest} from './annotations_pb';

export class AnnotationServiceV1Client {
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

  methodInfoCreateAnnotationSet = new grpcWeb.AbstractClientBase.MethodInfo(
    AnnotationSet,
    (request: CreateAnnotationSetRequest) => {
      return request.serializeBinary();
    },
    AnnotationSet.deserializeBinary
  );

  createAnnotationSet(
    request: CreateAnnotationSetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AnnotationSet) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.genomics.v1.AnnotationServiceV1/CreateAnnotationSet',
      request,
      metadata || {},
      this.methodInfoCreateAnnotationSet,
      callback);
  }

  methodInfoGetAnnotationSet = new grpcWeb.AbstractClientBase.MethodInfo(
    AnnotationSet,
    (request: GetAnnotationSetRequest) => {
      return request.serializeBinary();
    },
    AnnotationSet.deserializeBinary
  );

  getAnnotationSet(
    request: GetAnnotationSetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AnnotationSet) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.genomics.v1.AnnotationServiceV1/GetAnnotationSet',
      request,
      metadata || {},
      this.methodInfoGetAnnotationSet,
      callback);
  }

  methodInfoUpdateAnnotationSet = new grpcWeb.AbstractClientBase.MethodInfo(
    AnnotationSet,
    (request: UpdateAnnotationSetRequest) => {
      return request.serializeBinary();
    },
    AnnotationSet.deserializeBinary
  );

  updateAnnotationSet(
    request: UpdateAnnotationSetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AnnotationSet) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.genomics.v1.AnnotationServiceV1/UpdateAnnotationSet',
      request,
      metadata || {},
      this.methodInfoUpdateAnnotationSet,
      callback);
  }

  methodInfoDeleteAnnotationSet = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteAnnotationSetRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteAnnotationSet(
    request: DeleteAnnotationSetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.genomics.v1.AnnotationServiceV1/DeleteAnnotationSet',
      request,
      metadata || {},
      this.methodInfoDeleteAnnotationSet,
      callback);
  }

  methodInfoSearchAnnotationSets = new grpcWeb.AbstractClientBase.MethodInfo(
    SearchAnnotationSetsResponse,
    (request: SearchAnnotationSetsRequest) => {
      return request.serializeBinary();
    },
    SearchAnnotationSetsResponse.deserializeBinary
  );

  searchAnnotationSets(
    request: SearchAnnotationSetsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SearchAnnotationSetsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.genomics.v1.AnnotationServiceV1/SearchAnnotationSets',
      request,
      metadata || {},
      this.methodInfoSearchAnnotationSets,
      callback);
  }

  methodInfoCreateAnnotation = new grpcWeb.AbstractClientBase.MethodInfo(
    Annotation,
    (request: CreateAnnotationRequest) => {
      return request.serializeBinary();
    },
    Annotation.deserializeBinary
  );

  createAnnotation(
    request: CreateAnnotationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Annotation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.genomics.v1.AnnotationServiceV1/CreateAnnotation',
      request,
      metadata || {},
      this.methodInfoCreateAnnotation,
      callback);
  }

  methodInfoBatchCreateAnnotations = new grpcWeb.AbstractClientBase.MethodInfo(
    BatchCreateAnnotationsResponse,
    (request: BatchCreateAnnotationsRequest) => {
      return request.serializeBinary();
    },
    BatchCreateAnnotationsResponse.deserializeBinary
  );

  batchCreateAnnotations(
    request: BatchCreateAnnotationsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: BatchCreateAnnotationsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.genomics.v1.AnnotationServiceV1/BatchCreateAnnotations',
      request,
      metadata || {},
      this.methodInfoBatchCreateAnnotations,
      callback);
  }

  methodInfoGetAnnotation = new grpcWeb.AbstractClientBase.MethodInfo(
    Annotation,
    (request: GetAnnotationRequest) => {
      return request.serializeBinary();
    },
    Annotation.deserializeBinary
  );

  getAnnotation(
    request: GetAnnotationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Annotation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.genomics.v1.AnnotationServiceV1/GetAnnotation',
      request,
      metadata || {},
      this.methodInfoGetAnnotation,
      callback);
  }

  methodInfoUpdateAnnotation = new grpcWeb.AbstractClientBase.MethodInfo(
    Annotation,
    (request: UpdateAnnotationRequest) => {
      return request.serializeBinary();
    },
    Annotation.deserializeBinary
  );

  updateAnnotation(
    request: UpdateAnnotationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Annotation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.genomics.v1.AnnotationServiceV1/UpdateAnnotation',
      request,
      metadata || {},
      this.methodInfoUpdateAnnotation,
      callback);
  }

  methodInfoDeleteAnnotation = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteAnnotationRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteAnnotation(
    request: DeleteAnnotationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.genomics.v1.AnnotationServiceV1/DeleteAnnotation',
      request,
      metadata || {},
      this.methodInfoDeleteAnnotation,
      callback);
  }

  methodInfoSearchAnnotations = new grpcWeb.AbstractClientBase.MethodInfo(
    SearchAnnotationsResponse,
    (request: SearchAnnotationsRequest) => {
      return request.serializeBinary();
    },
    SearchAnnotationsResponse.deserializeBinary
  );

  searchAnnotations(
    request: SearchAnnotationsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SearchAnnotationsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.genomics.v1.AnnotationServiceV1/SearchAnnotations',
      request,
      metadata || {},
      this.methodInfoSearchAnnotations,
      callback);
  }

}

