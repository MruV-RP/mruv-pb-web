/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.iot.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';
import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb';
import * as google_api_resource_pb from '../../../../google/api/resource_pb';
import * as google_cloud_iot_v1_resources_pb from '../../../../google/cloud/iot/v1/resources_pb';
import * as google_iam_v1_iam_policy_pb from '../../../../google/iam/v1/iam_policy_pb';
import * as google_iam_v1_policy_pb from '../../../../google/iam/v1/policy_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_rpc_status_pb from '../../../../google/rpc/status_pb';

import {
  BindDeviceToGatewayRequest,
  BindDeviceToGatewayResponse,
  CreateDeviceRegistryRequest,
  CreateDeviceRequest,
  DeleteDeviceRegistryRequest,
  DeleteDeviceRequest,
  GetDeviceRegistryRequest,
  GetDeviceRequest,
  ListDeviceConfigVersionsRequest,
  ListDeviceConfigVersionsResponse,
  ListDeviceRegistriesRequest,
  ListDeviceRegistriesResponse,
  ListDeviceStatesRequest,
  ListDeviceStatesResponse,
  ListDevicesRequest,
  ListDevicesResponse,
  ModifyCloudToDeviceConfigRequest,
  SendCommandToDeviceRequest,
  SendCommandToDeviceResponse,
  UnbindDeviceFromGatewayRequest,
  UnbindDeviceFromGatewayResponse,
  UpdateDeviceRegistryRequest,
  UpdateDeviceRequest} from './device_manager_pb';

export class DeviceManagerClient {
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

