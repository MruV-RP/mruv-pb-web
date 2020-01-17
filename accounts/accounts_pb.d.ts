import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../google/api/annotations_pb';
import * as accounts_accounts_model_pb from '../accounts/accounts_model_pb';

export class RegisterAccountRequest extends jspb.Message {
  getAccount(): accounts_accounts_model_pb.Account | undefined;
  setAccount(value?: accounts_accounts_model_pb.Account): void;
  hasAccount(): boolean;
  clearAccount(): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterAccountRequest): RegisterAccountRequest.AsObject;
  static serializeBinaryToWriter(message: RegisterAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterAccountRequest;
  static deserializeBinaryFromReader(message: RegisterAccountRequest, reader: jspb.BinaryReader): RegisterAccountRequest;
}

export namespace RegisterAccountRequest {
  export type AsObject = {
    account?: accounts_accounts_model_pb.Account.AsObject,
    password: string,
  }
}

export class RegisterAccountResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  getId(): accounts_accounts_model_pb.AccountID | undefined;
  setId(value?: accounts_accounts_model_pb.AccountID): void;
  hasId(): boolean;
  clearId(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterAccountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterAccountResponse): RegisterAccountResponse.AsObject;
  static serializeBinaryToWriter(message: RegisterAccountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterAccountResponse;
  static deserializeBinaryFromReader(message: RegisterAccountResponse, reader: jspb.BinaryReader): RegisterAccountResponse;
}

export namespace RegisterAccountResponse {
  export type AsObject = {
    success: boolean,
    id?: accounts_accounts_model_pb.AccountID.AsObject,
  }
}

export class LogInRequest extends jspb.Message {
  getLogin(): string;
  setLogin(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogInRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LogInRequest): LogInRequest.AsObject;
  static serializeBinaryToWriter(message: LogInRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogInRequest;
  static deserializeBinaryFromReader(message: LogInRequest, reader: jspb.BinaryReader): LogInRequest;
}

export namespace LogInRequest {
  export type AsObject = {
    login: string,
    password: string,
  }
}

export class LogInResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  getId(): accounts_accounts_model_pb.AccountID | undefined;
  setId(value?: accounts_accounts_model_pb.AccountID): void;
  hasId(): boolean;
  clearId(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogInResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LogInResponse): LogInResponse.AsObject;
  static serializeBinaryToWriter(message: LogInResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogInResponse;
  static deserializeBinaryFromReader(message: LogInResponse, reader: jspb.BinaryReader): LogInResponse;
}

export namespace LogInResponse {
  export type AsObject = {
    success: boolean,
    id?: accounts_accounts_model_pb.AccountID.AsObject,
  }
}

