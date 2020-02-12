/**
 * @fileoverview gRPC-Web generated client stub for google.ads.googleads.v2.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v2_enums_month_of_year_pb from '../../../../../google/ads/googleads/v2/enums/month_of_year_pb';
import * as google_ads_googleads_v2_resources_invoice_pb from '../../../../../google/ads/googleads/v2/resources/invoice_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../../google/api/client_pb';

import {
  ListInvoicesRequest,
  ListInvoicesResponse} from './invoice_service_pb';

export class InvoiceServiceClient {
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

  methodInfoListInvoices = new grpcWeb.AbstractClientBase.MethodInfo(
    ListInvoicesResponse,
    (request: ListInvoicesRequest) => {
      return request.serializeBinary();
    },
    ListInvoicesResponse.deserializeBinary
  );

  listInvoices(
    request: ListInvoicesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListInvoicesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v2.services.InvoiceService/ListInvoices',
      request,
      metadata || {},
      this.methodInfoListInvoices,
      callback);
  }

}