  methodInfoCreateDeviceRegistry = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_iot_v1_resources_pb.DeviceRegistry,
    (request: CreateDeviceRegistryRequest) => {
      return request.serializeBinary();
    },
    google_cloud_iot_v1_resources_pb.DeviceRegistry.deserializeBinary
  );

  createDeviceRegistry(
    request: CreateDeviceRegistryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_iot_v1_resources_pb.DeviceRegistry) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.iot.v1.DeviceManager/CreateDeviceRegistry',
      request,
      metadata || {},
      this.methodInfoCreateDeviceRegistry,
      callback);
  }

  methodInfoGetDeviceRegistry = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_iot_v1_resources_pb.DeviceRegistry,
    (request: GetDeviceRegistryRequest) => {
      return request.serializeBinary();
    },
    google_cloud_iot_v1_resources_pb.DeviceRegistry.deserializeBinary
  );

  getDeviceRegistry(
    request: GetDeviceRegistryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_iot_v1_resources_pb.DeviceRegistry) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.iot.v1.DeviceManager/GetDeviceRegistry',
      request,
      metadata || {},
      this.methodInfoGetDeviceRegistry,
      callback);
  }

  methodInfoUpdateDeviceRegistry = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_iot_v1_resources_pb.DeviceRegistry,
    (request: UpdateDeviceRegistryRequest) => {
      return request.serializeBinary();
    },
    google_cloud_iot_v1_resources_pb.DeviceRegistry.deserializeBinary
  );

  updateDeviceRegistry(
    request: UpdateDeviceRegistryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_iot_v1_resources_pb.DeviceRegistry) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.iot.v1.DeviceManager/UpdateDeviceRegistry',
      request,
      metadata || {},
      this.methodInfoUpdateDeviceRegistry,
      callback);
  }

  methodInfoDeleteDeviceRegistry = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteDeviceRegistryRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteDeviceRegistry(
    request: DeleteDeviceRegistryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.iot.v1.DeviceManager/DeleteDeviceRegistry',
      request,
      metadata || {},
      this.methodInfoDeleteDeviceRegistry,
      callback);
  }

  methodInfoListDeviceRegistries = new grpcWeb.AbstractClientBase.MethodInfo(
    ListDeviceRegistriesResponse,
    (request: ListDeviceRegistriesRequest) => {
      return request.serializeBinary();
    },
    ListDeviceRegistriesResponse.deserializeBinary
  );

  listDeviceRegistries(
    request: ListDeviceRegistriesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListDeviceRegistriesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.iot.v1.DeviceManager/ListDeviceRegistries',
      request,
      metadata || {},
      this.methodInfoListDeviceRegistries,
      callback);
  }

  methodInfoCreateDevice = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_iot_v1_resources_pb.Device,
    (request: CreateDeviceRequest) => {
      return request.serializeBinary();
    },
    google_cloud_iot_v1_resources_pb.Device.deserializeBinary
  );

  createDevice(
    request: CreateDeviceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_iot_v1_resources_pb.Device) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.iot.v1.DeviceManager/CreateDevice',
      request,
      metadata || {},
      this.methodInfoCreateDevice,
      callback);
  }

  methodInfoGetDevice = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_iot_v1_resources_pb.Device,
    (request: GetDeviceRequest) => {
      return request.serializeBinary();
    },
    google_cloud_iot_v1_resources_pb.Device.deserializeBinary
  );

  getDevice(
    request: GetDeviceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_iot_v1_resources_pb.Device) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.iot.v1.DeviceManager/GetDevice',
      request,
      metadata || {},
      this.methodInfoGetDevice,
      callback);
  }

  methodInfoUpdateDevice = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_iot_v1_resources_pb.Device,
    (request: UpdateDeviceRequest) => {
      return request.serializeBinary();
    },
    google_cloud_iot_v1_resources_pb.Device.deserializeBinary
  );

  updateDevice(
    request: UpdateDeviceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_iot_v1_resources_pb.Device) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.iot.v1.DeviceManager/UpdateDevice',
      request,
      metadata || {},
      this.methodInfoUpdateDevice,
      callback);
  }

  methodInfoDeleteDevice = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteDeviceRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteDevice(
    request: DeleteDeviceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.iot.v1.DeviceManager/DeleteDevice',
      request,
      metadata || {},
      this.methodInfoDeleteDevice,
      callback);
  }

  methodInfoListDevices = new grpcWeb.AbstractClientBase.MethodInfo(
    ListDevicesResponse,
    (request: ListDevicesRequest) => {
      return request.serializeBinary();
    },
    ListDevicesResponse.deserializeBinary
  );

  listDevices(
    request: ListDevicesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListDevicesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.iot.v1.DeviceManager/ListDevices',
      request,
      metadata || {},
      this.methodInfoListDevices,
      callback);
  }

  methodInfoModifyCloudToDeviceConfig = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_iot_v1_resources_pb.DeviceConfig,
    (request: ModifyCloudToDeviceConfigRequest) => {
      return request.serializeBinary();
    },
    google_cloud_iot_v1_resources_pb.DeviceConfig.deserializeBinary
  );

  modifyCloudToDeviceConfig(
    request: ModifyCloudToDeviceConfigRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_iot_v1_resources_pb.DeviceConfig) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.iot.v1.DeviceManager/ModifyCloudToDeviceConfig',
      request,
      metadata || {},
      this.methodInfoModifyCloudToDeviceConfig,
      callback);
  }

  methodInfoListDeviceConfigVersions = new grpcWeb.AbstractClientBase.MethodInfo(
    ListDeviceConfigVersionsResponse,
    (request: ListDeviceConfigVersionsRequest) => {
      return request.serializeBinary();
    },
    ListDeviceConfigVersionsResponse.deserializeBinary
  );

  listDeviceConfigVersions(
    request: ListDeviceConfigVersionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListDeviceConfigVersionsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.iot.v1.DeviceManager/ListDeviceConfigVersions',
      request,
      metadata || {},
      this.methodInfoListDeviceConfigVersions,
      callback);
  }

  methodInfoListDeviceStates = new grpcWeb.AbstractClientBase.MethodInfo(
    ListDeviceStatesResponse,
    (request: ListDeviceStatesRequest) => {
      return request.serializeBinary();
    },
    ListDeviceStatesResponse.deserializeBinary
  );

  listDeviceStates(
    request: ListDeviceStatesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListDeviceStatesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.iot.v1.DeviceManager/ListDeviceStates',
      request,
      metadata || {},
      this.methodInfoListDeviceStates,
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
        '/google.cloud.iot.v1.DeviceManager/SetIamPolicy',
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
        '/google.cloud.iot.v1.DeviceManager/GetIamPolicy',
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
        '/google.cloud.iot.v1.DeviceManager/TestIamPermissions',
      request,
      metadata || {},
      this.methodInfoTestIamPermissions,
      callback);
  }

  methodInfoSendCommandToDevice = new grpcWeb.AbstractClientBase.MethodInfo(
    SendCommandToDeviceResponse,
    (request: SendCommandToDeviceRequest) => {
      return request.serializeBinary();
    },
    SendCommandToDeviceResponse.deserializeBinary
  );

  sendCommandToDevice(
    request: SendCommandToDeviceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SendCommandToDeviceResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.iot.v1.DeviceManager/SendCommandToDevice',
      request,
      metadata || {},
      this.methodInfoSendCommandToDevice,
      callback);
  }

  methodInfoBindDeviceToGateway = new grpcWeb.AbstractClientBase.MethodInfo(
    BindDeviceToGatewayResponse,
    (request: BindDeviceToGatewayRequest) => {
      return request.serializeBinary();
    },
    BindDeviceToGatewayResponse.deserializeBinary
  );

  bindDeviceToGateway(
    request: BindDeviceToGatewayRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: BindDeviceToGatewayResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.iot.v1.DeviceManager/BindDeviceToGateway',
      request,
      metadata || {},
      this.methodInfoBindDeviceToGateway,
      callback);
  }

  methodInfoUnbindDeviceFromGateway = new grpcWeb.AbstractClientBase.MethodInfo(
    UnbindDeviceFromGatewayResponse,
    (request: UnbindDeviceFromGatewayRequest) => {
      return request.serializeBinary();
    },
    UnbindDeviceFromGatewayResponse.deserializeBinary
  );

  unbindDeviceFromGateway(
    request: UnbindDeviceFromGatewayRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UnbindDeviceFromGatewayResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.iot.v1.DeviceManager/UnbindDeviceFromGateway',
      request,
      metadata || {},
      this.methodInfoUnbindDeviceFromGateway,
      callback);
  }

}

