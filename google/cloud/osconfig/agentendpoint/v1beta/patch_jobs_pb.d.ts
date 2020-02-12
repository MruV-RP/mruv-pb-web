import * as jspb from "google-protobuf"

export class PatchConfig extends jspb.Message {
  getRebootConfig(): PatchConfig.RebootConfig;
  setRebootConfig(value: PatchConfig.RebootConfig): void;

  getRetryStrategy(): RetryStrategy | undefined;
  setRetryStrategy(value?: RetryStrategy): void;
  hasRetryStrategy(): boolean;
  clearRetryStrategy(): void;

  getApt(): AptSettings | undefined;
  setApt(value?: AptSettings): void;
  hasApt(): boolean;
  clearApt(): void;

  getYum(): YumSettings | undefined;
  setYum(value?: YumSettings): void;
  hasYum(): boolean;
  clearYum(): void;

  getGoo(): GooSettings | undefined;
  setGoo(value?: GooSettings): void;
  hasGoo(): boolean;
  clearGoo(): void;

  getZypper(): ZypperSettings | undefined;
  setZypper(value?: ZypperSettings): void;
  hasZypper(): boolean;
  clearZypper(): void;

  getWindowsUpdate(): WindowsUpdateSettings | undefined;
  setWindowsUpdate(value?: WindowsUpdateSettings): void;
  hasWindowsUpdate(): boolean;
  clearWindowsUpdate(): void;

  getPreStep(): ExecStep | undefined;
  setPreStep(value?: ExecStep): void;
  hasPreStep(): boolean;
  clearPreStep(): void;

