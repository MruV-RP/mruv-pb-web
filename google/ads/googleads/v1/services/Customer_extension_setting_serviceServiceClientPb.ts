/**
 * @fileoverview gRPC-Web generated client stub for google.ads.googleads.v1.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v1_resources_customer_extension_setting_pb from '../../../../../google/ads/googleads/v1/resources/customer_extension_setting_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_rpc_status_pb from '../../../../../google/rpc/status_pb';

import {
  GetCustomerExtensionSettingRequest,
  MutateCustomerExtensionSettingsRequest,
  MutateCustomerExtensionSettingsResponse} from './customer_extension_setting_service_pb';

export class CustomerExtensionSettingServiceClient {
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

  methodInfoGetCustomerExtensionSetting = new grpcWeb.AbstractClientBase.MethodInfo(
    google_ads_googleads_v1_resources_customer_extension_setting_pb.CustomerExtensionSetting,
    (request: GetCustomerExtensionSettingRequest) => {
      return request.serializeBinary();
    },
    google_ads_googleads_v1_resources_customer_extension_setting_pb.CustomerExtensionSetting.deserializeBinary
  );

  getCustomerExtensionSetting(
    request: GetCustomerExtensionSettingRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v1_resources_customer_extension_setting_pb.CustomerExtensionSetting) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v1.services.CustomerExtensionSettingService/GetCustomerExtensionSetting',
      request,
      metadata || {},
      this.methodInfoGetCustomerExtensionSetting,
      callback);
  }

  methodInfoMutateCustomerExtensionSettings = new grpcWeb.AbstractClientBase.MethodInfo(
    MutateCustomerExtensionSettingsResponse,
    (request: MutateCustomerExtensionSettingsRequest) => {
      return request.serializeBinary();
    },
    MutateCustomerExtensionSettingsResponse.deserializeBinary
  );

  mutateCustomerExtensionSettings(
    request: MutateCustomerExtensionSettingsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MutateCustomerExtensionSettingsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v1.services.CustomerExtensionSettingService/MutateCustomerExtensionSettings',
      request,
      metadata || {},
      this.methodInfoMutateCustomerExtensionSettings,
      callback);
  }

}

