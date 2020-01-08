/**
 * @fileoverview gRPC-Web generated client stub for google.iam.credentials.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_iam_credentials_v1_common_pb from '../../../../google/iam/credentials/v1/common_pb';

export class IAMCredentialsClient {
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

  methodInfoGenerateAccessToken = new grpcWeb.AbstractClientBase.MethodInfo(
    google_iam_credentials_v1_common_pb.GenerateAccessTokenResponse,
    (request: google_iam_credentials_v1_common_pb.GenerateAccessTokenRequest) => {
      return request.serializeBinary();
    },
    google_iam_credentials_v1_common_pb.GenerateAccessTokenResponse.deserializeBinary
  );

  generateAccessToken(
    request: google_iam_credentials_v1_common_pb.GenerateAccessTokenRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_iam_credentials_v1_common_pb.GenerateAccessTokenResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.iam.credentials.v1.IAMCredentials/GenerateAccessToken',
      request,
      metadata || {},
      this.methodInfoGenerateAccessToken,
      callback);
  }

  methodInfoGenerateIdToken = new grpcWeb.AbstractClientBase.MethodInfo(
    google_iam_credentials_v1_common_pb.GenerateIdTokenResponse,
    (request: google_iam_credentials_v1_common_pb.GenerateIdTokenRequest) => {
      return request.serializeBinary();
    },
    google_iam_credentials_v1_common_pb.GenerateIdTokenResponse.deserializeBinary
  );

  generateIdToken(
    request: google_iam_credentials_v1_common_pb.GenerateIdTokenRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_iam_credentials_v1_common_pb.GenerateIdTokenResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.iam.credentials.v1.IAMCredentials/GenerateIdToken',
      request,
      metadata || {},
      this.methodInfoGenerateIdToken,
      callback);
  }

  methodInfoSignBlob = new grpcWeb.AbstractClientBase.MethodInfo(
    google_iam_credentials_v1_common_pb.SignBlobResponse,
    (request: google_iam_credentials_v1_common_pb.SignBlobRequest) => {
      return request.serializeBinary();
    },
    google_iam_credentials_v1_common_pb.SignBlobResponse.deserializeBinary
  );

  signBlob(
    request: google_iam_credentials_v1_common_pb.SignBlobRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_iam_credentials_v1_common_pb.SignBlobResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.iam.credentials.v1.IAMCredentials/SignBlob',
      request,
      metadata || {},
      this.methodInfoSignBlob,
      callback);
  }

  methodInfoSignJwt = new grpcWeb.AbstractClientBase.MethodInfo(
    google_iam_credentials_v1_common_pb.SignJwtResponse,
    (request: google_iam_credentials_v1_common_pb.SignJwtRequest) => {
      return request.serializeBinary();
    },
    google_iam_credentials_v1_common_pb.SignJwtResponse.deserializeBinary
  );

  signJwt(
    request: google_iam_credentials_v1_common_pb.SignJwtRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_iam_credentials_v1_common_pb.SignJwtResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.iam.credentials.v1.IAMCredentials/SignJwt',
      request,
      metadata || {},
      this.methodInfoSignJwt,
      callback);
  }

}

