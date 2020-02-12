/**
 * @fileoverview gRPC-Web generated client stub for google.ads.googleads.v2.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v2_resources_shared_set_pb from '../../../../../google/ads/googleads/v2/resources/shared_set_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_rpc_status_pb from '../../../../../google/rpc/status_pb';
import * as google_api_client_pb from '../../../../../google/api/client_pb';

import {
  GetSharedSetRequest,
  MutateSharedSetsRequest,
  MutateSharedSetsResponse} from './shared_set_service_pb';

export class SharedSetServiceClient {
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

  methodInfoGetSharedSet = new grpcWeb.AbstractClientBase.MethodInfo(
    google_ads_googleads_v2_resources_shared_set_pb.SharedSet,
    (request: GetSharedSetRequest) => {
      return request.serializeBinary();
    },
    google_ads_googleads_v2_resources_shared_set_pb.SharedSet.deserializeBinary
  );

  getSharedSet(
    request: GetSharedSetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v2_resources_shared_set_pb.SharedSet) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v2.services.SharedSetService/GetSharedSet',
      request,
      metadata || {},
      this.methodInfoGetSharedSet,
      callback);
  }

  methodInfoMutateSharedSets = new grpcWeb.AbstractClientBase.MethodInfo(
    MutateSharedSetsResponse,
    (request: MutateSharedSetsRequest) => {
      return request.serializeBinary();
    },
    MutateSharedSetsResponse.deserializeBinary
  );

  mutateSharedSets(
    request: MutateSharedSetsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MutateSharedSetsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v2.services.SharedSetService/MutateSharedSets',
      request,
      metadata || {},
      this.methodInfoMutateSharedSets,
      callback);
  }

}

