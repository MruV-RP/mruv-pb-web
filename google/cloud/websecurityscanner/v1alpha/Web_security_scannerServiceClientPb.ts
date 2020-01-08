/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.websecurityscanner.v1alpha
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';
import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb';
import * as google_api_resource_pb from '../../../../google/api/resource_pb';
import * as google_cloud_websecurityscanner_v1alpha_crawled_url_pb from '../../../../google/cloud/websecurityscanner/v1alpha/crawled_url_pb';
import * as google_cloud_websecurityscanner_v1alpha_finding_pb from '../../../../google/cloud/websecurityscanner/v1alpha/finding_pb';
import * as google_cloud_websecurityscanner_v1alpha_finding_type_stats_pb from '../../../../google/cloud/websecurityscanner/v1alpha/finding_type_stats_pb';
import * as google_cloud_websecurityscanner_v1alpha_scan_config_pb from '../../../../google/cloud/websecurityscanner/v1alpha/scan_config_pb';
import * as google_cloud_websecurityscanner_v1alpha_scan_run_pb from '../../../../google/cloud/websecurityscanner/v1alpha/scan_run_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';

import {
  CreateScanConfigRequest,
  DeleteScanConfigRequest,
  GetFindingRequest,
  GetScanConfigRequest,
  GetScanRunRequest,
  ListCrawledUrlsRequest,
  ListCrawledUrlsResponse,
  ListFindingTypeStatsRequest,
  ListFindingTypeStatsResponse,
  ListFindingsRequest,
  ListFindingsResponse,
  ListScanConfigsRequest,
  ListScanConfigsResponse,
  ListScanRunsRequest,
  ListScanRunsResponse,
  StartScanRunRequest,
  StopScanRunRequest,
  UpdateScanConfigRequest} from './web_security_scanner_pb';

export class WebSecurityScannerClient {
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

