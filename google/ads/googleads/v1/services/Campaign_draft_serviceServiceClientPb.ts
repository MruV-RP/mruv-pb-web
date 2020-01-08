/**
 * @fileoverview gRPC-Web generated client stub for google.ads.googleads.v1.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v1_resources_campaign_draft_pb from '../../../../../google/ads/googleads/v1/resources/campaign_draft_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_longrunning_operations_pb from '../../../../../google/longrunning/operations_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_rpc_status_pb from '../../../../../google/rpc/status_pb';

import {
  GetCampaignDraftRequest,
  ListCampaignDraftAsyncErrorsRequest,
  ListCampaignDraftAsyncErrorsResponse,
  MutateCampaignDraftsRequest,
  MutateCampaignDraftsResponse,
  PromoteCampaignDraftRequest} from './campaign_draft_service_pb';

export class CampaignDraftServiceClient {
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

  methodInfoGetCampaignDraft = new grpcWeb.AbstractClientBase.MethodInfo(
    google_ads_googleads_v1_resources_campaign_draft_pb.CampaignDraft,
    (request: GetCampaignDraftRequest) => {
      return request.serializeBinary();
    },
    google_ads_googleads_v1_resources_campaign_draft_pb.CampaignDraft.deserializeBinary
  );

  getCampaignDraft(
    request: GetCampaignDraftRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v1_resources_campaign_draft_pb.CampaignDraft) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v1.services.CampaignDraftService/GetCampaignDraft',
      request,
      metadata || {},
      this.methodInfoGetCampaignDraft,
      callback);
  }

  methodInfoMutateCampaignDrafts = new grpcWeb.AbstractClientBase.MethodInfo(
    MutateCampaignDraftsResponse,
    (request: MutateCampaignDraftsRequest) => {
      return request.serializeBinary();
    },
    MutateCampaignDraftsResponse.deserializeBinary
  );

  mutateCampaignDrafts(
    request: MutateCampaignDraftsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MutateCampaignDraftsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v1.services.CampaignDraftService/MutateCampaignDrafts',
      request,
      metadata || {},
      this.methodInfoMutateCampaignDrafts,
      callback);
  }

  methodInfoPromoteCampaignDraft = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: PromoteCampaignDraftRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  promoteCampaignDraft(
    request: PromoteCampaignDraftRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v1.services.CampaignDraftService/PromoteCampaignDraft',
      request,
      metadata || {},
      this.methodInfoPromoteCampaignDraft,
      callback);
  }

  methodInfoListCampaignDraftAsyncErrors = new grpcWeb.AbstractClientBase.MethodInfo(
    ListCampaignDraftAsyncErrorsResponse,
    (request: ListCampaignDraftAsyncErrorsRequest) => {
      return request.serializeBinary();
    },
    ListCampaignDraftAsyncErrorsResponse.deserializeBinary
  );

  listCampaignDraftAsyncErrors(
    request: ListCampaignDraftAsyncErrorsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListCampaignDraftAsyncErrorsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v1.services.CampaignDraftService/ListCampaignDraftAsyncErrors',
      request,
      metadata || {},
      this.methodInfoListCampaignDraftAsyncErrors,
      callback);
  }

}

