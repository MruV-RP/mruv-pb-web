import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';
import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb';
import * as google_api_resource_pb from '../../../../google/api/resource_pb';
import * as google_cloud_dataproc_v1_clusters_pb from '../../../../google/cloud/dataproc/v1/clusters_pb';
import * as google_cloud_dataproc_v1_jobs_pb from '../../../../google/cloud/dataproc/v1/jobs_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class WorkflowTemplate extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getVersion(): number;
  setVersion(value: number): void;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreateTime(): boolean;
  clearCreateTime(): void;

  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasUpdateTime(): boolean;
  clearUpdateTime(): void;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): void;

  getPlacement(): WorkflowTemplatePlacement | undefined;
  setPlacement(value?: WorkflowTemplatePlacement): void;
  hasPlacement(): boolean;
  clearPlacement(): void;

  getJobsList(): Array<OrderedJob>;
  setJobsList(value: Array<OrderedJob>): void;
  clearJobsList(): void;
  addJobs(value?: OrderedJob, index?: number): OrderedJob;

  getParametersList(): Array<TemplateParameter>;
  setParametersList(value: Array<TemplateParameter>): void;
  clearParametersList(): void;
  addParameters(value?: TemplateParameter, index?: number): TemplateParameter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkflowTemplate.AsObject;
  static toObject(includeInstance: boolean, msg: WorkflowTemplate): WorkflowTemplate.AsObject;
  static serializeBinaryToWriter(message: WorkflowTemplate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkflowTemplate;
  static deserializeBinaryFromReader(message: WorkflowTemplate, reader: jspb.BinaryReader): WorkflowTemplate;
}

export namespace WorkflowTemplate {
  export type AsObject = {
    id: string,
    name: string,
    version: number,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    labelsMap: Array<[string, string]>,
    placement?: WorkflowTemplatePlacement.AsObject,
    jobsList: Array<OrderedJob.AsObject>,
    parametersList: Array<TemplateParameter.AsObject>,
  }
}

export class WorkflowTemplatePlacement extends jspb.Message {
  getManagedCluster(): ManagedCluster | undefined;
  setManagedCluster(value?: ManagedCluster): void;
  hasManagedCluster(): boolean;
  clearManagedCluster(): void;

  getClusterSelector(): ClusterSelector | undefined;
  setClusterSelector(value?: ClusterSelector): void;
  hasClusterSelector(): boolean;
  clearClusterSelector(): void;

  getPlacementCase(): WorkflowTemplatePlacement.PlacementCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkflowTemplatePlacement.AsObject;
  static toObject(includeInstance: boolean, msg: WorkflowTemplatePlacement): WorkflowTemplatePlacement.AsObject;
  static serializeBinaryToWriter(message: WorkflowTemplatePlacement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkflowTemplatePlacement;
  static deserializeBinaryFromReader(message: WorkflowTemplatePlacement, reader: jspb.BinaryReader): WorkflowTemplatePlacement;
}

export namespace WorkflowTemplatePlacement {
  export type AsObject = {
    managedCluster?: ManagedCluster.AsObject,
    clusterSelector?: ClusterSelector.AsObject,
  }

  export enum PlacementCase { 
    PLACEMENT_NOT_SET = 0,
    MANAGED_CLUSTER = 1,
    CLUSTER_SELECTOR = 2,
  }
}

export class ManagedCluster extends jspb.Message {
  getClusterName(): string;
  setClusterName(value: string): void;

  getConfig(): google_cloud_dataproc_v1_clusters_pb.ClusterConfig | undefined;
  setConfig(value?: google_cloud_dataproc_v1_clusters_pb.ClusterConfig): void;
  hasConfig(): boolean;
  clearConfig(): void;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManagedCluster.AsObject;
  static toObject(includeInstance: boolean, msg: ManagedCluster): ManagedCluster.AsObject;
  static serializeBinaryToWriter(message: ManagedCluster, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManagedCluster;
  static deserializeBinaryFromReader(message: ManagedCluster, reader: jspb.BinaryReader): ManagedCluster;
}

export namespace ManagedCluster {
  export type AsObject = {
    clusterName: string,
    config?: google_cloud_dataproc_v1_clusters_pb.ClusterConfig.AsObject,
    labelsMap: Array<[string, string]>,
  }
}

export class ClusterSelector extends jspb.Message {
  getZone(): string;
  setZone(value: string): void;

