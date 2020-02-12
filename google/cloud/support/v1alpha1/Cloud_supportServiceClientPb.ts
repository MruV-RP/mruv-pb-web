/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.support.v1alpha1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_cloud_support_common_pb from '../../../../google/cloud/support/common_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';

import {
  CreateCaseRequest,
  CreateCommentRequest,
  GetCaseRequest,
  GetIssueTaxonomyRequest,
  GetSupportAccountRequest,
  ListCasesRequest,
  ListCasesResponse,
  ListCommentsRequest,
  ListCommentsResponse,
  ListSupportAccountsRequest,
  ListSupportAccountsResponse,
  UpdateCaseRequest} from './cloud_support_pb';

export class CloudSupportClient {
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

  methodInfoGetSupportAccount = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_support_common_pb.SupportAccount,
    (request: GetSupportAccountRequest) => {
      return request.serializeBinary();
    },
    google_cloud_support_common_pb.SupportAccount.deserializeBinary
  );

  getSupportAccount(
    request: GetSupportAccountRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_support_common_pb.SupportAccount) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.support.v1alpha1.CloudSupport/GetSupportAccount',
      request,
      metadata || {},
      this.methodInfoGetSupportAccount,
      callback);
  }

  methodInfoListSupportAccounts = new grpcWeb.AbstractClientBase.MethodInfo(
    ListSupportAccountsResponse,
    (request: ListSupportAccountsRequest) => {
      return request.serializeBinary();
    },
    ListSupportAccountsResponse.deserializeBinary
  );

  listSupportAccounts(
    request: ListSupportAccountsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListSupportAccountsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.support.v1alpha1.CloudSupport/ListSupportAccounts',
      request,
      metadata || {},
      this.methodInfoListSupportAccounts,
      callback);
  }

  methodInfoGetCase = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_support_common_pb.Case,
    (request: GetCaseRequest) => {
      return request.serializeBinary();
    },
    google_cloud_support_common_pb.Case.deserializeBinary
  );

  getCase(
    request: GetCaseRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_support_common_pb.Case) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.support.v1alpha1.CloudSupport/GetCase',
      request,
      metadata || {},
      this.methodInfoGetCase,
      callback);
  }

  methodInfoListCases = new grpcWeb.AbstractClientBase.MethodInfo(
    ListCasesResponse,
    (request: ListCasesRequest) => {
      return request.serializeBinary();
    },
    ListCasesResponse.deserializeBinary
  );

  listCases(
    request: ListCasesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListCasesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.support.v1alpha1.CloudSupport/ListCases',
      request,
      metadata || {},
      this.methodInfoListCases,
      callback);
  }

  methodInfoListComments = new grpcWeb.AbstractClientBase.MethodInfo(
    ListCommentsResponse,
    (request: ListCommentsRequest) => {
      return request.serializeBinary();
    },
    ListCommentsResponse.deserializeBinary
  );

  listComments(
    request: ListCommentsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListCommentsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.support.v1alpha1.CloudSupport/ListComments',
      request,
      metadata || {},
      this.methodInfoListComments,
      callback);
  }

  methodInfoCreateCase = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_support_common_pb.Case,
    (request: CreateCaseRequest) => {
      return request.serializeBinary();
    },
    google_cloud_support_common_pb.Case.deserializeBinary
  );

  createCase(
    request: CreateCaseRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_support_common_pb.Case) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.support.v1alpha1.CloudSupport/CreateCase',
      request,
      metadata || {},
      this.methodInfoCreateCase,
      callback);
  }

  methodInfoUpdateCase = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_support_common_pb.Case,
    (request: UpdateCaseRequest) => {
      return request.serializeBinary();
    },
    google_cloud_support_common_pb.Case.deserializeBinary
  );

  updateCase(
    request: UpdateCaseRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_support_common_pb.Case) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.support.v1alpha1.CloudSupport/UpdateCase',
      request,
      metadata || {},
      this.methodInfoUpdateCase,
      callback);
  }

  methodInfoCreateComment = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_support_common_pb.Comment,
    (request: CreateCommentRequest) => {
      return request.serializeBinary();
    },
    google_cloud_support_common_pb.Comment.deserializeBinary
  );

  createComment(
    request: CreateCommentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_support_common_pb.Comment) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.support.v1alpha1.CloudSupport/CreateComment',
      request,
      metadata || {},
      this.methodInfoCreateComment,
      callback);
  }

  methodInfoGetIssueTaxonomy = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_support_common_pb.IssueTaxonomy,
    (request: GetIssueTaxonomyRequest) => {
      return request.serializeBinary();
    },
    google_cloud_support_common_pb.IssueTaxonomy.deserializeBinary
  );

  getIssueTaxonomy(
    request: GetIssueTaxonomyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_support_common_pb.IssueTaxonomy) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.support.v1alpha1.CloudSupport/GetIssueTaxonomy',
      request,
      metadata || {},
      this.methodInfoGetIssueTaxonomy,
      callback);
  }

}

