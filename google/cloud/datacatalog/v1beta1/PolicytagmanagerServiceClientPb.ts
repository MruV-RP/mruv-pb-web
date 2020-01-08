/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.datacatalog.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';
import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb';
import * as google_api_resource_pb from '../../../../google/api/resource_pb';
import * as google_cloud_datacatalog_v1beta1_timestamps_pb from '../../../../google/cloud/datacatalog/v1beta1/timestamps_pb';
import * as google_iam_v1_iam_policy_pb from '../../../../google/iam/v1/iam_policy_pb';
import * as google_iam_v1_policy_pb from '../../../../google/iam/v1/policy_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';

import {
  CreatePolicyTagRequest,
  CreateTaxonomyRequest,
  DeletePolicyTagRequest,
  DeleteTaxonomyRequest,
  GetPolicyTagRequest,
  GetTaxonomyRequest,
  ListPolicyTagsRequest,
  ListPolicyTagsResponse,
  ListTaxonomiesRequest,
  ListTaxonomiesResponse,
  PolicyTag,
  Taxonomy,
  UpdatePolicyTagRequest,
  UpdateTaxonomyRequest} from './policytagmanager_pb';

export class PolicyTagManagerClient {
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

  methodInfoCreateTaxonomy = new grpcWeb.AbstractClientBase.MethodInfo(
    Taxonomy,
    (request: CreateTaxonomyRequest) => {
      return request.serializeBinary();
    },
    Taxonomy.deserializeBinary
  );

