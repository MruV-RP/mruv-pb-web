/**
 * @fileoverview gRPC-Web generated client stub for google.ads.googleads.v2.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v2_resources_user_list_pb from '../../../../../google/ads/googleads/v2/resources/user_list_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_rpc_status_pb from '../../../../../google/rpc/status_pb';
import * as google_api_client_pb from '../../../../../google/api/client_pb';

import {
  GetUserListRequest,
  MutateUserListsRequest,
  MutateUserListsResponse} from './user_list_service_pb';

export class UserListServiceClient {
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

  methodInfoGetUserList = new grpcWeb.AbstractClientBase.MethodInfo(
    google_ads_googleads_v2_resources_user_list_pb.UserList,
    (request: GetUserListRequest) => {
      return request.serializeBinary();
    },
    google_ads_googleads_v2_resources_user_list_pb.UserList.deserializeBinary
  );

  getUserList(
    request: GetUserListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v2_resources_user_list_pb.UserList) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v2.services.UserListService/GetUserList',
      request,
      metadata || {},
      this.methodInfoGetUserList,
      callback);
  }

  methodInfoMutateUserLists = new grpcWeb.AbstractClientBase.MethodInfo(
    MutateUserListsResponse,
    (request: MutateUserListsRequest) => {
      return request.serializeBinary();
    },
    MutateUserListsResponse.deserializeBinary
  );

  mutateUserLists(
    request: MutateUserListsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MutateUserListsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v2.services.UserListService/MutateUserLists',
      request,
      metadata || {},
      this.methodInfoMutateUserLists,
      callback);
  }

}

