/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.recommender.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_cloud_recommender_v1beta1_recommendation_pb from '../../../../google/cloud/recommender/v1beta1/recommendation_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';

import {
  GetRecommendationRequest,
  ListRecommendationsRequest,
  ListRecommendationsResponse,
  MarkRecommendationClaimedRequest,
  MarkRecommendationFailedRequest,
  MarkRecommendationSucceededRequest} from './recommender_service_pb';

export class RecommenderClient {
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

  methodInfoListRecommendations = new grpcWeb.AbstractClientBase.MethodInfo(
    ListRecommendationsResponse,
    (request: ListRecommendationsRequest) => {
      return request.serializeBinary();
    },
    ListRecommendationsResponse.deserializeBinary
  );

  listRecommendations(
    request: ListRecommendationsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListRecommendationsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.recommender.v1beta1.Recommender/ListRecommendations',
      request,
      metadata || {},
      this.methodInfoListRecommendations,
      callback);
  }

  methodInfoGetRecommendation = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_recommender_v1beta1_recommendation_pb.Recommendation,
    (request: GetRecommendationRequest) => {
      return request.serializeBinary();
    },
    google_cloud_recommender_v1beta1_recommendation_pb.Recommendation.deserializeBinary
  );

  getRecommendation(
    request: GetRecommendationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_recommender_v1beta1_recommendation_pb.Recommendation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.recommender.v1beta1.Recommender/GetRecommendation',
      request,
      metadata || {},
      this.methodInfoGetRecommendation,
      callback);
  }

  methodInfoMarkRecommendationClaimed = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_recommender_v1beta1_recommendation_pb.Recommendation,
    (request: MarkRecommendationClaimedRequest) => {
      return request.serializeBinary();
    },
    google_cloud_recommender_v1beta1_recommendation_pb.Recommendation.deserializeBinary
  );

  markRecommendationClaimed(
    request: MarkRecommendationClaimedRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_recommender_v1beta1_recommendation_pb.Recommendation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.recommender.v1beta1.Recommender/MarkRecommendationClaimed',
      request,
      metadata || {},
      this.methodInfoMarkRecommendationClaimed,
      callback);
  }

  methodInfoMarkRecommendationSucceeded = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_recommender_v1beta1_recommendation_pb.Recommendation,
    (request: MarkRecommendationSucceededRequest) => {
      return request.serializeBinary();
    },
    google_cloud_recommender_v1beta1_recommendation_pb.Recommendation.deserializeBinary
  );

  markRecommendationSucceeded(
    request: MarkRecommendationSucceededRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_recommender_v1beta1_recommendation_pb.Recommendation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.recommender.v1beta1.Recommender/MarkRecommendationSucceeded',
      request,
      metadata || {},
      this.methodInfoMarkRecommendationSucceeded,
      callback);
  }

  methodInfoMarkRecommendationFailed = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_recommender_v1beta1_recommendation_pb.Recommendation,
    (request: MarkRecommendationFailedRequest) => {
      return request.serializeBinary();
    },
    google_cloud_recommender_v1beta1_recommendation_pb.Recommendation.deserializeBinary
  );

  markRecommendationFailed(
    request: MarkRecommendationFailedRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_recommender_v1beta1_recommendation_pb.Recommendation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.recommender.v1beta1.Recommender/MarkRecommendationFailed',
      request,
      metadata || {},
      this.methodInfoMarkRecommendationFailed,
      callback);
  }

}

