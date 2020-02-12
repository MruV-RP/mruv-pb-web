import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_cloud_bigquery_datatransfer_v1_datatransfer_pb from '../../../../../google/cloud/bigquery/datatransfer/v1/datatransfer_pb';
import * as google_cloud_bigquery_datatransfer_v1_transfer_pb from '../../../../../google/cloud/bigquery/datatransfer/v1/transfer_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_api_client_pb from '../../../../../google/api/client_pb';

export class ImportedDataInfo extends jspb.Message {
  getSql(): string;
  setSql(value: string): void;

  getDestinationTableId(): string;
  setDestinationTableId(value: string): void;

  getDestinationTableDescription(): string;
  setDestinationTableDescription(value: string): void;

  getTableDefsList(): Array<ImportedDataInfo.TableDefinition>;
  setTableDefsList(value: Array<ImportedDataInfo.TableDefinition>): void;
  clearTableDefsList(): void;
  addTableDefs(value?: ImportedDataInfo.TableDefinition, index?: number): ImportedDataInfo.TableDefinition;

  getUserDefinedFunctionsList(): Array<string>;
  setUserDefinedFunctionsList(value: Array<string>): void;
  clearUserDefinedFunctionsList(): void;
  addUserDefinedFunctions(value: string, index?: number): void;

  getWriteDisposition(): WriteDisposition;
  setWriteDisposition(value: WriteDisposition): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImportedDataInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ImportedDataInfo): ImportedDataInfo.AsObject;
  static serializeBinaryToWriter(message: ImportedDataInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImportedDataInfo;
  static deserializeBinaryFromReader(message: ImportedDataInfo, reader: jspb.BinaryReader): ImportedDataInfo;
}

export namespace ImportedDataInfo {
  export type AsObject = {
    sql: string,
    destinationTableId: string,
    destinationTableDescription: string,
    tableDefsList: Array<ImportedDataInfo.TableDefinition.AsObject>,
    userDefinedFunctionsList: Array<string>,
    writeDisposition: WriteDisposition,
  }

  export class FieldSchema extends jspb.Message {
    getFieldName(): string;
    setFieldName(value: string): void;

    getType(): ImportedDataInfo.FieldSchema.Type;
    setType(value: ImportedDataInfo.FieldSchema.Type): void;

    getIsRepeated(): boolean;
    setIsRepeated(value: boolean): void;

    getDescription(): string;
    setDescription(value: string): void;

