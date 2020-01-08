/**
 * @fileoverview gRPC-Web generated client stub for google.genomics.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_iam_v1_iam_policy_pb from '../../../google/iam/v1/iam_policy_pb';
import * as google_iam_v1_policy_pb from '../../../google/iam/v1/policy_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

import {
  CreateDatasetRequest,
  Dataset,
  DeleteDatasetRequest,
  GetDatasetRequest,
  ListDatasetsRequest,
  ListDatasetsResponse,
  UndeleteDatasetRequest,
  UpdateDatasetRequest} from './datasets_pb';

export class DatasetServiceV1Client {
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

  methodInfoListDatasets = new grpcWeb.AbstractClientBase.MethodInfo(
    ListDatasetsResponse,
    (request: ListDatasetsRequest) => {
      return request.serializeBinary();
    },
    ListDatasetsResponse.deserializeBinary
  );

  listDatasets(
    request: ListDatasetsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListDatasetsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.genomics.v1.DatasetServiceV1/ListDatasets',
      request,
      metadata || {},
      this.methodInfoListDatasets,
      callback);
  }

  methodInfoCreateDataset = new grpcWeb.AbstractClientBase.MethodInfo(
    Dataset,
    (request: CreateDatasetRequest) => {
      return request.serializeBinary();
    },
    Dataset.deserializeBinary
  );

  createDataset(
    request: CreateDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Dataset) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.genomics.v1.DatasetServiceV1/CreateDataset',
      request,
      metadata || {},
      this.methodInfoCreateDataset,
      callback);
  }

  methodInfoGetDataset = new grpcWeb.AbstractClientBase.MethodInfo(
    Dataset,
    (request: GetDatasetRequest) => {
      return request.serializeBinary();
    },
    Dataset.deserializeBinary
  );

  getDataset(
    request: GetDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Dataset) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.genomics.v1.DatasetServiceV1/GetDataset',
      request,
      metadata || {},
      this.methodInfoGetDataset,
      callback);
  }

  methodInfoUpdateDataset = new grpcWeb.AbstractClientBase.MethodInfo(
    Dataset,
    (request: UpdateDatasetRequest) => {
      return request.serializeBinary();
    },
    Dataset.deserializeBinary
  );

  updateDataset(
    request: UpdateDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Dataset) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.genomics.v1.DatasetServiceV1/UpdateDataset',
      request,
      metadata || {},
      this.methodInfoUpdateDataset,
      callback);
  }

  methodInfoDeleteDataset = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteDatasetRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteDataset(
    request: DeleteDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.genomics.v1.DatasetServiceV1/DeleteDataset',
      request,
      metadata || {},
      this.methodInfoDeleteDataset,
      callback);
  }

  methodInfoUndeleteDataset = new grpcWeb.AbstractClientBase.MethodInfo(
    Dataset,
    (request: UndeleteDatasetRequest) => {
      return request.serializeBinary();
    },
    Dataset.deserializeBinary
  );

  undeleteDataset(
    request: UndeleteDatasetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Dataset) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.genomics.v1.DatasetServiceV1/UndeleteDataset',
      request,
      metadata || {},
      this.methodInfoUndeleteDataset,
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
        '/google.genomics.v1.DatasetServiceV1/SetIamPolicy',
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
        '/google.genomics.v1.DatasetServiceV1/GetIamPolicy',
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
        '/google.genomics.v1.DatasetServiceV1/TestIamPermissions',
      request,
      metadata || {},
      this.methodInfoTestIamPermissions,
      callback);
  }

}

