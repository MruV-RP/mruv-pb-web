/**
 * @fileoverview gRPC-Web generated client stub for google.ads.googleads.v2.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v2_resources_ad_group_extension_setting_pb from '../../../../../google/ads/googleads/v2/resources/ad_group_extension_setting_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_rpc_status_pb from '../../../../../google/rpc/status_pb';
import * as google_api_client_pb from '../../../../../google/api/client_pb';

import {
  GetAdGroupExtensionSettingRequest,
  MutateAdGroupExtensionSettingsRequest,
  MutateAdGroupExtensionSettingsResponse} from './ad_group_extension_setting_service_pb';

export class AdGroupExtensionSettingServiceClient {
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

  methodInfoGetAdGroupExtensionSetting = new grpcWeb.AbstractClientBase.MethodInfo(
    google_ads_googleads_v2_resources_ad_group_extension_setting_pb.AdGroupExtensionSetting,
    (request: GetAdGroupExtensionSettingRequest) => {
      return request.serializeBinary();
    },
    google_ads_googleads_v2_resources_ad_group_extension_setting_pb.AdGroupExtensionSetting.deserializeBinary
  );

  getAdGroupExtensionSetting(
    request: GetAdGroupExtensionSettingRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v2_resources_ad_group_extension_setting_pb.AdGroupExtensionSetting) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v2.services.AdGroupExtensionSettingService/GetAdGroupExtensionSetting',
      request,
      metadata || {},
      this.methodInfoGetAdGroupExtensionSetting,
      callback);
  }

  methodInfoMutateAdGroupExtensionSettings = new grpcWeb.AbstractClientBase.MethodInfo(
    MutateAdGroupExtensionSettingsResponse,
    (request: MutateAdGroupExtensionSettingsRequest) => {
      return request.serializeBinary();
    },
    MutateAdGroupExtensionSettingsResponse.deserializeBinary
  );

  mutateAdGroupExtensionSettings(
    request: MutateAdGroupExtensionSettingsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MutateAdGroupExtensionSettingsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v2.services.AdGroupExtensionSettingService/MutateAdGroupExtensionSettings',
      request,
      metadata || {},
      this.methodInfoMutateAdGroupExtensionSettings,
      callback);
  }

}

