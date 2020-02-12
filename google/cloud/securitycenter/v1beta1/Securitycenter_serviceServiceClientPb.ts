/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.securitycenter.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_cloud_securitycenter_v1beta1_asset_pb from '../../../../google/cloud/securitycenter/v1beta1/asset_pb';
import * as google_cloud_securitycenter_v1beta1_finding_pb from '../../../../google/cloud/securitycenter/v1beta1/finding_pb';
import * as google_cloud_securitycenter_v1beta1_organization_settings_pb from '../../../../google/cloud/securitycenter/v1beta1/organization_settings_pb';
import * as google_cloud_securitycenter_v1beta1_security_marks_pb from '../../../../google/cloud/securitycenter/v1beta1/security_marks_pb';
import * as google_cloud_securitycenter_v1beta1_source_pb from '../../../../google/cloud/securitycenter/v1beta1/source_pb';
import * as google_iam_v1_iam_policy_pb from '../../../../google/iam/v1/iam_policy_pb';
import * as google_iam_v1_policy_pb from '../../../../google/iam/v1/policy_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

import {
  CreateFindingRequest,
  CreateSourceRequest,
  GetOrganizationSettingsRequest,
  GetSourceRequest,
  GroupAssetsRequest,
  GroupAssetsResponse,
  GroupFindingsRequest,
  GroupFindingsResponse,
  ListAssetsRequest,
  ListAssetsResponse,
  ListFindingsRequest,
  ListFindingsResponse,
  ListSourcesRequest,
  ListSourcesResponse,
  RunAssetDiscoveryRequest,
  SetFindingStateRequest,
  UpdateFindingRequest,
  UpdateOrganizationSettingsRequest,
  UpdateSecurityMarksRequest,
  UpdateSourceRequest} from './securitycenter_service_pb';

export class SecurityCenterClient {
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

