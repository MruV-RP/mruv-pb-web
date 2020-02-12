import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_cloud_automl_v1beta1_geometry_pb from '../../../../google/cloud/automl/v1beta1/geometry_pb';
import * as google_cloud_automl_v1beta1_io_pb from '../../../../google/cloud/automl/v1beta1/io_pb';
import * as google_cloud_automl_v1beta1_text_segment_pb from '../../../../google/cloud/automl/v1beta1/text_segment_pb';
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';

export class Image extends jspb.Message {
  getImageBytes(): Uint8Array | string;
  getImageBytes_asU8(): Uint8Array;
  getImageBytes_asB64(): string;
  setImageBytes(value: Uint8Array | string): void;

  getInputConfig(): google_cloud_automl_v1beta1_io_pb.InputConfig | undefined;
  setInputConfig(value?: google_cloud_automl_v1beta1_io_pb.InputConfig): void;
  hasInputConfig(): boolean;
  clearInputConfig(): void;

  getThumbnailUri(): string;
  setThumbnailUri(value: string): void;

  getDataCase(): Image.DataCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Image.AsObject;
  static toObject(includeInstance: boolean, msg: Image): Image.AsObject;
  static serializeBinaryToWriter(message: Image, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Image;
  static deserializeBinaryFromReader(message: Image, reader: jspb.BinaryReader): Image;
}

export namespace Image {
  export type AsObject = {
    imageBytes: Uint8Array | string,
    inputConfig?: google_cloud_automl_v1beta1_io_pb.InputConfig.AsObject,
    thumbnailUri: string,
  }

  export enum DataCase { 
    DATA_NOT_SET = 0,
    IMAGE_BYTES = 1,
    INPUT_CONFIG = 6,
  }
}

export class TextSnippet extends jspb.Message {
  getContent(): string;
  setContent(value: string): void;

  getMimeType(): string;
  setMimeType(value: string): void;

