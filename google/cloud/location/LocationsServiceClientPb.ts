/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.location
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';

import {
  GetLocationRequest,
  ListLocationsRequest,
  ListLocationsResponse,
  Location} from './locations_pb';

export class LocationsClient {
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

  methodInfoListLocations = new grpcWeb.AbstractClientBase.MethodInfo(
    ListLocationsResponse,
    (request: ListLocationsRequest) => {
      return request.serializeBinary();
    },
    ListLocationsResponse.deserializeBinary
  );

  listLocations(
    request: ListLocationsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListLocationsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.location.Locations/ListLocations',
      request,
      metadata || {},
      this.methodInfoListLocations,
      callback);
  }

  methodInfoGetLocation = new grpcWeb.AbstractClientBase.MethodInfo(
    Location,
    (request: GetLocationRequest) => {
      return request.serializeBinary();
    },
    Location.deserializeBinary
  );

  getLocation(
    request: GetLocationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Location) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.location.Locations/GetLocation',
      request,
      metadata || {},
      this.methodInfoGetLocation,
      callback);
  }

}

