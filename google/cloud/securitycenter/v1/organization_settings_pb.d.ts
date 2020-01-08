import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';

export class OrganizationSettings extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getEnableAssetDiscovery(): boolean;
  setEnableAssetDiscovery(value: boolean): void;

  getAssetDiscoveryConfig(): OrganizationSettings.AssetDiscoveryConfig | undefined;
  setAssetDiscoveryConfig(value?: OrganizationSettings.AssetDiscoveryConfig): void;
  hasAssetDiscoveryConfig(): boolean;
  clearAssetDiscoveryConfig(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrganizationSettings.AsObject;
  static toObject(includeInstance: boolean, msg: OrganizationSettings): OrganizationSettings.AsObject;
  static serializeBinaryToWriter(message: OrganizationSettings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrganizationSettings;
  static deserializeBinaryFromReader(message: OrganizationSettings, reader: jspb.BinaryReader): OrganizationSettings;
}

export namespace OrganizationSettings {
  export type AsObject = {
    name: string,
    enableAssetDiscovery: boolean,
    assetDiscoveryConfig?: OrganizationSettings.AssetDiscoveryConfig.AsObject,
  }

  export class AssetDiscoveryConfig extends jspb.Message {
    getProjectIdsList(): Array<string>;
    setProjectIdsList(value: Array<string>): void;
    clearProjectIdsList(): void;
    addProjectIds(value: string, index?: number): void;

    getInclusionMode(): OrganizationSettings.AssetDiscoveryConfig.InclusionMode;
    setInclusionMode(value: OrganizationSettings.AssetDiscoveryConfig.InclusionMode): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AssetDiscoveryConfig.AsObject;
    static toObject(includeInstance: boolean, msg: AssetDiscoveryConfig): AssetDiscoveryConfig.AsObject;
    static serializeBinaryToWriter(message: AssetDiscoveryConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AssetDiscoveryConfig;
    static deserializeBinaryFromReader(message: AssetDiscoveryConfig, reader: jspb.BinaryReader): AssetDiscoveryConfig;
  }

  export namespace AssetDiscoveryConfig {
    export type AsObject = {
      projectIdsList: Array<string>,
      inclusionMode: OrganizationSettings.AssetDiscoveryConfig.InclusionMode,
    }

    export enum InclusionMode { 
      INCLUSION_MODE_UNSPECIFIED = 0,
      INCLUDE_ONLY = 1,
      EXCLUDE = 2,
    }
  }

}

