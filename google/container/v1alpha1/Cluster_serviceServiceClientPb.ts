/**
 * @fileoverview gRPC-Web generated client stub for google.container.v1alpha1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';

import {
  CancelOperationRequest,
  Cluster,
  CompleteIPRotationRequest,
  CreateClusterRequest,
  CreateNodePoolRequest,
  DeleteClusterRequest,
  DeleteNodePoolRequest,
  GetClusterRequest,
  GetNodePoolRequest,
  GetOperationRequest,
  GetServerConfigRequest,
  ListClustersRequest,
  ListClustersResponse,
  ListNodePoolsRequest,
  ListNodePoolsResponse,
  ListOperationsRequest,
  ListOperationsResponse,
  NodePool,
  Operation,
  RollbackNodePoolUpgradeRequest,
  ServerConfig,
  SetAddonsConfigRequest,
  SetLabelsRequest,
  SetLegacyAbacRequest,
  SetLocationsRequest,
  SetLoggingServiceRequest,
  SetMaintenancePolicyRequest,
  SetMasterAuthRequest,
  SetMonitoringServiceRequest,
  SetNetworkPolicyRequest,
  SetNodePoolAutoscalingRequest,
  SetNodePoolManagementRequest,
  SetNodePoolSizeRequest,
  StartIPRotationRequest,
  UpdateClusterRequest,
  UpdateMasterRequest,
  UpdateNodePoolRequest} from './cluster_service_pb';

export class ClusterManagerClient {
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
        '/google.container.v1alpha1.ClusterManager/ListClusters',
      request,
      metadata || {},
      this.methodInfoListClusters,
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
        '/google.container.v1alpha1.ClusterManager/GetCluster',
      request,
      metadata || {},
      this.methodInfoGetCluster,
      callback);
  }

  methodInfoCreateCluster = new grpcWeb.AbstractClientBase.MethodInfo(
    Operation,
    (request: CreateClusterRequest) => {
      return request.serializeBinary();
    },
    Operation.deserializeBinary
  );

  createCluster(
    request: CreateClusterRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.container.v1alpha1.ClusterManager/CreateCluster',
      request,
      metadata || {},
      this.methodInfoCreateCluster,
      callback);
  }

  methodInfoUpdateCluster = new grpcWeb.AbstractClientBase.MethodInfo(
    Operation,
    (request: UpdateClusterRequest) => {
      return request.serializeBinary();
    },
    Operation.deserializeBinary
  );

  updateCluster(
    request: UpdateClusterRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.container.v1alpha1.ClusterManager/UpdateCluster',
      request,
      metadata || {},
      this.methodInfoUpdateCluster,
      callback);
  }

  methodInfoUpdateNodePool = new grpcWeb.AbstractClientBase.MethodInfo(
    Operation,
    (request: UpdateNodePoolRequest) => {
      return request.serializeBinary();
    },
    Operation.deserializeBinary
  );

  updateNodePool(
    request: UpdateNodePoolRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.container.v1alpha1.ClusterManager/UpdateNodePool',
      request,
      metadata || {},
      this.methodInfoUpdateNodePool,
      callback);
  }

  methodInfoSetNodePoolAutoscaling = new grpcWeb.AbstractClientBase.MethodInfo(
    Operation,
    (request: SetNodePoolAutoscalingRequest) => {
      return request.serializeBinary();
    },
    Operation.deserializeBinary
  );

  setNodePoolAutoscaling(
    request: SetNodePoolAutoscalingRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.container.v1alpha1.ClusterManager/SetNodePoolAutoscaling',
      request,
      metadata || {},
      this.methodInfoSetNodePoolAutoscaling,
      callback);
  }

  methodInfoSetLoggingService = new grpcWeb.AbstractClientBase.MethodInfo(
    Operation,
    (request: SetLoggingServiceRequest) => {
      return request.serializeBinary();
    },
    Operation.deserializeBinary
  );

  setLoggingService(
    request: SetLoggingServiceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.container.v1alpha1.ClusterManager/SetLoggingService',
      request,
      metadata || {},
      this.methodInfoSetLoggingService,
      callback);
  }

  methodInfoSetMonitoringService = new grpcWeb.AbstractClientBase.MethodInfo(
    Operation,
    (request: SetMonitoringServiceRequest) => {
      return request.serializeBinary();
    },
    Operation.deserializeBinary
  );

  setMonitoringService(
    request: SetMonitoringServiceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.container.v1alpha1.ClusterManager/SetMonitoringService',
      request,
      metadata || {},
      this.methodInfoSetMonitoringService,
      callback);
  }

  methodInfoSetAddonsConfig = new grpcWeb.AbstractClientBase.MethodInfo(
    Operation,
    (request: SetAddonsConfigRequest) => {
      return request.serializeBinary();
    },
    Operation.deserializeBinary
  );

  setAddonsConfig(
    request: SetAddonsConfigRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.container.v1alpha1.ClusterManager/SetAddonsConfig',
      request,
      metadata || {},
      this.methodInfoSetAddonsConfig,
      callback);
  }

  methodInfoSetLocations = new grpcWeb.AbstractClientBase.MethodInfo(
    Operation,
    (request: SetLocationsRequest) => {
      return request.serializeBinary();
    },
    Operation.deserializeBinary
  );

  setLocations(
    request: SetLocationsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.container.v1alpha1.ClusterManager/SetLocations',
      request,
      metadata || {},
      this.methodInfoSetLocations,
      callback);
  }

  methodInfoUpdateMaster = new grpcWeb.AbstractClientBase.MethodInfo(
    Operation,
    (request: UpdateMasterRequest) => {
      return request.serializeBinary();
    },
    Operation.deserializeBinary
  );

  updateMaster(
    request: UpdateMasterRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.container.v1alpha1.ClusterManager/UpdateMaster',
      request,
      metadata || {},
      this.methodInfoUpdateMaster,
      callback);
  }

  methodInfoSetMasterAuth = new grpcWeb.AbstractClientBase.MethodInfo(
    Operation,
    (request: SetMasterAuthRequest) => {
      return request.serializeBinary();
    },
    Operation.deserializeBinary
  );

  setMasterAuth(
    request: SetMasterAuthRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.container.v1alpha1.ClusterManager/SetMasterAuth',
      request,
      metadata || {},
      this.methodInfoSetMasterAuth,
      callback);
  }

  methodInfoDeleteCluster = new grpcWeb.AbstractClientBase.MethodInfo(
    Operation,
    (request: DeleteClusterRequest) => {
      return request.serializeBinary();
    },
    Operation.deserializeBinary
  );

  deleteCluster(
    request: DeleteClusterRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.container.v1alpha1.ClusterManager/DeleteCluster',
      request,
      metadata || {},
      this.methodInfoDeleteCluster,
      callback);
  }

  methodInfoListOperations = new grpcWeb.AbstractClientBase.MethodInfo(
    ListOperationsResponse,
    (request: ListOperationsRequest) => {
      return request.serializeBinary();
    },
    ListOperationsResponse.deserializeBinary
  );

  listOperations(
    request: ListOperationsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListOperationsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.container.v1alpha1.ClusterManager/ListOperations',
      request,
      metadata || {},
      this.methodInfoListOperations,
      callback);
  }

  methodInfoGetOperation = new grpcWeb.AbstractClientBase.MethodInfo(
    Operation,
    (request: GetOperationRequest) => {
      return request.serializeBinary();
    },
    Operation.deserializeBinary
  );

  getOperation(
    request: GetOperationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.container.v1alpha1.ClusterManager/GetOperation',
      request,
      metadata || {},
      this.methodInfoGetOperation,
      callback);
  }

  methodInfoCancelOperation = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: CancelOperationRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  cancelOperation(
    request: CancelOperationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.container.v1alpha1.ClusterManager/CancelOperation',
      request,
      metadata || {},
      this.methodInfoCancelOperation,
      callback);
  }

  methodInfoGetServerConfig = new grpcWeb.AbstractClientBase.MethodInfo(
    ServerConfig,
    (request: GetServerConfigRequest) => {
      return request.serializeBinary();
    },
    ServerConfig.deserializeBinary
  );

  getServerConfig(
    request: GetServerConfigRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ServerConfig) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.container.v1alpha1.ClusterManager/GetServerConfig',
      request,
      metadata || {},
      this.methodInfoGetServerConfig,
      callback);
  }

  methodInfoListNodePools = new grpcWeb.AbstractClientBase.MethodInfo(
    ListNodePoolsResponse,
    (request: ListNodePoolsRequest) => {
      return request.serializeBinary();
    },
    ListNodePoolsResponse.deserializeBinary
  );

  listNodePools(
    request: ListNodePoolsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListNodePoolsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.container.v1alpha1.ClusterManager/ListNodePools',
      request,
      metadata || {},
      this.methodInfoListNodePools,
      callback);
  }

  methodInfoGetNodePool = new grpcWeb.AbstractClientBase.MethodInfo(
    NodePool,
    (request: GetNodePoolRequest) => {
      return request.serializeBinary();
    },
    NodePool.deserializeBinary
  );

  getNodePool(
    request: GetNodePoolRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: NodePool) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.container.v1alpha1.ClusterManager/GetNodePool',
      request,
      metadata || {},
      this.methodInfoGetNodePool,
      callback);
  }

  methodInfoCreateNodePool = new grpcWeb.AbstractClientBase.MethodInfo(
    Operation,
    (request: CreateNodePoolRequest) => {
      return request.serializeBinary();
    },
    Operation.deserializeBinary
  );

  createNodePool(
    request: CreateNodePoolRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.container.v1alpha1.ClusterManager/CreateNodePool',
      request,
      metadata || {},
      this.methodInfoCreateNodePool,
      callback);
  }

  methodInfoDeleteNodePool = new grpcWeb.AbstractClientBase.MethodInfo(
    Operation,
    (request: DeleteNodePoolRequest) => {
      return request.serializeBinary();
    },
    Operation.deserializeBinary
  );

  deleteNodePool(
    request: DeleteNodePoolRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.container.v1alpha1.ClusterManager/DeleteNodePool',
      request,
      metadata || {},
      this.methodInfoDeleteNodePool,
      callback);
  }

  methodInfoRollbackNodePoolUpgrade = new grpcWeb.AbstractClientBase.MethodInfo(
    Operation,
    (request: RollbackNodePoolUpgradeRequest) => {
      return request.serializeBinary();
    },
    Operation.deserializeBinary
  );

  rollbackNodePoolUpgrade(
    request: RollbackNodePoolUpgradeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.container.v1alpha1.ClusterManager/RollbackNodePoolUpgrade',
      request,
      metadata || {},
      this.methodInfoRollbackNodePoolUpgrade,
      callback);
  }

  methodInfoSetNodePoolManagement = new grpcWeb.AbstractClientBase.MethodInfo(
    Operation,
    (request: SetNodePoolManagementRequest) => {
      return request.serializeBinary();
    },
    Operation.deserializeBinary
  );

  setNodePoolManagement(
    request: SetNodePoolManagementRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.container.v1alpha1.ClusterManager/SetNodePoolManagement',
      request,
      metadata || {},
      this.methodInfoSetNodePoolManagement,
      callback);
  }

  methodInfoSetLabels = new grpcWeb.AbstractClientBase.MethodInfo(
    Operation,
    (request: SetLabelsRequest) => {
      return request.serializeBinary();
    },
    Operation.deserializeBinary
  );

  setLabels(
    request: SetLabelsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.container.v1alpha1.ClusterManager/SetLabels',
      request,
      metadata || {},
      this.methodInfoSetLabels,
      callback);
  }

  methodInfoSetLegacyAbac = new grpcWeb.AbstractClientBase.MethodInfo(
    Operation,
    (request: SetLegacyAbacRequest) => {
      return request.serializeBinary();
    },
    Operation.deserializeBinary
  );

  setLegacyAbac(
    request: SetLegacyAbacRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.container.v1alpha1.ClusterManager/SetLegacyAbac',
      request,
      metadata || {},
      this.methodInfoSetLegacyAbac,
      callback);
  }

  methodInfoStartIPRotation = new grpcWeb.AbstractClientBase.MethodInfo(
    Operation,
    (request: StartIPRotationRequest) => {
      return request.serializeBinary();
    },
    Operation.deserializeBinary
  );

  startIPRotation(
    request: StartIPRotationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.container.v1alpha1.ClusterManager/StartIPRotation',
      request,
      metadata || {},
      this.methodInfoStartIPRotation,
      callback);
  }

  methodInfoCompleteIPRotation = new grpcWeb.AbstractClientBase.MethodInfo(
    Operation,
    (request: CompleteIPRotationRequest) => {
      return request.serializeBinary();
    },
    Operation.deserializeBinary
  );

  completeIPRotation(
    request: CompleteIPRotationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.container.v1alpha1.ClusterManager/CompleteIPRotation',
      request,
      metadata || {},
      this.methodInfoCompleteIPRotation,
      callback);
  }

  methodInfoSetNodePoolSize = new grpcWeb.AbstractClientBase.MethodInfo(
    Operation,
    (request: SetNodePoolSizeRequest) => {
      return request.serializeBinary();
    },
    Operation.deserializeBinary
  );

  setNodePoolSize(
    request: SetNodePoolSizeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.container.v1alpha1.ClusterManager/SetNodePoolSize',
      request,
      metadata || {},
      this.methodInfoSetNodePoolSize,
      callback);
  }

  methodInfoSetNetworkPolicy = new grpcWeb.AbstractClientBase.MethodInfo(
    Operation,
    (request: SetNetworkPolicyRequest) => {
      return request.serializeBinary();
    },
    Operation.deserializeBinary
  );

  setNetworkPolicy(
    request: SetNetworkPolicyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.container.v1alpha1.ClusterManager/SetNetworkPolicy',
      request,
      metadata || {},
      this.methodInfoSetNetworkPolicy,
      callback);
  }

  methodInfoSetMaintenancePolicy = new grpcWeb.AbstractClientBase.MethodInfo(
    Operation,
    (request: SetMaintenancePolicyRequest) => {
      return request.serializeBinary();
    },
    Operation.deserializeBinary
  );

  setMaintenancePolicy(
    request: SetMaintenancePolicyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.container.v1alpha1.ClusterManager/SetMaintenancePolicy',
      request,
      metadata || {},
      this.methodInfoSetMaintenancePolicy,
      callback);
  }

}

