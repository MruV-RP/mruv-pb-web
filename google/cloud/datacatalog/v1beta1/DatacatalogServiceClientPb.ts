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
import * as google_cloud_datacatalog_v1beta1_gcs_fileset_spec_pb from '../../../../google/cloud/datacatalog/v1beta1/gcs_fileset_spec_pb';
import * as google_cloud_datacatalog_v1beta1_schema_pb from '../../../../google/cloud/datacatalog/v1beta1/schema_pb';
import * as google_cloud_datacatalog_v1beta1_search_pb from '../../../../google/cloud/datacatalog/v1beta1/search_pb';
import * as google_cloud_datacatalog_v1beta1_table_spec_pb from '../../../../google/cloud/datacatalog/v1beta1/table_spec_pb';
import * as google_cloud_datacatalog_v1beta1_tags_pb from '../../../../google/cloud/datacatalog/v1beta1/tags_pb';
import * as google_cloud_datacatalog_v1beta1_timestamps_pb from '../../../../google/cloud/datacatalog/v1beta1/timestamps_pb';
import * as google_iam_v1_iam_policy_pb from '../../../../google/iam/v1/iam_policy_pb';
import * as google_iam_v1_policy_pb from '../../../../google/iam/v1/policy_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';

import {
  CreateEntryGroupRequest,
  CreateEntryRequest,
  CreateTagRequest,
  CreateTagTemplateFieldRequest,
  CreateTagTemplateRequest,
  DeleteEntryGroupRequest,
  DeleteEntryRequest,
  DeleteTagRequest,
  DeleteTagTemplateFieldRequest,
  DeleteTagTemplateRequest,
  Entry,
  EntryGroup,
  GetEntryGroupRequest,
  GetEntryRequest,
  GetTagTemplateRequest,
  ListTagsRequest,
  ListTagsResponse,
  LookupEntryRequest,
  RenameTagTemplateFieldRequest,
  SearchCatalogRequest,
  SearchCatalogResponse,
  UpdateEntryRequest,
  UpdateTagRequest,
  UpdateTagTemplateFieldRequest,
  UpdateTagTemplateRequest} from './datacatalog_pb';

export class DataCatalogClient {
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

  methodInfoSearchCatalog = new grpcWeb.AbstractClientBase.MethodInfo(
    SearchCatalogResponse,
    (request: SearchCatalogRequest) => {
      return request.serializeBinary();
    },
    SearchCatalogResponse.deserializeBinary
  );

