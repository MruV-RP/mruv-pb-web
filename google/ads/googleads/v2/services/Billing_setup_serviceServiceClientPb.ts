/**
 * @fileoverview gRPC-Web generated client stub for google.ads.googleads.v2.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v2_resources_billing_setup_pb from '../../../../../google/ads/googleads/v2/resources/billing_setup_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../../google/api/client_pb';

import {
  GetBillingSetupRequest,
  MutateBillingSetupRequest,
  MutateBillingSetupResponse} from './billing_setup_service_pb';

export class BillingSetupServiceClient {
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

  methodInfoGetBillingSetup = new grpcWeb.AbstractClientBase.MethodInfo(
    google_ads_googleads_v2_resources_billing_setup_pb.BillingSetup,
    (request: GetBillingSetupRequest) => {
      return request.serializeBinary();
    },
    google_ads_googleads_v2_resources_billing_setup_pb.BillingSetup.deserializeBinary
  );

  getBillingSetup(
    request: GetBillingSetupRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v2_resources_billing_setup_pb.BillingSetup) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v2.services.BillingSetupService/GetBillingSetup',
      request,
      metadata || {},
      this.methodInfoGetBillingSetup,
      callback);
  }

  methodInfoMutateBillingSetup = new grpcWeb.AbstractClientBase.MethodInfo(
    MutateBillingSetupResponse,
    (request: MutateBillingSetupRequest) => {
      return request.serializeBinary();
    },
    MutateBillingSetupResponse.deserializeBinary
  );

  mutateBillingSetup(
    request: MutateBillingSetupRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MutateBillingSetupResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v2.services.BillingSetupService/MutateBillingSetup',
      request,
      metadata || {},
      this.methodInfoMutateBillingSetup,
      callback);
  }

}

