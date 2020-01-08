import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_auth_pb from '../../../../google/api/auth_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class TrainingInput extends jspb.Message {
  getScaleTier(): TrainingInput.ScaleTier;
  setScaleTier(value: TrainingInput.ScaleTier): void;

  getMasterType(): string;
  setMasterType(value: string): void;

  getWorkerType(): string;
  setWorkerType(value: string): void;

  getParameterServerType(): string;
  setParameterServerType(value: string): void;

  getWorkerCount(): number;
  setWorkerCount(value: number): void;

  getParameterServerCount(): number;
  setParameterServerCount(value: number): void;

  getPackageUrisList(): Array<string>;
  setPackageUrisList(value: Array<string>): void;
  clearPackageUrisList(): void;
  addPackageUris(value: string, index?: number): void;

  getPythonModule(): string;
  setPythonModule(value: string): void;

  getArgsList(): Array<string>;
  setArgsList(value: Array<string>): void;
  clearArgsList(): void;
  addArgs(value: string, index?: number): void;

  getHyperparameters(): HyperparameterSpec | undefined;
  setHyperparameters(value?: HyperparameterSpec): void;
  hasHyperparameters(): boolean;
  clearHyperparameters(): void;

  getRegion(): string;
  setRegion(value: string): void;

  getJobDir(): string;
  setJobDir(value: string): void;

  getRuntimeVersion(): string;
  setRuntimeVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrainingInput.AsObject;
  static toObject(includeInstance: boolean, msg: TrainingInput): TrainingInput.AsObject;
  static serializeBinaryToWriter(message: TrainingInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TrainingInput;
  static deserializeBinaryFromReader(message: TrainingInput, reader: jspb.BinaryReader): TrainingInput;
}

export namespace TrainingInput {
  export type AsObject = {
    scaleTier: TrainingInput.ScaleTier,
    masterType: string,
    workerType: string,
    parameterServerType: string,
    workerCount: number,
    parameterServerCount: number,
    packageUrisList: Array<string>,
    pythonModule: string,
    argsList: Array<string>,
    hyperparameters?: HyperparameterSpec.AsObject,
    region: string,
    jobDir: string,
    runtimeVersion: string,
  }

  export enum ScaleTier { 
    BASIC = 0,
    STANDARD_1 = 1,
    PREMIUM_1 = 3,
    BASIC_GPU = 6,
    CUSTOM = 5,
  }
}

export class HyperparameterSpec extends jspb.Message {
  getGoal(): HyperparameterSpec.GoalType;
  setGoal(value: HyperparameterSpec.GoalType): void;

  getParamsList(): Array<ParameterSpec>;
  setParamsList(value: Array<ParameterSpec>): void;
  clearParamsList(): void;
  addParams(value?: ParameterSpec, index?: number): ParameterSpec;

  getMaxTrials(): number;
  setMaxTrials(value: number): void;

  getMaxParallelTrials(): number;
  setMaxParallelTrials(value: number): void;

