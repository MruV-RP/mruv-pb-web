/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.datacatalog.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';
import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb';
import * as google_api_resource_pb from '../../../../google/api/resource_pb';
import * as google_cloud_datacatalog_v1beta1_policytagmanager_pb from '../../../../google/cloud/datacatalog/v1beta1/policytagmanager_pb';
import * as google_iam_v1_policy_pb from '../../../../google/iam/v1/policy_pb';

import {
  ExportTaxonomiesRequest,
  ExportTaxonomiesResponse,
  ImportTaxonomiesRequest,
  ImportTaxonomiesResponse} from './policytagmanagerserialization_pb';

export class PolicyTagManagerSerializationClient {
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

  methodInfoImportTaxonomies = new grpcWeb.AbstractClientBase.MethodInfo(
    ImportTaxonomiesResponse,
    (request: ImportTaxonomiesRequest) => {
      return request.serializeBinary();
    },
    ImportTaxonomiesResponse.deserializeBinary
  );

  importTaxonomies(
    request: ImportTaxonomiesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ImportTaxonomiesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.datacatalog.v1beta1.PolicyTagManagerSerialization/ImportTaxonomies',
      request,
      metadata || {},
      this.methodInfoImportTaxonomies,
      callback);
  }

  methodInfoExportTaxonomies = new grpcWeb.AbstractClientBase.MethodInfo(
    ExportTaxonomiesResponse,
    (request: ExportTaxonomiesRequest) => {
      return request.serializeBinary();
    },
    ExportTaxonomiesResponse.deserializeBinary
  );

  exportTaxonomies(
    request: ExportTaxonomiesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ExportTaxonomiesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.datacatalog.v1beta1.PolicyTagManagerSerialization/ExportTaxonomies',
      request,
      metadata || {},
      this.methodInfoExportTaxonomies,
      callback);
  }

}

