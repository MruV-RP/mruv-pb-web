/**
 * @fileoverview gRPC-Web generated client stub for google.ads.googleads.v1.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v1_resources_campaign_experiment_pb from '../../../../../google/ads/googleads/v1/resources/campaign_experiment_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_longrunning_operations_pb from '../../../../../google/longrunning/operations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_rpc_status_pb from '../../../../../google/rpc/status_pb';

import {
  CreateCampaignExperimentRequest,
  EndCampaignExperimentRequest,
  GetCampaignExperimentRequest,
  GraduateCampaignExperimentRequest,
  GraduateCampaignExperimentResponse,
  ListCampaignExperimentAsyncErrorsRequest,
  ListCampaignExperimentAsyncErrorsResponse,
  MutateCampaignExperimentsRequest,
  MutateCampaignExperimentsResponse,
  PromoteCampaignExperimentRequest} from './campaign_experiment_service_pb';

export class CampaignExperimentServiceClient {
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

  methodInfoGetCampaignExperiment = new grpcWeb.AbstractClientBase.MethodInfo(
    google_ads_googleads_v1_resources_campaign_experiment_pb.CampaignExperiment,
    (request: GetCampaignExperimentRequest) => {
      return request.serializeBinary();
    },
    google_ads_googleads_v1_resources_campaign_experiment_pb.CampaignExperiment.deserializeBinary
  );

  getCampaignExperiment(
    request: GetCampaignExperimentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v1_resources_campaign_experiment_pb.CampaignExperiment) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v1.services.CampaignExperimentService/GetCampaignExperiment',
      request,
      metadata || {},
      this.methodInfoGetCampaignExperiment,
      callback);
  }

  methodInfoCreateCampaignExperiment = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: CreateCampaignExperimentRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  createCampaignExperiment(
    request: CreateCampaignExperimentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v1.services.CampaignExperimentService/CreateCampaignExperiment',
      request,
      metadata || {},
      this.methodInfoCreateCampaignExperiment,
      callback);
  }

  methodInfoMutateCampaignExperiments = new grpcWeb.AbstractClientBase.MethodInfo(
    MutateCampaignExperimentsResponse,
    (request: MutateCampaignExperimentsRequest) => {
      return request.serializeBinary();
    },
    MutateCampaignExperimentsResponse.deserializeBinary
  );

  mutateCampaignExperiments(
    request: MutateCampaignExperimentsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MutateCampaignExperimentsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v1.services.CampaignExperimentService/MutateCampaignExperiments',
      request,
      metadata || {},
      this.methodInfoMutateCampaignExperiments,
      callback);
  }

  methodInfoGraduateCampaignExperiment = new grpcWeb.AbstractClientBase.MethodInfo(
    GraduateCampaignExperimentResponse,
    (request: GraduateCampaignExperimentRequest) => {
      return request.serializeBinary();
    },
    GraduateCampaignExperimentResponse.deserializeBinary
  );

  graduateCampaignExperiment(
    request: GraduateCampaignExperimentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GraduateCampaignExperimentResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v1.services.CampaignExperimentService/GraduateCampaignExperiment',
      request,
      metadata || {},
      this.methodInfoGraduateCampaignExperiment,
      callback);
  }

  methodInfoPromoteCampaignExperiment = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: PromoteCampaignExperimentRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  promoteCampaignExperiment(
    request: PromoteCampaignExperimentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v1.services.CampaignExperimentService/PromoteCampaignExperiment',
      request,
      metadata || {},
      this.methodInfoPromoteCampaignExperiment,
      callback);
  }

  methodInfoEndCampaignExperiment = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: EndCampaignExperimentRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  endCampaignExperiment(
    request: EndCampaignExperimentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v1.services.CampaignExperimentService/EndCampaignExperiment',
      request,
      metadata || {},
      this.methodInfoEndCampaignExperiment,
      callback);
  }

  methodInfoListCampaignExperimentAsyncErrors = new grpcWeb.AbstractClientBase.MethodInfo(
    ListCampaignExperimentAsyncErrorsResponse,
    (request: ListCampaignExperimentAsyncErrorsRequest) => {
      return request.serializeBinary();
    },
    ListCampaignExperimentAsyncErrorsResponse.deserializeBinary
  );

  listCampaignExperimentAsyncErrors(
    request: ListCampaignExperimentAsyncErrorsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListCampaignExperimentAsyncErrorsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v1.services.CampaignExperimentService/ListCampaignExperimentAsyncErrors',
      request,
      metadata || {},
      this.methodInfoListCampaignExperimentAsyncErrors,
      callback);
  }

}

