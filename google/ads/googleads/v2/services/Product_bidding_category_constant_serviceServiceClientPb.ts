/**
 * @fileoverview gRPC-Web generated client stub for google.ads.googleads.v2.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v2_resources_product_bidding_category_constant_pb from '../../../../../google/ads/googleads/v2/resources/product_bidding_category_constant_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../../google/api/client_pb';

import {GetProductBiddingCategoryConstantRequest} from './product_bidding_category_constant_service_pb';

export class ProductBiddingCategoryConstantServiceClient {
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

  methodInfoGetProductBiddingCategoryConstant = new grpcWeb.AbstractClientBase.MethodInfo(
    google_ads_googleads_v2_resources_product_bidding_category_constant_pb.ProductBiddingCategoryConstant,
    (request: GetProductBiddingCategoryConstantRequest) => {
      return request.serializeBinary();
    },
    google_ads_googleads_v2_resources_product_bidding_category_constant_pb.ProductBiddingCategoryConstant.deserializeBinary
  );

  getProductBiddingCategoryConstant(
    request: GetProductBiddingCategoryConstantRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v2_resources_product_bidding_category_constant_pb.ProductBiddingCategoryConstant) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v2.services.ProductBiddingCategoryConstantService/GetProductBiddingCategoryConstant',
      request,
      metadata || {},
      this.methodInfoGetProductBiddingCategoryConstant,
      callback);
  }

}

