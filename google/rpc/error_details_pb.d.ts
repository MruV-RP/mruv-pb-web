import * as jspb from "google-protobuf"

import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';

export class RetryInfo extends jspb.Message {
  getRetryDelay(): google_protobuf_duration_pb.Duration | undefined;
  setRetryDelay(value?: google_protobuf_duration_pb.Duration): void;
  hasRetryDelay(): boolean;
  clearRetryDelay(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetryInfo.AsObject;
  static toObject(includeInstance: boolean, msg: RetryInfo): RetryInfo.AsObject;
  static serializeBinaryToWriter(message: RetryInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetryInfo;
  static deserializeBinaryFromReader(message: RetryInfo, reader: jspb.BinaryReader): RetryInfo;
}

export namespace RetryInfo {
  export type AsObject = {
    retryDelay?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class DebugInfo extends jspb.Message {
  getStackEntriesList(): Array<string>;
  setStackEntriesList(value: Array<string>): void;
  clearStackEntriesList(): void;
  addStackEntries(value: string, index?: number): void;

  getDetail(): string;
  setDetail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DebugInfo.AsObject;
  static toObject(includeInstance: boolean, msg: DebugInfo): DebugInfo.AsObject;
  static serializeBinaryToWriter(message: DebugInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DebugInfo;
  static deserializeBinaryFromReader(message: DebugInfo, reader: jspb.BinaryReader): DebugInfo;
}

export namespace DebugInfo {
  export type AsObject = {
    stackEntriesList: Array<string>,
    detail: string,
  }
}

export class QuotaFailure extends jspb.Message {
  getViolationsList(): Array<QuotaFailure.Violation>;
  setViolationsList(value: Array<QuotaFailure.Violation>): void;
  clearViolationsList(): void;
  addViolations(value?: QuotaFailure.Violation, index?: number): QuotaFailure.Violation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuotaFailure.AsObject;
  static toObject(includeInstance: boolean, msg: QuotaFailure): QuotaFailure.AsObject;
  static serializeBinaryToWriter(message: QuotaFailure, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuotaFailure;
  static deserializeBinaryFromReader(message: QuotaFailure, reader: jspb.BinaryReader): QuotaFailure;
}

export namespace QuotaFailure {
  export type AsObject = {
    violationsList: Array<QuotaFailure.Violation.AsObject>,
  }

  export class Violation extends jspb.Message {
    getSubject(): string;
    setSubject(value: string): void;

    getDescription(): string;
    setDescription(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Violation.AsObject;
    static toObject(includeInstance: boolean, msg: Violation): Violation.AsObject;
    static serializeBinaryToWriter(message: Violation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Violation;
    static deserializeBinaryFromReader(message: Violation, reader: jspb.BinaryReader): Violation;
  }

  export namespace Violation {
    export type AsObject = {
      subject: string,
      description: string,
    }
  }

}

export class PreconditionFailure extends jspb.Message {
  getViolationsList(): Array<PreconditionFailure.Violation>;
  setViolationsList(value: Array<PreconditionFailure.Violation>): void;
  clearViolationsList(): void;
  addViolations(value?: PreconditionFailure.Violation, index?: number): PreconditionFailure.Violation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PreconditionFailure.AsObject;
  static toObject(includeInstance: boolean, msg: PreconditionFailure): PreconditionFailure.AsObject;
  static serializeBinaryToWriter(message: PreconditionFailure, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PreconditionFailure;
  static deserializeBinaryFromReader(message: PreconditionFailure, reader: jspb.BinaryReader): PreconditionFailure;
}

export namespace PreconditionFailure {
  export type AsObject = {
    violationsList: Array<PreconditionFailure.Violation.AsObject>,
  }

  export class Violation extends jspb.Message {
    getType(): string;
    setType(value: string): void;

    getSubject(): string;
    setSubject(value: string): void;

    getDescription(): string;
    setDescription(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Violation.AsObject;
    static toObject(includeInstance: boolean, msg: Violation): Violation.AsObject;
    static serializeBinaryToWriter(message: Violation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Violation;
    static deserializeBinaryFromReader(message: Violation, reader: jspb.BinaryReader): Violation;
  }

  export namespace Violation {
    export type AsObject = {
      type: string,
      subject: string,
      description: string,
    }
  }

}

export class BadRequest extends jspb.Message {
  getFieldViolationsList(): Array<BadRequest.FieldViolation>;
  setFieldViolationsList(value: Array<BadRequest.FieldViolation>): void;
  clearFieldViolationsList(): void;
  addFieldViolations(value?: BadRequest.FieldViolation, index?: number): BadRequest.FieldViolation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BadRequest): BadRequest.AsObject;
  static serializeBinaryToWriter(message: BadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BadRequest;
  static deserializeBinaryFromReader(message: BadRequest, reader: jspb.BinaryReader): BadRequest;
}

export namespace BadRequest {
  export type AsObject = {
    fieldViolationsList: Array<BadRequest.FieldViolation.AsObject>,
  }

  export class FieldViolation extends jspb.Message {
    getField(): string;
    setField(value: string): void;

    getDescription(): string;
    setDescription(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FieldViolation.AsObject;
    static toObject(includeInstance: boolean, msg: FieldViolation): FieldViolation.AsObject;
    static serializeBinaryToWriter(message: FieldViolation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FieldViolation;
    static deserializeBinaryFromReader(message: FieldViolation, reader: jspb.BinaryReader): FieldViolation;
  }

  export namespace FieldViolation {
    export type AsObject = {
      field: string,
      description: string,
    }
  }

}

export class RequestInfo extends jspb.Message {
  getRequestId(): string;
  setRequestId(value: string): void;

  getServingData(): string;
  setServingData(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestInfo.AsObject;
  static toObject(includeInstance: boolean, msg: RequestInfo): RequestInfo.AsObject;
  static serializeBinaryToWriter(message: RequestInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestInfo;
  static deserializeBinaryFromReader(message: RequestInfo, reader: jspb.BinaryReader): RequestInfo;
}

export namespace RequestInfo {
  export type AsObject = {
    requestId: string,
    servingData: string,
  }
}

export class ResourceInfo extends jspb.Message {
  getResourceType(): string;
  setResourceType(value: string): void;

  getResourceName(): string;
  setResourceName(value: string): void;

  getOwner(): string;
  setOwner(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceInfo): ResourceInfo.AsObject;
  static serializeBinaryToWriter(message: ResourceInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceInfo;
  static deserializeBinaryFromReader(message: ResourceInfo, reader: jspb.BinaryReader): ResourceInfo;
}

export namespace ResourceInfo {
  export type AsObject = {
    resourceType: string,
    resourceName: string,
    owner: string,
    description: string,
  }
}

export class Help extends jspb.Message {
  getLinksList(): Array<Help.Link>;
  setLinksList(value: Array<Help.Link>): void;
  clearLinksList(): void;
  addLinks(value?: Help.Link, index?: number): Help.Link;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Help.AsObject;
  static toObject(includeInstance: boolean, msg: Help): Help.AsObject;
  static serializeBinaryToWriter(message: Help, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Help;
  static deserializeBinaryFromReader(message: Help, reader: jspb.BinaryReader): Help;
}

export namespace Help {
  export type AsObject = {
    linksList: Array<Help.Link.AsObject>,
  }

  export class Link extends jspb.Message {
    getDescription(): string;
    setDescription(value: string): void;

    getUrl(): string;
    setUrl(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Link.AsObject;
    static toObject(includeInstance: boolean, msg: Link): Link.AsObject;
    static serializeBinaryToWriter(message: Link, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Link;
    static deserializeBinaryFromReader(message: Link, reader: jspb.BinaryReader): Link;
  }

  export namespace Link {
    export type AsObject = {
      description: string,
      url: string,
    }
  }

}

export class LocalizedMessage extends jspb.Message {
  getLocale(): string;
  setLocale(value: string): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocalizedMessage.AsObject;
  static toObject(includeInstance: boolean, msg: LocalizedMessage): LocalizedMessage.AsObject;
  static serializeBinaryToWriter(message: LocalizedMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocalizedMessage;
  static deserializeBinaryFromReader(message: LocalizedMessage, reader: jspb.BinaryReader): LocalizedMessage;
}

export namespace LocalizedMessage {
  export type AsObject = {
    locale: string,
    message: string,
  }
}

