/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.oslogin.v1beta
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';
import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb';
import * as google_api_resource_pb from '../../../../google/api/resource_pb';
import * as google_cloud_oslogin_common_common_pb from '../../../../google/cloud/oslogin/common/common_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';

import {
  DeletePosixAccountRequest,
  DeleteSshPublicKeyRequest,
  GetLoginProfileRequest,
  GetSshPublicKeyRequest,
  ImportSshPublicKeyRequest,
  ImportSshPublicKeyResponse,
  LoginProfile,
  UpdateSshPublicKeyRequest} from './oslogin_pb';

export class OsLoginServiceClient {
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

  methodInfoDeletePosixAccount = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeletePosixAccountRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deletePosixAccount(
    request: DeletePosixAccountRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.oslogin.v1beta.OsLoginService/DeletePosixAccount',
      request,
      metadata || {},
      this.methodInfoDeletePosixAccount,
      callback);
  }

  methodInfoDeleteSshPublicKey = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteSshPublicKeyRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteSshPublicKey(
    request: DeleteSshPublicKeyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.oslogin.v1beta.OsLoginService/DeleteSshPublicKey',
      request,
      metadata || {},
      this.methodInfoDeleteSshPublicKey,
      callback);
  }

  methodInfoGetLoginProfile = new grpcWeb.AbstractClientBase.MethodInfo(
    LoginProfile,
    (request: GetLoginProfileRequest) => {
      return request.serializeBinary();
    },
    LoginProfile.deserializeBinary
  );

  getLoginProfile(
    request: GetLoginProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: LoginProfile) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.oslogin.v1beta.OsLoginService/GetLoginProfile',
      request,
      metadata || {},
      this.methodInfoGetLoginProfile,
      callback);
  }

  methodInfoGetSshPublicKey = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_oslogin_common_common_pb.SshPublicKey,
    (request: GetSshPublicKeyRequest) => {
      return request.serializeBinary();
    },
    google_cloud_oslogin_common_common_pb.SshPublicKey.deserializeBinary
  );

  getSshPublicKey(
    request: GetSshPublicKeyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_oslogin_common_common_pb.SshPublicKey) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.oslogin.v1beta.OsLoginService/GetSshPublicKey',
      request,
      metadata || {},
      this.methodInfoGetSshPublicKey,
      callback);
  }

  methodInfoImportSshPublicKey = new grpcWeb.AbstractClientBase.MethodInfo(
    ImportSshPublicKeyResponse,
    (request: ImportSshPublicKeyRequest) => {
      return request.serializeBinary();
    },
    ImportSshPublicKeyResponse.deserializeBinary
  );

  importSshPublicKey(
    request: ImportSshPublicKeyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ImportSshPublicKeyResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.oslogin.v1beta.OsLoginService/ImportSshPublicKey',
      request,
      metadata || {},
      this.methodInfoImportSshPublicKey,
      callback);
  }

  methodInfoUpdateSshPublicKey = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_oslogin_common_common_pb.SshPublicKey,
    (request: UpdateSshPublicKeyRequest) => {
      return request.serializeBinary();
    },
    google_cloud_oslogin_common_common_pb.SshPublicKey.deserializeBinary
  );

  updateSshPublicKey(
    request: UpdateSshPublicKeyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_oslogin_common_common_pb.SshPublicKey) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.oslogin.v1beta.OsLoginService/UpdateSshPublicKey',
      request,
      metadata || {},
      this.methodInfoUpdateSshPublicKey,
      callback);
  }

}

