/**
 * @fileoverview gRPC-Web generated client stub for google.devtools.sourcerepo.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_iam_v1_iam_policy_pb from '../../../../google/iam/v1/iam_policy_pb';
import * as google_iam_v1_policy_pb from '../../../../google/iam/v1/policy_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';

import {
  CreateRepoRequest,
  DeleteRepoRequest,
  GetRepoRequest,
  ListReposRequest,
  ListReposResponse,
  Repo} from './sourcerepo_pb';

export class SourceRepoClient {
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

  methodInfoListRepos = new grpcWeb.AbstractClientBase.MethodInfo(
    ListReposResponse,
    (request: ListReposRequest) => {
      return request.serializeBinary();
    },
    ListReposResponse.deserializeBinary
  );

  listRepos(
    request: ListReposRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListReposResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.sourcerepo.v1.SourceRepo/ListRepos',
      request,
      metadata || {},
      this.methodInfoListRepos,
      callback);
  }

  methodInfoGetRepo = new grpcWeb.AbstractClientBase.MethodInfo(
    Repo,
    (request: GetRepoRequest) => {
      return request.serializeBinary();
    },
    Repo.deserializeBinary
  );

  getRepo(
    request: GetRepoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Repo) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.sourcerepo.v1.SourceRepo/GetRepo',
      request,
      metadata || {},
      this.methodInfoGetRepo,
      callback);
  }

  methodInfoCreateRepo = new grpcWeb.AbstractClientBase.MethodInfo(
    Repo,
    (request: CreateRepoRequest) => {
      return request.serializeBinary();
    },
    Repo.deserializeBinary
  );

  createRepo(
    request: CreateRepoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Repo) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.sourcerepo.v1.SourceRepo/CreateRepo',
      request,
      metadata || {},
      this.methodInfoCreateRepo,
      callback);
  }

  methodInfoDeleteRepo = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteRepoRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteRepo(
    request: DeleteRepoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.sourcerepo.v1.SourceRepo/DeleteRepo',
      request,
      metadata || {},
      this.methodInfoDeleteRepo,
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
        '/google.devtools.sourcerepo.v1.SourceRepo/SetIamPolicy',
      request,
      metadata || {},
      this.methodInfoSetIamPolicy,
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
        '/google.devtools.sourcerepo.v1.SourceRepo/GetIamPolicy',
      request,
      metadata || {},
      this.methodInfoGetIamPolicy,
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
        '/google.devtools.sourcerepo.v1.SourceRepo/TestIamPermissions',
      request,
      metadata || {},
      this.methodInfoTestIamPermissions,
      callback);
  }

}

