/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.resourcemanager.v2
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';
import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb';
import * as google_api_resource_pb from '../../../../google/api/resource_pb';
import * as google_iam_v1_iam_policy_pb from '../../../../google/iam/v1/iam_policy_pb';
import * as google_iam_v1_policy_pb from '../../../../google/iam/v1/policy_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

import {
  CreateFolderRequest,
  DeleteFolderRequest,
  Folder,
  GetFolderRequest,
  ListFoldersRequest,
  ListFoldersResponse,
  MoveFolderRequest,
  SearchFoldersRequest,
  SearchFoldersResponse,
  UndeleteFolderRequest,
  UpdateFolderRequest} from './folders_pb';

export class FoldersClient {
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

  methodInfoListFolders = new grpcWeb.AbstractClientBase.MethodInfo(
    ListFoldersResponse,
    (request: ListFoldersRequest) => {
      return request.serializeBinary();
    },
    ListFoldersResponse.deserializeBinary
  );

  listFolders(
    request: ListFoldersRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListFoldersResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.resourcemanager.v2.Folders/ListFolders',
      request,
      metadata || {},
      this.methodInfoListFolders,
      callback);
  }

  methodInfoSearchFolders = new grpcWeb.AbstractClientBase.MethodInfo(
    SearchFoldersResponse,
    (request: SearchFoldersRequest) => {
      return request.serializeBinary();
    },
    SearchFoldersResponse.deserializeBinary
  );

  searchFolders(
    request: SearchFoldersRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SearchFoldersResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.resourcemanager.v2.Folders/SearchFolders',
      request,
      metadata || {},
      this.methodInfoSearchFolders,
      callback);
  }

  methodInfoGetFolder = new grpcWeb.AbstractClientBase.MethodInfo(
    Folder,
    (request: GetFolderRequest) => {
      return request.serializeBinary();
    },
    Folder.deserializeBinary
  );

  getFolder(
    request: GetFolderRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Folder) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.resourcemanager.v2.Folders/GetFolder',
      request,
      metadata || {},
      this.methodInfoGetFolder,
      callback);
  }

  methodInfoCreateFolder = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: CreateFolderRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  createFolder(
    request: CreateFolderRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.resourcemanager.v2.Folders/CreateFolder',
      request,
      metadata || {},
      this.methodInfoCreateFolder,
      callback);
  }

  methodInfoUpdateFolder = new grpcWeb.AbstractClientBase.MethodInfo(
    Folder,
    (request: UpdateFolderRequest) => {
      return request.serializeBinary();
    },
    Folder.deserializeBinary
  );

  updateFolder(
    request: UpdateFolderRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Folder) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.resourcemanager.v2.Folders/UpdateFolder',
      request,
      metadata || {},
      this.methodInfoUpdateFolder,
      callback);
  }

  methodInfoMoveFolder = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: MoveFolderRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  moveFolder(
    request: MoveFolderRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.resourcemanager.v2.Folders/MoveFolder',
      request,
      metadata || {},
      this.methodInfoMoveFolder,
      callback);
  }

  methodInfoDeleteFolder = new grpcWeb.AbstractClientBase.MethodInfo(
    Folder,
    (request: DeleteFolderRequest) => {
      return request.serializeBinary();
    },
    Folder.deserializeBinary
  );

  deleteFolder(
    request: DeleteFolderRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Folder) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.resourcemanager.v2.Folders/DeleteFolder',
      request,
      metadata || {},
      this.methodInfoDeleteFolder,
      callback);
  }

  methodInfoUndeleteFolder = new grpcWeb.AbstractClientBase.MethodInfo(
    Folder,
    (request: UndeleteFolderRequest) => {
      return request.serializeBinary();
    },
    Folder.deserializeBinary
  );

  undeleteFolder(
    request: UndeleteFolderRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Folder) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.resourcemanager.v2.Folders/UndeleteFolder',
      request,
      metadata || {},
      this.methodInfoUndeleteFolder,
      callback);
  }

  methodInfoGetIamPolicy = new grpcWeb.AbstractClientBase.MethodInfo(
    google_iam_v1_policy_pb.Policy,
    (request: google_iam_v1_iam_policy_pb.GetIamPolicyRequest) => {
      return request.serializeBinary();
    },
    google_iam_v1_policy_pb.Policy.deserializeBinary
  );

  getIamPolicy(
    request: google_iam_v1_iam_policy_pb.GetIamPolicyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_iam_v1_policy_pb.Policy) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.resourcemanager.v2.Folders/GetIamPolicy',
      request,
      metadata || {},
      this.methodInfoGetIamPolicy,
      callback);
  }

  methodInfoSetIamPolicy = new grpcWeb.AbstractClientBase.MethodInfo(
    google_iam_v1_policy_pb.Policy,
    (request: google_iam_v1_iam_policy_pb.SetIamPolicyRequest) => {
      return request.serializeBinary();
    },
    google_iam_v1_policy_pb.Policy.deserializeBinary
  );

  setIamPolicy(
    request: google_iam_v1_iam_policy_pb.SetIamPolicyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_iam_v1_policy_pb.Policy) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.resourcemanager.v2.Folders/SetIamPolicy',
      request,
      metadata || {},
      this.methodInfoSetIamPolicy,
      callback);
  }

  methodInfoTestIamPermissions = new grpcWeb.AbstractClientBase.MethodInfo(
    google_iam_v1_iam_policy_pb.TestIamPermissionsResponse,
    (request: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest) => {
      return request.serializeBinary();
    },
    google_iam_v1_iam_policy_pb.TestIamPermissionsResponse.deserializeBinary
  );

  testIamPermissions(
    request: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_iam_v1_iam_policy_pb.TestIamPermissionsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.resourcemanager.v2.Folders/TestIamPermissions',
      request,
      metadata || {},
      this.methodInfoTestIamPermissions,
      callback);
  }

}

