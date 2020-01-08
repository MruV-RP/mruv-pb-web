import * as jspb from "google-protobuf"

import * as google_api_resource_pb from '../../../../google/api/resource_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class InfoType extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InfoType.AsObject;
  static toObject(includeInstance: boolean, msg: InfoType): InfoType.AsObject;
  static serializeBinaryToWriter(message: InfoType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InfoType;
  static deserializeBinaryFromReader(message: InfoType, reader: jspb.BinaryReader): InfoType;
}

export namespace InfoType {
  export type AsObject = {
    name: string,
  }
}

export class StoredType extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreateTime(): boolean;
  clearCreateTime(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StoredType.AsObject;
  static toObject(includeInstance: boolean, msg: StoredType): StoredType.AsObject;
  static serializeBinaryToWriter(message: StoredType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StoredType;
  static deserializeBinaryFromReader(message: StoredType, reader: jspb.BinaryReader): StoredType;
}

export namespace StoredType {
  export type AsObject = {
    name: string,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class CustomInfoType extends jspb.Message {
  getInfoType(): InfoType | undefined;
  setInfoType(value?: InfoType): void;
  hasInfoType(): boolean;
  clearInfoType(): void;

  getLikelihood(): Likelihood;
  setLikelihood(value: Likelihood): void;

  getDictionary(): CustomInfoType.Dictionary | undefined;
  setDictionary(value?: CustomInfoType.Dictionary): void;
  hasDictionary(): boolean;
  clearDictionary(): void;

  getRegex(): CustomInfoType.Regex | undefined;
  setRegex(value?: CustomInfoType.Regex): void;
  hasRegex(): boolean;
  clearRegex(): void;

  getSurrogateType(): CustomInfoType.SurrogateType | undefined;
  setSurrogateType(value?: CustomInfoType.SurrogateType): void;
  hasSurrogateType(): boolean;
  clearSurrogateType(): void;

  getStoredType(): StoredType | undefined;
  setStoredType(value?: StoredType): void;
  hasStoredType(): boolean;
  clearStoredType(): void;

  getDetectionRulesList(): Array<CustomInfoType.DetectionRule>;
  setDetectionRulesList(value: Array<CustomInfoType.DetectionRule>): void;
  clearDetectionRulesList(): void;
  addDetectionRules(value?: CustomInfoType.DetectionRule, index?: number): CustomInfoType.DetectionRule;

  getExclusionType(): CustomInfoType.ExclusionType;
  setExclusionType(value: CustomInfoType.ExclusionType): void;

  getTypeCase(): CustomInfoType.TypeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomInfoType.AsObject;
  static toObject(includeInstance: boolean, msg: CustomInfoType): CustomInfoType.AsObject;
  static serializeBinaryToWriter(message: CustomInfoType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomInfoType;
  static deserializeBinaryFromReader(message: CustomInfoType, reader: jspb.BinaryReader): CustomInfoType;
}

export namespace CustomInfoType {
  export type AsObject = {
    infoType?: InfoType.AsObject,
    likelihood: Likelihood,
    dictionary?: CustomInfoType.Dictionary.AsObject,
    regex?: CustomInfoType.Regex.AsObject,
    surrogateType?: CustomInfoType.SurrogateType.AsObject,
    storedType?: StoredType.AsObject,
    detectionRulesList: Array<CustomInfoType.DetectionRule.AsObject>,
    exclusionType: CustomInfoType.ExclusionType,
  }

  export class Dictionary extends jspb.Message {
    getWordList(): CustomInfoType.Dictionary.WordList | undefined;
    setWordList(value?: CustomInfoType.Dictionary.WordList): void;
    hasWordList(): boolean;
    clearWordList(): void;

    getCloudStoragePath(): CloudStoragePath | undefined;
    setCloudStoragePath(value?: CloudStoragePath): void;
    hasCloudStoragePath(): boolean;
    clearCloudStoragePath(): void;

    getSourceCase(): Dictionary.SourceCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Dictionary.AsObject;
    static toObject(includeInstance: boolean, msg: Dictionary): Dictionary.AsObject;
    static serializeBinaryToWriter(message: Dictionary, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Dictionary;
    static deserializeBinaryFromReader(message: Dictionary, reader: jspb.BinaryReader): Dictionary;
  }

  export namespace Dictionary {
    export type AsObject = {
      wordList?: CustomInfoType.Dictionary.WordList.AsObject,
      cloudStoragePath?: CloudStoragePath.AsObject,
    }

    export class WordList extends jspb.Message {
      getWordsList(): Array<string>;
      setWordsList(value: Array<string>): void;
      clearWordsList(): void;
      addWords(value: string, index?: number): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): WordList.AsObject;
      static toObject(includeInstance: boolean, msg: WordList): WordList.AsObject;
      static serializeBinaryToWriter(message: WordList, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): WordList;
      static deserializeBinaryFromReader(message: WordList, reader: jspb.BinaryReader): WordList;
    }

    export namespace WordList {
      export type AsObject = {
        wordsList: Array<string>,
      }
    }


    export enum SourceCase { 
      SOURCE_NOT_SET = 0,
      WORD_LIST = 1,
      CLOUD_STORAGE_PATH = 3,
    }
  }


  export class Regex extends jspb.Message {
    getPattern(): string;
    setPattern(value: string): void;

    getGroupIndexesList(): Array<number>;
    setGroupIndexesList(value: Array<number>): void;
    clearGroupIndexesList(): void;
    addGroupIndexes(value: number, index?: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Regex.AsObject;
    static toObject(includeInstance: boolean, msg: Regex): Regex.AsObject;
    static serializeBinaryToWriter(message: Regex, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Regex;
    static deserializeBinaryFromReader(message: Regex, reader: jspb.BinaryReader): Regex;
  }

  export namespace Regex {
    export type AsObject = {
      pattern: string,
      groupIndexesList: Array<number>,
    }
  }


  export class SurrogateType extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SurrogateType.AsObject;
    static toObject(includeInstance: boolean, msg: SurrogateType): SurrogateType.AsObject;
    static serializeBinaryToWriter(message: SurrogateType, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SurrogateType;
    static deserializeBinaryFromReader(message: SurrogateType, reader: jspb.BinaryReader): SurrogateType;
  }

  export namespace SurrogateType {
    export type AsObject = {
    }
  }


  export class DetectionRule extends jspb.Message {
    getHotwordRule(): CustomInfoType.DetectionRule.HotwordRule | undefined;
    setHotwordRule(value?: CustomInfoType.DetectionRule.HotwordRule): void;
    hasHotwordRule(): boolean;
    clearHotwordRule(): void;

    getTypeCase(): DetectionRule.TypeCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DetectionRule.AsObject;
    static toObject(includeInstance: boolean, msg: DetectionRule): DetectionRule.AsObject;
    static serializeBinaryToWriter(message: DetectionRule, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DetectionRule;
    static deserializeBinaryFromReader(message: DetectionRule, reader: jspb.BinaryReader): DetectionRule;
  }

  export namespace DetectionRule {
    export type AsObject = {
      hotwordRule?: CustomInfoType.DetectionRule.HotwordRule.AsObject,
    }

    export class Proximity extends jspb.Message {
      getWindowBefore(): number;
      setWindowBefore(value: number): void;

      getWindowAfter(): number;
      setWindowAfter(value: number): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Proximity.AsObject;
      static toObject(includeInstance: boolean, msg: Proximity): Proximity.AsObject;
      static serializeBinaryToWriter(message: Proximity, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Proximity;
      static deserializeBinaryFromReader(message: Proximity, reader: jspb.BinaryReader): Proximity;
    }

    export namespace Proximity {
      export type AsObject = {
        windowBefore: number,
        windowAfter: number,
      }
    }


    export class LikelihoodAdjustment extends jspb.Message {
      getFixedLikelihood(): Likelihood;
      setFixedLikelihood(value: Likelihood): void;

      getRelativeLikelihood(): number;
      setRelativeLikelihood(value: number): void;

      getAdjustmentCase(): LikelihoodAdjustment.AdjustmentCase;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): LikelihoodAdjustment.AsObject;
      static toObject(includeInstance: boolean, msg: LikelihoodAdjustment): LikelihoodAdjustment.AsObject;
      static serializeBinaryToWriter(message: LikelihoodAdjustment, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): LikelihoodAdjustment;
      static deserializeBinaryFromReader(message: LikelihoodAdjustment, reader: jspb.BinaryReader): LikelihoodAdjustment;
    }

    export namespace LikelihoodAdjustment {
      export type AsObject = {
        fixedLikelihood: Likelihood,
        relativeLikelihood: number,
      }

      export enum AdjustmentCase { 
        ADJUSTMENT_NOT_SET = 0,
        FIXED_LIKELIHOOD = 1,
        RELATIVE_LIKELIHOOD = 2,
      }
    }


    export class HotwordRule extends jspb.Message {
      getHotwordRegex(): CustomInfoType.Regex | undefined;
      setHotwordRegex(value?: CustomInfoType.Regex): void;
      hasHotwordRegex(): boolean;
      clearHotwordRegex(): void;

      getProximity(): CustomInfoType.DetectionRule.Proximity | undefined;
      setProximity(value?: CustomInfoType.DetectionRule.Proximity): void;
      hasProximity(): boolean;
      clearProximity(): void;

      getLikelihoodAdjustment(): CustomInfoType.DetectionRule.LikelihoodAdjustment | undefined;
      setLikelihoodAdjustment(value?: CustomInfoType.DetectionRule.LikelihoodAdjustment): void;
      hasLikelihoodAdjustment(): boolean;
      clearLikelihoodAdjustment(): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): HotwordRule.AsObject;
      static toObject(includeInstance: boolean, msg: HotwordRule): HotwordRule.AsObject;
      static serializeBinaryToWriter(message: HotwordRule, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): HotwordRule;
      static deserializeBinaryFromReader(message: HotwordRule, reader: jspb.BinaryReader): HotwordRule;
    }

    export namespace HotwordRule {
      export type AsObject = {
        hotwordRegex?: CustomInfoType.Regex.AsObject,
        proximity?: CustomInfoType.DetectionRule.Proximity.AsObject,
        likelihoodAdjustment?: CustomInfoType.DetectionRule.LikelihoodAdjustment.AsObject,
      }
    }


    export enum TypeCase { 
      TYPE_NOT_SET = 0,
      HOTWORD_RULE = 1,
    }
  }


  export enum ExclusionType { 
    EXCLUSION_TYPE_UNSPECIFIED = 0,
    EXCLUSION_TYPE_EXCLUDE = 1,
  }

  export enum TypeCase { 
    TYPE_NOT_SET = 0,
    DICTIONARY = 2,
    REGEX = 3,
    SURROGATE_TYPE = 4,
    STORED_TYPE = 5,
  }
}

export class FieldId extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FieldId.AsObject;
  static toObject(includeInstance: boolean, msg: FieldId): FieldId.AsObject;
  static serializeBinaryToWriter(message: FieldId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FieldId;
  static deserializeBinaryFromReader(message: FieldId, reader: jspb.BinaryReader): FieldId;
}

export namespace FieldId {
  export type AsObject = {
    name: string,
  }
}

export class PartitionId extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getNamespaceId(): string;
  setNamespaceId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PartitionId.AsObject;
  static toObject(includeInstance: boolean, msg: PartitionId): PartitionId.AsObject;
  static serializeBinaryToWriter(message: PartitionId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PartitionId;
  static deserializeBinaryFromReader(message: PartitionId, reader: jspb.BinaryReader): PartitionId;
}

export namespace PartitionId {
  export type AsObject = {
    projectId: string,
    namespaceId: string,
  }
}

export class KindExpression extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KindExpression.AsObject;
  static toObject(includeInstance: boolean, msg: KindExpression): KindExpression.AsObject;
  static serializeBinaryToWriter(message: KindExpression, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KindExpression;
  static deserializeBinaryFromReader(message: KindExpression, reader: jspb.BinaryReader): KindExpression;
}

export namespace KindExpression {
  export type AsObject = {
    name: string,
  }
}

export class DatastoreOptions extends jspb.Message {
  getPartitionId(): PartitionId | undefined;
  setPartitionId(value?: PartitionId): void;
  hasPartitionId(): boolean;
  clearPartitionId(): void;

  getKind(): KindExpression | undefined;
  setKind(value?: KindExpression): void;
  hasKind(): boolean;
  clearKind(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DatastoreOptions.AsObject;
  static toObject(includeInstance: boolean, msg: DatastoreOptions): DatastoreOptions.AsObject;
  static serializeBinaryToWriter(message: DatastoreOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DatastoreOptions;
  static deserializeBinaryFromReader(message: DatastoreOptions, reader: jspb.BinaryReader): DatastoreOptions;
}

export namespace DatastoreOptions {
  export type AsObject = {
    partitionId?: PartitionId.AsObject,
    kind?: KindExpression.AsObject,
  }
}

export class CloudStorageRegexFileSet extends jspb.Message {
  getBucketName(): string;
  setBucketName(value: string): void;

  getIncludeRegexList(): Array<string>;
  setIncludeRegexList(value: Array<string>): void;
  clearIncludeRegexList(): void;
  addIncludeRegex(value: string, index?: number): void;

  getExcludeRegexList(): Array<string>;
  setExcludeRegexList(value: Array<string>): void;
  clearExcludeRegexList(): void;
  addExcludeRegex(value: string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloudStorageRegexFileSet.AsObject;
  static toObject(includeInstance: boolean, msg: CloudStorageRegexFileSet): CloudStorageRegexFileSet.AsObject;
  static serializeBinaryToWriter(message: CloudStorageRegexFileSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloudStorageRegexFileSet;
  static deserializeBinaryFromReader(message: CloudStorageRegexFileSet, reader: jspb.BinaryReader): CloudStorageRegexFileSet;
}

export namespace CloudStorageRegexFileSet {
  export type AsObject = {
    bucketName: string,
    includeRegexList: Array<string>,
    excludeRegexList: Array<string>,
  }
}

export class CloudStorageOptions extends jspb.Message {
  getFileSet(): CloudStorageOptions.FileSet | undefined;
  setFileSet(value?: CloudStorageOptions.FileSet): void;
  hasFileSet(): boolean;
  clearFileSet(): void;

  getBytesLimitPerFile(): number;
  setBytesLimitPerFile(value: number): void;

  getBytesLimitPerFilePercent(): number;
  setBytesLimitPerFilePercent(value: number): void;

  getFileTypesList(): Array<FileType>;
  setFileTypesList(value: Array<FileType>): void;
  clearFileTypesList(): void;
  addFileTypes(value: FileType, index?: number): void;

  getSampleMethod(): CloudStorageOptions.SampleMethod;
  setSampleMethod(value: CloudStorageOptions.SampleMethod): void;

  getFilesLimitPercent(): number;
  setFilesLimitPercent(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloudStorageOptions.AsObject;
  static toObject(includeInstance: boolean, msg: CloudStorageOptions): CloudStorageOptions.AsObject;
  static serializeBinaryToWriter(message: CloudStorageOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloudStorageOptions;
  static deserializeBinaryFromReader(message: CloudStorageOptions, reader: jspb.BinaryReader): CloudStorageOptions;
}

export namespace CloudStorageOptions {
  export type AsObject = {
    fileSet?: CloudStorageOptions.FileSet.AsObject,
    bytesLimitPerFile: number,
    bytesLimitPerFilePercent: number,
    fileTypesList: Array<FileType>,
    sampleMethod: CloudStorageOptions.SampleMethod,
    filesLimitPercent: number,
  }

  export class FileSet extends jspb.Message {
    getUrl(): string;
    setUrl(value: string): void;

    getRegexFileSet(): CloudStorageRegexFileSet | undefined;
    setRegexFileSet(value?: CloudStorageRegexFileSet): void;
    hasRegexFileSet(): boolean;
    clearRegexFileSet(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FileSet.AsObject;
    static toObject(includeInstance: boolean, msg: FileSet): FileSet.AsObject;
    static serializeBinaryToWriter(message: FileSet, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FileSet;
    static deserializeBinaryFromReader(message: FileSet, reader: jspb.BinaryReader): FileSet;
  }

  export namespace FileSet {
    export type AsObject = {
      url: string,
      regexFileSet?: CloudStorageRegexFileSet.AsObject,
    }
  }


  export enum SampleMethod { 
    SAMPLE_METHOD_UNSPECIFIED = 0,
    TOP = 1,
    RANDOM_START = 2,
  }
}

export class CloudStorageFileSet extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloudStorageFileSet.AsObject;
  static toObject(includeInstance: boolean, msg: CloudStorageFileSet): CloudStorageFileSet.AsObject;
  static serializeBinaryToWriter(message: CloudStorageFileSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloudStorageFileSet;
  static deserializeBinaryFromReader(message: CloudStorageFileSet, reader: jspb.BinaryReader): CloudStorageFileSet;
}

export namespace CloudStorageFileSet {
  export type AsObject = {
    url: string,
  }
}

export class CloudStoragePath extends jspb.Message {
  getPath(): string;
  setPath(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloudStoragePath.AsObject;
  static toObject(includeInstance: boolean, msg: CloudStoragePath): CloudStoragePath.AsObject;
  static serializeBinaryToWriter(message: CloudStoragePath, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloudStoragePath;
  static deserializeBinaryFromReader(message: CloudStoragePath, reader: jspb.BinaryReader): CloudStoragePath;
}

export namespace CloudStoragePath {
  export type AsObject = {
    path: string,
  }
}

export class BigQueryOptions extends jspb.Message {
  getTableReference(): BigQueryTable | undefined;
  setTableReference(value?: BigQueryTable): void;
  hasTableReference(): boolean;
  clearTableReference(): void;

  getIdentifyingFieldsList(): Array<FieldId>;
  setIdentifyingFieldsList(value: Array<FieldId>): void;
  clearIdentifyingFieldsList(): void;
  addIdentifyingFields(value?: FieldId, index?: number): FieldId;

  getRowsLimit(): number;
  setRowsLimit(value: number): void;

  getRowsLimitPercent(): number;
  setRowsLimitPercent(value: number): void;

  getSampleMethod(): BigQueryOptions.SampleMethod;
  setSampleMethod(value: BigQueryOptions.SampleMethod): void;

  getExcludedFieldsList(): Array<FieldId>;
  setExcludedFieldsList(value: Array<FieldId>): void;
  clearExcludedFieldsList(): void;
  addExcludedFields(value?: FieldId, index?: number): FieldId;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BigQueryOptions.AsObject;
  static toObject(includeInstance: boolean, msg: BigQueryOptions): BigQueryOptions.AsObject;
  static serializeBinaryToWriter(message: BigQueryOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BigQueryOptions;
  static deserializeBinaryFromReader(message: BigQueryOptions, reader: jspb.BinaryReader): BigQueryOptions;
}

export namespace BigQueryOptions {
  export type AsObject = {
    tableReference?: BigQueryTable.AsObject,
    identifyingFieldsList: Array<FieldId.AsObject>,
    rowsLimit: number,
    rowsLimitPercent: number,
    sampleMethod: BigQueryOptions.SampleMethod,
    excludedFieldsList: Array<FieldId.AsObject>,
  }

  export enum SampleMethod { 
    SAMPLE_METHOD_UNSPECIFIED = 0,
    TOP = 1,
    RANDOM_START = 2,
  }
}

export class StorageConfig extends jspb.Message {
  getDatastoreOptions(): DatastoreOptions | undefined;
  setDatastoreOptions(value?: DatastoreOptions): void;
  hasDatastoreOptions(): boolean;
  clearDatastoreOptions(): void;

  getCloudStorageOptions(): CloudStorageOptions | undefined;
  setCloudStorageOptions(value?: CloudStorageOptions): void;
  hasCloudStorageOptions(): boolean;
  clearCloudStorageOptions(): void;

  getBigQueryOptions(): BigQueryOptions | undefined;
  setBigQueryOptions(value?: BigQueryOptions): void;
  hasBigQueryOptions(): boolean;
  clearBigQueryOptions(): void;

  getTimespanConfig(): StorageConfig.TimespanConfig | undefined;
  setTimespanConfig(value?: StorageConfig.TimespanConfig): void;
  hasTimespanConfig(): boolean;
  clearTimespanConfig(): void;

  getTypeCase(): StorageConfig.TypeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StorageConfig.AsObject;
  static toObject(includeInstance: boolean, msg: StorageConfig): StorageConfig.AsObject;
  static serializeBinaryToWriter(message: StorageConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StorageConfig;
  static deserializeBinaryFromReader(message: StorageConfig, reader: jspb.BinaryReader): StorageConfig;
}

export namespace StorageConfig {
  export type AsObject = {
    datastoreOptions?: DatastoreOptions.AsObject,
    cloudStorageOptions?: CloudStorageOptions.AsObject,
    bigQueryOptions?: BigQueryOptions.AsObject,
    timespanConfig?: StorageConfig.TimespanConfig.AsObject,
  }

  export class TimespanConfig extends jspb.Message {
    getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
    hasStartTime(): boolean;
    clearStartTime(): void;

    getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
    hasEndTime(): boolean;
    clearEndTime(): void;

    getTimestampField(): FieldId | undefined;
    setTimestampField(value?: FieldId): void;
    hasTimestampField(): boolean;
    clearTimestampField(): void;

    getEnableAutoPopulationOfTimespanConfig(): boolean;
    setEnableAutoPopulationOfTimespanConfig(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TimespanConfig.AsObject;
    static toObject(includeInstance: boolean, msg: TimespanConfig): TimespanConfig.AsObject;
    static serializeBinaryToWriter(message: TimespanConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TimespanConfig;
    static deserializeBinaryFromReader(message: TimespanConfig, reader: jspb.BinaryReader): TimespanConfig;
  }

  export namespace TimespanConfig {
    export type AsObject = {
      startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      timestampField?: FieldId.AsObject,
      enableAutoPopulationOfTimespanConfig: boolean,
    }
  }


  export enum TypeCase { 
    TYPE_NOT_SET = 0,
    DATASTORE_OPTIONS = 2,
    CLOUD_STORAGE_OPTIONS = 3,
    BIG_QUERY_OPTIONS = 4,
  }
}

export class BigQueryKey extends jspb.Message {
  getTableReference(): BigQueryTable | undefined;
  setTableReference(value?: BigQueryTable): void;
  hasTableReference(): boolean;
  clearTableReference(): void;

  getRowNumber(): number;
  setRowNumber(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BigQueryKey.AsObject;
  static toObject(includeInstance: boolean, msg: BigQueryKey): BigQueryKey.AsObject;
  static serializeBinaryToWriter(message: BigQueryKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BigQueryKey;
  static deserializeBinaryFromReader(message: BigQueryKey, reader: jspb.BinaryReader): BigQueryKey;
}

export namespace BigQueryKey {
  export type AsObject = {
    tableReference?: BigQueryTable.AsObject,
    rowNumber: number,
  }
}

export class DatastoreKey extends jspb.Message {
  getEntityKey(): Key | undefined;
  setEntityKey(value?: Key): void;
  hasEntityKey(): boolean;
  clearEntityKey(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DatastoreKey.AsObject;
  static toObject(includeInstance: boolean, msg: DatastoreKey): DatastoreKey.AsObject;
  static serializeBinaryToWriter(message: DatastoreKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DatastoreKey;
  static deserializeBinaryFromReader(message: DatastoreKey, reader: jspb.BinaryReader): DatastoreKey;
}

export namespace DatastoreKey {
  export type AsObject = {
    entityKey?: Key.AsObject,
  }
}

export class Key extends jspb.Message {
  getPartitionId(): PartitionId | undefined;
  setPartitionId(value?: PartitionId): void;
  hasPartitionId(): boolean;
  clearPartitionId(): void;

  getPathList(): Array<Key.PathElement>;
  setPathList(value: Array<Key.PathElement>): void;
  clearPathList(): void;
  addPath(value?: Key.PathElement, index?: number): Key.PathElement;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Key.AsObject;
  static toObject(includeInstance: boolean, msg: Key): Key.AsObject;
  static serializeBinaryToWriter(message: Key, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Key;
  static deserializeBinaryFromReader(message: Key, reader: jspb.BinaryReader): Key;
}

export namespace Key {
  export type AsObject = {
    partitionId?: PartitionId.AsObject,
    pathList: Array<Key.PathElement.AsObject>,
  }

  export class PathElement extends jspb.Message {
    getKind(): string;
    setKind(value: string): void;

    getId(): number;
    setId(value: number): void;

    getName(): string;
    setName(value: string): void;

    getIdTypeCase(): PathElement.IdTypeCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PathElement.AsObject;
    static toObject(includeInstance: boolean, msg: PathElement): PathElement.AsObject;
    static serializeBinaryToWriter(message: PathElement, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PathElement;
    static deserializeBinaryFromReader(message: PathElement, reader: jspb.BinaryReader): PathElement;
  }

  export namespace PathElement {
    export type AsObject = {
      kind: string,
      id: number,
      name: string,
    }

    export enum IdTypeCase { 
      ID_TYPE_NOT_SET = 0,
      ID = 2,
      NAME = 3,
    }
  }

}

export class RecordKey extends jspb.Message {
  getDatastoreKey(): DatastoreKey | undefined;
  setDatastoreKey(value?: DatastoreKey): void;
  hasDatastoreKey(): boolean;
  clearDatastoreKey(): void;

  getBigQueryKey(): BigQueryKey | undefined;
  setBigQueryKey(value?: BigQueryKey): void;
  hasBigQueryKey(): boolean;
  clearBigQueryKey(): void;

  getIdValuesList(): Array<string>;
  setIdValuesList(value: Array<string>): void;
  clearIdValuesList(): void;
  addIdValues(value: string, index?: number): void;

  getTypeCase(): RecordKey.TypeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordKey.AsObject;
  static toObject(includeInstance: boolean, msg: RecordKey): RecordKey.AsObject;
  static serializeBinaryToWriter(message: RecordKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordKey;
  static deserializeBinaryFromReader(message: RecordKey, reader: jspb.BinaryReader): RecordKey;
}

export namespace RecordKey {
  export type AsObject = {
    datastoreKey?: DatastoreKey.AsObject,
    bigQueryKey?: BigQueryKey.AsObject,
    idValuesList: Array<string>,
  }

  export enum TypeCase { 
    TYPE_NOT_SET = 0,
    DATASTORE_KEY = 2,
    BIG_QUERY_KEY = 3,
  }
}

export class BigQueryTable extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getDatasetId(): string;
  setDatasetId(value: string): void;

  getTableId(): string;
  setTableId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BigQueryTable.AsObject;
  static toObject(includeInstance: boolean, msg: BigQueryTable): BigQueryTable.AsObject;
  static serializeBinaryToWriter(message: BigQueryTable, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BigQueryTable;
  static deserializeBinaryFromReader(message: BigQueryTable, reader: jspb.BinaryReader): BigQueryTable;
}

export namespace BigQueryTable {
  export type AsObject = {
    projectId: string,
    datasetId: string,
    tableId: string,
  }
}

export class BigQueryField extends jspb.Message {
  getTable(): BigQueryTable | undefined;
  setTable(value?: BigQueryTable): void;
  hasTable(): boolean;
  clearTable(): void;

  getField(): FieldId | undefined;
  setField(value?: FieldId): void;
  hasField(): boolean;
  clearField(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BigQueryField.AsObject;
  static toObject(includeInstance: boolean, msg: BigQueryField): BigQueryField.AsObject;
  static serializeBinaryToWriter(message: BigQueryField, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BigQueryField;
  static deserializeBinaryFromReader(message: BigQueryField, reader: jspb.BinaryReader): BigQueryField;
}

export namespace BigQueryField {
  export type AsObject = {
    table?: BigQueryTable.AsObject,
    field?: FieldId.AsObject,
  }
}

export class EntityId extends jspb.Message {
  getField(): FieldId | undefined;
  setField(value?: FieldId): void;
  hasField(): boolean;
  clearField(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EntityId.AsObject;
  static toObject(includeInstance: boolean, msg: EntityId): EntityId.AsObject;
  static serializeBinaryToWriter(message: EntityId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EntityId;
  static deserializeBinaryFromReader(message: EntityId, reader: jspb.BinaryReader): EntityId;
}

export namespace EntityId {
  export type AsObject = {
    field?: FieldId.AsObject,
  }
}

export enum Likelihood { 
  LIKELIHOOD_UNSPECIFIED = 0,
  VERY_UNLIKELY = 1,
  UNLIKELY = 2,
  POSSIBLE = 3,
  LIKELY = 4,
  VERY_LIKELY = 5,
}
export enum FileType { 
  FILE_TYPE_UNSPECIFIED = 0,
  BINARY_FILE = 1,
  TEXT_FILE = 2,
  IMAGE = 3,
  AVRO = 7,
}