  createTaxonomy(
    request: CreateTaxonomyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Taxonomy) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.datacatalog.v1beta1.PolicyTagManager/CreateTaxonomy',
      request,
      metadata || {},
      this.methodInfoCreateTaxonomy,
      callback);
  }

  methodInfoDeleteTaxonomy = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteTaxonomyRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteTaxonomy(
    request: DeleteTaxonomyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.datacatalog.v1beta1.PolicyTagManager/DeleteTaxonomy',
      request,
      metadata || {},
      this.methodInfoDeleteTaxonomy,
      callback);
  }

  methodInfoUpdateTaxonomy = new grpcWeb.AbstractClientBase.MethodInfo(
    Taxonomy,
    (request: UpdateTaxonomyRequest) => {
      return request.serializeBinary();
    },
    Taxonomy.deserializeBinary
  );

  updateTaxonomy(
    request: UpdateTaxonomyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Taxonomy) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.datacatalog.v1beta1.PolicyTagManager/UpdateTaxonomy',
      request,
      metadata || {},
      this.methodInfoUpdateTaxonomy,
      callback);
  }

  methodInfoListTaxonomies = new grpcWeb.AbstractClientBase.MethodInfo(
    ListTaxonomiesResponse,
    (request: ListTaxonomiesRequest) => {
      return request.serializeBinary();
    },
    ListTaxonomiesResponse.deserializeBinary
  );

  listTaxonomies(
    request: ListTaxonomiesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListTaxonomiesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.datacatalog.v1beta1.PolicyTagManager/ListTaxonomies',
      request,
      metadata || {},
      this.methodInfoListTaxonomies,
      callback);
  }

  methodInfoGetTaxonomy = new grpcWeb.AbstractClientBase.MethodInfo(
    Taxonomy,
    (request: GetTaxonomyRequest) => {
      return request.serializeBinary();
    },
    Taxonomy.deserializeBinary
  );

  getTaxonomy(
    request: GetTaxonomyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Taxonomy) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.datacatalog.v1beta1.PolicyTagManager/GetTaxonomy',
      request,
      metadata || {},
      this.methodInfoGetTaxonomy,
      callback);
  }

  methodInfoCreatePolicyTag = new grpcWeb.AbstractClientBase.MethodInfo(
    PolicyTag,
    (request: CreatePolicyTagRequest) => {
      return request.serializeBinary();
    },
    PolicyTag.deserializeBinary
  );

  createPolicyTag(
    request: CreatePolicyTagRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: PolicyTag) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.datacatalog.v1beta1.PolicyTagManager/CreatePolicyTag',
      request,
      metadata || {},
      this.methodInfoCreatePolicyTag,
      callback);
  }

  methodInfoDeletePolicyTag = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeletePolicyTagRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deletePolicyTag(
    request: DeletePolicyTagRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.datacatalog.v1beta1.PolicyTagManager/DeletePolicyTag',
      request,
      metadata || {},
      this.methodInfoDeletePolicyTag,
      callback);
  }

  methodInfoUpdatePolicyTag = new grpcWeb.AbstractClientBase.MethodInfo(
    PolicyTag,
    (request: UpdatePolicyTagRequest) => {
      return request.serializeBinary();
    },
    PolicyTag.deserializeBinary
  );

  updatePolicyTag(
    request: UpdatePolicyTagRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: PolicyTag) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.datacatalog.v1beta1.PolicyTagManager/UpdatePolicyTag',
      request,
      metadata || {},
      this.methodInfoUpdatePolicyTag,
      callback);
  }

  methodInfoListPolicyTags = new grpcWeb.AbstractClientBase.MethodInfo(
    ListPolicyTagsResponse,
    (request: ListPolicyTagsRequest) => {
      return request.serializeBinary();
    },
    ListPolicyTagsResponse.deserializeBinary
  );

  listPolicyTags(
    request: ListPolicyTagsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListPolicyTagsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.datacatalog.v1beta1.PolicyTagManager/ListPolicyTags',
      request,
      metadata || {},
      this.methodInfoListPolicyTags,
      callback);
  }

  methodInfoGetPolicyTag = new grpcWeb.AbstractClientBase.MethodInfo(
    PolicyTag,
    (request: GetPolicyTagRequest) => {
      return request.serializeBinary();
    },
    PolicyTag.deserializeBinary
  );

  getPolicyTag(
    request: GetPolicyTagRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: PolicyTag) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.datacatalog.v1beta1.PolicyTagManager/GetPolicyTag',
      request,
      metadata || {},
      this.methodInfoGetPolicyTag,
      callback);
  }

  methodInfoGetIamPolicy = new grpcWeb.AbstractClientBase.MethodInfo(
    google_iam_v1_policy_pb.Policy,
    (request: google_iam_v1_iam_policy_pb.GetIamPolicyRequest) => {
      return request.serializeBinary();
    },
    google_iam_v1_policy_pb.Policy.deserializeBinary
  );

  getIamPolicy(
    request: google_iam_v1_iam_policy_pb.GetIamPolicyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_iam_v1_policy_pb.Policy) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.datacatalog.v1beta1.PolicyTagManager/GetIamPolicy',
      request,
      metadata || {},
      this.methodInfoGetIamPolicy,
      callback);
  }

  methodInfoSetIamPolicy = new grpcWeb.AbstractClientBase.MethodInfo(
    google_iam_v1_policy_pb.Policy,
    (request: google_iam_v1_iam_policy_pb.SetIamPolicyRequest) => {
      return request.serializeBinary();
    },
    google_iam_v1_policy_pb.Policy.deserializeBinary
  );

  setIamPolicy(
    request: google_iam_v1_iam_policy_pb.SetIamPolicyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_iam_v1_policy_pb.Policy) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.datacatalog.v1beta1.PolicyTagManager/SetIamPolicy',
      request,
      metadata || {},
      this.methodInfoSetIamPolicy,
      callback);
  }

  methodInfoTestIamPermissions = new grpcWeb.AbstractClientBase.MethodInfo(
    google_iam_v1_iam_policy_pb.TestIamPermissionsResponse,
    (request: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest) => {
      return request.serializeBinary();
    },
    google_iam_v1_iam_policy_pb.TestIamPermissionsResponse.deserializeBinary
  );

  testIamPermissions(
    request: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_iam_v1_iam_policy_pb.TestIamPermissionsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.datacatalog.v1beta1.PolicyTagManager/TestIamPermissions',
      request,
      metadata || {},
      this.methodInfoTestIamPermissions,
      callback);
  }

}

