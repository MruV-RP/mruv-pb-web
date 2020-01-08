/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.talent.v4beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';
import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb';
import * as google_cloud_talent_v4beta1_common_pb from '../../../../google/cloud/talent/v4beta1/common_pb';
import * as google_cloud_talent_v4beta1_company_pb from '../../../../google/cloud/talent/v4beta1/company_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';

import {
  CreateCompanyRequest,
  DeleteCompanyRequest,
  GetCompanyRequest,
  ListCompaniesRequest,
  ListCompaniesResponse,
  UpdateCompanyRequest} from './company_service_pb';

export class CompanyServiceClient {
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

  methodInfoCreateCompany = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_talent_v4beta1_company_pb.Company,
    (request: CreateCompanyRequest) => {
      return request.serializeBinary();
    },
    google_cloud_talent_v4beta1_company_pb.Company.deserializeBinary
  );

  createCompany(
    request: CreateCompanyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_talent_v4beta1_company_pb.Company) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.talent.v4beta1.CompanyService/CreateCompany',
      request,
      metadata || {},
      this.methodInfoCreateCompany,
      callback);
  }

  methodInfoGetCompany = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_talent_v4beta1_company_pb.Company,
    (request: GetCompanyRequest) => {
      return request.serializeBinary();
    },
    google_cloud_talent_v4beta1_company_pb.Company.deserializeBinary
  );

  getCompany(
    request: GetCompanyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_talent_v4beta1_company_pb.Company) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.talent.v4beta1.CompanyService/GetCompany',
      request,
      metadata || {},
      this.methodInfoGetCompany,
      callback);
  }

  methodInfoUpdateCompany = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_talent_v4beta1_company_pb.Company,
    (request: UpdateCompanyRequest) => {
      return request.serializeBinary();
    },
    google_cloud_talent_v4beta1_company_pb.Company.deserializeBinary
  );

  updateCompany(
    request: UpdateCompanyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_talent_v4beta1_company_pb.Company) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.talent.v4beta1.CompanyService/UpdateCompany',
      request,
      metadata || {},
      this.methodInfoUpdateCompany,
      callback);
  }

  methodInfoDeleteCompany = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteCompanyRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteCompany(
    request: DeleteCompanyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.talent.v4beta1.CompanyService/DeleteCompany',
      request,
      metadata || {},
      this.methodInfoDeleteCompany,
      callback);
  }

  methodInfoListCompanies = new grpcWeb.AbstractClientBase.MethodInfo(
    ListCompaniesResponse,
    (request: ListCompaniesRequest) => {
      return request.serializeBinary();
    },
    ListCompaniesResponse.deserializeBinary
  );

  listCompanies(
    request: ListCompaniesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListCompaniesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.talent.v4beta1.CompanyService/ListCompanies',
      request,
      metadata || {},
      this.methodInfoListCompanies,
      callback);
  }

}

