/**
 * @fileoverview gRPC-Web generated client stub for google.genomics.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';

import {
  GetReferenceRequest,
  GetReferenceSetRequest,
  ListBasesRequest,
  ListBasesResponse,
  Reference,
  ReferenceSet,
  SearchReferenceSetsRequest,
  SearchReferenceSetsResponse,
  SearchReferencesRequest,
  SearchReferencesResponse} from './references_pb';

export class ReferenceServiceV1Client {
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

  methodInfoSearchReferenceSets = new grpcWeb.AbstractClientBase.MethodInfo(
    SearchReferenceSetsResponse,
    (request: SearchReferenceSetsRequest) => {
      return request.serializeBinary();
    },
    SearchReferenceSetsResponse.deserializeBinary
  );

  searchReferenceSets(
    request: SearchReferenceSetsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SearchReferenceSetsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.genomics.v1.ReferenceServiceV1/SearchReferenceSets',
      request,
      metadata || {},
      this.methodInfoSearchReferenceSets,
      callback);
  }

  methodInfoGetReferenceSet = new grpcWeb.AbstractClientBase.MethodInfo(
    ReferenceSet,
    (request: GetReferenceSetRequest) => {
      return request.serializeBinary();
    },
    ReferenceSet.deserializeBinary
  );

  getReferenceSet(
    request: GetReferenceSetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ReferenceSet) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.genomics.v1.ReferenceServiceV1/GetReferenceSet',
      request,
      metadata || {},
      this.methodInfoGetReferenceSet,
      callback);
  }

  methodInfoSearchReferences = new grpcWeb.AbstractClientBase.MethodInfo(
    SearchReferencesResponse,
    (request: SearchReferencesRequest) => {
      return request.serializeBinary();
    },
    SearchReferencesResponse.deserializeBinary
  );

  searchReferences(
    request: SearchReferencesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SearchReferencesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.genomics.v1.ReferenceServiceV1/SearchReferences',
      request,
      metadata || {},
      this.methodInfoSearchReferences,
      callback);
  }

  methodInfoGetReference = new grpcWeb.AbstractClientBase.MethodInfo(
    Reference,
    (request: GetReferenceRequest) => {
      return request.serializeBinary();
    },
    Reference.deserializeBinary
  );

  getReference(
    request: GetReferenceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Reference) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.genomics.v1.ReferenceServiceV1/GetReference',
      request,
      metadata || {},
      this.methodInfoGetReference,
      callback);
  }

  methodInfoListBases = new grpcWeb.AbstractClientBase.MethodInfo(
    ListBasesResponse,
    (request: ListBasesRequest) => {
      return request.serializeBinary();
    },
    ListBasesResponse.deserializeBinary
  );

  listBases(
    request: ListBasesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListBasesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.genomics.v1.ReferenceServiceV1/ListBases',
      request,
      metadata || {},
      this.methodInfoListBases,
      callback);
  }

}