  methodInfoCreateSource = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_securitycenter_v1beta1_source_pb.Source,
    (request: CreateSourceRequest) => {
      return request.serializeBinary();
    },
    google_cloud_securitycenter_v1beta1_source_pb.Source.deserializeBinary
  );

  createSource(
    request: CreateSourceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_securitycenter_v1beta1_source_pb.Source) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.securitycenter.v1beta1.SecurityCenter/CreateSource',
      request,
      metadata || {},
      this.methodInfoCreateSource,
      callback);
  }

  methodInfoCreateFinding = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_securitycenter_v1beta1_finding_pb.Finding,
    (request: CreateFindingRequest) => {
      return request.serializeBinary();
    },
    google_cloud_securitycenter_v1beta1_finding_pb.Finding.deserializeBinary
  );

  createFinding(
    request: CreateFindingRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_securitycenter_v1beta1_finding_pb.Finding) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.securitycenter.v1beta1.SecurityCenter/CreateFinding',
      request,
      metadata || {},
      this.methodInfoCreateFinding,
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
        '/google.cloud.securitycenter.v1beta1.SecurityCenter/GetIamPolicy',
      request,
      metadata || {},
      this.methodInfoGetIamPolicy,
      callback);
  }

  methodInfoGetOrganizationSettings = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_securitycenter_v1beta1_organization_settings_pb.OrganizationSettings,
    (request: GetOrganizationSettingsRequest) => {
      return request.serializeBinary();
    },
    google_cloud_securitycenter_v1beta1_organization_settings_pb.OrganizationSettings.deserializeBinary
  );

  getOrganizationSettings(
    request: GetOrganizationSettingsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_securitycenter_v1beta1_organization_settings_pb.OrganizationSettings) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.securitycenter.v1beta1.SecurityCenter/GetOrganizationSettings',
      request,
      metadata || {},
      this.methodInfoGetOrganizationSettings,
      callback);
  }

  methodInfoGetSource = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_securitycenter_v1beta1_source_pb.Source,
    (request: GetSourceRequest) => {
      return request.serializeBinary();
    },
    google_cloud_securitycenter_v1beta1_source_pb.Source.deserializeBinary
  );

  getSource(
    request: GetSourceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_securitycenter_v1beta1_source_pb.Source) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.securitycenter.v1beta1.SecurityCenter/GetSource',
      request,
      metadata || {},
      this.methodInfoGetSource,
      callback);
  }

  methodInfoGroupAssets = new grpcWeb.AbstractClientBase.MethodInfo(
    GroupAssetsResponse,
    (request: GroupAssetsRequest) => {
      return request.serializeBinary();
    },
    GroupAssetsResponse.deserializeBinary
  );

  groupAssets(
    request: GroupAssetsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GroupAssetsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.securitycenter.v1beta1.SecurityCenter/GroupAssets',
      request,
      metadata || {},
      this.methodInfoGroupAssets,
      callback);
  }

  methodInfoGroupFindings = new grpcWeb.AbstractClientBase.MethodInfo(
    GroupFindingsResponse,
    (request: GroupFindingsRequest) => {
      return request.serializeBinary();
    },
    GroupFindingsResponse.deserializeBinary
  );

  groupFindings(
    request: GroupFindingsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GroupFindingsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.securitycenter.v1beta1.SecurityCenter/GroupFindings',
      request,
      metadata || {},
      this.methodInfoGroupFindings,
      callback);
  }

  methodInfoListAssets = new grpcWeb.AbstractClientBase.MethodInfo(
    ListAssetsResponse,
    (request: ListAssetsRequest) => {
      return request.serializeBinary();
    },
    ListAssetsResponse.deserializeBinary
  );

  listAssets(
    request: ListAssetsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListAssetsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.securitycenter.v1beta1.SecurityCenter/ListAssets',
      request,
      metadata || {},
      this.methodInfoListAssets,
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
        '/google.cloud.securitycenter.v1beta1.SecurityCenter/ListFindings',
      request,
      metadata || {},
      this.methodInfoListFindings,
      callback);
  }

  methodInfoListSources = new grpcWeb.AbstractClientBase.MethodInfo(
    ListSourcesResponse,
    (request: ListSourcesRequest) => {
      return request.serializeBinary();
    },
    ListSourcesResponse.deserializeBinary
  );

  listSources(
    request: ListSourcesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListSourcesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.securitycenter.v1beta1.SecurityCenter/ListSources',
      request,
      metadata || {},
      this.methodInfoListSources,
      callback);
  }

  methodInfoRunAssetDiscovery = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: RunAssetDiscoveryRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  runAssetDiscovery(
    request: RunAssetDiscoveryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.securitycenter.v1beta1.SecurityCenter/RunAssetDiscovery',
      request,
      metadata || {},
      this.methodInfoRunAssetDiscovery,
      callback);
  }

  methodInfoSetFindingState = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_securitycenter_v1beta1_finding_pb.Finding,
    (request: SetFindingStateRequest) => {
      return request.serializeBinary();
    },
    google_cloud_securitycenter_v1beta1_finding_pb.Finding.deserializeBinary
  );

  setFindingState(
    request: SetFindingStateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_securitycenter_v1beta1_finding_pb.Finding) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.securitycenter.v1beta1.SecurityCenter/SetFindingState',
      request,
      metadata || {},
      this.methodInfoSetFindingState,
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
        '/google.cloud.securitycenter.v1beta1.SecurityCenter/SetIamPolicy',
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
        '/google.cloud.securitycenter.v1beta1.SecurityCenter/TestIamPermissions',
      request,
      metadata || {},
      this.methodInfoTestIamPermissions,
      callback);
  }

  methodInfoUpdateFinding = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_securitycenter_v1beta1_finding_pb.Finding,
    (request: UpdateFindingRequest) => {
      return request.serializeBinary();
    },
    google_cloud_securitycenter_v1beta1_finding_pb.Finding.deserializeBinary
  );

  updateFinding(
    request: UpdateFindingRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_securitycenter_v1beta1_finding_pb.Finding) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.securitycenter.v1beta1.SecurityCenter/UpdateFinding',
      request,
      metadata || {},
      this.methodInfoUpdateFinding,
      callback);
  }

  methodInfoUpdateOrganizationSettings = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_securitycenter_v1beta1_organization_settings_pb.OrganizationSettings,
    (request: UpdateOrganizationSettingsRequest) => {
      return request.serializeBinary();
    },
    google_cloud_securitycenter_v1beta1_organization_settings_pb.OrganizationSettings.deserializeBinary
  );

  updateOrganizationSettings(
    request: UpdateOrganizationSettingsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_securitycenter_v1beta1_organization_settings_pb.OrganizationSettings) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.securitycenter.v1beta1.SecurityCenter/UpdateOrganizationSettings',
      request,
      metadata || {},
      this.methodInfoUpdateOrganizationSettings,
      callback);
  }

  methodInfoUpdateSource = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_securitycenter_v1beta1_source_pb.Source,
    (request: UpdateSourceRequest) => {
      return request.serializeBinary();
    },
    google_cloud_securitycenter_v1beta1_source_pb.Source.deserializeBinary
  );

  updateSource(
    request: UpdateSourceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_securitycenter_v1beta1_source_pb.Source) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.securitycenter.v1beta1.SecurityCenter/UpdateSource',
      request,
      metadata || {},
      this.methodInfoUpdateSource,
      callback);
  }

  methodInfoUpdateSecurityMarks = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_securitycenter_v1beta1_security_marks_pb.SecurityMarks,
    (request: UpdateSecurityMarksRequest) => {
      return request.serializeBinary();
    },
    google_cloud_securitycenter_v1beta1_security_marks_pb.SecurityMarks.deserializeBinary
  );

  updateSecurityMarks(
    request: UpdateSecurityMarksRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_securitycenter_v1beta1_security_marks_pb.SecurityMarks) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.securitycenter.v1beta1.SecurityCenter/UpdateSecurityMarks',
      request,
      metadata || {},
      this.methodInfoUpdateSecurityMarks,
      callback);
  }

}

