import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';

export class Vertex extends jspb.Message {
  getX(): number;
  setX(value: number): void;

  getY(): number;
  setY(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Vertex.AsObject;
  static toObject(includeInstance: boolean, msg: Vertex): Vertex.AsObject;
  static serializeBinaryToWriter(message: Vertex, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Vertex;
  static deserializeBinaryFromReader(message: Vertex, reader: jspb.BinaryReader): Vertex;
}

export namespace Vertex {
  export type AsObject = {
    x: number,
    y: number,
  }
}

export class NormalizedVertex extends jspb.Message {
  getX(): number;
  setX(value: number): void;

  getY(): number;
  setY(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NormalizedVertex.AsObject;
  static toObject(includeInstance: boolean, msg: NormalizedVertex): NormalizedVertex.AsObject;
  static serializeBinaryToWriter(message: NormalizedVertex, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NormalizedVertex;
  static deserializeBinaryFromReader(message: NormalizedVertex, reader: jspb.BinaryReader): NormalizedVertex;
}

export namespace NormalizedVertex {
  export type AsObject = {
    x: number,
    y: number,
  }
}

export class BoundingPoly extends jspb.Message {
  getVerticesList(): Array<Vertex>;
  setVerticesList(value: Array<Vertex>): void;
  clearVerticesList(): void;
  addVertices(value?: Vertex, index?: number): Vertex;

  getNormalizedVerticesList(): Array<NormalizedVertex>;
  setNormalizedVerticesList(value: Array<NormalizedVertex>): void;
  clearNormalizedVerticesList(): void;
  addNormalizedVertices(value?: NormalizedVertex, index?: number): NormalizedVertex;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BoundingPoly.AsObject;
  static toObject(includeInstance: boolean, msg: BoundingPoly): BoundingPoly.AsObject;
  static serializeBinaryToWriter(message: BoundingPoly, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BoundingPoly;
  static deserializeBinaryFromReader(message: BoundingPoly, reader: jspb.BinaryReader): BoundingPoly;
}

export namespace BoundingPoly {
  export type AsObject = {
    verticesList: Array<Vertex.AsObject>,
    normalizedVerticesList: Array<NormalizedVertex.AsObject>,
  }
}
