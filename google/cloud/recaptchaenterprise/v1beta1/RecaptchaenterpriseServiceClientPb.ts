/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.recaptchaenterprise.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';
import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb';
import * as google_api_resource_pb from '../../../../google/api/resource_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

import {
  AnnotateAssessmentRequest,
  AnnotateAssessmentResponse,
  Assessment,
  CreateAssessmentRequest} from './recaptchaenterprise_pb';

export class RecaptchaEnterpriseServiceV1Beta1Client {
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

  methodInfoCreateAssessment = new grpcWeb.AbstractClientBase.MethodInfo(
    Assessment,
    (request: CreateAssessmentRequest) => {
      return request.serializeBinary();
    },
    Assessment.deserializeBinary
  );

  createAssessment(
    request: CreateAssessmentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Assessment) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.recaptchaenterprise.v1beta1.RecaptchaEnterpriseServiceV1Beta1/CreateAssessment',
      request,
      metadata || {},
      this.methodInfoCreateAssessment,
      callback);
  }

  methodInfoAnnotateAssessment = new grpcWeb.AbstractClientBase.MethodInfo(
    AnnotateAssessmentResponse,
    (request: AnnotateAssessmentRequest) => {
      return request.serializeBinary();
    },
    AnnotateAssessmentResponse.deserializeBinary
  );

  annotateAssessment(
    request: AnnotateAssessmentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AnnotateAssessmentResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.recaptchaenterprise.v1beta1.RecaptchaEnterpriseServiceV1Beta1/AnnotateAssessment',
      request,
      metadata || {},
      this.methodInfoAnnotateAssessment,
      callback);
  }

}