  getPostStep(): ExecStep | undefined;
  setPostStep(value?: ExecStep): void;
  hasPostStep(): boolean;
  clearPostStep(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatchConfig.AsObject;
  static toObject(includeInstance: boolean, msg: PatchConfig): PatchConfig.AsObject;
  static serializeBinaryToWriter(message: PatchConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatchConfig;
  static deserializeBinaryFromReader(message: PatchConfig, reader: jspb.BinaryReader): PatchConfig;
}

export namespace PatchConfig {
  export type AsObject = {
    rebootConfig: PatchConfig.RebootConfig,
    retryStrategy?: RetryStrategy.AsObject,
    apt?: AptSettings.AsObject,
    yum?: YumSettings.AsObject,
    goo?: GooSettings.AsObject,
    zypper?: ZypperSettings.AsObject,
    windowsUpdate?: WindowsUpdateSettings.AsObject,
    preStep?: ExecStep.AsObject,
    postStep?: ExecStep.AsObject,
  }

  export enum RebootConfig { 
    REBOOT_CONFIG_UNSPECIFIED = 0,
    DEFAULT = 1,
    ALWAYS = 2,
    NEVER = 3,
  }
}

export class AptSettings extends jspb.Message {
  getType(): AptSettings.Type;
  setType(value: AptSettings.Type): void;

  getExcludesList(): Array<string>;
  setExcludesList(value: Array<string>): void;
  clearExcludesList(): void;
  addExcludes(value: string, index?: number): void;

  getExclusivePackagesList(): Array<string>;
  setExclusivePackagesList(value: Array<string>): void;
  clearExclusivePackagesList(): void;
  addExclusivePackages(value: string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AptSettings.AsObject;
  static toObject(includeInstance: boolean, msg: AptSettings): AptSettings.AsObject;
  static serializeBinaryToWriter(message: AptSettings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AptSettings;
  static deserializeBinaryFromReader(message: AptSettings, reader: jspb.BinaryReader): AptSettings;
}

export namespace AptSettings {
  export type AsObject = {
    type: AptSettings.Type,
    excludesList: Array<string>,
    exclusivePackagesList: Array<string>,
  }

  export enum Type { 
    TYPE_UNSPECIFIED = 0,
    DIST = 1,
    UPGRADE = 2,
  }
}

export class YumSettings extends jspb.Message {
  getSecurity(): boolean;
  setSecurity(value: boolean): void;

  getMinimal(): boolean;
  setMinimal(value: boolean): void;

  getExcludesList(): Array<string>;
  setExcludesList(value: Array<string>): void;
  clearExcludesList(): void;
  addExcludes(value: string, index?: number): void;

  getExclusivePackagesList(): Array<string>;
  setExclusivePackagesList(value: Array<string>): void;
  clearExclusivePackagesList(): void;
  addExclusivePackages(value: string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): YumSettings.AsObject;
  static toObject(includeInstance: boolean, msg: YumSettings): YumSettings.AsObject;
  static serializeBinaryToWriter(message: YumSettings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): YumSettings;
  static deserializeBinaryFromReader(message: YumSettings, reader: jspb.BinaryReader): YumSettings;
}

export namespace YumSettings {
  export type AsObject = {
    security: boolean,
    minimal: boolean,
    excludesList: Array<string>,
    exclusivePackagesList: Array<string>,
  }
}

export class GooSettings extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GooSettings.AsObject;
  static toObject(includeInstance: boolean, msg: GooSettings): GooSettings.AsObject;
  static serializeBinaryToWriter(message: GooSettings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GooSettings;
  static deserializeBinaryFromReader(message: GooSettings, reader: jspb.BinaryReader): GooSettings;
}

export namespace GooSettings {
  export type AsObject = {
  }
}

export class ZypperSettings extends jspb.Message {
  getWithOptional(): boolean;
  setWithOptional(value: boolean): void;

  getWithUpdate(): boolean;
  setWithUpdate(value: boolean): void;

  getCategoriesList(): Array<string>;
  setCategoriesList(value: Array<string>): void;
  clearCategoriesList(): void;
  addCategories(value: string, index?: number): void;

  getSeveritiesList(): Array<string>;
  setSeveritiesList(value: Array<string>): void;
  clearSeveritiesList(): void;
  addSeverities(value: string, index?: number): void;

  getExcludesList(): Array<string>;
  setExcludesList(value: Array<string>): void;
  clearExcludesList(): void;
  addExcludes(value: string, index?: number): void;

  getExclusivePatchesList(): Array<string>;
  setExclusivePatchesList(value: Array<string>): void;
  clearExclusivePatchesList(): void;
  addExclusivePatches(value: string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ZypperSettings.AsObject;
  static toObject(includeInstance: boolean, msg: ZypperSettings): ZypperSettings.AsObject;
  static serializeBinaryToWriter(message: ZypperSettings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ZypperSettings;
  static deserializeBinaryFromReader(message: ZypperSettings, reader: jspb.BinaryReader): ZypperSettings;
}

export namespace ZypperSettings {
  export type AsObject = {
    withOptional: boolean,
    withUpdate: boolean,
    categoriesList: Array<string>,
    severitiesList: Array<string>,
    excludesList: Array<string>,
    exclusivePatchesList: Array<string>,
  }
}

export class WindowsUpdateSettings extends jspb.Message {
  getClassificationsList(): Array<WindowsUpdateSettings.Classification>;
  setClassificationsList(value: Array<WindowsUpdateSettings.Classification>): void;
  clearClassificationsList(): void;
  addClassifications(value: WindowsUpdateSettings.Classification, index?: number): void;

  getExcludesList(): Array<string>;
  setExcludesList(value: Array<string>): void;
  clearExcludesList(): void;
  addExcludes(value: string, index?: number): void;

  getExclusivePatchesList(): Array<string>;
  setExclusivePatchesList(value: Array<string>): void;
  clearExclusivePatchesList(): void;
  addExclusivePatches(value: string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WindowsUpdateSettings.AsObject;
  static toObject(includeInstance: boolean, msg: WindowsUpdateSettings): WindowsUpdateSettings.AsObject;
  static serializeBinaryToWriter(message: WindowsUpdateSettings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WindowsUpdateSettings;
  static deserializeBinaryFromReader(message: WindowsUpdateSettings, reader: jspb.BinaryReader): WindowsUpdateSettings;
}

export namespace WindowsUpdateSettings {
  export type AsObject = {
    classificationsList: Array<WindowsUpdateSettings.Classification>,
    excludesList: Array<string>,
    exclusivePatchesList: Array<string>,
  }

  export enum Classification { 
    CLASSIFICATION_UNSPECIFIED = 0,
    CRITICAL = 1,
    SECURITY = 2,
    DEFINITION = 3,
    DRIVER = 4,
    FEATURE_PACK = 5,
    SERVICE_PACK = 6,
    TOOL = 7,
    UPDATE_ROLLUP = 8,
    UPDATE = 9,
  }
}

export class RetryStrategy extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetryStrategy.AsObject;
  static toObject(includeInstance: boolean, msg: RetryStrategy): RetryStrategy.AsObject;
  static serializeBinaryToWriter(message: RetryStrategy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetryStrategy;
  static deserializeBinaryFromReader(message: RetryStrategy, reader: jspb.BinaryReader): RetryStrategy;
}

export namespace RetryStrategy {
  export type AsObject = {
    enabled: boolean,
  }
}

export class ExecStep extends jspb.Message {
  getLinuxExecStepConfig(): ExecStepConfig | undefined;
  setLinuxExecStepConfig(value?: ExecStepConfig): void;
  hasLinuxExecStepConfig(): boolean;
  clearLinuxExecStepConfig(): void;

  getWindowsExecStepConfig(): ExecStepConfig | undefined;
  setWindowsExecStepConfig(value?: ExecStepConfig): void;
  hasWindowsExecStepConfig(): boolean;
  clearWindowsExecStepConfig(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecStep.AsObject;
  static toObject(includeInstance: boolean, msg: ExecStep): ExecStep.AsObject;
  static serializeBinaryToWriter(message: ExecStep, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecStep;
  static deserializeBinaryFromReader(message: ExecStep, reader: jspb.BinaryReader): ExecStep;
}

export namespace ExecStep {
  export type AsObject = {
    linuxExecStepConfig?: ExecStepConfig.AsObject,
    windowsExecStepConfig?: ExecStepConfig.AsObject,
  }
}

export class ExecStepConfig extends jspb.Message {
  getLocalPath(): string;
  setLocalPath(value: string): void;

  getGcsObject(): GcsObject | undefined;
  setGcsObject(value?: GcsObject): void;
  hasGcsObject(): boolean;
  clearGcsObject(): void;

  getAllowedSuccessCodesList(): Array<number>;
  setAllowedSuccessCodesList(value: Array<number>): void;
  clearAllowedSuccessCodesList(): void;
  addAllowedSuccessCodes(value: number, index?: number): void;

  getInterpreter(): ExecStepConfig.Interpreter;
  setInterpreter(value: ExecStepConfig.Interpreter): void;

  getExecutableCase(): ExecStepConfig.ExecutableCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecStepConfig.AsObject;
  static toObject(includeInstance: boolean, msg: ExecStepConfig): ExecStepConfig.AsObject;
  static serializeBinaryToWriter(message: ExecStepConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecStepConfig;
  static deserializeBinaryFromReader(message: ExecStepConfig, reader: jspb.BinaryReader): ExecStepConfig;
}

export namespace ExecStepConfig {
  export type AsObject = {
    localPath: string,
    gcsObject?: GcsObject.AsObject,
    allowedSuccessCodesList: Array<number>,
    interpreter: ExecStepConfig.Interpreter,
  }

  export enum Interpreter { 
    INTERPRETER_UNSPECIFIED = 0,
    SHELL = 1,
    POWERSHELL = 2,
  }

  export enum ExecutableCase { 
    EXECUTABLE_NOT_SET = 0,
    LOCAL_PATH = 1,
    GCS_OBJECT = 2,
  }
}

export class GcsObject extends jspb.Message {
  getBucket(): string;
  setBucket(value: string): void;

  getObject(): string;
  setObject(value: string): void;

  getGenerationNumber(): number;
  setGenerationNumber(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GcsObject.AsObject;
  static toObject(includeInstance: boolean, msg: GcsObject): GcsObject.AsObject;
  static serializeBinaryToWriter(message: GcsObject, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GcsObject;
  static deserializeBinaryFromReader(message: GcsObject, reader: jspb.BinaryReader): GcsObject;
}

export namespace GcsObject {
  export type AsObject = {
    bucket: string,
    object: string,
    generationNumber: number,
  }
}

