import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';

export class ValidationError extends jspb.Message {
  getSeverity(): ValidationError.Severity;
  setSeverity(value: ValidationError.Severity): void;

  getEntriesList(): Array<string>;
  setEntriesList(value: Array<string>): void;
  clearEntriesList(): void;
  addEntries(value: string, index?: number): void;

  getErrorMessage(): string;
  setErrorMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidationError.AsObject;
  static toObject(includeInstance: boolean, msg: ValidationError): ValidationError.AsObject;
  static serializeBinaryToWriter(message: ValidationError, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidationError;
  static deserializeBinaryFromReader(message: ValidationError, reader: jspb.BinaryReader): ValidationError;
}

export namespace ValidationError {
  export type AsObject = {
    severity: ValidationError.Severity,
    entriesList: Array<string>,
    errorMessage: string,
  }

  export enum Severity { 
    SEVERITY_UNSPECIFIED = 0,
    INFO = 1,
    WARNING = 2,
    ERROR = 3,
    CRITICAL = 4,
  }
}

export class ValidationResult extends jspb.Message {
  getValidationErrorsList(): Array<ValidationError>;
  setValidationErrorsList(value: Array<ValidationError>): void;
  clearValidationErrorsList(): void;
  addValidationErrors(value?: ValidationError, index?: number): ValidationError;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidationResult.AsObject;
  static toObject(includeInstance: boolean, msg: ValidationResult): ValidationResult.AsObject;
  static serializeBinaryToWriter(message: ValidationResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidationResult;
  static deserializeBinaryFromReader(message: ValidationResult, reader: jspb.BinaryReader): ValidationResult;
}

export namespace ValidationResult {
  export type AsObject = {
    validationErrorsList: Array<ValidationError.AsObject>,
  }
}