    getSchema(): ImportedDataInfo.RecordSchema | undefined;
    setSchema(value?: ImportedDataInfo.RecordSchema): void;
    hasSchema(): boolean;
    clearSchema(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FieldSchema.AsObject;
    static toObject(includeInstance: boolean, msg: FieldSchema): FieldSchema.AsObject;
    static serializeBinaryToWriter(message: FieldSchema, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FieldSchema;
    static deserializeBinaryFromReader(message: FieldSchema, reader: jspb.BinaryReader): FieldSchema;
  }

  export namespace FieldSchema {
    export type AsObject = {
      fieldName: string,
      type: ImportedDataInfo.FieldSchema.Type,
      isRepeated: boolean,
      description: string,
      schema?: ImportedDataInfo.RecordSchema.AsObject,
    }

    export enum Type { 
      TYPE_UNSPECIFIED = 0,
      STRING = 1,
      INTEGER = 2,
      FLOAT = 3,
      RECORD = 4,
      BYTES = 5,
      BOOLEAN = 6,
      TIMESTAMP = 7,
      DATE = 8,
      TIME = 9,
      DATETIME = 10,
      NUMERIC = 11,
      GEOGRAPHY = 12,
    }
  }


  export class RecordSchema extends jspb.Message {
    getFieldsList(): Array<ImportedDataInfo.FieldSchema>;
    setFieldsList(value: Array<ImportedDataInfo.FieldSchema>): void;
    clearFieldsList(): void;
    addFields(value?: ImportedDataInfo.FieldSchema, index?: number): ImportedDataInfo.FieldSchema;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RecordSchema.AsObject;
    static toObject(includeInstance: boolean, msg: RecordSchema): RecordSchema.AsObject;
    static serializeBinaryToWriter(message: RecordSchema, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RecordSchema;
    static deserializeBinaryFromReader(message: RecordSchema, reader: jspb.BinaryReader): RecordSchema;
  }

  export namespace RecordSchema {
    export type AsObject = {
      fieldsList: Array<ImportedDataInfo.FieldSchema.AsObject>,
    }
  }


  export class TableDefinition extends jspb.Message {
    getTableId(): string;
    setTableId(value: string): void;

    getSourceUrisList(): Array<string>;
    setSourceUrisList(value: Array<string>): void;
    clearSourceUrisList(): void;
    addSourceUris(value: string, index?: number): void;

    getFormat(): ImportedDataInfo.Format;
    setFormat(value: ImportedDataInfo.Format): void;

    getMaxBadRecords(): number;
    setMaxBadRecords(value: number): void;

    getEncoding(): ImportedDataInfo.Encoding;
    setEncoding(value: ImportedDataInfo.Encoding): void;

    getCsvOptions(): ImportedDataInfo.TableDefinition.CsvOptions | undefined;
    setCsvOptions(value?: ImportedDataInfo.TableDefinition.CsvOptions): void;
    hasCsvOptions(): boolean;
    clearCsvOptions(): void;

    getSchema(): ImportedDataInfo.RecordSchema | undefined;
    setSchema(value?: ImportedDataInfo.RecordSchema): void;
    hasSchema(): boolean;
    clearSchema(): void;

    getIgnoreUnknownValues(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setIgnoreUnknownValues(value?: google_protobuf_wrappers_pb.BoolValue): void;
    hasIgnoreUnknownValues(): boolean;
    clearIgnoreUnknownValues(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TableDefinition.AsObject;
    static toObject(includeInstance: boolean, msg: TableDefinition): TableDefinition.AsObject;
    static serializeBinaryToWriter(message: TableDefinition, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TableDefinition;
    static deserializeBinaryFromReader(message: TableDefinition, reader: jspb.BinaryReader): TableDefinition;
  }

  export namespace TableDefinition {
    export type AsObject = {
      tableId: string,
      sourceUrisList: Array<string>,
      format: ImportedDataInfo.Format,
      maxBadRecords: number,
      encoding: ImportedDataInfo.Encoding,
      csvOptions?: ImportedDataInfo.TableDefinition.CsvOptions.AsObject,
      schema?: ImportedDataInfo.RecordSchema.AsObject,
      ignoreUnknownValues?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    }

    export class CsvOptions extends jspb.Message {
      getFieldDelimiter(): google_protobuf_wrappers_pb.StringValue | undefined;
      setFieldDelimiter(value?: google_protobuf_wrappers_pb.StringValue): void;
      hasFieldDelimiter(): boolean;
      clearFieldDelimiter(): void;

      getAllowQuotedNewlines(): google_protobuf_wrappers_pb.BoolValue | undefined;
      setAllowQuotedNewlines(value?: google_protobuf_wrappers_pb.BoolValue): void;
      hasAllowQuotedNewlines(): boolean;
      clearAllowQuotedNewlines(): void;

      getQuoteChar(): google_protobuf_wrappers_pb.StringValue | undefined;
      setQuoteChar(value?: google_protobuf_wrappers_pb.StringValue): void;
      hasQuoteChar(): boolean;
      clearQuoteChar(): void;

      getSkipLeadingRows(): google_protobuf_wrappers_pb.Int64Value | undefined;
      setSkipLeadingRows(value?: google_protobuf_wrappers_pb.Int64Value): void;
      hasSkipLeadingRows(): boolean;
      clearSkipLeadingRows(): void;

      getAllowJaggedRows(): google_protobuf_wrappers_pb.BoolValue | undefined;
      setAllowJaggedRows(value?: google_protobuf_wrappers_pb.BoolValue): void;
      hasAllowJaggedRows(): boolean;
      clearAllowJaggedRows(): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): CsvOptions.AsObject;
      static toObject(includeInstance: boolean, msg: CsvOptions): CsvOptions.AsObject;
      static serializeBinaryToWriter(message: CsvOptions, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): CsvOptions;
      static deserializeBinaryFromReader(message: CsvOptions, reader: jspb.BinaryReader): CsvOptions;
    }

    export namespace CsvOptions {
      export type AsObject = {
        fieldDelimiter?: google_protobuf_wrappers_pb.StringValue.AsObject,
        allowQuotedNewlines?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        quoteChar?: google_protobuf_wrappers_pb.StringValue.AsObject,
        skipLeadingRows?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        allowJaggedRows?: google_protobuf_wrappers_pb.BoolValue.AsObject,
      }
    }

  }


  export enum Format { 
    FORMAT_UNSPECIFIED = 0,
    CSV = 1,
    JSON = 2,
    AVRO = 3,
    RECORDIO = 4,
    COLUMNIO = 5,
    CAPACITOR = 6,
    PARQUET = 7,
    ORC = 8,
  }

  export enum Encoding { 
    ENCODING_UNSPECIFIED = 0,
    ISO_8859_1 = 1,
    UTF8 = 2,
  }
}

export class UpdateTransferRunRequest extends jspb.Message {
  getTransferRun(): google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferRun | undefined;
  setTransferRun(value?: google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferRun): void;
  hasTransferRun(): boolean;
  clearTransferRun(): void;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTransferRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTransferRunRequest): UpdateTransferRunRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateTransferRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTransferRunRequest;
  static deserializeBinaryFromReader(message: UpdateTransferRunRequest, reader: jspb.BinaryReader): UpdateTransferRunRequest;
}

export namespace UpdateTransferRunRequest {
  export type AsObject = {
    transferRun?: google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferRun.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class LogTransferRunMessagesRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getTransferMessagesList(): Array<google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferMessage>;
  setTransferMessagesList(value: Array<google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferMessage>): void;
  clearTransferMessagesList(): void;
  addTransferMessages(value?: google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferMessage, index?: number): google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogTransferRunMessagesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LogTransferRunMessagesRequest): LogTransferRunMessagesRequest.AsObject;
  static serializeBinaryToWriter(message: LogTransferRunMessagesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogTransferRunMessagesRequest;
  static deserializeBinaryFromReader(message: LogTransferRunMessagesRequest, reader: jspb.BinaryReader): LogTransferRunMessagesRequest;
}

export namespace LogTransferRunMessagesRequest {
  export type AsObject = {
    name: string,
    transferMessagesList: Array<google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferMessage.AsObject>,
  }
}

export class StartBigQueryJobsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getImportedDataList(): Array<ImportedDataInfo>;
  setImportedDataList(value: Array<ImportedDataInfo>): void;
  clearImportedDataList(): void;
  addImportedData(value?: ImportedDataInfo, index?: number): ImportedDataInfo;

  getUserCredentials(): Uint8Array | string;
  getUserCredentials_asU8(): Uint8Array;
  getUserCredentials_asB64(): string;
  setUserCredentials(value: Uint8Array | string): void;

  getMaxParallelism(): number;
  setMaxParallelism(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartBigQueryJobsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StartBigQueryJobsRequest): StartBigQueryJobsRequest.AsObject;
  static serializeBinaryToWriter(message: StartBigQueryJobsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartBigQueryJobsRequest;
  static deserializeBinaryFromReader(message: StartBigQueryJobsRequest, reader: jspb.BinaryReader): StartBigQueryJobsRequest;
}

export namespace StartBigQueryJobsRequest {
  export type AsObject = {
    name: string,
    importedDataList: Array<ImportedDataInfo.AsObject>,
    userCredentials: Uint8Array | string,
    maxParallelism: number,
  }
}

export class FinishRunRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FinishRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FinishRunRequest): FinishRunRequest.AsObject;
  static serializeBinaryToWriter(message: FinishRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FinishRunRequest;
  static deserializeBinaryFromReader(message: FinishRunRequest, reader: jspb.BinaryReader): FinishRunRequest;
}

export namespace FinishRunRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreateDataSourceDefinitionRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getDataSourceDefinition(): DataSourceDefinition | undefined;
  setDataSourceDefinition(value?: DataSourceDefinition): void;
  hasDataSourceDefinition(): boolean;
  clearDataSourceDefinition(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDataSourceDefinitionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDataSourceDefinitionRequest): CreateDataSourceDefinitionRequest.AsObject;
  static serializeBinaryToWriter(message: CreateDataSourceDefinitionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDataSourceDefinitionRequest;
  static deserializeBinaryFromReader(message: CreateDataSourceDefinitionRequest, reader: jspb.BinaryReader): CreateDataSourceDefinitionRequest;
}

export namespace CreateDataSourceDefinitionRequest {
  export type AsObject = {
    parent: string,
    dataSourceDefinition?: DataSourceDefinition.AsObject,
  }
}

export class UpdateDataSourceDefinitionRequest extends jspb.Message {
  getDataSourceDefinition(): DataSourceDefinition | undefined;
  setDataSourceDefinition(value?: DataSourceDefinition): void;
  hasDataSourceDefinition(): boolean;
  clearDataSourceDefinition(): void;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDataSourceDefinitionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDataSourceDefinitionRequest): UpdateDataSourceDefinitionRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateDataSourceDefinitionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDataSourceDefinitionRequest;
  static deserializeBinaryFromReader(message: UpdateDataSourceDefinitionRequest, reader: jspb.BinaryReader): UpdateDataSourceDefinitionRequest;
}

export namespace UpdateDataSourceDefinitionRequest {
  export type AsObject = {
    dataSourceDefinition?: DataSourceDefinition.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class DeleteDataSourceDefinitionRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDataSourceDefinitionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDataSourceDefinitionRequest): DeleteDataSourceDefinitionRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteDataSourceDefinitionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDataSourceDefinitionRequest;
  static deserializeBinaryFromReader(message: DeleteDataSourceDefinitionRequest, reader: jspb.BinaryReader): DeleteDataSourceDefinitionRequest;
}

export namespace DeleteDataSourceDefinitionRequest {
  export type AsObject = {
    name: string,
  }
}

export class GetDataSourceDefinitionRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDataSourceDefinitionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDataSourceDefinitionRequest): GetDataSourceDefinitionRequest.AsObject;
  static serializeBinaryToWriter(message: GetDataSourceDefinitionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDataSourceDefinitionRequest;
  static deserializeBinaryFromReader(message: GetDataSourceDefinitionRequest, reader: jspb.BinaryReader): GetDataSourceDefinitionRequest;
}

export namespace GetDataSourceDefinitionRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListDataSourceDefinitionsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDataSourceDefinitionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDataSourceDefinitionsRequest): ListDataSourceDefinitionsRequest.AsObject;
  static serializeBinaryToWriter(message: ListDataSourceDefinitionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDataSourceDefinitionsRequest;
  static deserializeBinaryFromReader(message: ListDataSourceDefinitionsRequest, reader: jspb.BinaryReader): ListDataSourceDefinitionsRequest;
}

export namespace ListDataSourceDefinitionsRequest {
  export type AsObject = {
    parent: string,
    pageToken: string,
    pageSize: number,
  }
}

export class ListDataSourceDefinitionsResponse extends jspb.Message {
  getDataSourceDefinitionsList(): Array<DataSourceDefinition>;
  setDataSourceDefinitionsList(value: Array<DataSourceDefinition>): void;
  clearDataSourceDefinitionsList(): void;
  addDataSourceDefinitions(value?: DataSourceDefinition, index?: number): DataSourceDefinition;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDataSourceDefinitionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListDataSourceDefinitionsResponse): ListDataSourceDefinitionsResponse.AsObject;
  static serializeBinaryToWriter(message: ListDataSourceDefinitionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDataSourceDefinitionsResponse;
  static deserializeBinaryFromReader(message: ListDataSourceDefinitionsResponse, reader: jspb.BinaryReader): ListDataSourceDefinitionsResponse;
}

export namespace ListDataSourceDefinitionsResponse {
  export type AsObject = {
    dataSourceDefinitionsList: Array<DataSourceDefinition.AsObject>,
    nextPageToken: string,
  }
}

export class DataSourceDefinition extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDataSource(): google_cloud_bigquery_datatransfer_v1_datatransfer_pb.DataSource | undefined;
  setDataSource(value?: google_cloud_bigquery_datatransfer_v1_datatransfer_pb.DataSource): void;
  hasDataSource(): boolean;
  clearDataSource(): void;

