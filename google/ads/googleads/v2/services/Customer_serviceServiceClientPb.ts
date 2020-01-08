/**
 * @fileoverview gRPC-Web generated client stub for google.ads.googleads.v2.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v2_enums_access_role_pb from '../../../../../google/ads/googleads/v2/enums/access_role_pb';
import * as google_ads_googleads_v2_resources_customer_pb from '../../../../../google/ads/googleads/v2/resources/customer_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_api_client_pb from '../../../../../google/api/client_pb';

import {
  CreateCustomerClientRequest,
  CreateCustomerClientResponse,
  GetCustomerRequest,
  ListAccessibleCustomersRequest,
  ListAccessibleCustomersResponse,
  MutateCustomerRequest,
  MutateCustomerResponse} from './customer_service_pb';

export class CustomerServiceClient {
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

  methodInfoGetCustomer = new grpcWeb.AbstractClientBase.MethodInfo(
    google_ads_googleads_v2_resources_customer_pb.Customer,
    (request: GetCustomerRequest) => {
      return request.serializeBinary();
    },
    google_ads_googleads_v2_resources_customer_pb.Customer.deserializeBinary
  );

  getCustomer(
    request: GetCustomerRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v2_resources_customer_pb.Customer) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v2.services.CustomerService/GetCustomer',
      request,
      metadata || {},
      this.methodInfoGetCustomer,
      callback);
  }

  methodInfoMutateCustomer = new grpcWeb.AbstractClientBase.MethodInfo(
    MutateCustomerResponse,
    (request: MutateCustomerRequest) => {
      return request.serializeBinary();
    },
    MutateCustomerResponse.deserializeBinary
  );

  mutateCustomer(
    request: MutateCustomerRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MutateCustomerResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v2.services.CustomerService/MutateCustomer',
      request,
      metadata || {},
      this.methodInfoMutateCustomer,
      callback);
  }

  methodInfoListAccessibleCustomers = new grpcWeb.AbstractClientBase.MethodInfo(
    ListAccessibleCustomersResponse,
    (request: ListAccessibleCustomersRequest) => {
      return request.serializeBinary();
    },
    ListAccessibleCustomersResponse.deserializeBinary
  );

  listAccessibleCustomers(
    request: ListAccessibleCustomersRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListAccessibleCustomersResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v2.services.CustomerService/ListAccessibleCustomers',
      request,
      metadata || {},
      this.methodInfoListAccessibleCustomers,
      callback);
  }

  methodInfoCreateCustomerClient = new grpcWeb.AbstractClientBase.MethodInfo(
    CreateCustomerClientResponse,
    (request: CreateCustomerClientRequest) => {
      return request.serializeBinary();
    },
    CreateCustomerClientResponse.deserializeBinary
  );

  createCustomerClient(
    request: CreateCustomerClientRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: CreateCustomerClientResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v2.services.CustomerService/CreateCustomerClient',
      request,
      metadata || {},
      this.methodInfoCreateCustomerClient,
      callback);
  }

}

