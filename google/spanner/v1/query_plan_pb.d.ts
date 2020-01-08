import * as jspb from "google-protobuf"

import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_api_annotations_pb from '../../../google/api/annotations_pb';

export class PlanNode extends jspb.Message {
  getIndex(): number;
  setIndex(value: number): void;

  getKind(): PlanNode.Kind;
  setKind(value: PlanNode.Kind): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getChildLinksList(): Array<PlanNode.ChildLink>;
  setChildLinksList(value: Array<PlanNode.ChildLink>): void;
  clearChildLinksList(): void;
  addChildLinks(value?: PlanNode.ChildLink, index?: number): PlanNode.ChildLink;

  getShortRepresentation(): PlanNode.ShortRepresentation | undefined;
  setShortRepresentation(value?: PlanNode.ShortRepresentation): void;
  hasShortRepresentation(): boolean;
  clearShortRepresentation(): void;

  getMetadata(): google_protobuf_struct_pb.Struct | undefined;
  setMetadata(value?: google_protobuf_struct_pb.Struct): void;
  hasMetadata(): boolean;
  clearMetadata(): void;

  getExecutionStats(): google_protobuf_struct_pb.Struct | undefined;
  setExecutionStats(value?: google_protobuf_struct_pb.Struct): void;
  hasExecutionStats(): boolean;
  clearExecutionStats(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlanNode.AsObject;
  static toObject(includeInstance: boolean, msg: PlanNode): PlanNode.AsObject;
  static serializeBinaryToWriter(message: PlanNode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlanNode;
  static deserializeBinaryFromReader(message: PlanNode, reader: jspb.BinaryReader): PlanNode;
}

export namespace PlanNode {
  export type AsObject = {
    index: number,
    kind: PlanNode.Kind,
    displayName: string,
    childLinksList: Array<PlanNode.ChildLink.AsObject>,
    shortRepresentation?: PlanNode.ShortRepresentation.AsObject,
    metadata?: google_protobuf_struct_pb.Struct.AsObject,
    executionStats?: google_protobuf_struct_pb.Struct.AsObject,
  }

  export class ChildLink extends jspb.Message {
    getChildIndex(): number;
    setChildIndex(value: number): void;

    getType(): string;
    setType(value: string): void;

    getVariable(): string;
    setVariable(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChildLink.AsObject;
    static toObject(includeInstance: boolean, msg: ChildLink): ChildLink.AsObject;
    static serializeBinaryToWriter(message: ChildLink, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChildLink;
    static deserializeBinaryFromReader(message: ChildLink, reader: jspb.BinaryReader): ChildLink;
  }

  export namespace ChildLink {
    export type AsObject = {
      childIndex: number,
      type: string,
      variable: string,
    }
  }


  export class ShortRepresentation extends jspb.Message {
    getDescription(): string;
    setDescription(value: string): void;

    getSubqueriesMap(): jspb.Map<string, number>;
    clearSubqueriesMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ShortRepresentation.AsObject;
    static toObject(includeInstance: boolean, msg: ShortRepresentation): ShortRepresentation.AsObject;
    static serializeBinaryToWriter(message: ShortRepresentation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ShortRepresentation;
    static deserializeBinaryFromReader(message: ShortRepresentation, reader: jspb.BinaryReader): ShortRepresentation;
  }

  export namespace ShortRepresentation {
    export type AsObject = {
      description: string,
      subqueriesMap: Array<[string, number]>,
    }
  }


  export enum Kind { 
    KIND_UNSPECIFIED = 0,
    RELATIONAL = 1,
    SCALAR = 2,
  }
}

export class QueryPlan extends jspb.Message {
  getPlanNodesList(): Array<PlanNode>;
  setPlanNodesList(value: Array<PlanNode>): void;
  clearPlanNodesList(): void;
  addPlanNodes(value?: PlanNode, index?: number): PlanNode;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryPlan.AsObject;
  static toObject(includeInstance: boolean, msg: QueryPlan): QueryPlan.AsObject;
  static serializeBinaryToWriter(message: QueryPlan, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryPlan;
  static deserializeBinaryFromReader(message: QueryPlan, reader: jspb.BinaryReader): QueryPlan;
}

export namespace QueryPlan {
  export type AsObject = {
    planNodesList: Array<PlanNode.AsObject>,
  }
}

