import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class AuthorizationErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthorizationErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: AuthorizationErrorEnum): AuthorizationErrorEnum.AsObject;
  static serializeBinaryToWriter(message: AuthorizationErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthorizationErrorEnum;
  static deserializeBinaryFromReader(message: AuthorizationErrorEnum, reader: jspb.BinaryReader): AuthorizationErrorEnum;
}

export namespace AuthorizationErrorEnum {
  export type AsObject = {
  }

  export enum AuthorizationError { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    USER_PERMISSION_DENIED = 2,
    DEVELOPER_TOKEN_NOT_WHITELISTED = 3,
    DEVELOPER_TOKEN_PROHIBITED = 4,
    PROJECT_DISABLED = 5,
    AUTHORIZATION_ERROR = 6,
    ACTION_NOT_PERMITTED = 7,
    INCOMPLETE_SIGNUP = 8,
    CUSTOMER_NOT_ENABLED = 24,
    MISSING_TOS = 9,
    DEVELOPER_TOKEN_NOT_APPROVED = 10,
    INVALID_LOGIN_CUSTOMER_ID_SERVING_CUSTOMER_ID_COMBINATION = 11,
  }
}

