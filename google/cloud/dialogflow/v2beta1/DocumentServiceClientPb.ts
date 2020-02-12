/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.dialogflow.v2beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_cloud_dialogflow_v2beta1_gcs_pb from '../../../../google/cloud/dialogflow/v2beta1/gcs_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_rpc_status_pb from '../../../../google/rpc/status_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';

import {
  CreateDocumentRequest,
  DeleteDocumentRequest,
  Document,
  GetDocumentRequest,
  ListDocumentsRequest,
  ListDocumentsResponse,
  ReloadDocumentRequest,
  UpdateDocumentRequest} from './document_pb';

export class DocumentsClient {
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

  methodInfoListDocuments = new grpcWeb.AbstractClientBase.MethodInfo(
    ListDocumentsResponse,
    (request: ListDocumentsRequest) => {
      return request.serializeBinary();
    },
    ListDocumentsResponse.deserializeBinary
  );

  listDocuments(
    request: ListDocumentsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListDocumentsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.dialogflow.v2beta1.Documents/ListDocuments',
      request,
      metadata || {},
      this.methodInfoListDocuments,
      callback);
  }

  methodInfoGetDocument = new grpcWeb.AbstractClientBase.MethodInfo(
    Document,
    (request: GetDocumentRequest) => {
      return request.serializeBinary();
    },
    Document.deserializeBinary
  );

  getDocument(
    request: GetDocumentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Document) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.dialogflow.v2beta1.Documents/GetDocument',
      request,
      metadata || {},
      this.methodInfoGetDocument,
      callback);
  }

  methodInfoCreateDocument = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: CreateDocumentRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  createDocument(
    request: CreateDocumentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.dialogflow.v2beta1.Documents/CreateDocument',
      request,
      metadata || {},
      this.methodInfoCreateDocument,
      callback);
  }

  methodInfoDeleteDocument = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: DeleteDocumentRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  deleteDocument(
    request: DeleteDocumentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.dialogflow.v2beta1.Documents/DeleteDocument',
      request,
      metadata || {},
      this.methodInfoDeleteDocument,
      callback);
  }

  methodInfoUpdateDocument = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: UpdateDocumentRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  updateDocument(
    request: UpdateDocumentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.dialogflow.v2beta1.Documents/UpdateDocument',
      request,
      metadata || {},
      this.methodInfoUpdateDocument,
      callback);
  }

  methodInfoReloadDocument = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: ReloadDocumentRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  reloadDocument(
    request: ReloadDocumentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.dialogflow.v2beta1.Documents/ReloadDocument',
      request,
      metadata || {},
      this.methodInfoReloadDocument,
      callback);
  }

}

