import * as jspb from "google-protobuf"

import * as google_cloud_automl_v1beta1_io_pb from '../../../../google/cloud/automl/v1beta1/io_pb';
import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';

export class TableSpec extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getTimeColumnSpecId(): string;
  setTimeColumnSpecId(value: string): void;

  getRowCount(): number;
  setRowCount(value: number): void;

  getValidRowCount(): number;
  setValidRowCount(value: number): void;

  getColumnCount(): number;
  setColumnCount(value: number): void;

  getInputConfigsList(): Array<google_cloud_automl_v1beta1_io_pb.InputConfig>;
  setInputConfigsList(value: Array<google_cloud_automl_v1beta1_io_pb.InputConfig>): void;
  clearInputConfigsList(): void;
  addInputConfigs(value?: google_cloud_automl_v1beta1_io_pb.InputConfig, index?: number): google_cloud_automl_v1beta1_io_pb.InputConfig;

  getEtag(): string;
  setEtag(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TableSpec.AsObject;
  static toObject(includeInstance: boolean, msg: TableSpec): TableSpec.AsObject;
  static serializeBinaryToWriter(message: TableSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TableSpec;
  static deserializeBinaryFromReader(message: TableSpec, reader: jspb.BinaryReader): TableSpec;
}

export namespace TableSpec {
  export type AsObject = {
    name: string,
    timeColumnSpecId: string,
    rowCount: number,
    validRowCount: number,
    columnCount: number,
    inputConfigsList: Array<google_cloud_automl_v1beta1_io_pb.InputConfig.AsObject>,
    etag: string,
  }
}

