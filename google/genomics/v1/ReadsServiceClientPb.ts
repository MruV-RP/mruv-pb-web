/**
 * @fileoverview gRPC-Web generated client stub for google.genomics.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_genomics_v1_range_pb from '../../../google/genomics/v1/range_pb';
import * as google_genomics_v1_readalignment_pb from '../../../google/genomics/v1/readalignment_pb';
import * as google_genomics_v1_readgroupset_pb from '../../../google/genomics/v1/readgroupset_pb';
import * as google_longrunning_operations_pb from '../../../google/longrunning/operations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';

import {
  DeleteReadGroupSetRequest,
  ExportReadGroupSetRequest,
  GetReadGroupSetRequest,
  ImportReadGroupSetsRequest,
  ListCoverageBucketsRequest,
  ListCoverageBucketsResponse,
  SearchReadGroupSetsRequest,
  SearchReadGroupSetsResponse,
  SearchReadsRequest,
  SearchReadsResponse,
  StreamReadsRequest,
  StreamReadsResponse,
  UpdateReadGroupSetRequest} from './reads_pb';

export class StreamingReadServiceClient {
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

  methodInfoStreamReads = new grpcWeb.AbstractClientBase.MethodInfo(
    StreamReadsResponse,
    (request: StreamReadsRequest) => {
      return request.serializeBinary();
    },
    StreamReadsResponse.deserializeBinary
  );

  streamReads(
    request: StreamReadsRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/google.genomics.v1.StreamingReadService/StreamReads',
      request,
      metadata || {},
      this.methodInfoStreamReads);
  }

}

export class ReadServiceV1Client {
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

  methodInfoImportReadGroupSets = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: ImportReadGroupSetsRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  importReadGroupSets(
    request: ImportReadGroupSetsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.genomics.v1.ReadServiceV1/ImportReadGroupSets',
      request,
      metadata || {},
      this.methodInfoImportReadGroupSets,
      callback);
  }

  methodInfoExportReadGroupSet = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: ExportReadGroupSetRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  exportReadGroupSet(
    request: ExportReadGroupSetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.genomics.v1.ReadServiceV1/ExportReadGroupSet',
      request,
      metadata || {},
      this.methodInfoExportReadGroupSet,
      callback);
  }

  methodInfoSearchReadGroupSets = new grpcWeb.AbstractClientBase.MethodInfo(
    SearchReadGroupSetsResponse,
    (request: SearchReadGroupSetsRequest) => {
      return request.serializeBinary();
    },
    SearchReadGroupSetsResponse.deserializeBinary
  );

  searchReadGroupSets(
    request: SearchReadGroupSetsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SearchReadGroupSetsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.genomics.v1.ReadServiceV1/SearchReadGroupSets',
      request,
      metadata || {},
      this.methodInfoSearchReadGroupSets,
      callback);
  }

  methodInfoUpdateReadGroupSet = new grpcWeb.AbstractClientBase.MethodInfo(
    google_genomics_v1_readgroupset_pb.ReadGroupSet,
    (request: UpdateReadGroupSetRequest) => {
      return request.serializeBinary();
    },
    google_genomics_v1_readgroupset_pb.ReadGroupSet.deserializeBinary
  );

  updateReadGroupSet(
    request: UpdateReadGroupSetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_genomics_v1_readgroupset_pb.ReadGroupSet) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.genomics.v1.ReadServiceV1/UpdateReadGroupSet',
      request,
      metadata || {},
      this.methodInfoUpdateReadGroupSet,
      callback);
  }

  methodInfoDeleteReadGroupSet = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteReadGroupSetRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteReadGroupSet(
    request: DeleteReadGroupSetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.genomics.v1.ReadServiceV1/DeleteReadGroupSet',
      request,
      metadata || {},
      this.methodInfoDeleteReadGroupSet,
      callback);
  }

  methodInfoGetReadGroupSet = new grpcWeb.AbstractClientBase.MethodInfo(
    google_genomics_v1_readgroupset_pb.ReadGroupSet,
    (request: GetReadGroupSetRequest) => {
      return request.serializeBinary();
    },
    google_genomics_v1_readgroupset_pb.ReadGroupSet.deserializeBinary
  );

  getReadGroupSet(
    request: GetReadGroupSetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_genomics_v1_readgroupset_pb.ReadGroupSet) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.genomics.v1.ReadServiceV1/GetReadGroupSet',
      request,
      metadata || {},
      this.methodInfoGetReadGroupSet,
      callback);
  }

  methodInfoListCoverageBuckets = new grpcWeb.AbstractClientBase.MethodInfo(
    ListCoverageBucketsResponse,
    (request: ListCoverageBucketsRequest) => {
      return request.serializeBinary();
    },
    ListCoverageBucketsResponse.deserializeBinary
  );

  listCoverageBuckets(
    request: ListCoverageBucketsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListCoverageBucketsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.genomics.v1.ReadServiceV1/ListCoverageBuckets',
      request,
      metadata || {},
      this.methodInfoListCoverageBuckets,
      callback);
  }

  methodInfoSearchReads = new grpcWeb.AbstractClientBase.MethodInfo(
    SearchReadsResponse,
    (request: SearchReadsRequest) => {
      return request.serializeBinary();
    },
    SearchReadsResponse.deserializeBinary
  );

  searchReads(
    request: SearchReadsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SearchReadsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.genomics.v1.ReadServiceV1/SearchReads',
      request,
      metadata || {},
      this.methodInfoSearchReads,
      callback);
  }

}

