"use strict";
/**
 * @fileoverview gRPC-Web generated client stub for mruv.jobs
 * @enhanceable
 * @public
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MruVJobsServiceClient = void 0;
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
var grpcWeb = __importStar(require("grpc-web"));
var jobs_jobs_pb = __importStar(require("../jobs/jobs_pb"));
var MruVJobsServiceClient = /** @class */ (function () {
    function MruVJobsServiceClient(hostname, credentials, options) {
        this.methodInfoCreateJob = new grpcWeb.AbstractClientBase.MethodInfo(jobs_jobs_pb.CreateJobResponse, function (request) {
            return request.serializeBinary();
        }, jobs_jobs_pb.CreateJobResponse.deserializeBinary);
        this.methodInfoGetJob = new grpcWeb.AbstractClientBase.MethodInfo(jobs_jobs_pb.GetJobResponse, function (request) {
            return request.serializeBinary();
        }, jobs_jobs_pb.GetJobResponse.deserializeBinary);
        this.methodInfoUpdateJob = new grpcWeb.AbstractClientBase.MethodInfo(jobs_jobs_pb.UpdateJobResponse, function (request) {
            return request.serializeBinary();
        }, jobs_jobs_pb.UpdateJobResponse.deserializeBinary);
        this.methodInfoDeleteJob = new grpcWeb.AbstractClientBase.MethodInfo(jobs_jobs_pb.DeleteJobResponse, function (request) {
            return request.serializeBinary();
        }, jobs_jobs_pb.DeleteJobResponse.deserializeBinary);
        if (!options)
            options = {};
        if (!credentials)
            credentials = {};
        options['format'] = 'binary';
        this.client_ = new grpcWeb.GrpcWebClientBase(options);
        this.hostname_ = hostname;
        this.credentials_ = credentials;
        this.options_ = options;
    }
    MruVJobsServiceClient.prototype.createJob = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.jobs.MruVJobsService/CreateJob', request, metadata || {}, this.methodInfoCreateJob, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.jobs.MruVJobsService/CreateJob', request, metadata || {}, this.methodInfoCreateJob);
    };
    MruVJobsServiceClient.prototype.getJob = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.jobs.MruVJobsService/GetJob', request, metadata || {}, this.methodInfoGetJob, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.jobs.MruVJobsService/GetJob', request, metadata || {}, this.methodInfoGetJob);
    };
    MruVJobsServiceClient.prototype.updateJob = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.jobs.MruVJobsService/UpdateJob', request, metadata || {}, this.methodInfoUpdateJob, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.jobs.MruVJobsService/UpdateJob', request, metadata || {}, this.methodInfoUpdateJob);
    };
    MruVJobsServiceClient.prototype.deleteJob = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.jobs.MruVJobsService/DeleteJob', request, metadata || {}, this.methodInfoDeleteJob, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.jobs.MruVJobsService/DeleteJob', request, metadata || {}, this.methodInfoDeleteJob);
    };
    return MruVJobsServiceClient;
}());
exports.MruVJobsServiceClient = MruVJobsServiceClient;
