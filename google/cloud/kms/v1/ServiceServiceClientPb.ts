/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.kms.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_cloud_kms_v1_resources_pb from '../../../../google/cloud/kms/v1/resources_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';

import {
  AsymmetricDecryptRequest,
  AsymmetricDecryptResponse,
  AsymmetricSignRequest,
  AsymmetricSignResponse,
  CreateCryptoKeyRequest,
  CreateCryptoKeyVersionRequest,
  CreateImportJobRequest,
  CreateKeyRingRequest,
  DecryptRequest,
  DecryptResponse,
  DestroyCryptoKeyVersionRequest,
  EncryptRequest,
  EncryptResponse,
  GetCryptoKeyRequest,
  GetCryptoKeyVersionRequest,
  GetImportJobRequest,
  GetKeyRingRequest,
  GetPublicKeyRequest,
  ImportCryptoKeyVersionRequest,
  ListCryptoKeyVersionsRequest,
  ListCryptoKeyVersionsResponse,
  ListCryptoKeysRequest,
  ListCryptoKeysResponse,
  ListImportJobsRequest,
  ListImportJobsResponse,
  ListKeyRingsRequest,
  ListKeyRingsResponse,
  RestoreCryptoKeyVersionRequest,
  UpdateCryptoKeyPrimaryVersionRequest,
  UpdateCryptoKeyRequest,
  UpdateCryptoKeyVersionRequest} from './service_pb';

export class KeyManagementServiceClient {
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

  methodInfoListKeyRings = new grpcWeb.AbstractClientBase.MethodInfo(
    ListKeyRingsResponse,
    (request: ListKeyRingsRequest) => {
      return request.serializeBinary();
    },
    ListKeyRingsResponse.deserializeBinary
  );