  getClusterLabelsMap(): jspb.Map<string, string>;
  clearClusterLabelsMap(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClusterSelector.AsObject;
  static toObject(includeInstance: boolean, msg: ClusterSelector): ClusterSelector.AsObject;
  static serializeBinaryToWriter(message: ClusterSelector, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClusterSelector;
  static deserializeBinaryFromReader(message: ClusterSelector, reader: jspb.BinaryReader): ClusterSelector;
}

export namespace ClusterSelector {
  export type AsObject = {
    zone: string,
    clusterLabelsMap: Array<[string, string]>,
  }
}

export class OrderedJob extends jspb.Message {
  getStepId(): string;
  setStepId(value: string): void;

  getHadoopJob(): google_cloud_dataproc_v1_jobs_pb.HadoopJob | undefined;
  setHadoopJob(value?: google_cloud_dataproc_v1_jobs_pb.HadoopJob): void;
  hasHadoopJob(): boolean;
  clearHadoopJob(): void;

  getSparkJob(): google_cloud_dataproc_v1_jobs_pb.SparkJob | undefined;
  setSparkJob(value?: google_cloud_dataproc_v1_jobs_pb.SparkJob): void;
  hasSparkJob(): boolean;
  clearSparkJob(): void;

  getPysparkJob(): google_cloud_dataproc_v1_jobs_pb.PySparkJob | undefined;
  setPysparkJob(value?: google_cloud_dataproc_v1_jobs_pb.PySparkJob): void;
  hasPysparkJob(): boolean;
  clearPysparkJob(): void;

  getHiveJob(): google_cloud_dataproc_v1_jobs_pb.HiveJob | undefined;
  setHiveJob(value?: google_cloud_dataproc_v1_jobs_pb.HiveJob): void;
  hasHiveJob(): boolean;
  clearHiveJob(): void;

  getPigJob(): google_cloud_dataproc_v1_jobs_pb.PigJob | undefined;
  setPigJob(value?: google_cloud_dataproc_v1_jobs_pb.PigJob): void;
  hasPigJob(): boolean;
  clearPigJob(): void;

  getSparkSqlJob(): google_cloud_dataproc_v1_jobs_pb.SparkSqlJob | undefined;
  setSparkSqlJob(value?: google_cloud_dataproc_v1_jobs_pb.SparkSqlJob): void;
  hasSparkSqlJob(): boolean;
  clearSparkSqlJob(): void;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): void;

  getScheduling(): google_cloud_dataproc_v1_jobs_pb.JobScheduling | undefined;
  setScheduling(value?: google_cloud_dataproc_v1_jobs_pb.JobScheduling): void;
  hasScheduling(): boolean;
  clearScheduling(): void;

  getPrerequisiteStepIdsList(): Array<string>;
  setPrerequisiteStepIdsList(value: Array<string>): void;
  clearPrerequisiteStepIdsList(): void;
  addPrerequisiteStepIds(value: string, index?: number): void;

  getJobTypeCase(): OrderedJob.JobTypeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderedJob.AsObject;
  static toObject(includeInstance: boolean, msg: OrderedJob): OrderedJob.AsObject;
  static serializeBinaryToWriter(message: OrderedJob, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderedJob;
  static deserializeBinaryFromReader(message: OrderedJob, reader: jspb.BinaryReader): OrderedJob;
}

export namespace OrderedJob {
  export type AsObject = {
    stepId: string,
    hadoopJob?: google_cloud_dataproc_v1_jobs_pb.HadoopJob.AsObject,
    sparkJob?: google_cloud_dataproc_v1_jobs_pb.SparkJob.AsObject,
    pysparkJob?: google_cloud_dataproc_v1_jobs_pb.PySparkJob.AsObject,
    hiveJob?: google_cloud_dataproc_v1_jobs_pb.HiveJob.AsObject,
    pigJob?: google_cloud_dataproc_v1_jobs_pb.PigJob.AsObject,
    sparkSqlJob?: google_cloud_dataproc_v1_jobs_pb.SparkSqlJob.AsObject,
    labelsMap: Array<[string, string]>,
    scheduling?: google_cloud_dataproc_v1_jobs_pb.JobScheduling.AsObject,
    prerequisiteStepIdsList: Array<string>,
  }

  export enum JobTypeCase { 
    JOB_TYPE_NOT_SET = 0,
    HADOOP_JOB = 2,
    SPARK_JOB = 3,
    PYSPARK_JOB = 4,
    HIVE_JOB = 5,
    PIG_JOB = 6,
    SPARK_SQL_JOB = 7,
  }
}

export class TemplateParameter extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getFieldsList(): Array<string>;
  setFieldsList(value: Array<string>): void;
  clearFieldsList(): void;
  addFields(value: string, index?: number): void;

  getDescription(): string;
  setDescription(value: string): void;

  getValidation(): ParameterValidation | undefined;
  setValidation(value?: ParameterValidation): void;
  hasValidation(): boolean;
  clearValidation(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TemplateParameter.AsObject;
  static toObject(includeInstance: boolean, msg: TemplateParameter): TemplateParameter.AsObject;
  static serializeBinaryToWriter(message: TemplateParameter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TemplateParameter;
  static deserializeBinaryFromReader(message: TemplateParameter, reader: jspb.BinaryReader): TemplateParameter;
}

export namespace TemplateParameter {
  export type AsObject = {
    name: string,
    fieldsList: Array<string>,
    description: string,
    validation?: ParameterValidation.AsObject,
  }
}

export class ParameterValidation extends jspb.Message {
  getRegex(): RegexValidation | undefined;
  setRegex(value?: RegexValidation): void;
  hasRegex(): boolean;
  clearRegex(): void;

  getValues(): ValueValidation | undefined;
  setValues(value?: ValueValidation): void;
  hasValues(): boolean;
  clearValues(): void;

  getValidationTypeCase(): ParameterValidation.ValidationTypeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ParameterValidation.AsObject;
  static toObject(includeInstance: boolean, msg: ParameterValidation): ParameterValidation.AsObject;
  static serializeBinaryToWriter(message: ParameterValidation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ParameterValidation;
  static deserializeBinaryFromReader(message: ParameterValidation, reader: jspb.BinaryReader): ParameterValidation;
}

export namespace ParameterValidation {
  export type AsObject = {
    regex?: RegexValidation.AsObject,
    values?: ValueValidation.AsObject,
  }

  export enum ValidationTypeCase { 
    VALIDATION_TYPE_NOT_SET = 0,
    REGEX = 1,
    VALUES = 2,
  }
}

export class RegexValidation extends jspb.Message {
  getRegexesList(): Array<string>;
  setRegexesList(value: Array<string>): void;
  clearRegexesList(): void;
  addRegexes(value: string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegexValidation.AsObject;
  static toObject(includeInstance: boolean, msg: RegexValidation): RegexValidation.AsObject;
  static serializeBinaryToWriter(message: RegexValidation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegexValidation;
  static deserializeBinaryFromReader(message: RegexValidation, reader: jspb.BinaryReader): RegexValidation;
}

export namespace RegexValidation {
  export type AsObject = {
    regexesList: Array<string>,
  }
}

export class ValueValidation extends jspb.Message {
  getValuesList(): Array<string>;
  setValuesList(value: Array<string>): void;
  clearValuesList(): void;
  addValues(value: string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValueValidation.AsObject;
  static toObject(includeInstance: boolean, msg: ValueValidation): ValueValidation.AsObject;
  static serializeBinaryToWriter(message: ValueValidation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValueValidation;
  static deserializeBinaryFromReader(message: ValueValidation, reader: jspb.BinaryReader): ValueValidation;
}

export namespace ValueValidation {
  export type AsObject = {
    valuesList: Array<string>,
  }
}

export class WorkflowMetadata extends jspb.Message {
  getTemplate(): string;
  setTemplate(value: string): void;

  getVersion(): number;
  setVersion(value: number): void;

  getCreateCluster(): ClusterOperation | undefined;
  setCreateCluster(value?: ClusterOperation): void;
  hasCreateCluster(): boolean;
  clearCreateCluster(): void;

  getGraph(): WorkflowGraph | undefined;
  setGraph(value?: WorkflowGraph): void;
  hasGraph(): boolean;
  clearGraph(): void;

  getDeleteCluster(): ClusterOperation | undefined;
  setDeleteCluster(value?: ClusterOperation): void;
  hasDeleteCluster(): boolean;
  clearDeleteCluster(): void;

  getState(): WorkflowMetadata.State;
  setState(value: WorkflowMetadata.State): void;

  getClusterName(): string;
  setClusterName(value: string): void;

  getParametersMap(): jspb.Map<string, string>;
  clearParametersMap(): void;

  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasStartTime(): boolean;
  clearStartTime(): void;

  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasEndTime(): boolean;
  clearEndTime(): void;

  getClusterUuid(): string;
  setClusterUuid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkflowMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: WorkflowMetadata): WorkflowMetadata.AsObject;
  static serializeBinaryToWriter(message: WorkflowMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkflowMetadata;
  static deserializeBinaryFromReader(message: WorkflowMetadata, reader: jspb.BinaryReader): WorkflowMetadata;
}

export namespace WorkflowMetadata {
  export type AsObject = {
    template: string,
    version: number,
    createCluster?: ClusterOperation.AsObject,
    graph?: WorkflowGraph.AsObject,
    deleteCluster?: ClusterOperation.AsObject,
    state: WorkflowMetadata.State,
    clusterName: string,
    parametersMap: Array<[string, string]>,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    clusterUuid: string,
  }

  export enum State { 
    UNKNOWN = 0,
    PENDING = 1,
    RUNNING = 2,
    DONE = 3,
  }
}

export class ClusterOperation extends jspb.Message {
  getOperationId(): string;
  setOperationId(value: string): void;

  getError(): string;
  setError(value: string): void;

  getDone(): boolean;
  setDone(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClusterOperation.AsObject;
  static toObject(includeInstance: boolean, msg: ClusterOperation): ClusterOperation.AsObject;
  static serializeBinaryToWriter(message: ClusterOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClusterOperation;
  static deserializeBinaryFromReader(message: ClusterOperation, reader: jspb.BinaryReader): ClusterOperation;
}

export namespace ClusterOperation {
  export type AsObject = {
    operationId: string,
    error: string,
    done: boolean,
  }
}

export class WorkflowGraph extends jspb.Message {
  getNodesList(): Array<WorkflowNode>;
  setNodesList(value: Array<WorkflowNode>): void;
  clearNodesList(): void;
  addNodes(value?: WorkflowNode, index?: number): WorkflowNode;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkflowGraph.AsObject;
  static toObject(includeInstance: boolean, msg: WorkflowGraph): WorkflowGraph.AsObject;
  static serializeBinaryToWriter(message: WorkflowGraph, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkflowGraph;
  static deserializeBinaryFromReader(message: WorkflowGraph, reader: jspb.BinaryReader): WorkflowGraph;
}

export namespace WorkflowGraph {
  export type AsObject = {
    nodesList: Array<WorkflowNode.AsObject>,
  }
}

export class WorkflowNode extends jspb.Message {
  getStepId(): string;
  setStepId(value: string): void;

  getPrerequisiteStepIdsList(): Array<string>;
  setPrerequisiteStepIdsList(value: Array<string>): void;
  clearPrerequisiteStepIdsList(): void;
  addPrerequisiteStepIds(value: string, index?: number): void;

  getJobId(): string;
  setJobId(value: string): void;

  getState(): WorkflowNode.NodeState;
  setState(value: WorkflowNode.NodeState): void;

  getError(): string;
  setError(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkflowNode.AsObject;
  static toObject(includeInstance: boolean, msg: WorkflowNode): WorkflowNode.AsObject;
  static serializeBinaryToWriter(message: WorkflowNode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkflowNode;
  static deserializeBinaryFromReader(message: WorkflowNode, reader: jspb.BinaryReader): WorkflowNode;
}

export namespace WorkflowNode {
  export type AsObject = {
    stepId: string,
    prerequisiteStepIdsList: Array<string>,
    jobId: string,
    state: WorkflowNode.NodeState,
    error: string,
  }

  export enum NodeState { 
    NODE_STATE_UNSPECIFIED = 0,
    BLOCKED = 1,
    RUNNABLE = 2,
    RUNNING = 3,
    COMPLETED = 4,
    FAILED = 5,
  }
}

export class CreateWorkflowTemplateRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getTemplate(): WorkflowTemplate | undefined;
  setTemplate(value?: WorkflowTemplate): void;
  hasTemplate(): boolean;
  clearTemplate(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateWorkflowTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateWorkflowTemplateRequest): CreateWorkflowTemplateRequest.AsObject;
  static serializeBinaryToWriter(message: CreateWorkflowTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateWorkflowTemplateRequest;
  static deserializeBinaryFromReader(message: CreateWorkflowTemplateRequest, reader: jspb.BinaryReader): CreateWorkflowTemplateRequest;
}

export namespace CreateWorkflowTemplateRequest {
  export type AsObject = {
    parent: string,
    template?: WorkflowTemplate.AsObject,
  }
}

export class GetWorkflowTemplateRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getVersion(): number;
  setVersion(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWorkflowTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetWorkflowTemplateRequest): GetWorkflowTemplateRequest.AsObject;
  static serializeBinaryToWriter(message: GetWorkflowTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWorkflowTemplateRequest;
  static deserializeBinaryFromReader(message: GetWorkflowTemplateRequest, reader: jspb.BinaryReader): GetWorkflowTemplateRequest;
}

export namespace GetWorkflowTemplateRequest {
  export type AsObject = {
    name: string,
    version: number,
  }
}

export class InstantiateWorkflowTemplateRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getVersion(): number;
  setVersion(value: number): void;

  getRequestId(): string;
  setRequestId(value: string): void;

  getParametersMap(): jspb.Map<string, string>;
  clearParametersMap(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InstantiateWorkflowTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InstantiateWorkflowTemplateRequest): InstantiateWorkflowTemplateRequest.AsObject;
  static serializeBinaryToWriter(message: InstantiateWorkflowTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InstantiateWorkflowTemplateRequest;
  static deserializeBinaryFromReader(message: InstantiateWorkflowTemplateRequest, reader: jspb.BinaryReader): InstantiateWorkflowTemplateRequest;
}

export namespace InstantiateWorkflowTemplateRequest {
  export type AsObject = {
    name: string,
    version: number,
    requestId: string,
    parametersMap: Array<[string, string]>,
  }
}

export class InstantiateInlineWorkflowTemplateRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getTemplate(): WorkflowTemplate | undefined;
  setTemplate(value?: WorkflowTemplate): void;
  hasTemplate(): boolean;
  clearTemplate(): void;

  getRequestId(): string;
  setRequestId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InstantiateInlineWorkflowTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InstantiateInlineWorkflowTemplateRequest): InstantiateInlineWorkflowTemplateRequest.AsObject;
  static serializeBinaryToWriter(message: InstantiateInlineWorkflowTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InstantiateInlineWorkflowTemplateRequest;
  static deserializeBinaryFromReader(message: InstantiateInlineWorkflowTemplateRequest, reader: jspb.BinaryReader): InstantiateInlineWorkflowTemplateRequest;
}

export namespace InstantiateInlineWorkflowTemplateRequest {
  export type AsObject = {
    parent: string,
    template?: WorkflowTemplate.AsObject,
    requestId: string,
  }
}

export class UpdateWorkflowTemplateRequest extends jspb.Message {
  getTemplate(): WorkflowTemplate | undefined;
  setTemplate(value?: WorkflowTemplate): void;
  hasTemplate(): boolean;
  clearTemplate(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateWorkflowTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateWorkflowTemplateRequest): UpdateWorkflowTemplateRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateWorkflowTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateWorkflowTemplateRequest;
  static deserializeBinaryFromReader(message: UpdateWorkflowTemplateRequest, reader: jspb.BinaryReader): UpdateWorkflowTemplateRequest;
}

export namespace UpdateWorkflowTemplateRequest {
  export type AsObject = {
    template?: WorkflowTemplate.AsObject,
  }
}

export class ListWorkflowTemplatesRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWorkflowTemplatesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListWorkflowTemplatesRequest): ListWorkflowTemplatesRequest.AsObject;
  static serializeBinaryToWriter(message: ListWorkflowTemplatesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWorkflowTemplatesRequest;
  static deserializeBinaryFromReader(message: ListWorkflowTemplatesRequest, reader: jspb.BinaryReader): ListWorkflowTemplatesRequest;
}

export namespace ListWorkflowTemplatesRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListWorkflowTemplatesResponse extends jspb.Message {
  getTemplatesList(): Array<WorkflowTemplate>;
  setTemplatesList(value: Array<WorkflowTemplate>): void;
  clearTemplatesList(): void;
  addTemplates(value?: WorkflowTemplate, index?: number): WorkflowTemplate;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWorkflowTemplatesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListWorkflowTemplatesResponse): ListWorkflowTemplatesResponse.AsObject;
  static serializeBinaryToWriter(message: ListWorkflowTemplatesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWorkflowTemplatesResponse;
  static deserializeBinaryFromReader(message: ListWorkflowTemplatesResponse, reader: jspb.BinaryReader): ListWorkflowTemplatesResponse;
}

export namespace ListWorkflowTemplatesResponse {
  export type AsObject = {
    templatesList: Array<WorkflowTemplate.AsObject>,
    nextPageToken: string,
  }
}

export class DeleteWorkflowTemplateRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getVersion(): number;
  setVersion(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteWorkflowTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteWorkflowTemplateRequest): DeleteWorkflowTemplateRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteWorkflowTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteWorkflowTemplateRequest;
  static deserializeBinaryFromReader(message: DeleteWorkflowTemplateRequest, reader: jspb.BinaryReader): DeleteWorkflowTemplateRequest;
}

export namespace DeleteWorkflowTemplateRequest {
  export type AsObject = {
    name: string,
    version: number,
  }
}

