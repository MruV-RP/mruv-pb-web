import * as jspb from "google-protobuf"

import * as google_api_field_behavior_pb from '../../../../../google/api/field_behavior_pb';
import * as google_cloud_osconfig_agentendpoint_v1beta_patch_jobs_pb from '../../../../../google/cloud/osconfig/agentendpoint/v1beta/patch_jobs_pb';

export class Task extends jspb.Message {
  getTaskId(): string;
  setTaskId(value: string): void;

  getTaskType(): TaskType;
  setTaskType(value: TaskType): void;

  getTaskDirective(): TaskDirective;
  setTaskDirective(value: TaskDirective): void;

  getApplyPatchesTask(): ApplyPatchesTask | undefined;
  setApplyPatchesTask(value?: ApplyPatchesTask): void;
  hasApplyPatchesTask(): boolean;
  clearApplyPatchesTask(): void;

  getExecStepTask(): ExecStepTask | undefined;
  setExecStepTask(value?: ExecStepTask): void;
  hasExecStepTask(): boolean;
  clearExecStepTask(): void;

  getServiceLabelsMap(): jspb.Map<string, string>;
  clearServiceLabelsMap(): void;

  getTaskDetailsCase(): Task.TaskDetailsCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Task.AsObject;
  static toObject(includeInstance: boolean, msg: Task): Task.AsObject;
  static serializeBinaryToWriter(message: Task, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Task;
  static deserializeBinaryFromReader(message: Task, reader: jspb.BinaryReader): Task;
}

export namespace Task {
  export type AsObject = {
    taskId: string,
    taskType: TaskType,
    taskDirective: TaskDirective,
    applyPatchesTask?: ApplyPatchesTask.AsObject,
    execStepTask?: ExecStepTask.AsObject,
    serviceLabelsMap: Array<[string, string]>,
  }

  export enum TaskDetailsCase { 
    TASK_DETAILS_NOT_SET = 0,
    APPLY_PATCHES_TASK = 4,
    EXEC_STEP_TASK = 5,
  }
}

export class ApplyPatchesTask extends jspb.Message {
  getPatchConfig(): google_cloud_osconfig_agentendpoint_v1beta_patch_jobs_pb.PatchConfig | undefined;
  setPatchConfig(value?: google_cloud_osconfig_agentendpoint_v1beta_patch_jobs_pb.PatchConfig): void;
  hasPatchConfig(): boolean;
  clearPatchConfig(): void;