  listKeyRings(
    request: ListKeyRingsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListKeyRingsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.kms.v1.KeyManagementService/ListKeyRings',
      request,
      metadata || {},
      this.methodInfoListKeyRings,
      callback);
  }

  methodInfoListCryptoKeys = new grpcWeb.AbstractClientBase.MethodInfo(
    ListCryptoKeysResponse,
    (request: ListCryptoKeysRequest) => {
      return request.serializeBinary();
    },
    ListCryptoKeysResponse.deserializeBinary
  );

  listCryptoKeys(
    request: ListCryptoKeysRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListCryptoKeysResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.kms.v1.KeyManagementService/ListCryptoKeys',
      request,
      metadata || {},
      this.methodInfoListCryptoKeys,
      callback);
  }

  methodInfoListCryptoKeyVersions = new grpcWeb.AbstractClientBase.MethodInfo(
    ListCryptoKeyVersionsResponse,
    (request: ListCryptoKeyVersionsRequest) => {
      return request.serializeBinary();
    },
    ListCryptoKeyVersionsResponse.deserializeBinary
  );

  listCryptoKeyVersions(
    request: ListCryptoKeyVersionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListCryptoKeyVersionsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.kms.v1.KeyManagementService/ListCryptoKeyVersions',
      request,
      metadata || {},
      this.methodInfoListCryptoKeyVersions,
      callback);
  }

  methodInfoListImportJobs = new grpcWeb.AbstractClientBase.MethodInfo(
    ListImportJobsResponse,
    (request: ListImportJobsRequest) => {
      return request.serializeBinary();
    },
    ListImportJobsResponse.deserializeBinary
  );

  listImportJobs(
    request: ListImportJobsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListImportJobsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.kms.v1.KeyManagementService/ListImportJobs',
      request,
      metadata || {},
      this.methodInfoListImportJobs,
      callback);
  }

  methodInfoGetKeyRing = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_kms_v1_resources_pb.KeyRing,
    (request: GetKeyRingRequest) => {
      return request.serializeBinary();
    },
    google_cloud_kms_v1_resources_pb.KeyRing.deserializeBinary
  );

  getKeyRing(
    request: GetKeyRingRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_kms_v1_resources_pb.KeyRing) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.kms.v1.KeyManagementService/GetKeyRing',
      request,
      metadata || {},
      this.methodInfoGetKeyRing,
      callback);
  }

  methodInfoGetCryptoKey = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_kms_v1_resources_pb.CryptoKey,
    (request: GetCryptoKeyRequest) => {
      return request.serializeBinary();
    },
    google_cloud_kms_v1_resources_pb.CryptoKey.deserializeBinary
  );

  getCryptoKey(
    request: GetCryptoKeyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_kms_v1_resources_pb.CryptoKey) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.kms.v1.KeyManagementService/GetCryptoKey',
      request,
      metadata || {},
      this.methodInfoGetCryptoKey,
      callback);
  }

  methodInfoGetCryptoKeyVersion = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_kms_v1_resources_pb.CryptoKeyVersion,
    (request: GetCryptoKeyVersionRequest) => {
      return request.serializeBinary();
    },
    google_cloud_kms_v1_resources_pb.CryptoKeyVersion.deserializeBinary
  );

  getCryptoKeyVersion(
    request: GetCryptoKeyVersionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_kms_v1_resources_pb.CryptoKeyVersion) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.kms.v1.KeyManagementService/GetCryptoKeyVersion',
      request,
      metadata || {},
      this.methodInfoGetCryptoKeyVersion,
      callback);
  }

  methodInfoGetPublicKey = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_kms_v1_resources_pb.PublicKey,
    (request: GetPublicKeyRequest) => {
      return request.serializeBinary();
    },
    google_cloud_kms_v1_resources_pb.PublicKey.deserializeBinary
  );

  getPublicKey(
    request: GetPublicKeyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_kms_v1_resources_pb.PublicKey) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.kms.v1.KeyManagementService/GetPublicKey',
      request,
      metadata || {},
      this.methodInfoGetPublicKey,
      callback);
  }

  methodInfoGetImportJob = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_kms_v1_resources_pb.ImportJob,
    (request: GetImportJobRequest) => {
      return request.serializeBinary();
    },
    google_cloud_kms_v1_resources_pb.ImportJob.deserializeBinary
  );

  getImportJob(
    request: GetImportJobRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_kms_v1_resources_pb.ImportJob) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.kms.v1.KeyManagementService/GetImportJob',
      request,
      metadata || {},
      this.methodInfoGetImportJob,
      callback);
  }

  methodInfoCreateKeyRing = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_kms_v1_resources_pb.KeyRing,
    (request: CreateKeyRingRequest) => {
      return request.serializeBinary();
    },
    google_cloud_kms_v1_resources_pb.KeyRing.deserializeBinary
  );

  createKeyRing(
    request: CreateKeyRingRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_kms_v1_resources_pb.KeyRing) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.kms.v1.KeyManagementService/CreateKeyRing',
      request,
      metadata || {},
      this.methodInfoCreateKeyRing,
      callback);
  }

  methodInfoCreateCryptoKey = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_kms_v1_resources_pb.CryptoKey,
    (request: CreateCryptoKeyRequest) => {
      return request.serializeBinary();
    },
    google_cloud_kms_v1_resources_pb.CryptoKey.deserializeBinary
  );

  createCryptoKey(
    request: CreateCryptoKeyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_kms_v1_resources_pb.CryptoKey) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.kms.v1.KeyManagementService/CreateCryptoKey',
      request,
      metadata || {},
      this.methodInfoCreateCryptoKey,
      callback);
  }

  methodInfoCreateCryptoKeyVersion = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_kms_v1_resources_pb.CryptoKeyVersion,
    (request: CreateCryptoKeyVersionRequest) => {
      return request.serializeBinary();
    },
    google_cloud_kms_v1_resources_pb.CryptoKeyVersion.deserializeBinary
  );

  createCryptoKeyVersion(
    request: CreateCryptoKeyVersionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_kms_v1_resources_pb.CryptoKeyVersion) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.kms.v1.KeyManagementService/CreateCryptoKeyVersion',
      request,
      metadata || {},
      this.methodInfoCreateCryptoKeyVersion,
      callback);
  }

  methodInfoImportCryptoKeyVersion = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_kms_v1_resources_pb.CryptoKeyVersion,
    (request: ImportCryptoKeyVersionRequest) => {
      return request.serializeBinary();
    },
    google_cloud_kms_v1_resources_pb.CryptoKeyVersion.deserializeBinary
  );

  importCryptoKeyVersion(
    request: ImportCryptoKeyVersionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_kms_v1_resources_pb.CryptoKeyVersion) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.kms.v1.KeyManagementService/ImportCryptoKeyVersion',
      request,
      metadata || {},
      this.methodInfoImportCryptoKeyVersion,
      callback);
  }

  methodInfoCreateImportJob = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_kms_v1_resources_pb.ImportJob,
    (request: CreateImportJobRequest) => {
      return request.serializeBinary();
    },
    google_cloud_kms_v1_resources_pb.ImportJob.deserializeBinary
  );

  createImportJob(
    request: CreateImportJobRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_kms_v1_resources_pb.ImportJob) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.kms.v1.KeyManagementService/CreateImportJob',
      request,
      metadata || {},
      this.methodInfoCreateImportJob,
      callback);
  }

  methodInfoUpdateCryptoKey = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_kms_v1_resources_pb.CryptoKey,
    (request: UpdateCryptoKeyRequest) => {
      return request.serializeBinary();
    },
    google_cloud_kms_v1_resources_pb.CryptoKey.deserializeBinary
  );

  updateCryptoKey(
    request: UpdateCryptoKeyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_kms_v1_resources_pb.CryptoKey) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.kms.v1.KeyManagementService/UpdateCryptoKey',
      request,
      metadata || {},
      this.methodInfoUpdateCryptoKey,
      callback);
  }

  methodInfoUpdateCryptoKeyVersion = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_kms_v1_resources_pb.CryptoKeyVersion,
    (request: UpdateCryptoKeyVersionRequest) => {
      return request.serializeBinary();
    },
    google_cloud_kms_v1_resources_pb.CryptoKeyVersion.deserializeBinary
  );

  updateCryptoKeyVersion(
    request: UpdateCryptoKeyVersionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_kms_v1_resources_pb.CryptoKeyVersion) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.kms.v1.KeyManagementService/UpdateCryptoKeyVersion',
      request,
      metadata || {},
      this.methodInfoUpdateCryptoKeyVersion,
      callback);
  }

  methodInfoEncrypt = new grpcWeb.AbstractClientBase.MethodInfo(
    EncryptResponse,
    (request: EncryptRequest) => {
      return request.serializeBinary();
    },
    EncryptResponse.deserializeBinary
  );

  encrypt(
    request: EncryptRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: EncryptResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.kms.v1.KeyManagementService/Encrypt',
      request,
      metadata || {},
      this.methodInfoEncrypt,
      callback);
  }

  methodInfoDecrypt = new grpcWeb.AbstractClientBase.MethodInfo(
    DecryptResponse,
    (request: DecryptRequest) => {
      return request.serializeBinary();
    },
    DecryptResponse.deserializeBinary
  );

  decrypt(
    request: DecryptRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DecryptResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.kms.v1.KeyManagementService/Decrypt',
      request,
      metadata || {},
      this.methodInfoDecrypt,
      callback);
  }

  methodInfoAsymmetricSign = new grpcWeb.AbstractClientBase.MethodInfo(
    AsymmetricSignResponse,
    (request: AsymmetricSignRequest) => {
      return request.serializeBinary();
    },
    AsymmetricSignResponse.deserializeBinary
  );

  asymmetricSign(
    request: AsymmetricSignRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AsymmetricSignResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.kms.v1.KeyManagementService/AsymmetricSign',
      request,
      metadata || {},
      this.methodInfoAsymmetricSign,
      callback);
  }

  methodInfoAsymmetricDecrypt = new grpcWeb.AbstractClientBase.MethodInfo(
    AsymmetricDecryptResponse,
    (request: AsymmetricDecryptRequest) => {
      return request.serializeBinary();
    },
    AsymmetricDecryptResponse.deserializeBinary
  );

  asymmetricDecrypt(
    request: AsymmetricDecryptRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AsymmetricDecryptResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.kms.v1.KeyManagementService/AsymmetricDecrypt',
      request,
      metadata || {},
      this.methodInfoAsymmetricDecrypt,
      callback);
  }

  methodInfoUpdateCryptoKeyPrimaryVersion = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_kms_v1_resources_pb.CryptoKey,
    (request: UpdateCryptoKeyPrimaryVersionRequest) => {
      return request.serializeBinary();
    },
    google_cloud_kms_v1_resources_pb.CryptoKey.deserializeBinary
  );

  updateCryptoKeyPrimaryVersion(
    request: UpdateCryptoKeyPrimaryVersionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_kms_v1_resources_pb.CryptoKey) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.kms.v1.KeyManagementService/UpdateCryptoKeyPrimaryVersion',
      request,
      metadata || {},
      this.methodInfoUpdateCryptoKeyPrimaryVersion,
      callback);
  }

  methodInfoDestroyCryptoKeyVersion = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_kms_v1_resources_pb.CryptoKeyVersion,
    (request: DestroyCryptoKeyVersionRequest) => {
      return request.serializeBinary();
    },
    google_cloud_kms_v1_resources_pb.CryptoKeyVersion.deserializeBinary
  );

  destroyCryptoKeyVersion(
    request: DestroyCryptoKeyVersionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_kms_v1_resources_pb.CryptoKeyVersion) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.kms.v1.KeyManagementService/DestroyCryptoKeyVersion',
      request,
      metadata || {},
      this.methodInfoDestroyCryptoKeyVersion,
      callback);
  }

  methodInfoRestoreCryptoKeyVersion = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_kms_v1_resources_pb.CryptoKeyVersion,
    (request: RestoreCryptoKeyVersionRequest) => {
      return request.serializeBinary();
    },
    google_cloud_kms_v1_resources_pb.CryptoKeyVersion.deserializeBinary
  );

  restoreCryptoKeyVersion(
    request: RestoreCryptoKeyVersionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_kms_v1_resources_pb.CryptoKeyVersion) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.kms.v1.KeyManagementService/RestoreCryptoKeyVersion',
      request,
      metadata || {},
      this.methodInfoRestoreCryptoKeyVersion,
      callback);
  }

}