  searchCatalog(
    request: SearchCatalogRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SearchCatalogResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.datacatalog.v1beta1.DataCatalog/SearchCatalog',
      request,
      metadata || {},
      this.methodInfoSearchCatalog,
      callback);
  }

  methodInfoCreateEntryGroup = new grpcWeb.AbstractClientBase.MethodInfo(
    EntryGroup,
    (request: CreateEntryGroupRequest) => {
      return request.serializeBinary();
    },
    EntryGroup.deserializeBinary
  );

  createEntryGroup(
    request: CreateEntryGroupRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: EntryGroup) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.datacatalog.v1beta1.DataCatalog/CreateEntryGroup',
      request,
      metadata || {},
      this.methodInfoCreateEntryGroup,
      callback);
  }

  methodInfoGetEntryGroup = new grpcWeb.AbstractClientBase.MethodInfo(
    EntryGroup,
    (request: GetEntryGroupRequest) => {
      return request.serializeBinary();
    },
    EntryGroup.deserializeBinary
  );

  getEntryGroup(
    request: GetEntryGroupRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: EntryGroup) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.datacatalog.v1beta1.DataCatalog/GetEntryGroup',
      request,
      metadata || {},
      this.methodInfoGetEntryGroup,
      callback);
  }

  methodInfoDeleteEntryGroup = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteEntryGroupRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteEntryGroup(
    request: DeleteEntryGroupRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.datacatalog.v1beta1.DataCatalog/DeleteEntryGroup',
      request,
      metadata || {},
      this.methodInfoDeleteEntryGroup,
      callback);
  }

  methodInfoCreateEntry = new grpcWeb.AbstractClientBase.MethodInfo(
    Entry,
    (request: CreateEntryRequest) => {
      return request.serializeBinary();
    },
    Entry.deserializeBinary
  );

  createEntry(
    request: CreateEntryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Entry) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.datacatalog.v1beta1.DataCatalog/CreateEntry',
      request,
      metadata || {},
      this.methodInfoCreateEntry,
      callback);
  }

  methodInfoUpdateEntry = new grpcWeb.AbstractClientBase.MethodInfo(
    Entry,
    (request: UpdateEntryRequest) => {
      return request.serializeBinary();
    },
    Entry.deserializeBinary
  );

  updateEntry(
    request: UpdateEntryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Entry) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.datacatalog.v1beta1.DataCatalog/UpdateEntry',
      request,
      metadata || {},
      this.methodInfoUpdateEntry,
      callback);
  }

  methodInfoDeleteEntry = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteEntryRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteEntry(
    request: DeleteEntryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.datacatalog.v1beta1.DataCatalog/DeleteEntry',
      request,
      metadata || {},
      this.methodInfoDeleteEntry,
      callback);
  }

  methodInfoGetEntry = new grpcWeb.AbstractClientBase.MethodInfo(
    Entry,
    (request: GetEntryRequest) => {
      return request.serializeBinary();
    },
    Entry.deserializeBinary
  );

  getEntry(
    request: GetEntryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Entry) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.datacatalog.v1beta1.DataCatalog/GetEntry',
      request,
      metadata || {},
      this.methodInfoGetEntry,
      callback);
  }

  methodInfoLookupEntry = new grpcWeb.AbstractClientBase.MethodInfo(
    Entry,
    (request: LookupEntryRequest) => {
      return request.serializeBinary();
    },
    Entry.deserializeBinary
  );

  lookupEntry(
    request: LookupEntryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Entry) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.datacatalog.v1beta1.DataCatalog/LookupEntry',
      request,
      metadata || {},
      this.methodInfoLookupEntry,
      callback);
  }

  methodInfoCreateTagTemplate = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_datacatalog_v1beta1_tags_pb.TagTemplate,
    (request: CreateTagTemplateRequest) => {
      return request.serializeBinary();
    },
    google_cloud_datacatalog_v1beta1_tags_pb.TagTemplate.deserializeBinary
  );

  createTagTemplate(
    request: CreateTagTemplateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_datacatalog_v1beta1_tags_pb.TagTemplate) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.datacatalog.v1beta1.DataCatalog/CreateTagTemplate',
      request,
      metadata || {},
      this.methodInfoCreateTagTemplate,
      callback);
  }

  methodInfoGetTagTemplate = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_datacatalog_v1beta1_tags_pb.TagTemplate,
    (request: GetTagTemplateRequest) => {
      return request.serializeBinary();
    },
    google_cloud_datacatalog_v1beta1_tags_pb.TagTemplate.deserializeBinary
  );

  getTagTemplate(
    request: GetTagTemplateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_datacatalog_v1beta1_tags_pb.TagTemplate) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.datacatalog.v1beta1.DataCatalog/GetTagTemplate',
      request,
      metadata || {},
      this.methodInfoGetTagTemplate,
      callback);
  }

  methodInfoUpdateTagTemplate = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_datacatalog_v1beta1_tags_pb.TagTemplate,
    (request: UpdateTagTemplateRequest) => {
      return request.serializeBinary();
    },
    google_cloud_datacatalog_v1beta1_tags_pb.TagTemplate.deserializeBinary
  );

  updateTagTemplate(
    request: UpdateTagTemplateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_datacatalog_v1beta1_tags_pb.TagTemplate) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.datacatalog.v1beta1.DataCatalog/UpdateTagTemplate',
      request,
      metadata || {},
      this.methodInfoUpdateTagTemplate,
      callback);
  }

  methodInfoDeleteTagTemplate = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteTagTemplateRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteTagTemplate(
    request: DeleteTagTemplateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.datacatalog.v1beta1.DataCatalog/DeleteTagTemplate',
      request,
      metadata || {},
      this.methodInfoDeleteTagTemplate,
      callback);
  }

  methodInfoCreateTagTemplateField = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_datacatalog_v1beta1_tags_pb.TagTemplateField,
    (request: CreateTagTemplateFieldRequest) => {
      return request.serializeBinary();
    },
    google_cloud_datacatalog_v1beta1_tags_pb.TagTemplateField.deserializeBinary
  );

  createTagTemplateField(
    request: CreateTagTemplateFieldRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_datacatalog_v1beta1_tags_pb.TagTemplateField) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.datacatalog.v1beta1.DataCatalog/CreateTagTemplateField',
      request,
      metadata || {},
      this.methodInfoCreateTagTemplateField,
      callback);
  }

  methodInfoUpdateTagTemplateField = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_datacatalog_v1beta1_tags_pb.TagTemplateField,
    (request: UpdateTagTemplateFieldRequest) => {
      return request.serializeBinary();
    },
    google_cloud_datacatalog_v1beta1_tags_pb.TagTemplateField.deserializeBinary
  );

  updateTagTemplateField(
    request: UpdateTagTemplateFieldRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_datacatalog_v1beta1_tags_pb.TagTemplateField) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.datacatalog.v1beta1.DataCatalog/UpdateTagTemplateField',
      request,
      metadata || {},
      this.methodInfoUpdateTagTemplateField,
      callback);
  }

  methodInfoRenameTagTemplateField = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_datacatalog_v1beta1_tags_pb.TagTemplateField,
    (request: RenameTagTemplateFieldRequest) => {
      return request.serializeBinary();
    },
    google_cloud_datacatalog_v1beta1_tags_pb.TagTemplateField.deserializeBinary
  );

  renameTagTemplateField(
    request: RenameTagTemplateFieldRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_datacatalog_v1beta1_tags_pb.TagTemplateField) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.datacatalog.v1beta1.DataCatalog/RenameTagTemplateField',
      request,
      metadata || {},
      this.methodInfoRenameTagTemplateField,
      callback);
  }

  methodInfoDeleteTagTemplateField = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteTagTemplateFieldRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteTagTemplateField(
    request: DeleteTagTemplateFieldRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.datacatalog.v1beta1.DataCatalog/DeleteTagTemplateField',
      request,
      metadata || {},
      this.methodInfoDeleteTagTemplateField,
      callback);
  }

  methodInfoCreateTag = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_datacatalog_v1beta1_tags_pb.Tag,
    (request: CreateTagRequest) => {
      return request.serializeBinary();
    },
    google_cloud_datacatalog_v1beta1_tags_pb.Tag.deserializeBinary
  );

  createTag(
    request: CreateTagRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_datacatalog_v1beta1_tags_pb.Tag) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.datacatalog.v1beta1.DataCatalog/CreateTag',
      request,
      metadata || {},
      this.methodInfoCreateTag,
      callback);
  }

  methodInfoUpdateTag = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_datacatalog_v1beta1_tags_pb.Tag,
    (request: UpdateTagRequest) => {
      return request.serializeBinary();
    },
    google_cloud_datacatalog_v1beta1_tags_pb.Tag.deserializeBinary
  );

  updateTag(
    request: UpdateTagRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_datacatalog_v1beta1_tags_pb.Tag) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.datacatalog.v1beta1.DataCatalog/UpdateTag',
      request,
      metadata || {},
      this.methodInfoUpdateTag,
      callback);
  }

  methodInfoDeleteTag = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteTagRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteTag(
    request: DeleteTagRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.datacatalog.v1beta1.DataCatalog/DeleteTag',
      request,
      metadata || {},
      this.methodInfoDeleteTag,
      callback);
  }

  methodInfoListTags = new grpcWeb.AbstractClientBase.MethodInfo(
    ListTagsResponse,
    (request: ListTagsRequest) => {
      return request.serializeBinary();
    },
    ListTagsResponse.deserializeBinary
  );

  listTags(
    request: ListTagsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListTagsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.datacatalog.v1beta1.DataCatalog/ListTags',
      request,
      metadata || {},
      this.methodInfoListTags,
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
        '/google.cloud.datacatalog.v1beta1.DataCatalog/SetIamPolicy',
      request,
      metadata || {},
      this.methodInfoSetIamPolicy,
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
        '/google.cloud.datacatalog.v1beta1.DataCatalog/GetIamPolicy',
      request,
      metadata || {},
      this.methodInfoGetIamPolicy,
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
        '/google.cloud.datacatalog.v1beta1.DataCatalog/TestIamPermissions',
      request,
      metadata || {},
      this.methodInfoTestIamPermissions,
      callback);
  }

}