  getHyperparameterMetricTag(): string;
  setHyperparameterMetricTag(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HyperparameterSpec.AsObject;
  static toObject(includeInstance: boolean, msg: HyperparameterSpec): HyperparameterSpec.AsObject;
  static serializeBinaryToWriter(message: HyperparameterSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HyperparameterSpec;
  static deserializeBinaryFromReader(message: HyperparameterSpec, reader: jspb.BinaryReader): HyperparameterSpec;
}

export namespace HyperparameterSpec {
  export type AsObject = {
    goal: HyperparameterSpec.GoalType,
    paramsList: Array<ParameterSpec.AsObject>,
    maxTrials: number,
    maxParallelTrials: number,
    hyperparameterMetricTag: string,
  }

  export enum GoalType { 
    GOAL_TYPE_UNSPECIFIED = 0,
    MAXIMIZE = 1,
    MINIMIZE = 2,
  }
}

export class ParameterSpec extends jspb.Message {
  getParameterName(): string;
  setParameterName(value: string): void;

  getType(): ParameterSpec.ParameterType;
  setType(value: ParameterSpec.ParameterType): void;

  getMinValue(): number;
  setMinValue(value: number): void;

  getMaxValue(): number;
  setMaxValue(value: number): void;

  getCategoricalValuesList(): Array<string>;
  setCategoricalValuesList(value: Array<string>): void;
  clearCategoricalValuesList(): void;
  addCategoricalValues(value: string, index?: number): void;

  getDiscreteValuesList(): Array<number>;
  setDiscreteValuesList(value: Array<number>): void;
  clearDiscreteValuesList(): void;
  addDiscreteValues(value: number, index?: number): void;

  getScaleType(): ParameterSpec.ScaleType;
  setScaleType(value: ParameterSpec.ScaleType): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ParameterSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ParameterSpec): ParameterSpec.AsObject;
  static serializeBinaryToWriter(message: ParameterSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ParameterSpec;
  static deserializeBinaryFromReader(message: ParameterSpec, reader: jspb.BinaryReader): ParameterSpec;
}

export namespace ParameterSpec {
  export type AsObject = {
    parameterName: string,
    type: ParameterSpec.ParameterType,
    minValue: number,
    maxValue: number,
    categoricalValuesList: Array<string>,
    discreteValuesList: Array<number>,
    scaleType: ParameterSpec.ScaleType,
  }

  export enum ParameterType { 
    PARAMETER_TYPE_UNSPECIFIED = 0,
    DOUBLE = 1,
    INTEGER = 2,
    CATEGORICAL = 3,
    DISCRETE = 4,
  }

  export enum ScaleType { 
    NONE = 0,
    UNIT_LINEAR_SCALE = 1,
    UNIT_LOG_SCALE = 2,
    UNIT_REVERSE_LOG_SCALE = 3,
  }
}

export class HyperparameterOutput extends jspb.Message {
  getTrialId(): string;
  setTrialId(value: string): void;

  getHyperparametersMap(): jspb.Map<string, string>;
  clearHyperparametersMap(): void;

  getFinalMetric(): HyperparameterOutput.HyperparameterMetric | undefined;
  setFinalMetric(value?: HyperparameterOutput.HyperparameterMetric): void;
  hasFinalMetric(): boolean;
  clearFinalMetric(): void;

  getAllMetricsList(): Array<HyperparameterOutput.HyperparameterMetric>;
  setAllMetricsList(value: Array<HyperparameterOutput.HyperparameterMetric>): void;
  clearAllMetricsList(): void;
  addAllMetrics(value?: HyperparameterOutput.HyperparameterMetric, index?: number): HyperparameterOutput.HyperparameterMetric;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HyperparameterOutput.AsObject;
  static toObject(includeInstance: boolean, msg: HyperparameterOutput): HyperparameterOutput.AsObject;
  static serializeBinaryToWriter(message: HyperparameterOutput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HyperparameterOutput;
  static deserializeBinaryFromReader(message: HyperparameterOutput, reader: jspb.BinaryReader): HyperparameterOutput;
}

export namespace HyperparameterOutput {
  export type AsObject = {
    trialId: string,
    hyperparametersMap: Array<[string, string]>,
    finalMetric?: HyperparameterOutput.HyperparameterMetric.AsObject,
    allMetricsList: Array<HyperparameterOutput.HyperparameterMetric.AsObject>,
  }

  export class HyperparameterMetric extends jspb.Message {
    getTrainingStep(): number;
    setTrainingStep(value: number): void;

    getObjectiveValue(): number;
    setObjectiveValue(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HyperparameterMetric.AsObject;
    static toObject(includeInstance: boolean, msg: HyperparameterMetric): HyperparameterMetric.AsObject;
    static serializeBinaryToWriter(message: HyperparameterMetric, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HyperparameterMetric;
    static deserializeBinaryFromReader(message: HyperparameterMetric, reader: jspb.BinaryReader): HyperparameterMetric;
  }

  export namespace HyperparameterMetric {
    export type AsObject = {
      trainingStep: number,
      objectiveValue: number,
    }
  }

}

export class TrainingOutput extends jspb.Message {
  getCompletedTrialCount(): number;
  setCompletedTrialCount(value: number): void;

  getTrialsList(): Array<HyperparameterOutput>;
  setTrialsList(value: Array<HyperparameterOutput>): void;
  clearTrialsList(): void;
  addTrials(value?: HyperparameterOutput, index?: number): HyperparameterOutput;

  getConsumedMlUnits(): number;
  setConsumedMlUnits(value: number): void;

  getIsHyperparameterTuningJob(): boolean;
  setIsHyperparameterTuningJob(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrainingOutput.AsObject;
  static toObject(includeInstance: boolean, msg: TrainingOutput): TrainingOutput.AsObject;
  static serializeBinaryToWriter(message: TrainingOutput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TrainingOutput;
  static deserializeBinaryFromReader(message: TrainingOutput, reader: jspb.BinaryReader): TrainingOutput;
}

export namespace TrainingOutput {
  export type AsObject = {
    completedTrialCount: number,
    trialsList: Array<HyperparameterOutput.AsObject>,
    consumedMlUnits: number,
    isHyperparameterTuningJob: boolean,
  }
}

export class PredictionInput extends jspb.Message {
  getModelName(): string;
  setModelName(value: string): void;

  getVersionName(): string;
  setVersionName(value: string): void;

  getUri(): string;
  setUri(value: string): void;

  getDataFormat(): PredictionInput.DataFormat;
  setDataFormat(value: PredictionInput.DataFormat): void;

  getInputPathsList(): Array<string>;
  setInputPathsList(value: Array<string>): void;
  clearInputPathsList(): void;
  addInputPaths(value: string, index?: number): void;

  getOutputPath(): string;
  setOutputPath(value: string): void;

  getMaxWorkerCount(): number;
  setMaxWorkerCount(value: number): void;

  getRegion(): string;
  setRegion(value: string): void;

  getRuntimeVersion(): string;
  setRuntimeVersion(value: string): void;

  getModelVersionCase(): PredictionInput.ModelVersionCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PredictionInput.AsObject;
  static toObject(includeInstance: boolean, msg: PredictionInput): PredictionInput.AsObject;
  static serializeBinaryToWriter(message: PredictionInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PredictionInput;
  static deserializeBinaryFromReader(message: PredictionInput, reader: jspb.BinaryReader): PredictionInput;
}

export namespace PredictionInput {
  export type AsObject = {
    modelName: string,
    versionName: string,
    uri: string,
    dataFormat: PredictionInput.DataFormat,
    inputPathsList: Array<string>,
    outputPath: string,
    maxWorkerCount: number,
    region: string,
    runtimeVersion: string,
  }

  export enum DataFormat { 
    DATA_FORMAT_UNSPECIFIED = 0,
    TEXT = 1,
    TF_RECORD = 2,
    TF_RECORD_GZIP = 3,
  }

  export enum ModelVersionCase { 
    MODEL_VERSION_NOT_SET = 0,
    MODEL_NAME = 1,
    VERSION_NAME = 2,
    URI = 9,
  }
}

export class PredictionOutput extends jspb.Message {
  getOutputPath(): string;
  setOutputPath(value: string): void;

  getPredictionCount(): number;
  setPredictionCount(value: number): void;

  getErrorCount(): number;
  setErrorCount(value: number): void;

  getNodeHours(): number;
  setNodeHours(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PredictionOutput.AsObject;
  static toObject(includeInstance: boolean, msg: PredictionOutput): PredictionOutput.AsObject;
  static serializeBinaryToWriter(message: PredictionOutput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PredictionOutput;
  static deserializeBinaryFromReader(message: PredictionOutput, reader: jspb.BinaryReader): PredictionOutput;
}

export namespace PredictionOutput {
  export type AsObject = {
    outputPath: string,
    predictionCount: number,
    errorCount: number,
    nodeHours: number,
  }
}

export class Job extends jspb.Message {
  getJobId(): string;
  setJobId(value: string): void;

  getTrainingInput(): TrainingInput | undefined;
  setTrainingInput(value?: TrainingInput): void;
  hasTrainingInput(): boolean;
  clearTrainingInput(): void;

  getPredictionInput(): PredictionInput | undefined;
  setPredictionInput(value?: PredictionInput): void;
  hasPredictionInput(): boolean;
  clearPredictionInput(): void;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreateTime(): boolean;
  clearCreateTime(): void;

  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasStartTime(): boolean;
  clearStartTime(): void;

  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasEndTime(): boolean;
  clearEndTime(): void;

  getState(): Job.State;
  setState(value: Job.State): void;

  getErrorMessage(): string;
  setErrorMessage(value: string): void;

  getTrainingOutput(): TrainingOutput | undefined;
  setTrainingOutput(value?: TrainingOutput): void;
  hasTrainingOutput(): boolean;
  clearTrainingOutput(): void;

  getPredictionOutput(): PredictionOutput | undefined;
  setPredictionOutput(value?: PredictionOutput): void;
  hasPredictionOutput(): boolean;
  clearPredictionOutput(): void;

  getInputCase(): Job.InputCase;

  getOutputCase(): Job.OutputCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Job.AsObject;
  static toObject(includeInstance: boolean, msg: Job): Job.AsObject;
  static serializeBinaryToWriter(message: Job, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Job;
  static deserializeBinaryFromReader(message: Job, reader: jspb.BinaryReader): Job;
}

export namespace Job {
  export type AsObject = {
    jobId: string,
    trainingInput?: TrainingInput.AsObject,
    predictionInput?: PredictionInput.AsObject,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    state: Job.State,
    errorMessage: string,
    trainingOutput?: TrainingOutput.AsObject,
    predictionOutput?: PredictionOutput.AsObject,
  }

  export enum State { 
    STATE_UNSPECIFIED = 0,
    QUEUED = 1,
    PREPARING = 2,
    RUNNING = 3,
    SUCCEEDED = 4,
    FAILED = 5,
    CANCELLING = 6,
    CANCELLED = 7,
  }

  export enum InputCase { 
    INPUT_NOT_SET = 0,
    TRAINING_INPUT = 2,
    PREDICTION_INPUT = 3,
  }

  export enum OutputCase { 
    OUTPUT_NOT_SET = 0,
    TRAINING_OUTPUT = 9,
    PREDICTION_OUTPUT = 10,
  }
}

export class CreateJobRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getJob(): Job | undefined;
  setJob(value?: Job): void;
  hasJob(): boolean;
  clearJob(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateJobRequest): CreateJobRequest.AsObject;
  static serializeBinaryToWriter(message: CreateJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateJobRequest;
  static deserializeBinaryFromReader(message: CreateJobRequest, reader: jspb.BinaryReader): CreateJobRequest;
}

export namespace CreateJobRequest {
  export type AsObject = {
    parent: string,
    job?: Job.AsObject,
  }
}

export class ListJobsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getFilter(): string;
  setFilter(value: string): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListJobsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListJobsRequest): ListJobsRequest.AsObject;
  static serializeBinaryToWriter(message: ListJobsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListJobsRequest;
  static deserializeBinaryFromReader(message: ListJobsRequest, reader: jspb.BinaryReader): ListJobsRequest;
}

export namespace ListJobsRequest {
  export type AsObject = {
    parent: string,
    filter: string,
    pageToken: string,
    pageSize: number,
  }
}

export class ListJobsResponse extends jspb.Message {
  getJobsList(): Array<Job>;
  setJobsList(value: Array<Job>): void;
  clearJobsList(): void;
  addJobs(value?: Job, index?: number): Job;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListJobsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListJobsResponse): ListJobsResponse.AsObject;
  static serializeBinaryToWriter(message: ListJobsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListJobsResponse;
  static deserializeBinaryFromReader(message: ListJobsResponse, reader: jspb.BinaryReader): ListJobsResponse;
}

export namespace ListJobsResponse {
  export type AsObject = {
    jobsList: Array<Job.AsObject>,
    nextPageToken: string,
  }
}

export class GetJobRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetJobRequest): GetJobRequest.AsObject;
  static serializeBinaryToWriter(message: GetJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetJobRequest;
  static deserializeBinaryFromReader(message: GetJobRequest, reader: jspb.BinaryReader): GetJobRequest;
}

export namespace GetJobRequest {
  export type AsObject = {
    name: string,
  }
}

export class CancelJobRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelJobRequest): CancelJobRequest.AsObject;
  static serializeBinaryToWriter(message: CancelJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelJobRequest;
  static deserializeBinaryFromReader(message: CancelJobRequest, reader: jspb.BinaryReader): CancelJobRequest;
}

export namespace CancelJobRequest {
  export type AsObject = {
    name: string,
  }
}

