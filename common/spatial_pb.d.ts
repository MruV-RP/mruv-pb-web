import * as jspb from 'google-protobuf'



export class Position extends jspb.Message {
  getX(): number;
  setX(value: number): Position;

  getY(): number;
  setY(value: number): Position;

  getZ(): number;
  setZ(value: number): Position;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Position.AsObject;
  static toObject(includeInstance: boolean, msg: Position): Position.AsObject;
  static serializeBinaryToWriter(message: Position, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Position;
  static deserializeBinaryFromReader(message: Position, reader: jspb.BinaryReader): Position;
}

export namespace Position {
  export type AsObject = {
    x: number,
    y: number,
    z: number,
  }
}

export class Rotation extends jspb.Message {
  getRx(): number;
  setRx(value: number): Rotation;

  getRy(): number;
  setRy(value: number): Rotation;

  getRz(): number;
  setRz(value: number): Rotation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Rotation.AsObject;
  static toObject(includeInstance: boolean, msg: Rotation): Rotation.AsObject;
  static serializeBinaryToWriter(message: Rotation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Rotation;
  static deserializeBinaryFromReader(message: Rotation, reader: jspb.BinaryReader): Rotation;
}

export namespace Rotation {
  export type AsObject = {
    rx: number,
    ry: number,
    rz: number,
  }
}

