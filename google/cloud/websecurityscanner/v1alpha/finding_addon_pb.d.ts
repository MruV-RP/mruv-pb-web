import * as jspb from "google-protobuf"

export class OutdatedLibrary extends jspb.Message {
  getLibraryName(): string;
  setLibraryName(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  getLearnMoreUrlsList(): Array<string>;
  setLearnMoreUrlsList(value: Array<string>): void;
  clearLearnMoreUrlsList(): void;
  addLearnMoreUrls(value: string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OutdatedLibrary.AsObject;
  static toObject(includeInstance: boolean, msg: OutdatedLibrary): OutdatedLibrary.AsObject;
  static serializeBinaryToWriter(message: OutdatedLibrary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OutdatedLibrary;
  static deserializeBinaryFromReader(message: OutdatedLibrary, reader: jspb.BinaryReader): OutdatedLibrary;
}

export namespace OutdatedLibrary {
  export type AsObject = {
    libraryName: string,
    version: string,
    learnMoreUrlsList: Array<string>,
  }
}

export class ViolatingResource extends jspb.Message {
  getContentType(): string;
  setContentType(value: string): void;

  getResourceUrl(): string;
  setResourceUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ViolatingResource.AsObject;
  static toObject(includeInstance: boolean, msg: ViolatingResource): ViolatingResource.AsObject;
  static serializeBinaryToWriter(message: ViolatingResource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ViolatingResource;
  static deserializeBinaryFromReader(message: ViolatingResource, reader: jspb.BinaryReader): ViolatingResource;
}

export namespace ViolatingResource {
  export type AsObject = {
    contentType: string,
    resourceUrl: string,
  }
}

export class VulnerableParameters extends jspb.Message {
  getParameterNamesList(): Array<string>;
  setParameterNamesList(value: Array<string>): void;
  clearParameterNamesList(): void;
  addParameterNames(value: string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VulnerableParameters.AsObject;
  static toObject(includeInstance: boolean, msg: VulnerableParameters): VulnerableParameters.AsObject;
  static serializeBinaryToWriter(message: VulnerableParameters, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VulnerableParameters;
  static deserializeBinaryFromReader(message: VulnerableParameters, reader: jspb.BinaryReader): VulnerableParameters;
}

export namespace VulnerableParameters {
  export type AsObject = {
    parameterNamesList: Array<string>,
  }
}

export class VulnerableHeaders extends jspb.Message {
  getHeadersList(): Array<VulnerableHeaders.Header>;
  setHeadersList(value: Array<VulnerableHeaders.Header>): void;
  clearHeadersList(): void;
  addHeaders(value?: VulnerableHeaders.Header, index?: number): VulnerableHeaders.Header;

  getMissingHeadersList(): Array<VulnerableHeaders.Header>;
  setMissingHeadersList(value: Array<VulnerableHeaders.Header>): void;
  clearMissingHeadersList(): void;
  addMissingHeaders(value?: VulnerableHeaders.Header, index?: number): VulnerableHeaders.Header;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VulnerableHeaders.AsObject;
  static toObject(includeInstance: boolean, msg: VulnerableHeaders): VulnerableHeaders.AsObject;
  static serializeBinaryToWriter(message: VulnerableHeaders, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VulnerableHeaders;
  static deserializeBinaryFromReader(message: VulnerableHeaders, reader: jspb.BinaryReader): VulnerableHeaders;
}

export namespace VulnerableHeaders {
  export type AsObject = {
    headersList: Array<VulnerableHeaders.Header.AsObject>,
    missingHeadersList: Array<VulnerableHeaders.Header.AsObject>,
  }

  export class Header extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    getValue(): string;
    setValue(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Header.AsObject;
    static toObject(includeInstance: boolean, msg: Header): Header.AsObject;
    static serializeBinaryToWriter(message: Header, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Header;
    static deserializeBinaryFromReader(message: Header, reader: jspb.BinaryReader): Header;
  }

  export namespace Header {
    export type AsObject = {
      name: string,
      value: string,
    }
  }

}

export class Xss extends jspb.Message {
  getStackTracesList(): Array<string>;
  setStackTracesList(value: Array<string>): void;
  clearStackTracesList(): void;
  addStackTraces(value: string, index?: number): void;

  getErrorMessage(): string;
  setErrorMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Xss.AsObject;
  static toObject(includeInstance: boolean, msg: Xss): Xss.AsObject;
  static serializeBinaryToWriter(message: Xss, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Xss;
  static deserializeBinaryFromReader(message: Xss, reader: jspb.BinaryReader): Xss;
}

export namespace Xss {
  export type AsObject = {
    stackTracesList: Array<string>,
    errorMessage: string,
  }
}