  getDryRun(): boolean;
  setDryRun(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplyPatchesTask.AsObject;
  static toObject(includeInstance: boolean, msg: ApplyPatchesTask): ApplyPatchesTask.AsObject;
  static serializeBinaryToWriter(message: ApplyPatchesTask, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplyPatchesTask;
  static deserializeBinaryFromReader(message: ApplyPatchesTask, reader: jspb.BinaryReader): ApplyPatchesTask;
}

export namespace ApplyPatchesTask {
  export type AsObject = {
    patchConfig?: google_cloud_osconfig_agentendpoint_v1beta_patch_jobs_pb.PatchConfig.AsObject,
    dryRun: boolean,
  }
}

export class ApplyPatchesTaskProgress extends jspb.Message {
  getState(): ApplyPatchesTaskProgress.State;
  setState(value: ApplyPatchesTaskProgress.State): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplyPatchesTaskProgress.AsObject;
  static toObject(includeInstance: boolean, msg: ApplyPatchesTaskProgress): ApplyPatchesTaskProgress.AsObject;
  static serializeBinaryToWriter(message: ApplyPatchesTaskProgress, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplyPatchesTaskProgress;
  static deserializeBinaryFromReader(message: ApplyPatchesTaskProgress, reader: jspb.BinaryReader): ApplyPatchesTaskProgress;
}

export namespace ApplyPatchesTaskProgress {
  export type AsObject = {
    state: ApplyPatchesTaskProgress.State,
  }

  export enum State { 
    STATE_UNSPECIFIED = 0,
    STARTED = 4,
    DOWNLOADING_PATCHES = 1,
    APPLYING_PATCHES = 2,
    REBOOTING = 3,
  }
}

export class ApplyPatchesTaskOutput extends jspb.Message {
  getState(): ApplyPatchesTaskOutput.State;
  setState(value: ApplyPatchesTaskOutput.State): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplyPatchesTaskOutput.AsObject;
  static toObject(includeInstance: boolean, msg: ApplyPatchesTaskOutput): ApplyPatchesTaskOutput.AsObject;
  static serializeBinaryToWriter(message: ApplyPatchesTaskOutput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplyPatchesTaskOutput;
  static deserializeBinaryFromReader(message: ApplyPatchesTaskOutput, reader: jspb.BinaryReader): ApplyPatchesTaskOutput;
}

export namespace ApplyPatchesTaskOutput {
  export type AsObject = {
    state: ApplyPatchesTaskOutput.State,
  }

  export enum State { 
    STATE_UNSPECIFIED = 0,
    SUCCEEDED = 1,
    SUCCEEDED_REBOOT_REQUIRED = 2,
    FAILED = 3,
  }
}

export class ExecStepTask extends jspb.Message {
  getExecStep(): google_cloud_osconfig_agentendpoint_v1beta_patch_jobs_pb.ExecStep | undefined;
  setExecStep(value?: google_cloud_osconfig_agentendpoint_v1beta_patch_jobs_pb.ExecStep): void;
  hasExecStep(): boolean;
  clearExecStep(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecStepTask.AsObject;
  static toObject(includeInstance: boolean, msg: ExecStepTask): ExecStepTask.AsObject;
  static serializeBinaryToWriter(message: ExecStepTask, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecStepTask;
  static deserializeBinaryFromReader(message: ExecStepTask, reader: jspb.BinaryReader): ExecStepTask;
}

export namespace ExecStepTask {
  export type AsObject = {
    execStep?: google_cloud_osconfig_agentendpoint_v1beta_patch_jobs_pb.ExecStep.AsObject,
  }
}

export class ExecStepTaskProgress extends jspb.Message {
  getState(): ExecStepTaskProgress.State;
  setState(value: ExecStepTaskProgress.State): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecStepTaskProgress.AsObject;
  static toObject(includeInstance: boolean, msg: ExecStepTaskProgress): ExecStepTaskProgress.AsObject;
  static serializeBinaryToWriter(message: ExecStepTaskProgress, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecStepTaskProgress;
  static deserializeBinaryFromReader(message: ExecStepTaskProgress, reader: jspb.BinaryReader): ExecStepTaskProgress;
}

export namespace ExecStepTaskProgress {
  export type AsObject = {
    state: ExecStepTaskProgress.State,
  }

  export enum State { 
    STATE_UNSPECIFIED = 0,
    STARTED = 1,
  }
}

export class ExecStepTaskOutput extends jspb.Message {
  getState(): ExecStepTaskOutput.State;
  setState(value: ExecStepTaskOutput.State): void;

  getExitCode(): number;
  setExitCode(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecStepTaskOutput.AsObject;
  static toObject(includeInstance: boolean, msg: ExecStepTaskOutput): ExecStepTaskOutput.AsObject;
  static serializeBinaryToWriter(message: ExecStepTaskOutput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecStepTaskOutput;
  static deserializeBinaryFromReader(message: ExecStepTaskOutput, reader: jspb.BinaryReader): ExecStepTaskOutput;
}

export namespace ExecStepTaskOutput {
  export type AsObject = {
    state: ExecStepTaskOutput.State,
    exitCode: number,
  }

  export enum State { 
    STATE_UNSPECIFIED = 0,
    COMPLETED = 1,
    TIMED_OUT = 2,
    CANCELLED = 3,
  }
}

export enum TaskDirective { 
  TASK_DIRECTIVE_UNSPECIFIED = 0,
  CONTINUE = 1,
  STOP = 2,
}
export enum TaskType { 
  TASK_TYPE_UNSPECIFIED = 0,
  APPLY_PATCHES = 1,
  EXEC_STEP_TASK = 2,
}
