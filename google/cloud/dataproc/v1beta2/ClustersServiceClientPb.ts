/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.dataproc.v1beta2
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';
import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb';
import * as google_cloud_dataproc_v1beta2_operations_pb from '../../../../google/cloud/dataproc/v1beta2/operations_pb';
import * as google_cloud_dataproc_v1beta2_shared_pb from '../../../../google/cloud/dataproc/v1beta2/shared_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

import {
  Cluster,
  CreateClusterRequest,
  DeleteClusterRequest,
  DiagnoseClusterRequest,
  GetClusterRequest,
  ListClustersRequest,
  ListClustersResponse,
  UpdateClusterRequest} from './clusters_pb';

export class ClusterControllerClient {
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

  methodInfoCreateCluster = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: CreateClusterRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  createCluster(
    request: CreateClusterRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.dataproc.v1beta2.ClusterController/CreateCluster',
      request,
      metadata || {},
      this.methodInfoCreateCluster,
      callback);
  }

  methodInfoUpdateCluster = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: UpdateClusterRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  updateCluster(
    request: UpdateClusterRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.dataproc.v1beta2.ClusterController/UpdateCluster',
      request,
      metadata || {},
      this.methodInfoUpdateCluster,
      callback);
  }

  methodInfoDeleteCluster = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: DeleteClusterRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  deleteCluster(
    request: DeleteClusterRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.dataproc.v1beta2.ClusterController/DeleteCluster',
      request,
      metadata || {},
      this.methodInfoDeleteCluster,
      callback);
  }

  methodInfoGetCluster = new grpcWeb.AbstractClientBase.MethodInfo(
    Cluster,
    (request: GetClusterRequest) => {
      return request.serializeBinary();
    },
    Cluster.deserializeBinary
  );

  getCluster(
    request: GetClusterRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Cluster) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.dataproc.v1beta2.ClusterController/GetCluster',
      request,
      metadata || {},
      this.methodInfoGetCluster,
      callback);
  }

  methodInfoListClusters = new grpcWeb.AbstractClientBase.MethodInfo(
    ListClustersResponse,
    (request: ListClustersRequest) => {
      return request.serializeBinary();
    },
    ListClustersResponse.deserializeBinary
  );

  listClusters(
    request: ListClustersRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListClustersResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.dataproc.v1beta2.ClusterController/ListClusters',
      request,
      metadata || {},
      this.methodInfoListClusters,
      callback);
  }

  methodInfoDiagnoseCluster = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: DiagnoseClusterRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  diagnoseCluster(
    request: DiagnoseClusterRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.dataproc.v1beta2.ClusterController/DiagnoseCluster',
      request,
      metadata || {},
      this.methodInfoDiagnoseCluster,
      callback);
  }

}