  methodInfoCreateScanConfig = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_websecurityscanner_v1alpha_scan_config_pb.ScanConfig,
    (request: CreateScanConfigRequest) => {
      return request.serializeBinary();
    },
    google_cloud_websecurityscanner_v1alpha_scan_config_pb.ScanConfig.deserializeBinary
  );

  createScanConfig(
    request: CreateScanConfigRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_websecurityscanner_v1alpha_scan_config_pb.ScanConfig) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.websecurityscanner.v1alpha.WebSecurityScanner/CreateScanConfig',
      request,
      metadata || {},
      this.methodInfoCreateScanConfig,
      callback);
  }

  methodInfoDeleteScanConfig = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteScanConfigRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteScanConfig(
    request: DeleteScanConfigRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.websecurityscanner.v1alpha.WebSecurityScanner/DeleteScanConfig',
      request,
      metadata || {},
      this.methodInfoDeleteScanConfig,
      callback);
  }

  methodInfoGetScanConfig = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_websecurityscanner_v1alpha_scan_config_pb.ScanConfig,
    (request: GetScanConfigRequest) => {
      return request.serializeBinary();
    },
    google_cloud_websecurityscanner_v1alpha_scan_config_pb.ScanConfig.deserializeBinary
  );

  getScanConfig(
    request: GetScanConfigRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_websecurityscanner_v1alpha_scan_config_pb.ScanConfig) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.websecurityscanner.v1alpha.WebSecurityScanner/GetScanConfig',
      request,
      metadata || {},
      this.methodInfoGetScanConfig,
      callback);
  }

  methodInfoListScanConfigs = new grpcWeb.AbstractClientBase.MethodInfo(
    ListScanConfigsResponse,
    (request: ListScanConfigsRequest) => {
      return request.serializeBinary();
    },
    ListScanConfigsResponse.deserializeBinary
  );

  listScanConfigs(
    request: ListScanConfigsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListScanConfigsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.websecurityscanner.v1alpha.WebSecurityScanner/ListScanConfigs',
      request,
      metadata || {},
      this.methodInfoListScanConfigs,
      callback);
  }

  methodInfoUpdateScanConfig = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_websecurityscanner_v1alpha_scan_config_pb.ScanConfig,
    (request: UpdateScanConfigRequest) => {
      return request.serializeBinary();
    },
    google_cloud_websecurityscanner_v1alpha_scan_config_pb.ScanConfig.deserializeBinary
  );

  updateScanConfig(
    request: UpdateScanConfigRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_websecurityscanner_v1alpha_scan_config_pb.ScanConfig) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.websecurityscanner.v1alpha.WebSecurityScanner/UpdateScanConfig',
      request,
      metadata || {},
      this.methodInfoUpdateScanConfig,
      callback);
  }

  methodInfoStartScanRun = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_websecurityscanner_v1alpha_scan_run_pb.ScanRun,
    (request: StartScanRunRequest) => {
      return request.serializeBinary();
    },
    google_cloud_websecurityscanner_v1alpha_scan_run_pb.ScanRun.deserializeBinary
  );

  startScanRun(
    request: StartScanRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_websecurityscanner_v1alpha_scan_run_pb.ScanRun) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.websecurityscanner.v1alpha.WebSecurityScanner/StartScanRun',
      request,
      metadata || {},
      this.methodInfoStartScanRun,
      callback);
  }

  methodInfoGetScanRun = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_websecurityscanner_v1alpha_scan_run_pb.ScanRun,
    (request: GetScanRunRequest) => {
      return request.serializeBinary();
    },
    google_cloud_websecurityscanner_v1alpha_scan_run_pb.ScanRun.deserializeBinary
  );

  getScanRun(
    request: GetScanRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_websecurityscanner_v1alpha_scan_run_pb.ScanRun) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.websecurityscanner.v1alpha.WebSecurityScanner/GetScanRun',
      request,
      metadata || {},
      this.methodInfoGetScanRun,
      callback);
  }

  methodInfoListScanRuns = new grpcWeb.AbstractClientBase.MethodInfo(
    ListScanRunsResponse,
    (request: ListScanRunsRequest) => {
      return request.serializeBinary();
    },
    ListScanRunsResponse.deserializeBinary
  );

  listScanRuns(
    request: ListScanRunsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListScanRunsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.websecurityscanner.v1alpha.WebSecurityScanner/ListScanRuns',
      request,
      metadata || {},
      this.methodInfoListScanRuns,
      callback);
  }

  methodInfoStopScanRun = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_websecurityscanner_v1alpha_scan_run_pb.ScanRun,
    (request: StopScanRunRequest) => {
      return request.serializeBinary();
    },
    google_cloud_websecurityscanner_v1alpha_scan_run_pb.ScanRun.deserializeBinary
  );

  stopScanRun(
    request: StopScanRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_websecurityscanner_v1alpha_scan_run_pb.ScanRun) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.websecurityscanner.v1alpha.WebSecurityScanner/StopScanRun',
      request,
      metadata || {},
      this.methodInfoStopScanRun,
      callback);
  }

  methodInfoListCrawledUrls = new grpcWeb.AbstractClientBase.MethodInfo(
    ListCrawledUrlsResponse,
    (request: ListCrawledUrlsRequest) => {
      return request.serializeBinary();
    },
    ListCrawledUrlsResponse.deserializeBinary
  );

  listCrawledUrls(
    request: ListCrawledUrlsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListCrawledUrlsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.websecurityscanner.v1alpha.WebSecurityScanner/ListCrawledUrls',
      request,
      metadata || {},
      this.methodInfoListCrawledUrls,
      callback);
  }

  methodInfoGetFinding = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_websecurityscanner_v1alpha_finding_pb.Finding,
    (request: GetFindingRequest) => {
      return request.serializeBinary();
    },
    google_cloud_websecurityscanner_v1alpha_finding_pb.Finding.deserializeBinary
  );

  getFinding(
    request: GetFindingRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_websecurityscanner_v1alpha_finding_pb.Finding) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.websecurityscanner.v1alpha.WebSecurityScanner/GetFinding',
      request,
      metadata || {},
      this.methodInfoGetFinding,
      callback);
  }

  methodInfoListFindings = new grpcWeb.AbstractClientBase.MethodInfo(
    ListFindingsResponse,
    (request: ListFindingsRequest) => {
      return request.serializeBinary();
    },
    ListFindingsResponse.deserializeBinary
  );

  listFindings(
    request: ListFindingsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListFindingsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.websecurityscanner.v1alpha.WebSecurityScanner/ListFindings',
      request,
      metadata || {},
      this.methodInfoListFindings,
      callback);
  }

  methodInfoListFindingTypeStats = new grpcWeb.AbstractClientBase.MethodInfo(
    ListFindingTypeStatsResponse,
    (request: ListFindingTypeStatsRequest) => {
      return request.serializeBinary();
    },
    ListFindingTypeStatsResponse.deserializeBinary
  );

  listFindingTypeStats(
    request: ListFindingTypeStatsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListFindingTypeStatsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.websecurityscanner.v1alpha.WebSecurityScanner/ListFindingTypeStats',
      request,
      metadata || {},
      this.methodInfoListFindingTypeStats,
      callback);
  }

}

