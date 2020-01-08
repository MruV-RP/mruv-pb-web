/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.billing.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';

import {
  BillingAccount,
  GetBillingAccountRequest,
  GetProjectBillingInfoRequest,
  ListBillingAccountsRequest,
  ListBillingAccountsResponse,
  ListProjectBillingInfoRequest,
  ListProjectBillingInfoResponse,
  ProjectBillingInfo,
  UpdateProjectBillingInfoRequest} from './cloud_billing_pb';

export class CloudBillingClient {
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

  methodInfoGetBillingAccount = new grpcWeb.AbstractClientBase.MethodInfo(
    BillingAccount,
    (request: GetBillingAccountRequest) => {
      return request.serializeBinary();
    },
    BillingAccount.deserializeBinary
  );

  getBillingAccount(
    request: GetBillingAccountRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: BillingAccount) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.billing.v1.CloudBilling/GetBillingAccount',
      request,
      metadata || {},
      this.methodInfoGetBillingAccount,
      callback);
  }

  methodInfoListBillingAccounts = new grpcWeb.AbstractClientBase.MethodInfo(
    ListBillingAccountsResponse,
    (request: ListBillingAccountsRequest) => {
      return request.serializeBinary();
    },
    ListBillingAccountsResponse.deserializeBinary
  );

  listBillingAccounts(
    request: ListBillingAccountsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListBillingAccountsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.billing.v1.CloudBilling/ListBillingAccounts',
      request,
      metadata || {},
      this.methodInfoListBillingAccounts,
      callback);
  }

  methodInfoListProjectBillingInfo = new grpcWeb.AbstractClientBase.MethodInfo(
    ListProjectBillingInfoResponse,
    (request: ListProjectBillingInfoRequest) => {
      return request.serializeBinary();
    },
    ListProjectBillingInfoResponse.deserializeBinary
  );

  listProjectBillingInfo(
    request: ListProjectBillingInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListProjectBillingInfoResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.billing.v1.CloudBilling/ListProjectBillingInfo',
      request,
      metadata || {},
      this.methodInfoListProjectBillingInfo,
      callback);
  }

  methodInfoGetProjectBillingInfo = new grpcWeb.AbstractClientBase.MethodInfo(
    ProjectBillingInfo,
    (request: GetProjectBillingInfoRequest) => {
      return request.serializeBinary();
    },
    ProjectBillingInfo.deserializeBinary
  );

  getProjectBillingInfo(
    request: GetProjectBillingInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ProjectBillingInfo) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.billing.v1.CloudBilling/GetProjectBillingInfo',
      request,
      metadata || {},
      this.methodInfoGetProjectBillingInfo,
      callback);
  }

  methodInfoUpdateProjectBillingInfo = new grpcWeb.AbstractClientBase.MethodInfo(
    ProjectBillingInfo,
    (request: UpdateProjectBillingInfoRequest) => {
      return request.serializeBinary();
    },
    ProjectBillingInfo.deserializeBinary
  );

  updateProjectBillingInfo(
    request: UpdateProjectBillingInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ProjectBillingInfo) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.billing.v1.CloudBilling/UpdateProjectBillingInfo',
      request,
      metadata || {},
      this.methodInfoUpdateProjectBillingInfo,
      callback);
  }

}

