/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.billing.budgets.v1alpha1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../../google/api/client_pb';
import * as google_api_field_behavior_pb from '../../../../../google/api/field_behavior_pb';
import * as google_api_resource_pb from '../../../../../google/api/resource_pb';
import * as google_cloud_billing_budgets_v1alpha1_budget_model_pb from '../../../../../google/cloud/billing/budgets/v1alpha1/budget_model_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';

import {
  CreateBudgetRequest,
  DeleteBudgetRequest,
  GetBudgetRequest,
  ListBudgetsRequest,
  ListBudgetsResponse,
  UpdateBudgetRequest} from './budget_service_pb';

export class BudgetServiceClient {
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

  methodInfoCreateBudget = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_billing_budgets_v1alpha1_budget_model_pb.Budget,
    (request: CreateBudgetRequest) => {
      return request.serializeBinary();
    },
    google_cloud_billing_budgets_v1alpha1_budget_model_pb.Budget.deserializeBinary
  );

  createBudget(
    request: CreateBudgetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_billing_budgets_v1alpha1_budget_model_pb.Budget) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.billing.budgets.v1alpha1.BudgetService/CreateBudget',
      request,
      metadata || {},
      this.methodInfoCreateBudget,
      callback);
  }

  methodInfoUpdateBudget = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_billing_budgets_v1alpha1_budget_model_pb.Budget,
    (request: UpdateBudgetRequest) => {
      return request.serializeBinary();
    },
    google_cloud_billing_budgets_v1alpha1_budget_model_pb.Budget.deserializeBinary
  );

  updateBudget(
    request: UpdateBudgetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_billing_budgets_v1alpha1_budget_model_pb.Budget) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.billing.budgets.v1alpha1.BudgetService/UpdateBudget',
      request,
      metadata || {},
      this.methodInfoUpdateBudget,
      callback);
  }

  methodInfoGetBudget = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_billing_budgets_v1alpha1_budget_model_pb.Budget,
    (request: GetBudgetRequest) => {
      return request.serializeBinary();
    },
    google_cloud_billing_budgets_v1alpha1_budget_model_pb.Budget.deserializeBinary
  );

  getBudget(
    request: GetBudgetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_billing_budgets_v1alpha1_budget_model_pb.Budget) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.billing.budgets.v1alpha1.BudgetService/GetBudget',
      request,
      metadata || {},
      this.methodInfoGetBudget,
      callback);
  }

  methodInfoListBudgets = new grpcWeb.AbstractClientBase.MethodInfo(
    ListBudgetsResponse,
    (request: ListBudgetsRequest) => {
      return request.serializeBinary();
    },
    ListBudgetsResponse.deserializeBinary
  );

  listBudgets(
    request: ListBudgetsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListBudgetsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.billing.budgets.v1alpha1.BudgetService/ListBudgets',
      request,
      metadata || {},
      this.methodInfoListBudgets,
      callback);
  }

  methodInfoDeleteBudget = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteBudgetRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteBudget(
    request: DeleteBudgetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.billing.budgets.v1alpha1.BudgetService/DeleteBudget',
      request,
      metadata || {},
      this.methodInfoDeleteBudget,
      callback);
  }

}

