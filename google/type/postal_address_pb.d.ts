import * as jspb from "google-protobuf"

export class PostalAddress extends jspb.Message {
  getRevision(): number;
  setRevision(value: number): void;

  getRegionCode(): string;
  setRegionCode(value: string): void;

  getLanguageCode(): string;
  setLanguageCode(value: string): void;

  getPostalCode(): string;
  setPostalCode(value: string): void;

  getSortingCode(): string;
  setSortingCode(value: string): void;

  getAdministrativeArea(): string;
  setAdministrativeArea(value: string): void;

  getLocality(): string;
  setLocality(value: string): void;

  getSublocality(): string;
  setSublocality(value: string): void;

  getAddressLinesList(): Array<string>;
  setAddressLinesList(value: Array<string>): void;
  clearAddressLinesList(): void;
  addAddressLines(value: string, index?: number): void;

  getRecipientsList(): Array<string>;
  setRecipientsList(value: Array<string>): void;
  clearRecipientsList(): void;
  addRecipients(value: string, index?: number): void;

  getOrganization(): string;
  setOrganization(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostalAddress.AsObject;
  static toObject(includeInstance: boolean, msg: PostalAddress): PostalAddress.AsObject;
  static serializeBinaryToWriter(message: PostalAddress, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostalAddress;
  static deserializeBinaryFromReader(message: PostalAddress, reader: jspb.BinaryReader): PostalAddress;
}

export namespace PostalAddress {
  export type AsObject = {
    revision: number,
    regionCode: string,
    languageCode: string,
    postalCode: string,
    sortingCode: string,
    administrativeArea: string,
    locality: string,
    sublocality: string,
    addressLinesList: Array<string>,
    recipientsList: Array<string>,
    organization: string,
  }
}

