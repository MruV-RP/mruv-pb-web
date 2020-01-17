import * as jspb from "google-protobuf"

import * as accounts_accounts_model_pb from '../accounts/accounts_model_pb';

export class PermissionID extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PermissionID.AsObject;
  static toObject(includeInstance: boolean, msg: PermissionID): PermissionID.AsObject;
  static serializeBinaryToWriter(message: PermissionID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PermissionID;
  static deserializeBinaryFromReader(message: PermissionID, reader: jspb.BinaryReader): PermissionID;
}

export namespace PermissionID {
  export type AsObject = {
    id: number,
  }
}

export class Permission extends jspb.Message {
  getId(): PermissionID | undefined;
  setId(value?: PermissionID): void;
  hasId(): boolean;
  clearId(): void;

  getName(): string;
  setName(value: string): void;

  getRole(): string;
  setRole(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Permission.AsObject;
  static toObject(includeInstance: boolean, msg: Permission): Permission.AsObject;
  static serializeBinaryToWriter(message: Permission, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Permission;
  static deserializeBinaryFromReader(message: Permission, reader: jspb.BinaryReader): Permission;
}

export namespace Permission {
  export type AsObject = {
    id?: PermissionID.AsObject,
    name: string,
    role: string,
  }
}

export class GroupID extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupID.AsObject;
  static toObject(includeInstance: boolean, msg: GroupID): GroupID.AsObject;
  static serializeBinaryToWriter(message: GroupID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupID;
  static deserializeBinaryFromReader(message: GroupID, reader: jspb.BinaryReader): GroupID;
}

export namespace GroupID {
  export type AsObject = {
    id: number,
  }
}

export class Group extends jspb.Message {
  getId(): GroupID | undefined;
  setId(value?: GroupID): void;
  hasId(): boolean;
  clearId(): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getPermissionsList(): Array<Permission>;
  setPermissionsList(value: Array<Permission>): void;
  clearPermissionsList(): void;
  addPermissions(value?: Permission, index?: number): Permission;

  getMembersList(): Array<accounts_accounts_model_pb.AccountID>;
  setMembersList(value: Array<accounts_accounts_model_pb.AccountID>): void;
  clearMembersList(): void;
  addMembers(value?: accounts_accounts_model_pb.AccountID, index?: number): accounts_accounts_model_pb.AccountID;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Group.AsObject;
  static toObject(includeInstance: boolean, msg: Group): Group.AsObject;
  static serializeBinaryToWriter(message: Group, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Group;
  static deserializeBinaryFromReader(message: Group, reader: jspb.BinaryReader): Group;
}

export namespace Group {
  export type AsObject = {
    id?: GroupID.AsObject,
    name: string,
    description: string,
    permissionsList: Array<Permission.AsObject>,
    membersList: Array<accounts_accounts_model_pb.AccountID.AsObject>,
  }
}

