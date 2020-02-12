/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.talent.v4beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';
import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb';
import * as google_cloud_talent_v4beta1_common_pb from '../../../../google/cloud/talent/v4beta1/common_pb';
import * as google_cloud_talent_v4beta1_filters_pb from '../../../../google/cloud/talent/v4beta1/filters_pb';
import * as google_cloud_talent_v4beta1_histogram_pb from '../../../../google/cloud/talent/v4beta1/histogram_pb';
import * as google_cloud_talent_v4beta1_profile_pb from '../../../../google/cloud/talent/v4beta1/profile_pb';
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';

import {
  CreateProfileRequest,
  DeleteProfileRequest,
  GetProfileRequest,
  ListProfilesRequest,
  ListProfilesResponse,
  SearchProfilesRequest,
  SearchProfilesResponse,
  UpdateProfileRequest} from './profile_service_pb';

export class ProfileServiceClient {
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

  methodInfoListProfiles = new grpcWeb.AbstractClientBase.MethodInfo(
    ListProfilesResponse,
    (request: ListProfilesRequest) => {
      return request.serializeBinary();
    },
    ListProfilesResponse.deserializeBinary
  );

  listProfiles(
    request: ListProfilesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListProfilesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.talent.v4beta1.ProfileService/ListProfiles',
      request,
      metadata || {},
      this.methodInfoListProfiles,
      callback);
  }

  methodInfoCreateProfile = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_talent_v4beta1_profile_pb.Profile,
    (request: CreateProfileRequest) => {
      return request.serializeBinary();
    },
    google_cloud_talent_v4beta1_profile_pb.Profile.deserializeBinary
  );

  createProfile(
    request: CreateProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_talent_v4beta1_profile_pb.Profile) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.talent.v4beta1.ProfileService/CreateProfile',
      request,
      metadata || {},
      this.methodInfoCreateProfile,
      callback);
  }

  methodInfoGetProfile = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_talent_v4beta1_profile_pb.Profile,
    (request: GetProfileRequest) => {
      return request.serializeBinary();
    },
    google_cloud_talent_v4beta1_profile_pb.Profile.deserializeBinary
  );

  getProfile(
    request: GetProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_talent_v4beta1_profile_pb.Profile) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.talent.v4beta1.ProfileService/GetProfile',
      request,
      metadata || {},
      this.methodInfoGetProfile,
      callback);
  }

  methodInfoUpdateProfile = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_talent_v4beta1_profile_pb.Profile,
    (request: UpdateProfileRequest) => {
      return request.serializeBinary();
    },
    google_cloud_talent_v4beta1_profile_pb.Profile.deserializeBinary
  );

  updateProfile(
    request: UpdateProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_talent_v4beta1_profile_pb.Profile) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.talent.v4beta1.ProfileService/UpdateProfile',
      request,
      metadata || {},
      this.methodInfoUpdateProfile,
      callback);
  }

  methodInfoDeleteProfile = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteProfileRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteProfile(
    request: DeleteProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.talent.v4beta1.ProfileService/DeleteProfile',
      request,
      metadata || {},
      this.methodInfoDeleteProfile,
      callback);
  }

  methodInfoSearchProfiles = new grpcWeb.AbstractClientBase.MethodInfo(
    SearchProfilesResponse,
    (request: SearchProfilesRequest) => {
      return request.serializeBinary();
    },
    SearchProfilesResponse.deserializeBinary
  );

  searchProfiles(
    request: SearchProfilesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SearchProfilesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.talent.v4beta1.ProfileService/SearchProfiles',
      request,
      metadata || {},
      this.methodInfoSearchProfiles,
      callback);
  }

}

