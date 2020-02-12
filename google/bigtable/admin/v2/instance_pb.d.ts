import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_bigtable_admin_v2_common_pb from '../../../../google/bigtable/admin/v2/common_pb';

export class Instance extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getState(): Instance.State;
  setState(value: Instance.State): void;

  getType(): Instance.Type;
  setType(value: Instance.Type): void;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Instance.AsObject;
  static toObject(includeInstance: boolean, msg: Instance): Instance.AsObject;
  static serializeBinaryToWriter(message: Instance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Instance;
  static deserializeBinaryFromReader(message: Instance, reader: jspb.BinaryReader): Instance;
}

export namespace Instance {
  export type AsObject = {
    name: string,
    displayName: string,
    state: Instance.State,
    type: Instance.Type,
    labelsMap: Array<[string, string]>,
  }

  export enum State { 
    STATE_NOT_KNOWN = 0,
    READY = 1,
    CREATING = 2,
  }

  export enum Type { 
    TYPE_UNSPECIFIED = 0,
    PRODUCTION = 1,
    DEVELOPMENT = 2,
  }
}

export class Cluster extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getLocation(): string;
  setLocation(value: string): void;

  getState(): Cluster.State;
  setState(value: Cluster.State): void;

  getServeNodes(): number;
  setServeNodes(value: number): void;

  getDefaultStorageType(): google_bigtable_admin_v2_common_pb.StorageType;
  setDefaultStorageType(value: google_bigtable_admin_v2_common_pb.StorageType): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Cluster.AsObject;
  static toObject(includeInstance: boolean, msg: Cluster): Cluster.AsObject;
  static serializeBinaryToWriter(message: Cluster, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Cluster;
  static deserializeBinaryFromReader(message: Cluster, reader: jspb.BinaryReader): Cluster;
}

export namespace Cluster {
  export type AsObject = {
    name: string,
    location: string,
    state: Cluster.State,
    serveNodes: number,
    defaultStorageType: google_bigtable_admin_v2_common_pb.StorageType,
  }

  export enum State { 
    STATE_NOT_KNOWN = 0,
    READY = 1,
    CREATING = 2,
    RESIZING = 3,
    DISABLED = 4,
  }
}

export class AppProfile extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getEtag(): string;
  setEtag(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getMultiClusterRoutingUseAny(): AppProfile.MultiClusterRoutingUseAny | undefined;
  setMultiClusterRoutingUseAny(value?: AppProfile.MultiClusterRoutingUseAny): void;
  hasMultiClusterRoutingUseAny(): boolean;
  clearMultiClusterRoutingUseAny(): void;

  getSingleClusterRouting(): AppProfile.SingleClusterRouting | undefined;
  setSingleClusterRouting(value?: AppProfile.SingleClusterRouting): void;
  hasSingleClusterRouting(): boolean;
  clearSingleClusterRouting(): void;

  getRoutingPolicyCase(): AppProfile.RoutingPolicyCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AppProfile.AsObject;
  static toObject(includeInstance: boolean, msg: AppProfile): AppProfile.AsObject;
  static serializeBinaryToWriter(message: AppProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AppProfile;
  static deserializeBinaryFromReader(message: AppProfile, reader: jspb.BinaryReader): AppProfile;
}

export namespace AppProfile {
  export type AsObject = {
    name: string,
    etag: string,
    description: string,
    multiClusterRoutingUseAny?: AppProfile.MultiClusterRoutingUseAny.AsObject,
    singleClusterRouting?: AppProfile.SingleClusterRouting.AsObject,
  }

  export class MultiClusterRoutingUseAny extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiClusterRoutingUseAny.AsObject;
    static toObject(includeInstance: boolean, msg: MultiClusterRoutingUseAny): MultiClusterRoutingUseAny.AsObject;
    static serializeBinaryToWriter(message: MultiClusterRoutingUseAny, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiClusterRoutingUseAny;
    static deserializeBinaryFromReader(message: MultiClusterRoutingUseAny, reader: jspb.BinaryReader): MultiClusterRoutingUseAny;
  }

  export namespace MultiClusterRoutingUseAny {
    export type AsObject = {
    }
  }


  export class SingleClusterRouting extends jspb.Message {
    getClusterId(): string;
    setClusterId(value: string): void;

    getAllowTransactionalWrites(): boolean;
    setAllowTransactionalWrites(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SingleClusterRouting.AsObject;
    static toObject(includeInstance: boolean, msg: SingleClusterRouting): SingleClusterRouting.AsObject;
    static serializeBinaryToWriter(message: SingleClusterRouting, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SingleClusterRouting;
    static deserializeBinaryFromReader(message: SingleClusterRouting, reader: jspb.BinaryReader): SingleClusterRouting;
  }

  export namespace SingleClusterRouting {
    export type AsObject = {
      clusterId: string,
      allowTransactionalWrites: boolean,
    }
  }


  export enum RoutingPolicyCase { 
    ROUTING_POLICY_NOT_SET = 0,
    MULTI_CLUSTER_ROUTING_USE_ANY = 5,
    SINGLE_CLUSTER_ROUTING = 6,
  }
}

