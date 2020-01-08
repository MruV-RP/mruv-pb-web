/**
 * @fileoverview gRPC-Web generated client stub for google.bigtable.admin.cluster.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb from '../../../../../google/bigtable/admin/cluster/v1/bigtable_cluster_data_pb';
import * as google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb from '../../../../../google/bigtable/admin/cluster/v1/bigtable_cluster_service_messages_pb';
import * as google_longrunning_operations_pb from '../../../../../google/longrunning/operations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';

export class BigtableClusterServiceClient {
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

  methodInfoListZones = new grpcWeb.AbstractClientBase.MethodInfo(
    google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.ListZonesResponse,
    (request: google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.ListZonesRequest) => {
      return request.serializeBinary();
    },
    google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.ListZonesResponse.deserializeBinary
  );

  listZones(
    request: google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.ListZonesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.ListZonesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.bigtable.admin.cluster.v1.BigtableClusterService/ListZones',
      request,
      metadata || {},
      this.methodInfoListZones,
      callback);
  }

  methodInfoGetCluster = new grpcWeb.AbstractClientBase.MethodInfo(
    google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Cluster,
    (request: google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.GetClusterRequest) => {
      return request.serializeBinary();
    },
    google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Cluster.deserializeBinary
  );

  getCluster(
    request: google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.GetClusterRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Cluster) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.bigtable.admin.cluster.v1.BigtableClusterService/GetCluster',
      request,
      metadata || {},
      this.methodInfoGetCluster,
      callback);
  }

  methodInfoListClusters = new grpcWeb.AbstractClientBase.MethodInfo(
    google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.ListClustersResponse,
    (request: google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.ListClustersRequest) => {
      return request.serializeBinary();
    },
    google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.ListClustersResponse.deserializeBinary
  );

  listClusters(
    request: google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.ListClustersRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.ListClustersResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.bigtable.admin.cluster.v1.BigtableClusterService/ListClusters',
      request,
      metadata || {},
      this.methodInfoListClusters,
      callback);
  }

  methodInfoCreateCluster = new grpcWeb.AbstractClientBase.MethodInfo(
    google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Cluster,
    (request: google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.CreateClusterRequest) => {
      return request.serializeBinary();
    },
    google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Cluster.deserializeBinary
  );

  createCluster(
    request: google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.CreateClusterRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Cluster) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.bigtable.admin.cluster.v1.BigtableClusterService/CreateCluster',
      request,
      metadata || {},
      this.methodInfoCreateCluster,
      callback);
  }

  methodInfoUpdateCluster = new grpcWeb.AbstractClientBase.MethodInfo(
    google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Cluster,
    (request: google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Cluster) => {
      return request.serializeBinary();
    },
    google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Cluster.deserializeBinary
  );

  updateCluster(
    request: google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Cluster,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_bigtable_admin_cluster_v1_bigtable_cluster_data_pb.Cluster) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.bigtable.admin.cluster.v1.BigtableClusterService/UpdateCluster',
      request,
      metadata || {},
      this.methodInfoUpdateCluster,
      callback);
  }

  methodInfoDeleteCluster = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.DeleteClusterRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteCluster(
    request: google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.DeleteClusterRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.bigtable.admin.cluster.v1.BigtableClusterService/DeleteCluster',
      request,
      metadata || {},
      this.methodInfoDeleteCluster,
      callback);
  }

  methodInfoUndeleteCluster = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.UndeleteClusterRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  undeleteCluster(
    request: google_bigtable_admin_cluster_v1_bigtable_cluster_service_messages_pb.UndeleteClusterRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.bigtable.admin.cluster.v1.BigtableClusterService/UndeleteCluster',
      request,
      metadata || {},
      this.methodInfoUndeleteCluster,
      callback);
  }

}

