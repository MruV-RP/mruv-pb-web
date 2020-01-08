/**
 * @fileoverview gRPC-Web generated client stub for google.genomics.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_longrunning_operations_pb from '../../../google/longrunning/operations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';

import {
  CallSet,
  CreateCallSetRequest,
  CreateVariantRequest,
  CreateVariantSetRequest,
  DeleteCallSetRequest,
  DeleteVariantRequest,
  DeleteVariantSetRequest,
  ExportVariantSetRequest,
  GetCallSetRequest,
  GetVariantRequest,
  GetVariantSetRequest,
  ImportVariantsRequest,
  MergeVariantsRequest,
  SearchCallSetsRequest,
  SearchCallSetsResponse,
  SearchVariantSetsRequest,
  SearchVariantSetsResponse,
  SearchVariantsRequest,
  SearchVariantsResponse,
  StreamVariantsRequest,
  StreamVariantsResponse,
  UpdateCallSetRequest,
  UpdateVariantRequest,
  UpdateVariantSetRequest,
  Variant,
  VariantSet} from './variants_pb';

export class StreamingVariantServiceClient {
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

  methodInfoStreamVariants = new grpcWeb.AbstractClientBase.MethodInfo(
    StreamVariantsResponse,
    (request: StreamVariantsRequest) => {
      return request.serializeBinary();
    },
    StreamVariantsResponse.deserializeBinary
  );

  streamVariants(
    request: StreamVariantsRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/google.genomics.v1.StreamingVariantService/StreamVariants',
      request,
      metadata || {},
      this.methodInfoStreamVariants);
  }

}

export class VariantServiceV1Client {
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

  methodInfoImportVariants = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: ImportVariantsRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  importVariants(
    request: ImportVariantsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.genomics.v1.VariantServiceV1/ImportVariants',
      request,
      metadata || {},
      this.methodInfoImportVariants,
      callback);
  }

  methodInfoCreateVariantSet = new grpcWeb.AbstractClientBase.MethodInfo(
    VariantSet,
    (request: CreateVariantSetRequest) => {
      return request.serializeBinary();
    },
    VariantSet.deserializeBinary
  );

  createVariantSet(
    request: CreateVariantSetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: VariantSet) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.genomics.v1.VariantServiceV1/CreateVariantSet',
      request,
      metadata || {},
      this.methodInfoCreateVariantSet,
      callback);
  }

  methodInfoExportVariantSet = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: ExportVariantSetRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  exportVariantSet(
    request: ExportVariantSetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.genomics.v1.VariantServiceV1/ExportVariantSet',
      request,
      metadata || {},
      this.methodInfoExportVariantSet,
      callback);
  }

  methodInfoGetVariantSet = new grpcWeb.AbstractClientBase.MethodInfo(
    VariantSet,
    (request: GetVariantSetRequest) => {
      return request.serializeBinary();
    },
    VariantSet.deserializeBinary
  );

  getVariantSet(
    request: GetVariantSetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: VariantSet) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.genomics.v1.VariantServiceV1/GetVariantSet',
      request,
      metadata || {},
      this.methodInfoGetVariantSet,
      callback);
  }

  methodInfoSearchVariantSets = new grpcWeb.AbstractClientBase.MethodInfo(
    SearchVariantSetsResponse,
    (request: SearchVariantSetsRequest) => {
      return request.serializeBinary();
    },
    SearchVariantSetsResponse.deserializeBinary
  );

  searchVariantSets(
    request: SearchVariantSetsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SearchVariantSetsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.genomics.v1.VariantServiceV1/SearchVariantSets',
      request,
      metadata || {},
      this.methodInfoSearchVariantSets,
      callback);
  }

  methodInfoDeleteVariantSet = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteVariantSetRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteVariantSet(
    request: DeleteVariantSetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.genomics.v1.VariantServiceV1/DeleteVariantSet',
      request,
      metadata || {},
      this.methodInfoDeleteVariantSet,
      callback);
  }

  methodInfoUpdateVariantSet = new grpcWeb.AbstractClientBase.MethodInfo(
    VariantSet,
    (request: UpdateVariantSetRequest) => {
      return request.serializeBinary();
    },
    VariantSet.deserializeBinary
  );

  updateVariantSet(
    request: UpdateVariantSetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: VariantSet) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.genomics.v1.VariantServiceV1/UpdateVariantSet',
      request,
      metadata || {},
      this.methodInfoUpdateVariantSet,
      callback);
  }

  methodInfoSearchVariants = new grpcWeb.AbstractClientBase.MethodInfo(
    SearchVariantsResponse,
    (request: SearchVariantsRequest) => {
      return request.serializeBinary();
    },
    SearchVariantsResponse.deserializeBinary
  );

  searchVariants(
    request: SearchVariantsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SearchVariantsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.genomics.v1.VariantServiceV1/SearchVariants',
      request,
      metadata || {},
      this.methodInfoSearchVariants,
      callback);
  }

  methodInfoCreateVariant = new grpcWeb.AbstractClientBase.MethodInfo(
    Variant,
    (request: CreateVariantRequest) => {
      return request.serializeBinary();
    },
    Variant.deserializeBinary
  );

  createVariant(
    request: CreateVariantRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Variant) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.genomics.v1.VariantServiceV1/CreateVariant',
      request,
      metadata || {},
      this.methodInfoCreateVariant,
      callback);
  }

  methodInfoUpdateVariant = new grpcWeb.AbstractClientBase.MethodInfo(
    Variant,
    (request: UpdateVariantRequest) => {
      return request.serializeBinary();
    },
    Variant.deserializeBinary
  );

  updateVariant(
    request: UpdateVariantRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Variant) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.genomics.v1.VariantServiceV1/UpdateVariant',
      request,
      metadata || {},
      this.methodInfoUpdateVariant,
      callback);
  }

  methodInfoDeleteVariant = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteVariantRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteVariant(
    request: DeleteVariantRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.genomics.v1.VariantServiceV1/DeleteVariant',
      request,
      metadata || {},
      this.methodInfoDeleteVariant,
      callback);
  }

  methodInfoGetVariant = new grpcWeb.AbstractClientBase.MethodInfo(
    Variant,
    (request: GetVariantRequest) => {
      return request.serializeBinary();
    },
    Variant.deserializeBinary
  );

  getVariant(
    request: GetVariantRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Variant) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.genomics.v1.VariantServiceV1/GetVariant',
      request,
      metadata || {},
      this.methodInfoGetVariant,
      callback);
  }

  methodInfoMergeVariants = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: MergeVariantsRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  mergeVariants(
    request: MergeVariantsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.genomics.v1.VariantServiceV1/MergeVariants',
      request,
      metadata || {},
      this.methodInfoMergeVariants,
      callback);
  }

  methodInfoSearchCallSets = new grpcWeb.AbstractClientBase.MethodInfo(
    SearchCallSetsResponse,
    (request: SearchCallSetsRequest) => {
      return request.serializeBinary();
    },
    SearchCallSetsResponse.deserializeBinary
  );

  searchCallSets(
    request: SearchCallSetsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SearchCallSetsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.genomics.v1.VariantServiceV1/SearchCallSets',
      request,
      metadata || {},
      this.methodInfoSearchCallSets,
      callback);
  }

  methodInfoCreateCallSet = new grpcWeb.AbstractClientBase.MethodInfo(
    CallSet,
    (request: CreateCallSetRequest) => {
      return request.serializeBinary();
    },
    CallSet.deserializeBinary
  );

  createCallSet(
    request: CreateCallSetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: CallSet) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.genomics.v1.VariantServiceV1/CreateCallSet',
      request,
      metadata || {},
      this.methodInfoCreateCallSet,
      callback);
  }

  methodInfoUpdateCallSet = new grpcWeb.AbstractClientBase.MethodInfo(
    CallSet,
    (request: UpdateCallSetRequest) => {
      return request.serializeBinary();
    },
    CallSet.deserializeBinary
  );

  updateCallSet(
    request: UpdateCallSetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: CallSet) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.genomics.v1.VariantServiceV1/UpdateCallSet',
      request,
      metadata || {},
      this.methodInfoUpdateCallSet,
      callback);
  }

  methodInfoDeleteCallSet = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteCallSetRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteCallSet(
    request: DeleteCallSetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.genomics.v1.VariantServiceV1/DeleteCallSet',
      request,
      metadata || {},
      this.methodInfoDeleteCallSet,
      callback);
  }

  methodInfoGetCallSet = new grpcWeb.AbstractClientBase.MethodInfo(
    CallSet,
    (request: GetCallSetRequest) => {
      return request.serializeBinary();
    },
    CallSet.deserializeBinary
  );

  getCallSet(
    request: GetCallSetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: CallSet) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.genomics.v1.VariantServiceV1/GetCallSet',
      request,
      metadata || {},
      this.methodInfoGetCallSet,
      callback);
  }

}

