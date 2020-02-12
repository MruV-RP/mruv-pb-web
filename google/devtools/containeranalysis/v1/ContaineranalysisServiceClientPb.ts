/**
 * @fileoverview gRPC-Web generated client stub for google.devtools.containeranalysis.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_iam_v1_iam_policy_pb from '../../../../google/iam/v1/iam_policy_pb';
import * as google_iam_v1_policy_pb from '../../../../google/iam/v1/policy_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class ContainerAnalysisClient {
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
        '/google.devtools.containeranalysis.v1.ContainerAnalysis/SetIamPolicy',
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
        '/google.devtools.containeranalysis.v1.ContainerAnalysis/GetIamPolicy',
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
        '/google.devtools.containeranalysis.v1.ContainerAnalysis/TestIamPermissions',
      request,
      metadata || {},
      this.methodInfoTestIamPermissions,
      callback);
  }

}

