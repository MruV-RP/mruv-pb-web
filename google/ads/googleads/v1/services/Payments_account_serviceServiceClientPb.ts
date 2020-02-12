/**
 * @fileoverview gRPC-Web generated client stub for google.ads.googleads.v1.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v1_resources_payments_account_pb from '../../../../../google/ads/googleads/v1/resources/payments_account_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

import {
  ListPaymentsAccountsRequest,
  ListPaymentsAccountsResponse} from './payments_account_service_pb';

export class PaymentsAccountServiceClient {
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

  methodInfoListPaymentsAccounts = new grpcWeb.AbstractClientBase.MethodInfo(
    ListPaymentsAccountsResponse,
    (request: ListPaymentsAccountsRequest) => {
      return request.serializeBinary();
    },
    ListPaymentsAccountsResponse.deserializeBinary
  );

  listPaymentsAccounts(
    request: ListPaymentsAccountsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListPaymentsAccountsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v1.services.PaymentsAccountService/ListPaymentsAccounts',
      request,
      metadata || {},
      this.methodInfoListPaymentsAccounts,
      callback);
  }

}