  getContentUri(): string;
  setContentUri(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TextSnippet.AsObject;
  static toObject(includeInstance: boolean, msg: TextSnippet): TextSnippet.AsObject;
  static serializeBinaryToWriter(message: TextSnippet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TextSnippet;
  static deserializeBinaryFromReader(message: TextSnippet, reader: jspb.BinaryReader): TextSnippet;
}

export namespace TextSnippet {
  export type AsObject = {
    content: string,
    mimeType: string,
    contentUri: string,
  }
}

export class DocumentDimensions extends jspb.Message {
  getUnit(): DocumentDimensions.DocumentDimensionUnit;
  setUnit(value: DocumentDimensions.DocumentDimensionUnit): void;

  getWidth(): number;
  setWidth(value: number): void;

  getHeight(): number;
  setHeight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DocumentDimensions.AsObject;
  static toObject(includeInstance: boolean, msg: DocumentDimensions): DocumentDimensions.AsObject;
  static serializeBinaryToWriter(message: DocumentDimensions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DocumentDimensions;
  static deserializeBinaryFromReader(message: DocumentDimensions, reader: jspb.BinaryReader): DocumentDimensions;
}

export namespace DocumentDimensions {
  export type AsObject = {
    unit: DocumentDimensions.DocumentDimensionUnit,
    width: number,
    height: number,
  }

  export enum DocumentDimensionUnit { 
    DOCUMENT_DIMENSION_UNIT_UNSPECIFIED = 0,
    INCH = 1,
    CENTIMETER = 2,
    POINT = 3,
  }
}

export class Document extends jspb.Message {
  getInputConfig(): google_cloud_automl_v1beta1_io_pb.DocumentInputConfig | undefined;
  setInputConfig(value?: google_cloud_automl_v1beta1_io_pb.DocumentInputConfig): void;
  hasInputConfig(): boolean;
  clearInputConfig(): void;

  getDocumentText(): TextSnippet | undefined;
  setDocumentText(value?: TextSnippet): void;
  hasDocumentText(): boolean;
  clearDocumentText(): void;

  getLayoutList(): Array<Document.Layout>;
  setLayoutList(value: Array<Document.Layout>): void;
  clearLayoutList(): void;
  addLayout(value?: Document.Layout, index?: number): Document.Layout;

  getDocumentDimensions(): DocumentDimensions | undefined;
  setDocumentDimensions(value?: DocumentDimensions): void;
  hasDocumentDimensions(): boolean;
  clearDocumentDimensions(): void;

  getPageCount(): number;
  setPageCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Document.AsObject;
  static toObject(includeInstance: boolean, msg: Document): Document.AsObject;
  static serializeBinaryToWriter(message: Document, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Document;
  static deserializeBinaryFromReader(message: Document, reader: jspb.BinaryReader): Document;
}

export namespace Document {
  export type AsObject = {
    inputConfig?: google_cloud_automl_v1beta1_io_pb.DocumentInputConfig.AsObject,
    documentText?: TextSnippet.AsObject,
    layoutList: Array<Document.Layout.AsObject>,
    documentDimensions?: DocumentDimensions.AsObject,
    pageCount: number,
  }

  export class Layout extends jspb.Message {
    getTextSegment(): google_cloud_automl_v1beta1_text_segment_pb.TextSegment | undefined;
    setTextSegment(value?: google_cloud_automl_v1beta1_text_segment_pb.TextSegment): void;
    hasTextSegment(): boolean;
    clearTextSegment(): void;

    getPageNumber(): number;
    setPageNumber(value: number): void;

    getBoundingPoly(): google_cloud_automl_v1beta1_geometry_pb.BoundingPoly | undefined;
    setBoundingPoly(value?: google_cloud_automl_v1beta1_geometry_pb.BoundingPoly): void;
    hasBoundingPoly(): boolean;
    clearBoundingPoly(): void;

    getTextSegmentType(): Document.Layout.TextSegmentType;
    setTextSegmentType(value: Document.Layout.TextSegmentType): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Layout.AsObject;
    static toObject(includeInstance: boolean, msg: Layout): Layout.AsObject;
    static serializeBinaryToWriter(message: Layout, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Layout;
    static deserializeBinaryFromReader(message: Layout, reader: jspb.BinaryReader): Layout;
  }

  export namespace Layout {
    export type AsObject = {
      textSegment?: google_cloud_automl_v1beta1_text_segment_pb.TextSegment.AsObject,
      pageNumber: number,
      boundingPoly?: google_cloud_automl_v1beta1_geometry_pb.BoundingPoly.AsObject,
      textSegmentType: Document.Layout.TextSegmentType,
    }

    export enum TextSegmentType { 
      TEXT_SEGMENT_TYPE_UNSPECIFIED = 0,
      TOKEN = 1,
      PARAGRAPH = 2,
      FORM_FIELD = 3,
      FORM_FIELD_NAME = 4,
      FORM_FIELD_CONTENTS = 5,
      TABLE = 6,
      TABLE_HEADER = 7,
      TABLE_ROW = 8,
      TABLE_CELL = 9,
    }
  }

}

export class Row extends jspb.Message {
  getColumnSpecIdsList(): Array<string>;
  setColumnSpecIdsList(value: Array<string>): void;
  clearColumnSpecIdsList(): void;
  addColumnSpecIds(value: string, index?: number): void;

  getValuesList(): Array<google_protobuf_struct_pb.Value>;
  setValuesList(value: Array<google_protobuf_struct_pb.Value>): void;
  clearValuesList(): void;
  addValues(value?: google_protobuf_struct_pb.Value, index?: number): google_protobuf_struct_pb.Value;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Row.AsObject;
  static toObject(includeInstance: boolean, msg: Row): Row.AsObject;
  static serializeBinaryToWriter(message: Row, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Row;
  static deserializeBinaryFromReader(message: Row, reader: jspb.BinaryReader): Row;
}

export namespace Row {
  export type AsObject = {
    columnSpecIdsList: Array<string>,
    valuesList: Array<google_protobuf_struct_pb.Value.AsObject>,
  }
}

export class ExamplePayload extends jspb.Message {
  getImage(): Image | undefined;
  setImage(value?: Image): void;
  hasImage(): boolean;
  clearImage(): void;

  getTextSnippet(): TextSnippet | undefined;
  setTextSnippet(value?: TextSnippet): void;
  hasTextSnippet(): boolean;
  clearTextSnippet(): void;

  getDocument(): Document | undefined;
  setDocument(value?: Document): void;
  hasDocument(): boolean;
  clearDocument(): void;

  getRow(): Row | undefined;
  setRow(value?: Row): void;
  hasRow(): boolean;
  clearRow(): void;

  getPayloadCase(): ExamplePayload.PayloadCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExamplePayload.AsObject;
  static toObject(includeInstance: boolean, msg: ExamplePayload): ExamplePayload.AsObject;
  static serializeBinaryToWriter(message: ExamplePayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExamplePayload;
  static deserializeBinaryFromReader(message: ExamplePayload, reader: jspb.BinaryReader): ExamplePayload;
}

export namespace ExamplePayload {
  export type AsObject = {
    image?: Image.AsObject,
    textSnippet?: TextSnippet.AsObject,
    document?: Document.AsObject,
    row?: Row.AsObject,
  }

  export enum PayloadCase { 
    PAYLOAD_NOT_SET = 0,
    IMAGE = 1,
    TEXT_SNIPPET = 2,
    DOCUMENT = 4,
    ROW = 3,
  }
}

