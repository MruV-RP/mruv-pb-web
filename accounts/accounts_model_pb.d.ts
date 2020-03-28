import * as jspb from "google-protobuf"

export class AccountID extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountID.AsObject;
  static toObject(includeInstance: boolean, msg: AccountID): AccountID.AsObject;
  static serializeBinaryToWriter(message: AccountID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountID;
  static deserializeBinaryFromReader(message: AccountID, reader: jspb.BinaryReader): AccountID;
}

export namespace AccountID {
  export type AsObject = {
    id: number,
  }
}

export class Account extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getLogin(): string;
  setLogin(value: string): void;

  getNick(): string;
  setNick(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Account.AsObject;
  static toObject(includeInstance: boolean, msg: Account): Account.AsObject;
  static serializeBinaryToWriter(message: Account, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Account;
  static deserializeBinaryFromReader(message: Account, reader: jspb.BinaryReader): Account;
}

export namespace Account {
  export type AsObject = {
    id: number,
    login: string,
    nick: string,
    email: string,
  }
}

