/**
 * @fileoverview gRPC-Web generated client stub for google.devtools.cloudprofiler.v2
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

import {
  CreateOfflineProfileRequest,
  CreateProfileRequest,
  Profile,
  UpdateProfileRequest} from './profiler_pb';

export class ProfilerServiceClient {
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

  methodInfoCreateProfile = new grpcWeb.AbstractClientBase.MethodInfo(
    Profile,
    (request: CreateProfileRequest) => {
      return request.serializeBinary();
    },
    Profile.deserializeBinary
  );

  createProfile(
    request: CreateProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Profile) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.cloudprofiler.v2.ProfilerService/CreateProfile',
      request,
      metadata || {},
      this.methodInfoCreateProfile,
      callback);
  }

  methodInfoCreateOfflineProfile = new grpcWeb.AbstractClientBase.MethodInfo(
    Profile,
    (request: CreateOfflineProfileRequest) => {
      return request.serializeBinary();
    },
    Profile.deserializeBinary
  );

  createOfflineProfile(
    request: CreateOfflineProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Profile) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.cloudprofiler.v2.ProfilerService/CreateOfflineProfile',
      request,
      metadata || {},
      this.methodInfoCreateOfflineProfile,
      callback);
  }

  methodInfoUpdateProfile = new grpcWeb.AbstractClientBase.MethodInfo(
    Profile,
    (request: UpdateProfileRequest) => {
      return request.serializeBinary();
    },
    Profile.deserializeBinary
  );

  updateProfile(
    request: UpdateProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Profile) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.cloudprofiler.v2.ProfilerService/UpdateProfile',
      request,
      metadata || {},
      this.methodInfoUpdateProfile,
      callback);
  }

}

