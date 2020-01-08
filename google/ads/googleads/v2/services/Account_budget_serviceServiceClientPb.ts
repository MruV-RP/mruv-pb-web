/**
 * @fileoverview gRPC-Web generated client stub for google.ads.googleads.v2.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v2_resources_account_budget_pb from '../../../../../google/ads/googleads/v2/resources/account_budget_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../../google/api/client_pb';

import {GetAccountBudgetRequest} from './account_budget_service_pb';

export class AccountBudgetServiceClient {
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

  methodInfoGetAccountBudget = new grpcWeb.AbstractClientBase.MethodInfo(
    google_ads_googleads_v2_resources_account_budget_pb.AccountBudget,
    (request: GetAccountBudgetRequest) => {
      return request.serializeBinary();
    },
    google_ads_googleads_v2_resources_account_budget_pb.AccountBudget.deserializeBinary
  );

  getAccountBudget(
    request: GetAccountBudgetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v2_resources_account_budget_pb.AccountBudget) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v2.services.AccountBudgetService/GetAccountBudget',
      request,
      metadata || {},
      this.methodInfoGetAccountBudget,
      callback);
  }

}