  getTransferRunPubsubTopic(): string;
  setTransferRunPubsubTopic(value: string): void;

  getRunTimeOffset(): google_protobuf_duration_pb.Duration | undefined;
  setRunTimeOffset(value?: google_protobuf_duration_pb.Duration): void;
  hasRunTimeOffset(): boolean;
  clearRunTimeOffset(): void;

  getSupportEmail(): string;
  setSupportEmail(value: string): void;

  getServiceAccount(): string;
  setServiceAccount(value: string): void;

  getDisabled(): boolean;
  setDisabled(value: boolean): void;

  getTransferConfigPubsubTopic(): string;
  setTransferConfigPubsubTopic(value: string): void;

  getSupportedLocationIdsList(): Array<string>;
  setSupportedLocationIdsList(value: Array<string>): void;
  clearSupportedLocationIdsList(): void;
  addSupportedLocationIds(value: string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataSourceDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: DataSourceDefinition): DataSourceDefinition.AsObject;
  static serializeBinaryToWriter(message: DataSourceDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataSourceDefinition;
  static deserializeBinaryFromReader(message: DataSourceDefinition, reader: jspb.BinaryReader): DataSourceDefinition;
}

export namespace DataSourceDefinition {
  export type AsObject = {
    name: string,
    dataSource?: google_cloud_bigquery_datatransfer_v1_datatransfer_pb.DataSource.AsObject,
    transferRunPubsubTopic: string,
    runTimeOffset?: google_protobuf_duration_pb.Duration.AsObject,
    supportEmail: string,
    serviceAccount: string,
    disabled: boolean,
    transferConfigPubsubTopic: string,
    supportedLocationIdsList: Array<string>,
  }
}

export enum WriteDisposition { 
  WRITE_DISPOSITION_UNSPECIFIED = 0,
  WRITE_TRUNCATE = 1,
  WRITE_APPEND = 2,
}
