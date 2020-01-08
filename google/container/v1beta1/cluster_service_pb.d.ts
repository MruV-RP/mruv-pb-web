import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_iam_v1_iam_policy_pb from '../../../google/iam/v1/iam_policy_pb';
import * as google_iam_v1_policy_pb from '../../../google/iam/v1/policy_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';

export class NodeConfig extends jspb.Message {
  getMachineType(): string;
  setMachineType(value: string): void;

  getDiskSizeGb(): number;
  setDiskSizeGb(value: number): void;

  getOauthScopesList(): Array<string>;
  setOauthScopesList(value: Array<string>): void;
  clearOauthScopesList(): void;
  addOauthScopes(value: string, index?: number): void;

  getServiceAccount(): string;
  setServiceAccount(value: string): void;

  getMetadataMap(): jspb.Map<string, string>;
  clearMetadataMap(): void;

  getImageType(): string;
  setImageType(value: string): void;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): void;

  getLocalSsdCount(): number;
  setLocalSsdCount(value: number): void;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): void;
  clearTagsList(): void;
  addTags(value: string, index?: number): void;

  getPreemptible(): boolean;
  setPreemptible(value: boolean): void;

  getAcceleratorsList(): Array<AcceleratorConfig>;
  setAcceleratorsList(value: Array<AcceleratorConfig>): void;
  clearAcceleratorsList(): void;
  addAccelerators(value?: AcceleratorConfig, index?: number): AcceleratorConfig;

  getDiskType(): string;
  setDiskType(value: string): void;

  getMinCpuPlatform(): string;
  setMinCpuPlatform(value: string): void;

  getWorkloadMetadataConfig(): WorkloadMetadataConfig | undefined;
  setWorkloadMetadataConfig(value?: WorkloadMetadataConfig): void;
  hasWorkloadMetadataConfig(): boolean;
  clearWorkloadMetadataConfig(): void;

  getTaintsList(): Array<NodeTaint>;
  setTaintsList(value: Array<NodeTaint>): void;
  clearTaintsList(): void;
  addTaints(value?: NodeTaint, index?: number): NodeTaint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodeConfig.AsObject;
  static toObject(includeInstance: boolean, msg: NodeConfig): NodeConfig.AsObject;
  static serializeBinaryToWriter(message: NodeConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodeConfig;
  static deserializeBinaryFromReader(message: NodeConfig, reader: jspb.BinaryReader): NodeConfig;
}

export namespace NodeConfig {
  export type AsObject = {
    machineType: string,
    diskSizeGb: number,
    oauthScopesList: Array<string>,
    serviceAccount: string,
    metadataMap: Array<[string, string]>,
    imageType: string,
    labelsMap: Array<[string, string]>,
    localSsdCount: number,
    tagsList: Array<string>,
    preemptible: boolean,
    acceleratorsList: Array<AcceleratorConfig.AsObject>,
    diskType: string,
    minCpuPlatform: string,
    workloadMetadataConfig?: WorkloadMetadataConfig.AsObject,
    taintsList: Array<NodeTaint.AsObject>,
  }
}

export class NodeTaint extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  getEffect(): NodeTaint.Effect;
  setEffect(value: NodeTaint.Effect): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodeTaint.AsObject;
  static toObject(includeInstance: boolean, msg: NodeTaint): NodeTaint.AsObject;
  static serializeBinaryToWriter(message: NodeTaint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodeTaint;
  static deserializeBinaryFromReader(message: NodeTaint, reader: jspb.BinaryReader): NodeTaint;
}

export namespace NodeTaint {
  export type AsObject = {
    key: string,
    value: string,
    effect: NodeTaint.Effect,
  }

  export enum Effect { 
    EFFECT_UNSPECIFIED = 0,
    NO_SCHEDULE = 1,
    PREFER_NO_SCHEDULE = 2,
    NO_EXECUTE = 3,
  }
}

export class MasterAuth extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getClientCertificateConfig(): ClientCertificateConfig | undefined;
  setClientCertificateConfig(value?: ClientCertificateConfig): void;
  hasClientCertificateConfig(): boolean;
  clearClientCertificateConfig(): void;

  getClusterCaCertificate(): string;
  setClusterCaCertificate(value: string): void;

  getClientCertificate(): string;
  setClientCertificate(value: string): void;

  getClientKey(): string;
  setClientKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MasterAuth.AsObject;
  static toObject(includeInstance: boolean, msg: MasterAuth): MasterAuth.AsObject;
  static serializeBinaryToWriter(message: MasterAuth, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MasterAuth;
  static deserializeBinaryFromReader(message: MasterAuth, reader: jspb.BinaryReader): MasterAuth;
}

export namespace MasterAuth {
  export type AsObject = {
    username: string,
    password: string,
    clientCertificateConfig?: ClientCertificateConfig.AsObject,
    clusterCaCertificate: string,
    clientCertificate: string,
    clientKey: string,
  }
}

export class ClientCertificateConfig extends jspb.Message {
  getIssueClientCertificate(): boolean;
  setIssueClientCertificate(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientCertificateConfig.AsObject;
  static toObject(includeInstance: boolean, msg: ClientCertificateConfig): ClientCertificateConfig.AsObject;
  static serializeBinaryToWriter(message: ClientCertificateConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientCertificateConfig;
  static deserializeBinaryFromReader(message: ClientCertificateConfig, reader: jspb.BinaryReader): ClientCertificateConfig;
}

export namespace ClientCertificateConfig {
  export type AsObject = {
    issueClientCertificate: boolean,
  }
}

export class AddonsConfig extends jspb.Message {
  getHttpLoadBalancing(): HttpLoadBalancing | undefined;
  setHttpLoadBalancing(value?: HttpLoadBalancing): void;
  hasHttpLoadBalancing(): boolean;
  clearHttpLoadBalancing(): void;

  getHorizontalPodAutoscaling(): HorizontalPodAutoscaling | undefined;
  setHorizontalPodAutoscaling(value?: HorizontalPodAutoscaling): void;
  hasHorizontalPodAutoscaling(): boolean;
  clearHorizontalPodAutoscaling(): void;

  getKubernetesDashboard(): KubernetesDashboard | undefined;
  setKubernetesDashboard(value?: KubernetesDashboard): void;
  hasKubernetesDashboard(): boolean;
  clearKubernetesDashboard(): void;

  getNetworkPolicyConfig(): NetworkPolicyConfig | undefined;
  setNetworkPolicyConfig(value?: NetworkPolicyConfig): void;
  hasNetworkPolicyConfig(): boolean;
  clearNetworkPolicyConfig(): void;

  getIstioConfig(): IstioConfig | undefined;
  setIstioConfig(value?: IstioConfig): void;
  hasIstioConfig(): boolean;
  clearIstioConfig(): void;

  getCloudRunConfig(): CloudRunConfig | undefined;
  setCloudRunConfig(value?: CloudRunConfig): void;
  hasCloudRunConfig(): boolean;
  clearCloudRunConfig(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddonsConfig.AsObject;
  static toObject(includeInstance: boolean, msg: AddonsConfig): AddonsConfig.AsObject;
  static serializeBinaryToWriter(message: AddonsConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddonsConfig;
  static deserializeBinaryFromReader(message: AddonsConfig, reader: jspb.BinaryReader): AddonsConfig;
}

export namespace AddonsConfig {
  export type AsObject = {
    httpLoadBalancing?: HttpLoadBalancing.AsObject,
    horizontalPodAutoscaling?: HorizontalPodAutoscaling.AsObject,
    kubernetesDashboard?: KubernetesDashboard.AsObject,
    networkPolicyConfig?: NetworkPolicyConfig.AsObject,
    istioConfig?: IstioConfig.AsObject,
    cloudRunConfig?: CloudRunConfig.AsObject,
  }
}

export class HttpLoadBalancing extends jspb.Message {
  getDisabled(): boolean;
  setDisabled(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HttpLoadBalancing.AsObject;
  static toObject(includeInstance: boolean, msg: HttpLoadBalancing): HttpLoadBalancing.AsObject;
  static serializeBinaryToWriter(message: HttpLoadBalancing, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HttpLoadBalancing;
  static deserializeBinaryFromReader(message: HttpLoadBalancing, reader: jspb.BinaryReader): HttpLoadBalancing;
}

export namespace HttpLoadBalancing {
  export type AsObject = {
    disabled: boolean,
  }
}

export class HorizontalPodAutoscaling extends jspb.Message {
  getDisabled(): boolean;
  setDisabled(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HorizontalPodAutoscaling.AsObject;
  static toObject(includeInstance: boolean, msg: HorizontalPodAutoscaling): HorizontalPodAutoscaling.AsObject;
  static serializeBinaryToWriter(message: HorizontalPodAutoscaling, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HorizontalPodAutoscaling;
  static deserializeBinaryFromReader(message: HorizontalPodAutoscaling, reader: jspb.BinaryReader): HorizontalPodAutoscaling;
}

export namespace HorizontalPodAutoscaling {
  export type AsObject = {
    disabled: boolean,
  }
}

export class KubernetesDashboard extends jspb.Message {
  getDisabled(): boolean;
  setDisabled(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KubernetesDashboard.AsObject;
  static toObject(includeInstance: boolean, msg: KubernetesDashboard): KubernetesDashboard.AsObject;
  static serializeBinaryToWriter(message: KubernetesDashboard, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KubernetesDashboard;
  static deserializeBinaryFromReader(message: KubernetesDashboard, reader: jspb.BinaryReader): KubernetesDashboard;
}

export namespace KubernetesDashboard {
  export type AsObject = {
    disabled: boolean,
  }
}

export class NetworkPolicyConfig extends jspb.Message {
  getDisabled(): boolean;
  setDisabled(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NetworkPolicyConfig.AsObject;
  static toObject(includeInstance: boolean, msg: NetworkPolicyConfig): NetworkPolicyConfig.AsObject;
  static serializeBinaryToWriter(message: NetworkPolicyConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NetworkPolicyConfig;
  static deserializeBinaryFromReader(message: NetworkPolicyConfig, reader: jspb.BinaryReader): NetworkPolicyConfig;
}

export namespace NetworkPolicyConfig {
  export type AsObject = {
    disabled: boolean,
  }
}

export class PrivateClusterConfig extends jspb.Message {
  getEnablePrivateNodes(): boolean;
  setEnablePrivateNodes(value: boolean): void;

  getEnablePrivateEndpoint(): boolean;
  setEnablePrivateEndpoint(value: boolean): void;

  getMasterIpv4CidrBlock(): string;
  setMasterIpv4CidrBlock(value: string): void;

  getPrivateEndpoint(): string;
  setPrivateEndpoint(value: string): void;

  getPublicEndpoint(): string;
  setPublicEndpoint(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrivateClusterConfig.AsObject;
  static toObject(includeInstance: boolean, msg: PrivateClusterConfig): PrivateClusterConfig.AsObject;
  static serializeBinaryToWriter(message: PrivateClusterConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PrivateClusterConfig;
  static deserializeBinaryFromReader(message: PrivateClusterConfig, reader: jspb.BinaryReader): PrivateClusterConfig;
}

export namespace PrivateClusterConfig {
  export type AsObject = {
    enablePrivateNodes: boolean,
    enablePrivateEndpoint: boolean,
    masterIpv4CidrBlock: string,
    privateEndpoint: string,
    publicEndpoint: string,
  }
}

export class IstioConfig extends jspb.Message {
  getDisabled(): boolean;
  setDisabled(value: boolean): void;

  getAuth(): IstioConfig.IstioAuthMode;
  setAuth(value: IstioConfig.IstioAuthMode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IstioConfig.AsObject;
  static toObject(includeInstance: boolean, msg: IstioConfig): IstioConfig.AsObject;
  static serializeBinaryToWriter(message: IstioConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IstioConfig;
  static deserializeBinaryFromReader(message: IstioConfig, reader: jspb.BinaryReader): IstioConfig;
}

export namespace IstioConfig {
  export type AsObject = {
    disabled: boolean,
    auth: IstioConfig.IstioAuthMode,
  }

  export enum IstioAuthMode { 
    AUTH_NONE = 0,
    AUTH_MUTUAL_TLS = 1,
  }
}

export class CloudRunConfig extends jspb.Message {
  getDisabled(): boolean;
  setDisabled(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloudRunConfig.AsObject;
  static toObject(includeInstance: boolean, msg: CloudRunConfig): CloudRunConfig.AsObject;
  static serializeBinaryToWriter(message: CloudRunConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloudRunConfig;
  static deserializeBinaryFromReader(message: CloudRunConfig, reader: jspb.BinaryReader): CloudRunConfig;
}

export namespace CloudRunConfig {
  export type AsObject = {
    disabled: boolean,
  }
}

export class MasterAuthorizedNetworksConfig extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): void;

  getCidrBlocksList(): Array<MasterAuthorizedNetworksConfig.CidrBlock>;
  setCidrBlocksList(value: Array<MasterAuthorizedNetworksConfig.CidrBlock>): void;
  clearCidrBlocksList(): void;
  addCidrBlocks(value?: MasterAuthorizedNetworksConfig.CidrBlock, index?: number): MasterAuthorizedNetworksConfig.CidrBlock;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MasterAuthorizedNetworksConfig.AsObject;
  static toObject(includeInstance: boolean, msg: MasterAuthorizedNetworksConfig): MasterAuthorizedNetworksConfig.AsObject;
  static serializeBinaryToWriter(message: MasterAuthorizedNetworksConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MasterAuthorizedNetworksConfig;
  static deserializeBinaryFromReader(message: MasterAuthorizedNetworksConfig, reader: jspb.BinaryReader): MasterAuthorizedNetworksConfig;
}

export namespace MasterAuthorizedNetworksConfig {
  export type AsObject = {
    enabled: boolean,
    cidrBlocksList: Array<MasterAuthorizedNetworksConfig.CidrBlock.AsObject>,
  }

  export class CidrBlock extends jspb.Message {
    getDisplayName(): string;
    setDisplayName(value: string): void;

    getCidrBlock(): string;
    setCidrBlock(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CidrBlock.AsObject;
    static toObject(includeInstance: boolean, msg: CidrBlock): CidrBlock.AsObject;
    static serializeBinaryToWriter(message: CidrBlock, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CidrBlock;
    static deserializeBinaryFromReader(message: CidrBlock, reader: jspb.BinaryReader): CidrBlock;
  }

  export namespace CidrBlock {
    export type AsObject = {
      displayName: string,
      cidrBlock: string,
    }
  }

}

export class LegacyAbac extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LegacyAbac.AsObject;
  static toObject(includeInstance: boolean, msg: LegacyAbac): LegacyAbac.AsObject;
  static serializeBinaryToWriter(message: LegacyAbac, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LegacyAbac;
  static deserializeBinaryFromReader(message: LegacyAbac, reader: jspb.BinaryReader): LegacyAbac;
}

export namespace LegacyAbac {
  export type AsObject = {
    enabled: boolean,
  }
}

export class NetworkPolicy extends jspb.Message {
  getProvider(): NetworkPolicy.Provider;
  setProvider(value: NetworkPolicy.Provider): void;

  getEnabled(): boolean;
  setEnabled(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NetworkPolicy.AsObject;
  static toObject(includeInstance: boolean, msg: NetworkPolicy): NetworkPolicy.AsObject;
  static serializeBinaryToWriter(message: NetworkPolicy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NetworkPolicy;
  static deserializeBinaryFromReader(message: NetworkPolicy, reader: jspb.BinaryReader): NetworkPolicy;
}

export namespace NetworkPolicy {
  export type AsObject = {
    provider: NetworkPolicy.Provider,
    enabled: boolean,
  }

  export enum Provider { 
    PROVIDER_UNSPECIFIED = 0,
    CALICO = 1,
  }
}

export class IPAllocationPolicy extends jspb.Message {
  getUseIpAliases(): boolean;
  setUseIpAliases(value: boolean): void;

  getCreateSubnetwork(): boolean;
  setCreateSubnetwork(value: boolean): void;

  getSubnetworkName(): string;
  setSubnetworkName(value: string): void;

  getClusterIpv4Cidr(): string;
  setClusterIpv4Cidr(value: string): void;

  getNodeIpv4Cidr(): string;
  setNodeIpv4Cidr(value: string): void;

  getServicesIpv4Cidr(): string;
  setServicesIpv4Cidr(value: string): void;

  getClusterSecondaryRangeName(): string;
  setClusterSecondaryRangeName(value: string): void;

  getServicesSecondaryRangeName(): string;
  setServicesSecondaryRangeName(value: string): void;

  getClusterIpv4CidrBlock(): string;
  setClusterIpv4CidrBlock(value: string): void;

  getNodeIpv4CidrBlock(): string;
  setNodeIpv4CidrBlock(value: string): void;

  getServicesIpv4CidrBlock(): string;
  setServicesIpv4CidrBlock(value: string): void;

  getAllowRouteOverlap(): boolean;
  setAllowRouteOverlap(value: boolean): void;

  getTpuIpv4CidrBlock(): string;
  setTpuIpv4CidrBlock(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IPAllocationPolicy.AsObject;
  static toObject(includeInstance: boolean, msg: IPAllocationPolicy): IPAllocationPolicy.AsObject;
  static serializeBinaryToWriter(message: IPAllocationPolicy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IPAllocationPolicy;
  static deserializeBinaryFromReader(message: IPAllocationPolicy, reader: jspb.BinaryReader): IPAllocationPolicy;
}

export namespace IPAllocationPolicy {
  export type AsObject = {
    useIpAliases: boolean,
    createSubnetwork: boolean,
    subnetworkName: string,
    clusterIpv4Cidr: string,
    nodeIpv4Cidr: string,
    servicesIpv4Cidr: string,
    clusterSecondaryRangeName: string,
    servicesSecondaryRangeName: string,
    clusterIpv4CidrBlock: string,
    nodeIpv4CidrBlock: string,
    servicesIpv4CidrBlock: string,
    allowRouteOverlap: boolean,
    tpuIpv4CidrBlock: string,
  }
}

export class BinaryAuthorization extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BinaryAuthorization.AsObject;
  static toObject(includeInstance: boolean, msg: BinaryAuthorization): BinaryAuthorization.AsObject;
  static serializeBinaryToWriter(message: BinaryAuthorization, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BinaryAuthorization;
  static deserializeBinaryFromReader(message: BinaryAuthorization, reader: jspb.BinaryReader): BinaryAuthorization;
}

export namespace BinaryAuthorization {
  export type AsObject = {
    enabled: boolean,
  }
}

export class PodSecurityPolicyConfig extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PodSecurityPolicyConfig.AsObject;
  static toObject(includeInstance: boolean, msg: PodSecurityPolicyConfig): PodSecurityPolicyConfig.AsObject;
  static serializeBinaryToWriter(message: PodSecurityPolicyConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PodSecurityPolicyConfig;
  static deserializeBinaryFromReader(message: PodSecurityPolicyConfig, reader: jspb.BinaryReader): PodSecurityPolicyConfig;
}

export namespace PodSecurityPolicyConfig {
  export type AsObject = {
    enabled: boolean,
  }
}

export class Cluster extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getInitialNodeCount(): number;
  setInitialNodeCount(value: number): void;

  getNodeConfig(): NodeConfig | undefined;
  setNodeConfig(value?: NodeConfig): void;
  hasNodeConfig(): boolean;
  clearNodeConfig(): void;

  getMasterAuth(): MasterAuth | undefined;
  setMasterAuth(value?: MasterAuth): void;
  hasMasterAuth(): boolean;
  clearMasterAuth(): void;

  getLoggingService(): string;
  setLoggingService(value: string): void;

  getMonitoringService(): string;
  setMonitoringService(value: string): void;

  getNetwork(): string;
  setNetwork(value: string): void;

  getClusterIpv4Cidr(): string;
  setClusterIpv4Cidr(value: string): void;

  getAddonsConfig(): AddonsConfig | undefined;
  setAddonsConfig(value?: AddonsConfig): void;
  hasAddonsConfig(): boolean;
  clearAddonsConfig(): void;

  getSubnetwork(): string;
  setSubnetwork(value: string): void;

  getNodePoolsList(): Array<NodePool>;
  setNodePoolsList(value: Array<NodePool>): void;
  clearNodePoolsList(): void;
  addNodePools(value?: NodePool, index?: number): NodePool;

  getLocationsList(): Array<string>;
  setLocationsList(value: Array<string>): void;
  clearLocationsList(): void;
  addLocations(value: string, index?: number): void;

  getEnableKubernetesAlpha(): boolean;
  setEnableKubernetesAlpha(value: boolean): void;

  getResourceLabelsMap(): jspb.Map<string, string>;
  clearResourceLabelsMap(): void;

  getLabelFingerprint(): string;
  setLabelFingerprint(value: string): void;

  getLegacyAbac(): LegacyAbac | undefined;
  setLegacyAbac(value?: LegacyAbac): void;
  hasLegacyAbac(): boolean;
  clearLegacyAbac(): void;

  getNetworkPolicy(): NetworkPolicy | undefined;
  setNetworkPolicy(value?: NetworkPolicy): void;
  hasNetworkPolicy(): boolean;
  clearNetworkPolicy(): void;

  getIpAllocationPolicy(): IPAllocationPolicy | undefined;
  setIpAllocationPolicy(value?: IPAllocationPolicy): void;
  hasIpAllocationPolicy(): boolean;
  clearIpAllocationPolicy(): void;

  getMasterAuthorizedNetworksConfig(): MasterAuthorizedNetworksConfig | undefined;
  setMasterAuthorizedNetworksConfig(value?: MasterAuthorizedNetworksConfig): void;
  hasMasterAuthorizedNetworksConfig(): boolean;
  clearMasterAuthorizedNetworksConfig(): void;

  getMaintenancePolicy(): MaintenancePolicy | undefined;
  setMaintenancePolicy(value?: MaintenancePolicy): void;
  hasMaintenancePolicy(): boolean;
  clearMaintenancePolicy(): void;

  getBinaryAuthorization(): BinaryAuthorization | undefined;
  setBinaryAuthorization(value?: BinaryAuthorization): void;
  hasBinaryAuthorization(): boolean;
  clearBinaryAuthorization(): void;

  getPodSecurityPolicyConfig(): PodSecurityPolicyConfig | undefined;
  setPodSecurityPolicyConfig(value?: PodSecurityPolicyConfig): void;
  hasPodSecurityPolicyConfig(): boolean;
  clearPodSecurityPolicyConfig(): void;

  getAutoscaling(): ClusterAutoscaling | undefined;
  setAutoscaling(value?: ClusterAutoscaling): void;
  hasAutoscaling(): boolean;
  clearAutoscaling(): void;

  getNetworkConfig(): NetworkConfig | undefined;
  setNetworkConfig(value?: NetworkConfig): void;
  hasNetworkConfig(): boolean;
  clearNetworkConfig(): void;

  getPrivateCluster(): boolean;
  setPrivateCluster(value: boolean): void;

  getMasterIpv4CidrBlock(): string;
  setMasterIpv4CidrBlock(value: string): void;

  getDefaultMaxPodsConstraint(): MaxPodsConstraint | undefined;
  setDefaultMaxPodsConstraint(value?: MaxPodsConstraint): void;
  hasDefaultMaxPodsConstraint(): boolean;
  clearDefaultMaxPodsConstraint(): void;

  getResourceUsageExportConfig(): ResourceUsageExportConfig | undefined;
  setResourceUsageExportConfig(value?: ResourceUsageExportConfig): void;
  hasResourceUsageExportConfig(): boolean;
  clearResourceUsageExportConfig(): void;

  getPrivateClusterConfig(): PrivateClusterConfig | undefined;
  setPrivateClusterConfig(value?: PrivateClusterConfig): void;
  hasPrivateClusterConfig(): boolean;
  clearPrivateClusterConfig(): void;

  getVerticalPodAutoscaling(): VerticalPodAutoscaling | undefined;
  setVerticalPodAutoscaling(value?: VerticalPodAutoscaling): void;
  hasVerticalPodAutoscaling(): boolean;
  clearVerticalPodAutoscaling(): void;

  getSelfLink(): string;
  setSelfLink(value: string): void;

  getZone(): string;
  setZone(value: string): void;

  getEndpoint(): string;
  setEndpoint(value: string): void;

  getInitialClusterVersion(): string;
  setInitialClusterVersion(value: string): void;

  getCurrentMasterVersion(): string;
  setCurrentMasterVersion(value: string): void;

  getCurrentNodeVersion(): string;
  setCurrentNodeVersion(value: string): void;

  getCreateTime(): string;
  setCreateTime(value: string): void;

  getStatus(): Cluster.Status;
  setStatus(value: Cluster.Status): void;

  getStatusMessage(): string;
  setStatusMessage(value: string): void;

  getNodeIpv4CidrSize(): number;
  setNodeIpv4CidrSize(value: number): void;

  getServicesIpv4Cidr(): string;
  setServicesIpv4Cidr(value: string): void;

  getInstanceGroupUrlsList(): Array<string>;
  setInstanceGroupUrlsList(value: Array<string>): void;
  clearInstanceGroupUrlsList(): void;
  addInstanceGroupUrls(value: string, index?: number): void;

  getCurrentNodeCount(): number;
  setCurrentNodeCount(value: number): void;

  getExpireTime(): string;
  setExpireTime(value: string): void;

  getLocation(): string;
  setLocation(value: string): void;

  getEnableTpu(): boolean;
  setEnableTpu(value: boolean): void;

  getTpuIpv4CidrBlock(): string;
  setTpuIpv4CidrBlock(value: string): void;

  getConditionsList(): Array<StatusCondition>;
  setConditionsList(value: Array<StatusCondition>): void;
  clearConditionsList(): void;
  addConditions(value?: StatusCondition, index?: number): StatusCondition;

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
    description: string,
    initialNodeCount: number,
    nodeConfig?: NodeConfig.AsObject,
    masterAuth?: MasterAuth.AsObject,
    loggingService: string,
    monitoringService: string,
    network: string,
    clusterIpv4Cidr: string,
    addonsConfig?: AddonsConfig.AsObject,
    subnetwork: string,
    nodePoolsList: Array<NodePool.AsObject>,
    locationsList: Array<string>,
    enableKubernetesAlpha: boolean,
    resourceLabelsMap: Array<[string, string]>,
    labelFingerprint: string,
    legacyAbac?: LegacyAbac.AsObject,
    networkPolicy?: NetworkPolicy.AsObject,
    ipAllocationPolicy?: IPAllocationPolicy.AsObject,
    masterAuthorizedNetworksConfig?: MasterAuthorizedNetworksConfig.AsObject,
    maintenancePolicy?: MaintenancePolicy.AsObject,
    binaryAuthorization?: BinaryAuthorization.AsObject,
    podSecurityPolicyConfig?: PodSecurityPolicyConfig.AsObject,
    autoscaling?: ClusterAutoscaling.AsObject,
    networkConfig?: NetworkConfig.AsObject,
    privateCluster: boolean,
    masterIpv4CidrBlock: string,
    defaultMaxPodsConstraint?: MaxPodsConstraint.AsObject,
    resourceUsageExportConfig?: ResourceUsageExportConfig.AsObject,
    privateClusterConfig?: PrivateClusterConfig.AsObject,
    verticalPodAutoscaling?: VerticalPodAutoscaling.AsObject,
    selfLink: string,
    zone: string,
    endpoint: string,
    initialClusterVersion: string,
    currentMasterVersion: string,
    currentNodeVersion: string,
    createTime: string,
    status: Cluster.Status,
    statusMessage: string,
    nodeIpv4CidrSize: number,
    servicesIpv4Cidr: string,
    instanceGroupUrlsList: Array<string>,
    currentNodeCount: number,
    expireTime: string,
    location: string,
    enableTpu: boolean,
    tpuIpv4CidrBlock: string,
    conditionsList: Array<StatusCondition.AsObject>,
  }

  export enum Status { 
    STATUS_UNSPECIFIED = 0,
    PROVISIONING = 1,
    RUNNING = 2,
    RECONCILING = 3,
    STOPPING = 4,
    ERROR = 5,
    DEGRADED = 6,
  }
}

export class ClusterUpdate extends jspb.Message {
  getDesiredNodeVersion(): string;
  setDesiredNodeVersion(value: string): void;

  getDesiredMonitoringService(): string;
  setDesiredMonitoringService(value: string): void;

  getDesiredAddonsConfig(): AddonsConfig | undefined;
  setDesiredAddonsConfig(value?: AddonsConfig): void;
  hasDesiredAddonsConfig(): boolean;
  clearDesiredAddonsConfig(): void;

  getDesiredNodePoolId(): string;
  setDesiredNodePoolId(value: string): void;

  getDesiredImageType(): string;
  setDesiredImageType(value: string): void;

  getDesiredNodePoolAutoscaling(): NodePoolAutoscaling | undefined;
  setDesiredNodePoolAutoscaling(value?: NodePoolAutoscaling): void;
  hasDesiredNodePoolAutoscaling(): boolean;
  clearDesiredNodePoolAutoscaling(): void;

  getDesiredLocationsList(): Array<string>;
  setDesiredLocationsList(value: Array<string>): void;
  clearDesiredLocationsList(): void;
  addDesiredLocations(value: string, index?: number): void;

  getDesiredMasterAuthorizedNetworksConfig(): MasterAuthorizedNetworksConfig | undefined;
  setDesiredMasterAuthorizedNetworksConfig(value?: MasterAuthorizedNetworksConfig): void;
  hasDesiredMasterAuthorizedNetworksConfig(): boolean;
  clearDesiredMasterAuthorizedNetworksConfig(): void;

  getDesiredPodSecurityPolicyConfig(): PodSecurityPolicyConfig | undefined;
  setDesiredPodSecurityPolicyConfig(value?: PodSecurityPolicyConfig): void;
  hasDesiredPodSecurityPolicyConfig(): boolean;
  clearDesiredPodSecurityPolicyConfig(): void;

  getDesiredClusterAutoscaling(): ClusterAutoscaling | undefined;
  setDesiredClusterAutoscaling(value?: ClusterAutoscaling): void;
  hasDesiredClusterAutoscaling(): boolean;
  clearDesiredClusterAutoscaling(): void;

  getDesiredBinaryAuthorization(): BinaryAuthorization | undefined;
  setDesiredBinaryAuthorization(value?: BinaryAuthorization): void;
  hasDesiredBinaryAuthorization(): boolean;
  clearDesiredBinaryAuthorization(): void;

  getDesiredLoggingService(): string;
  setDesiredLoggingService(value: string): void;

  getDesiredResourceUsageExportConfig(): ResourceUsageExportConfig | undefined;
  setDesiredResourceUsageExportConfig(value?: ResourceUsageExportConfig): void;
  hasDesiredResourceUsageExportConfig(): boolean;
  clearDesiredResourceUsageExportConfig(): void;

  getDesiredVerticalPodAutoscaling(): VerticalPodAutoscaling | undefined;
  setDesiredVerticalPodAutoscaling(value?: VerticalPodAutoscaling): void;
  hasDesiredVerticalPodAutoscaling(): boolean;
  clearDesiredVerticalPodAutoscaling(): void;

  getDesiredMasterVersion(): string;
  setDesiredMasterVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClusterUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: ClusterUpdate): ClusterUpdate.AsObject;
  static serializeBinaryToWriter(message: ClusterUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClusterUpdate;
  static deserializeBinaryFromReader(message: ClusterUpdate, reader: jspb.BinaryReader): ClusterUpdate;
}

export namespace ClusterUpdate {
  export type AsObject = {
    desiredNodeVersion: string,
    desiredMonitoringService: string,
    desiredAddonsConfig?: AddonsConfig.AsObject,
    desiredNodePoolId: string,
    desiredImageType: string,
    desiredNodePoolAutoscaling?: NodePoolAutoscaling.AsObject,
    desiredLocationsList: Array<string>,
    desiredMasterAuthorizedNetworksConfig?: MasterAuthorizedNetworksConfig.AsObject,
    desiredPodSecurityPolicyConfig?: PodSecurityPolicyConfig.AsObject,
    desiredClusterAutoscaling?: ClusterAutoscaling.AsObject,
    desiredBinaryAuthorization?: BinaryAuthorization.AsObject,
    desiredLoggingService: string,
    desiredResourceUsageExportConfig?: ResourceUsageExportConfig.AsObject,
    desiredVerticalPodAutoscaling?: VerticalPodAutoscaling.AsObject,
    desiredMasterVersion: string,
  }
}

export class Operation extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getZone(): string;
  setZone(value: string): void;

  getOperationType(): Operation.Type;
  setOperationType(value: Operation.Type): void;

  getStatus(): Operation.Status;
  setStatus(value: Operation.Status): void;

  getDetail(): string;
  setDetail(value: string): void;

  getStatusMessage(): string;
  setStatusMessage(value: string): void;

  getSelfLink(): string;
  setSelfLink(value: string): void;

  getTargetLink(): string;
  setTargetLink(value: string): void;

  getLocation(): string;
  setLocation(value: string): void;

  getStartTime(): string;
  setStartTime(value: string): void;

  getEndTime(): string;
  setEndTime(value: string): void;

  getProgress(): OperationProgress | undefined;
  setProgress(value?: OperationProgress): void;
  hasProgress(): boolean;
  clearProgress(): void;

  getClusterConditionsList(): Array<StatusCondition>;
  setClusterConditionsList(value: Array<StatusCondition>): void;
  clearClusterConditionsList(): void;
  addClusterConditions(value?: StatusCondition, index?: number): StatusCondition;

  getNodepoolConditionsList(): Array<StatusCondition>;
  setNodepoolConditionsList(value: Array<StatusCondition>): void;
  clearNodepoolConditionsList(): void;
  addNodepoolConditions(value?: StatusCondition, index?: number): StatusCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Operation.AsObject;
  static toObject(includeInstance: boolean, msg: Operation): Operation.AsObject;
  static serializeBinaryToWriter(message: Operation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Operation;
  static deserializeBinaryFromReader(message: Operation, reader: jspb.BinaryReader): Operation;
}

export namespace Operation {
  export type AsObject = {
    name: string,
    zone: string,
    operationType: Operation.Type,
    status: Operation.Status,
    detail: string,
    statusMessage: string,
    selfLink: string,
    targetLink: string,
    location: string,
    startTime: string,
    endTime: string,
    progress?: OperationProgress.AsObject,
    clusterConditionsList: Array<StatusCondition.AsObject>,
    nodepoolConditionsList: Array<StatusCondition.AsObject>,
  }

  export enum Status { 
    STATUS_UNSPECIFIED = 0,
    PENDING = 1,
    RUNNING = 2,
    DONE = 3,
    ABORTING = 4,
  }

  export enum Type { 
    TYPE_UNSPECIFIED = 0,
    CREATE_CLUSTER = 1,
    DELETE_CLUSTER = 2,
    UPGRADE_MASTER = 3,
    UPGRADE_NODES = 4,
    REPAIR_CLUSTER = 5,
    UPDATE_CLUSTER = 6,
    CREATE_NODE_POOL = 7,
    DELETE_NODE_POOL = 8,
    SET_NODE_POOL_MANAGEMENT = 9,
    AUTO_REPAIR_NODES = 10,
    AUTO_UPGRADE_NODES = 11,
    SET_LABELS = 12,
    SET_MASTER_AUTH = 13,
    SET_NODE_POOL_SIZE = 14,
    SET_NETWORK_POLICY = 15,
    SET_MAINTENANCE_POLICY = 16,
  }
}

export class OperationProgress extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getStatus(): Operation.Status;
  setStatus(value: Operation.Status): void;

  getMetricsList(): Array<OperationProgress.Metric>;
  setMetricsList(value: Array<OperationProgress.Metric>): void;
  clearMetricsList(): void;
  addMetrics(value?: OperationProgress.Metric, index?: number): OperationProgress.Metric;

  getStagesList(): Array<OperationProgress>;
  setStagesList(value: Array<OperationProgress>): void;
  clearStagesList(): void;
  addStages(value?: OperationProgress, index?: number): OperationProgress;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OperationProgress.AsObject;
  static toObject(includeInstance: boolean, msg: OperationProgress): OperationProgress.AsObject;
  static serializeBinaryToWriter(message: OperationProgress, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OperationProgress;
  static deserializeBinaryFromReader(message: OperationProgress, reader: jspb.BinaryReader): OperationProgress;
}

export namespace OperationProgress {
  export type AsObject = {
    name: string,
    status: Operation.Status,
    metricsList: Array<OperationProgress.Metric.AsObject>,
    stagesList: Array<OperationProgress.AsObject>,
  }

  export class Metric extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    getIntValue(): number;
    setIntValue(value: number): void;

    getDoubleValue(): number;
    setDoubleValue(value: number): void;

    getStringValue(): string;
    setStringValue(value: string): void;

    getValueCase(): Metric.ValueCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Metric.AsObject;
    static toObject(includeInstance: boolean, msg: Metric): Metric.AsObject;
    static serializeBinaryToWriter(message: Metric, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Metric;
    static deserializeBinaryFromReader(message: Metric, reader: jspb.BinaryReader): Metric;
  }

  export namespace Metric {
    export type AsObject = {
      name: string,
      intValue: number,
      doubleValue: number,
      stringValue: string,
    }

    export enum ValueCase { 
      VALUE_NOT_SET = 0,
      INT_VALUE = 2,
      DOUBLE_VALUE = 3,
      STRING_VALUE = 4,
    }
  }

}

export class CreateClusterRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getZone(): string;
  setZone(value: string): void;

  getCluster(): Cluster | undefined;
  setCluster(value?: Cluster): void;
  hasCluster(): boolean;
  clearCluster(): void;

  getParent(): string;
  setParent(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateClusterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateClusterRequest): CreateClusterRequest.AsObject;
  static serializeBinaryToWriter(message: CreateClusterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateClusterRequest;
  static deserializeBinaryFromReader(message: CreateClusterRequest, reader: jspb.BinaryReader): CreateClusterRequest;
}

export namespace CreateClusterRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    cluster?: Cluster.AsObject,
    parent: string,
  }
}

export class GetClusterRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getZone(): string;
  setZone(value: string): void;

  getClusterId(): string;
  setClusterId(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetClusterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetClusterRequest): GetClusterRequest.AsObject;
  static serializeBinaryToWriter(message: GetClusterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetClusterRequest;
  static deserializeBinaryFromReader(message: GetClusterRequest, reader: jspb.BinaryReader): GetClusterRequest;
}

export namespace GetClusterRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    clusterId: string,
    name: string,
  }
}

export class UpdateClusterRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getZone(): string;
  setZone(value: string): void;

  getClusterId(): string;
  setClusterId(value: string): void;

  getUpdate(): ClusterUpdate | undefined;
  setUpdate(value?: ClusterUpdate): void;
  hasUpdate(): boolean;
  clearUpdate(): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateClusterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateClusterRequest): UpdateClusterRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateClusterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateClusterRequest;
  static deserializeBinaryFromReader(message: UpdateClusterRequest, reader: jspb.BinaryReader): UpdateClusterRequest;
}

export namespace UpdateClusterRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    clusterId: string,
    update?: ClusterUpdate.AsObject,
    name: string,
  }
}

export class UpdateNodePoolRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getZone(): string;
  setZone(value: string): void;

  getClusterId(): string;
  setClusterId(value: string): void;

  getNodePoolId(): string;
  setNodePoolId(value: string): void;

  getNodeVersion(): string;
  setNodeVersion(value: string): void;

  getImageType(): string;
  setImageType(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateNodePoolRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateNodePoolRequest): UpdateNodePoolRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateNodePoolRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateNodePoolRequest;
  static deserializeBinaryFromReader(message: UpdateNodePoolRequest, reader: jspb.BinaryReader): UpdateNodePoolRequest;
}

export namespace UpdateNodePoolRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    clusterId: string,
    nodePoolId: string,
    nodeVersion: string,
    imageType: string,
    name: string,
  }
}

export class SetNodePoolAutoscalingRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getZone(): string;
  setZone(value: string): void;

  getClusterId(): string;
  setClusterId(value: string): void;

  getNodePoolId(): string;
  setNodePoolId(value: string): void;

  getAutoscaling(): NodePoolAutoscaling | undefined;
  setAutoscaling(value?: NodePoolAutoscaling): void;
  hasAutoscaling(): boolean;
  clearAutoscaling(): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetNodePoolAutoscalingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetNodePoolAutoscalingRequest): SetNodePoolAutoscalingRequest.AsObject;
  static serializeBinaryToWriter(message: SetNodePoolAutoscalingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetNodePoolAutoscalingRequest;
  static deserializeBinaryFromReader(message: SetNodePoolAutoscalingRequest, reader: jspb.BinaryReader): SetNodePoolAutoscalingRequest;
}

export namespace SetNodePoolAutoscalingRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    clusterId: string,
    nodePoolId: string,
    autoscaling?: NodePoolAutoscaling.AsObject,
    name: string,
  }
}

export class SetLoggingServiceRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getZone(): string;
  setZone(value: string): void;

  getClusterId(): string;
  setClusterId(value: string): void;

  getLoggingService(): string;
  setLoggingService(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetLoggingServiceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetLoggingServiceRequest): SetLoggingServiceRequest.AsObject;
  static serializeBinaryToWriter(message: SetLoggingServiceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetLoggingServiceRequest;
  static deserializeBinaryFromReader(message: SetLoggingServiceRequest, reader: jspb.BinaryReader): SetLoggingServiceRequest;
}

export namespace SetLoggingServiceRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    clusterId: string,
    loggingService: string,
    name: string,
  }
}

export class SetMonitoringServiceRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getZone(): string;
  setZone(value: string): void;

  getClusterId(): string;
  setClusterId(value: string): void;

  getMonitoringService(): string;
  setMonitoringService(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetMonitoringServiceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetMonitoringServiceRequest): SetMonitoringServiceRequest.AsObject;
  static serializeBinaryToWriter(message: SetMonitoringServiceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetMonitoringServiceRequest;
  static deserializeBinaryFromReader(message: SetMonitoringServiceRequest, reader: jspb.BinaryReader): SetMonitoringServiceRequest;
}

export namespace SetMonitoringServiceRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    clusterId: string,
    monitoringService: string,
    name: string,
  }
}

export class SetAddonsConfigRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getZone(): string;
  setZone(value: string): void;

  getClusterId(): string;
  setClusterId(value: string): void;

  getAddonsConfig(): AddonsConfig | undefined;
  setAddonsConfig(value?: AddonsConfig): void;
  hasAddonsConfig(): boolean;
  clearAddonsConfig(): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetAddonsConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetAddonsConfigRequest): SetAddonsConfigRequest.AsObject;
  static serializeBinaryToWriter(message: SetAddonsConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetAddonsConfigRequest;
  static deserializeBinaryFromReader(message: SetAddonsConfigRequest, reader: jspb.BinaryReader): SetAddonsConfigRequest;
}

export namespace SetAddonsConfigRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    clusterId: string,
    addonsConfig?: AddonsConfig.AsObject,
    name: string,
  }
}

export class SetLocationsRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getZone(): string;
  setZone(value: string): void;

  getClusterId(): string;
  setClusterId(value: string): void;

  getLocationsList(): Array<string>;
  setLocationsList(value: Array<string>): void;
  clearLocationsList(): void;
  addLocations(value: string, index?: number): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetLocationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetLocationsRequest): SetLocationsRequest.AsObject;
  static serializeBinaryToWriter(message: SetLocationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetLocationsRequest;
  static deserializeBinaryFromReader(message: SetLocationsRequest, reader: jspb.BinaryReader): SetLocationsRequest;
}

export namespace SetLocationsRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    clusterId: string,
    locationsList: Array<string>,
    name: string,
  }
}

export class UpdateMasterRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getZone(): string;
  setZone(value: string): void;

  getClusterId(): string;
  setClusterId(value: string): void;

  getMasterVersion(): string;
  setMasterVersion(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMasterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMasterRequest): UpdateMasterRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateMasterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMasterRequest;
  static deserializeBinaryFromReader(message: UpdateMasterRequest, reader: jspb.BinaryReader): UpdateMasterRequest;
}

export namespace UpdateMasterRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    clusterId: string,
    masterVersion: string,
    name: string,
  }
}

export class SetMasterAuthRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getZone(): string;
  setZone(value: string): void;

  getClusterId(): string;
  setClusterId(value: string): void;

  getAction(): SetMasterAuthRequest.Action;
  setAction(value: SetMasterAuthRequest.Action): void;

  getUpdate(): MasterAuth | undefined;
  setUpdate(value?: MasterAuth): void;
  hasUpdate(): boolean;
  clearUpdate(): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetMasterAuthRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetMasterAuthRequest): SetMasterAuthRequest.AsObject;
  static serializeBinaryToWriter(message: SetMasterAuthRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetMasterAuthRequest;
  static deserializeBinaryFromReader(message: SetMasterAuthRequest, reader: jspb.BinaryReader): SetMasterAuthRequest;
}

export namespace SetMasterAuthRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    clusterId: string,
    action: SetMasterAuthRequest.Action,
    update?: MasterAuth.AsObject,
    name: string,
  }

  export enum Action { 
    UNKNOWN = 0,
    SET_PASSWORD = 1,
    GENERATE_PASSWORD = 2,
    SET_USERNAME = 3,
  }
}

export class DeleteClusterRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getZone(): string;
  setZone(value: string): void;

  getClusterId(): string;
  setClusterId(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteClusterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteClusterRequest): DeleteClusterRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteClusterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteClusterRequest;
  static deserializeBinaryFromReader(message: DeleteClusterRequest, reader: jspb.BinaryReader): DeleteClusterRequest;
}

export namespace DeleteClusterRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    clusterId: string,
    name: string,
  }
}

export class ListClustersRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getZone(): string;
  setZone(value: string): void;

  getParent(): string;
  setParent(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListClustersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListClustersRequest): ListClustersRequest.AsObject;
  static serializeBinaryToWriter(message: ListClustersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListClustersRequest;
  static deserializeBinaryFromReader(message: ListClustersRequest, reader: jspb.BinaryReader): ListClustersRequest;
}

export namespace ListClustersRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    parent: string,
  }
}

export class ListClustersResponse extends jspb.Message {
  getClustersList(): Array<Cluster>;
  setClustersList(value: Array<Cluster>): void;
  clearClustersList(): void;
  addClusters(value?: Cluster, index?: number): Cluster;

  getMissingZonesList(): Array<string>;
  setMissingZonesList(value: Array<string>): void;
  clearMissingZonesList(): void;
  addMissingZones(value: string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListClustersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListClustersResponse): ListClustersResponse.AsObject;
  static serializeBinaryToWriter(message: ListClustersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListClustersResponse;
  static deserializeBinaryFromReader(message: ListClustersResponse, reader: jspb.BinaryReader): ListClustersResponse;
}

export namespace ListClustersResponse {
  export type AsObject = {
    clustersList: Array<Cluster.AsObject>,
    missingZonesList: Array<string>,
  }
}

export class GetOperationRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getZone(): string;
  setZone(value: string): void;

  getOperationId(): string;
  setOperationId(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOperationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOperationRequest): GetOperationRequest.AsObject;
  static serializeBinaryToWriter(message: GetOperationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOperationRequest;
  static deserializeBinaryFromReader(message: GetOperationRequest, reader: jspb.BinaryReader): GetOperationRequest;
}

export namespace GetOperationRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    operationId: string,
    name: string,
  }
}

export class ListOperationsRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getZone(): string;
  setZone(value: string): void;

  getParent(): string;
  setParent(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOperationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListOperationsRequest): ListOperationsRequest.AsObject;
  static serializeBinaryToWriter(message: ListOperationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOperationsRequest;
  static deserializeBinaryFromReader(message: ListOperationsRequest, reader: jspb.BinaryReader): ListOperationsRequest;
}

export namespace ListOperationsRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    parent: string,
  }
}

export class CancelOperationRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getZone(): string;
  setZone(value: string): void;

  getOperationId(): string;
  setOperationId(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelOperationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelOperationRequest): CancelOperationRequest.AsObject;
  static serializeBinaryToWriter(message: CancelOperationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelOperationRequest;
  static deserializeBinaryFromReader(message: CancelOperationRequest, reader: jspb.BinaryReader): CancelOperationRequest;
}

export namespace CancelOperationRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    operationId: string,
    name: string,
  }
}

export class ListOperationsResponse extends jspb.Message {
  getOperationsList(): Array<Operation>;
  setOperationsList(value: Array<Operation>): void;
  clearOperationsList(): void;
  addOperations(value?: Operation, index?: number): Operation;

  getMissingZonesList(): Array<string>;
  setMissingZonesList(value: Array<string>): void;
  clearMissingZonesList(): void;
  addMissingZones(value: string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOperationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListOperationsResponse): ListOperationsResponse.AsObject;
  static serializeBinaryToWriter(message: ListOperationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOperationsResponse;
  static deserializeBinaryFromReader(message: ListOperationsResponse, reader: jspb.BinaryReader): ListOperationsResponse;
}

export namespace ListOperationsResponse {
  export type AsObject = {
    operationsList: Array<Operation.AsObject>,
    missingZonesList: Array<string>,
  }
}

export class GetServerConfigRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getZone(): string;
  setZone(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetServerConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetServerConfigRequest): GetServerConfigRequest.AsObject;
  static serializeBinaryToWriter(message: GetServerConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetServerConfigRequest;
  static deserializeBinaryFromReader(message: GetServerConfigRequest, reader: jspb.BinaryReader): GetServerConfigRequest;
}

export namespace GetServerConfigRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    name: string,
  }
}

export class ServerConfig extends jspb.Message {
  getDefaultClusterVersion(): string;
  setDefaultClusterVersion(value: string): void;

  getValidNodeVersionsList(): Array<string>;
  setValidNodeVersionsList(value: Array<string>): void;
  clearValidNodeVersionsList(): void;
  addValidNodeVersions(value: string, index?: number): void;

  getDefaultImageType(): string;
  setDefaultImageType(value: string): void;

  getValidImageTypesList(): Array<string>;
  setValidImageTypesList(value: Array<string>): void;
  clearValidImageTypesList(): void;
  addValidImageTypes(value: string, index?: number): void;

  getValidMasterVersionsList(): Array<string>;
  setValidMasterVersionsList(value: Array<string>): void;
  clearValidMasterVersionsList(): void;
  addValidMasterVersions(value: string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerConfig.AsObject;
  static toObject(includeInstance: boolean, msg: ServerConfig): ServerConfig.AsObject;
  static serializeBinaryToWriter(message: ServerConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerConfig;
  static deserializeBinaryFromReader(message: ServerConfig, reader: jspb.BinaryReader): ServerConfig;
}

export namespace ServerConfig {
  export type AsObject = {
    defaultClusterVersion: string,
    validNodeVersionsList: Array<string>,
    defaultImageType: string,
    validImageTypesList: Array<string>,
    validMasterVersionsList: Array<string>,
  }
}

export class CreateNodePoolRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getZone(): string;
  setZone(value: string): void;

  getClusterId(): string;
  setClusterId(value: string): void;

  getNodePool(): NodePool | undefined;
  setNodePool(value?: NodePool): void;
  hasNodePool(): boolean;
  clearNodePool(): void;

  getParent(): string;
  setParent(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateNodePoolRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateNodePoolRequest): CreateNodePoolRequest.AsObject;
  static serializeBinaryToWriter(message: CreateNodePoolRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateNodePoolRequest;
  static deserializeBinaryFromReader(message: CreateNodePoolRequest, reader: jspb.BinaryReader): CreateNodePoolRequest;
}

export namespace CreateNodePoolRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    clusterId: string,
    nodePool?: NodePool.AsObject,
    parent: string,
  }
}

export class DeleteNodePoolRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getZone(): string;
  setZone(value: string): void;

  getClusterId(): string;
  setClusterId(value: string): void;

  getNodePoolId(): string;
  setNodePoolId(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteNodePoolRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteNodePoolRequest): DeleteNodePoolRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteNodePoolRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteNodePoolRequest;
  static deserializeBinaryFromReader(message: DeleteNodePoolRequest, reader: jspb.BinaryReader): DeleteNodePoolRequest;
}

export namespace DeleteNodePoolRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    clusterId: string,
    nodePoolId: string,
    name: string,
  }
}

export class ListNodePoolsRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getZone(): string;
  setZone(value: string): void;

  getClusterId(): string;
  setClusterId(value: string): void;

  getParent(): string;
  setParent(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNodePoolsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListNodePoolsRequest): ListNodePoolsRequest.AsObject;
  static serializeBinaryToWriter(message: ListNodePoolsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNodePoolsRequest;
  static deserializeBinaryFromReader(message: ListNodePoolsRequest, reader: jspb.BinaryReader): ListNodePoolsRequest;
}

export namespace ListNodePoolsRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    clusterId: string,
    parent: string,
  }
}

export class GetNodePoolRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getZone(): string;
  setZone(value: string): void;

  getClusterId(): string;
  setClusterId(value: string): void;

  getNodePoolId(): string;
  setNodePoolId(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNodePoolRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNodePoolRequest): GetNodePoolRequest.AsObject;
  static serializeBinaryToWriter(message: GetNodePoolRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNodePoolRequest;
  static deserializeBinaryFromReader(message: GetNodePoolRequest, reader: jspb.BinaryReader): GetNodePoolRequest;
}

export namespace GetNodePoolRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    clusterId: string,
    nodePoolId: string,
    name: string,
  }
}

export class NodePool extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getConfig(): NodeConfig | undefined;
  setConfig(value?: NodeConfig): void;
  hasConfig(): boolean;
  clearConfig(): void;

  getInitialNodeCount(): number;
  setInitialNodeCount(value: number): void;

  getSelfLink(): string;
  setSelfLink(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  getInstanceGroupUrlsList(): Array<string>;
  setInstanceGroupUrlsList(value: Array<string>): void;
  clearInstanceGroupUrlsList(): void;
  addInstanceGroupUrls(value: string, index?: number): void;

  getStatus(): NodePool.Status;
  setStatus(value: NodePool.Status): void;

  getStatusMessage(): string;
  setStatusMessage(value: string): void;

  getAutoscaling(): NodePoolAutoscaling | undefined;
  setAutoscaling(value?: NodePoolAutoscaling): void;
  hasAutoscaling(): boolean;
  clearAutoscaling(): void;

  getManagement(): NodeManagement | undefined;
  setManagement(value?: NodeManagement): void;
  hasManagement(): boolean;
  clearManagement(): void;

  getMaxPodsConstraint(): MaxPodsConstraint | undefined;
  setMaxPodsConstraint(value?: MaxPodsConstraint): void;
  hasMaxPodsConstraint(): boolean;
  clearMaxPodsConstraint(): void;

  getConditionsList(): Array<StatusCondition>;
  setConditionsList(value: Array<StatusCondition>): void;
  clearConditionsList(): void;
  addConditions(value?: StatusCondition, index?: number): StatusCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodePool.AsObject;
  static toObject(includeInstance: boolean, msg: NodePool): NodePool.AsObject;
  static serializeBinaryToWriter(message: NodePool, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodePool;
  static deserializeBinaryFromReader(message: NodePool, reader: jspb.BinaryReader): NodePool;
}

export namespace NodePool {
  export type AsObject = {
    name: string,
    config?: NodeConfig.AsObject,
    initialNodeCount: number,
    selfLink: string,
    version: string,
    instanceGroupUrlsList: Array<string>,
    status: NodePool.Status,
    statusMessage: string,
    autoscaling?: NodePoolAutoscaling.AsObject,
    management?: NodeManagement.AsObject,
    maxPodsConstraint?: MaxPodsConstraint.AsObject,
    conditionsList: Array<StatusCondition.AsObject>,
  }

  export enum Status { 
    STATUS_UNSPECIFIED = 0,
    PROVISIONING = 1,
    RUNNING = 2,
    RUNNING_WITH_ERROR = 3,
    RECONCILING = 4,
    STOPPING = 5,
    ERROR = 6,
  }
}

export class NodeManagement extends jspb.Message {
  getAutoUpgrade(): boolean;
  setAutoUpgrade(value: boolean): void;

  getAutoRepair(): boolean;
  setAutoRepair(value: boolean): void;

  getUpgradeOptions(): AutoUpgradeOptions | undefined;
  setUpgradeOptions(value?: AutoUpgradeOptions): void;
  hasUpgradeOptions(): boolean;
  clearUpgradeOptions(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodeManagement.AsObject;
  static toObject(includeInstance: boolean, msg: NodeManagement): NodeManagement.AsObject;
  static serializeBinaryToWriter(message: NodeManagement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodeManagement;
  static deserializeBinaryFromReader(message: NodeManagement, reader: jspb.BinaryReader): NodeManagement;
}

export namespace NodeManagement {
  export type AsObject = {
    autoUpgrade: boolean,
    autoRepair: boolean,
    upgradeOptions?: AutoUpgradeOptions.AsObject,
  }
}

export class AutoUpgradeOptions extends jspb.Message {
  getAutoUpgradeStartTime(): string;
  setAutoUpgradeStartTime(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AutoUpgradeOptions.AsObject;
  static toObject(includeInstance: boolean, msg: AutoUpgradeOptions): AutoUpgradeOptions.AsObject;
  static serializeBinaryToWriter(message: AutoUpgradeOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AutoUpgradeOptions;
  static deserializeBinaryFromReader(message: AutoUpgradeOptions, reader: jspb.BinaryReader): AutoUpgradeOptions;
}

export namespace AutoUpgradeOptions {
  export type AsObject = {
    autoUpgradeStartTime: string,
    description: string,
  }
}

export class MaintenancePolicy extends jspb.Message {
  getWindow(): MaintenanceWindow | undefined;
  setWindow(value?: MaintenanceWindow): void;
  hasWindow(): boolean;
  clearWindow(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MaintenancePolicy.AsObject;
  static toObject(includeInstance: boolean, msg: MaintenancePolicy): MaintenancePolicy.AsObject;
  static serializeBinaryToWriter(message: MaintenancePolicy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MaintenancePolicy;
  static deserializeBinaryFromReader(message: MaintenancePolicy, reader: jspb.BinaryReader): MaintenancePolicy;
}

export namespace MaintenancePolicy {
  export type AsObject = {
    window?: MaintenanceWindow.AsObject,
  }
}

export class MaintenanceWindow extends jspb.Message {
  getDailyMaintenanceWindow(): DailyMaintenanceWindow | undefined;
  setDailyMaintenanceWindow(value?: DailyMaintenanceWindow): void;
  hasDailyMaintenanceWindow(): boolean;
  clearDailyMaintenanceWindow(): void;

  getPolicyCase(): MaintenanceWindow.PolicyCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MaintenanceWindow.AsObject;
  static toObject(includeInstance: boolean, msg: MaintenanceWindow): MaintenanceWindow.AsObject;
  static serializeBinaryToWriter(message: MaintenanceWindow, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MaintenanceWindow;
  static deserializeBinaryFromReader(message: MaintenanceWindow, reader: jspb.BinaryReader): MaintenanceWindow;
}

export namespace MaintenanceWindow {
  export type AsObject = {
    dailyMaintenanceWindow?: DailyMaintenanceWindow.AsObject,
  }

  export enum PolicyCase { 
    POLICY_NOT_SET = 0,
    DAILY_MAINTENANCE_WINDOW = 2,
  }
}

export class DailyMaintenanceWindow extends jspb.Message {
  getStartTime(): string;
  setStartTime(value: string): void;

  getDuration(): string;
  setDuration(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DailyMaintenanceWindow.AsObject;
  static toObject(includeInstance: boolean, msg: DailyMaintenanceWindow): DailyMaintenanceWindow.AsObject;
  static serializeBinaryToWriter(message: DailyMaintenanceWindow, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DailyMaintenanceWindow;
  static deserializeBinaryFromReader(message: DailyMaintenanceWindow, reader: jspb.BinaryReader): DailyMaintenanceWindow;
}

export namespace DailyMaintenanceWindow {
  export type AsObject = {
    startTime: string,
    duration: string,
  }
}

export class SetNodePoolManagementRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getZone(): string;
  setZone(value: string): void;

  getClusterId(): string;
  setClusterId(value: string): void;

  getNodePoolId(): string;
  setNodePoolId(value: string): void;

  getManagement(): NodeManagement | undefined;
  setManagement(value?: NodeManagement): void;
  hasManagement(): boolean;
  clearManagement(): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetNodePoolManagementRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetNodePoolManagementRequest): SetNodePoolManagementRequest.AsObject;
  static serializeBinaryToWriter(message: SetNodePoolManagementRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetNodePoolManagementRequest;
  static deserializeBinaryFromReader(message: SetNodePoolManagementRequest, reader: jspb.BinaryReader): SetNodePoolManagementRequest;
}

export namespace SetNodePoolManagementRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    clusterId: string,
    nodePoolId: string,
    management?: NodeManagement.AsObject,
    name: string,
  }
}

export class SetNodePoolSizeRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getZone(): string;
  setZone(value: string): void;

  getClusterId(): string;
  setClusterId(value: string): void;

  getNodePoolId(): string;
  setNodePoolId(value: string): void;

  getNodeCount(): number;
  setNodeCount(value: number): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetNodePoolSizeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetNodePoolSizeRequest): SetNodePoolSizeRequest.AsObject;
  static serializeBinaryToWriter(message: SetNodePoolSizeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetNodePoolSizeRequest;
  static deserializeBinaryFromReader(message: SetNodePoolSizeRequest, reader: jspb.BinaryReader): SetNodePoolSizeRequest;
}

export namespace SetNodePoolSizeRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    clusterId: string,
    nodePoolId: string,
    nodeCount: number,
    name: string,
  }
}

export class RollbackNodePoolUpgradeRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getZone(): string;
  setZone(value: string): void;

  getClusterId(): string;
  setClusterId(value: string): void;

  getNodePoolId(): string;
  setNodePoolId(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RollbackNodePoolUpgradeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RollbackNodePoolUpgradeRequest): RollbackNodePoolUpgradeRequest.AsObject;
  static serializeBinaryToWriter(message: RollbackNodePoolUpgradeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RollbackNodePoolUpgradeRequest;
  static deserializeBinaryFromReader(message: RollbackNodePoolUpgradeRequest, reader: jspb.BinaryReader): RollbackNodePoolUpgradeRequest;
}

export namespace RollbackNodePoolUpgradeRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    clusterId: string,
    nodePoolId: string,
    name: string,
  }
}

export class ListNodePoolsResponse extends jspb.Message {
  getNodePoolsList(): Array<NodePool>;
  setNodePoolsList(value: Array<NodePool>): void;
  clearNodePoolsList(): void;
  addNodePools(value?: NodePool, index?: number): NodePool;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNodePoolsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListNodePoolsResponse): ListNodePoolsResponse.AsObject;
  static serializeBinaryToWriter(message: ListNodePoolsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNodePoolsResponse;
  static deserializeBinaryFromReader(message: ListNodePoolsResponse, reader: jspb.BinaryReader): ListNodePoolsResponse;
}

export namespace ListNodePoolsResponse {
  export type AsObject = {
    nodePoolsList: Array<NodePool.AsObject>,
  }
}

export class ClusterAutoscaling extends jspb.Message {
  getEnableNodeAutoprovisioning(): boolean;
  setEnableNodeAutoprovisioning(value: boolean): void;

  getResourceLimitsList(): Array<ResourceLimit>;
  setResourceLimitsList(value: Array<ResourceLimit>): void;
  clearResourceLimitsList(): void;
  addResourceLimits(value?: ResourceLimit, index?: number): ResourceLimit;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClusterAutoscaling.AsObject;
  static toObject(includeInstance: boolean, msg: ClusterAutoscaling): ClusterAutoscaling.AsObject;
  static serializeBinaryToWriter(message: ClusterAutoscaling, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClusterAutoscaling;
  static deserializeBinaryFromReader(message: ClusterAutoscaling, reader: jspb.BinaryReader): ClusterAutoscaling;
}

export namespace ClusterAutoscaling {
  export type AsObject = {
    enableNodeAutoprovisioning: boolean,
    resourceLimitsList: Array<ResourceLimit.AsObject>,
  }
}

export class ResourceLimit extends jspb.Message {
  getResourceType(): string;
  setResourceType(value: string): void;

  getMinimum(): number;
  setMinimum(value: number): void;

  getMaximum(): number;
  setMaximum(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceLimit.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceLimit): ResourceLimit.AsObject;
  static serializeBinaryToWriter(message: ResourceLimit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceLimit;
  static deserializeBinaryFromReader(message: ResourceLimit, reader: jspb.BinaryReader): ResourceLimit;
}

export namespace ResourceLimit {
  export type AsObject = {
    resourceType: string,
    minimum: number,
    maximum: number,
  }
}

export class NodePoolAutoscaling extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): void;

  getMinNodeCount(): number;
  setMinNodeCount(value: number): void;

  getMaxNodeCount(): number;
  setMaxNodeCount(value: number): void;

  getAutoprovisioned(): boolean;
  setAutoprovisioned(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodePoolAutoscaling.AsObject;
  static toObject(includeInstance: boolean, msg: NodePoolAutoscaling): NodePoolAutoscaling.AsObject;
  static serializeBinaryToWriter(message: NodePoolAutoscaling, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodePoolAutoscaling;
  static deserializeBinaryFromReader(message: NodePoolAutoscaling, reader: jspb.BinaryReader): NodePoolAutoscaling;
}

export namespace NodePoolAutoscaling {
  export type AsObject = {
    enabled: boolean,
    minNodeCount: number,
    maxNodeCount: number,
    autoprovisioned: boolean,
  }
}

export class SetLabelsRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getZone(): string;
  setZone(value: string): void;

  getClusterId(): string;
  setClusterId(value: string): void;

  getResourceLabelsMap(): jspb.Map<string, string>;
  clearResourceLabelsMap(): void;

  getLabelFingerprint(): string;
  setLabelFingerprint(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetLabelsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetLabelsRequest): SetLabelsRequest.AsObject;
  static serializeBinaryToWriter(message: SetLabelsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetLabelsRequest;
  static deserializeBinaryFromReader(message: SetLabelsRequest, reader: jspb.BinaryReader): SetLabelsRequest;
}

export namespace SetLabelsRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    clusterId: string,
    resourceLabelsMap: Array<[string, string]>,
    labelFingerprint: string,
    name: string,
  }
}

export class SetLegacyAbacRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getZone(): string;
  setZone(value: string): void;

  getClusterId(): string;
  setClusterId(value: string): void;

  getEnabled(): boolean;
  setEnabled(value: boolean): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetLegacyAbacRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetLegacyAbacRequest): SetLegacyAbacRequest.AsObject;
  static serializeBinaryToWriter(message: SetLegacyAbacRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetLegacyAbacRequest;
  static deserializeBinaryFromReader(message: SetLegacyAbacRequest, reader: jspb.BinaryReader): SetLegacyAbacRequest;
}

export namespace SetLegacyAbacRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    clusterId: string,
    enabled: boolean,
    name: string,
  }
}

export class StartIPRotationRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getZone(): string;
  setZone(value: string): void;

  getClusterId(): string;
  setClusterId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getRotateCredentials(): boolean;
  setRotateCredentials(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartIPRotationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StartIPRotationRequest): StartIPRotationRequest.AsObject;
  static serializeBinaryToWriter(message: StartIPRotationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartIPRotationRequest;
  static deserializeBinaryFromReader(message: StartIPRotationRequest, reader: jspb.BinaryReader): StartIPRotationRequest;
}

export namespace StartIPRotationRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    clusterId: string,
    name: string,
    rotateCredentials: boolean,
  }
}

export class CompleteIPRotationRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getZone(): string;
  setZone(value: string): void;

  getClusterId(): string;
  setClusterId(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompleteIPRotationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CompleteIPRotationRequest): CompleteIPRotationRequest.AsObject;
  static serializeBinaryToWriter(message: CompleteIPRotationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompleteIPRotationRequest;
  static deserializeBinaryFromReader(message: CompleteIPRotationRequest, reader: jspb.BinaryReader): CompleteIPRotationRequest;
}

export namespace CompleteIPRotationRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    clusterId: string,
    name: string,
  }
}

export class AcceleratorConfig extends jspb.Message {
  getAcceleratorCount(): number;
  setAcceleratorCount(value: number): void;

  getAcceleratorType(): string;
  setAcceleratorType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AcceleratorConfig.AsObject;
  static toObject(includeInstance: boolean, msg: AcceleratorConfig): AcceleratorConfig.AsObject;
  static serializeBinaryToWriter(message: AcceleratorConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AcceleratorConfig;
  static deserializeBinaryFromReader(message: AcceleratorConfig, reader: jspb.BinaryReader): AcceleratorConfig;
}

export namespace AcceleratorConfig {
  export type AsObject = {
    acceleratorCount: number,
    acceleratorType: string,
  }
}

export class WorkloadMetadataConfig extends jspb.Message {
  getNodeMetadata(): WorkloadMetadataConfig.NodeMetadata;
  setNodeMetadata(value: WorkloadMetadataConfig.NodeMetadata): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkloadMetadataConfig.AsObject;
  static toObject(includeInstance: boolean, msg: WorkloadMetadataConfig): WorkloadMetadataConfig.AsObject;
  static serializeBinaryToWriter(message: WorkloadMetadataConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkloadMetadataConfig;
  static deserializeBinaryFromReader(message: WorkloadMetadataConfig, reader: jspb.BinaryReader): WorkloadMetadataConfig;
}

export namespace WorkloadMetadataConfig {
  export type AsObject = {
    nodeMetadata: WorkloadMetadataConfig.NodeMetadata,
  }

  export enum NodeMetadata { 
    UNSPECIFIED = 0,
    SECURE = 1,
    EXPOSE = 2,
  }
}

export class SetNetworkPolicyRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getZone(): string;
  setZone(value: string): void;

  getClusterId(): string;
  setClusterId(value: string): void;

  getNetworkPolicy(): NetworkPolicy | undefined;
  setNetworkPolicy(value?: NetworkPolicy): void;
  hasNetworkPolicy(): boolean;
  clearNetworkPolicy(): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetNetworkPolicyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetNetworkPolicyRequest): SetNetworkPolicyRequest.AsObject;
  static serializeBinaryToWriter(message: SetNetworkPolicyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetNetworkPolicyRequest;
  static deserializeBinaryFromReader(message: SetNetworkPolicyRequest, reader: jspb.BinaryReader): SetNetworkPolicyRequest;
}

export namespace SetNetworkPolicyRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    clusterId: string,
    networkPolicy?: NetworkPolicy.AsObject,
    name: string,
  }
}

export class SetMaintenancePolicyRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getZone(): string;
  setZone(value: string): void;

  getClusterId(): string;
  setClusterId(value: string): void;

  getMaintenancePolicy(): MaintenancePolicy | undefined;
  setMaintenancePolicy(value?: MaintenancePolicy): void;
  hasMaintenancePolicy(): boolean;
  clearMaintenancePolicy(): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetMaintenancePolicyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetMaintenancePolicyRequest): SetMaintenancePolicyRequest.AsObject;
  static serializeBinaryToWriter(message: SetMaintenancePolicyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetMaintenancePolicyRequest;
  static deserializeBinaryFromReader(message: SetMaintenancePolicyRequest, reader: jspb.BinaryReader): SetMaintenancePolicyRequest;
}

export namespace SetMaintenancePolicyRequest {
  export type AsObject = {
    projectId: string,
    zone: string,
    clusterId: string,
    maintenancePolicy?: MaintenancePolicy.AsObject,
    name: string,
  }
}

export class ListLocationsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLocationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListLocationsRequest): ListLocationsRequest.AsObject;
  static serializeBinaryToWriter(message: ListLocationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLocationsRequest;
  static deserializeBinaryFromReader(message: ListLocationsRequest, reader: jspb.BinaryReader): ListLocationsRequest;
}

export namespace ListLocationsRequest {
  export type AsObject = {
    parent: string,
  }
}

export class ListLocationsResponse extends jspb.Message {
  getLocationsList(): Array<Location>;
  setLocationsList(value: Array<Location>): void;
  clearLocationsList(): void;
  addLocations(value?: Location, index?: number): Location;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLocationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListLocationsResponse): ListLocationsResponse.AsObject;
  static serializeBinaryToWriter(message: ListLocationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLocationsResponse;
  static deserializeBinaryFromReader(message: ListLocationsResponse, reader: jspb.BinaryReader): ListLocationsResponse;
}

export namespace ListLocationsResponse {
  export type AsObject = {
    locationsList: Array<Location.AsObject>,
    nextPageToken: string,
  }
}

export class Location extends jspb.Message {
  getType(): Location.LocationType;
  setType(value: Location.LocationType): void;

  getName(): string;
  setName(value: string): void;

  getRecommended(): boolean;
  setRecommended(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Location.AsObject;
  static toObject(includeInstance: boolean, msg: Location): Location.AsObject;
  static serializeBinaryToWriter(message: Location, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Location;
  static deserializeBinaryFromReader(message: Location, reader: jspb.BinaryReader): Location;
}

export namespace Location {
  export type AsObject = {
    type: Location.LocationType,
    name: string,
    recommended: boolean,
  }

  export enum LocationType { 
    LOCATION_TYPE_UNSPECIFIED = 0,
    ZONE = 1,
    REGION = 2,
  }
}

export class StatusCondition extends jspb.Message {
  getCode(): StatusCondition.Code;
  setCode(value: StatusCondition.Code): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusCondition.AsObject;
  static toObject(includeInstance: boolean, msg: StatusCondition): StatusCondition.AsObject;
  static serializeBinaryToWriter(message: StatusCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusCondition;
  static deserializeBinaryFromReader(message: StatusCondition, reader: jspb.BinaryReader): StatusCondition;
}

export namespace StatusCondition {
  export type AsObject = {
    code: StatusCondition.Code,
    message: string,
  }

  export enum Code { 
    UNKNOWN = 0,
    GCE_STOCKOUT = 1,
    GKE_SERVICE_ACCOUNT_DELETED = 2,
    GCE_QUOTA_EXCEEDED = 3,
    SET_BY_OPERATOR = 4,
  }
}

export class NetworkConfig extends jspb.Message {
  getNetwork(): string;
  setNetwork(value: string): void;

  getSubnetwork(): string;
  setSubnetwork(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NetworkConfig.AsObject;
  static toObject(includeInstance: boolean, msg: NetworkConfig): NetworkConfig.AsObject;
  static serializeBinaryToWriter(message: NetworkConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NetworkConfig;
  static deserializeBinaryFromReader(message: NetworkConfig, reader: jspb.BinaryReader): NetworkConfig;
}

export namespace NetworkConfig {
  export type AsObject = {
    network: string,
    subnetwork: string,
  }
}

export class ListUsableSubnetworksRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getFilter(): string;
  setFilter(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUsableSubnetworksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListUsableSubnetworksRequest): ListUsableSubnetworksRequest.AsObject;
  static serializeBinaryToWriter(message: ListUsableSubnetworksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUsableSubnetworksRequest;
  static deserializeBinaryFromReader(message: ListUsableSubnetworksRequest, reader: jspb.BinaryReader): ListUsableSubnetworksRequest;
}

export namespace ListUsableSubnetworksRequest {
  export type AsObject = {
    parent: string,
    filter: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListUsableSubnetworksResponse extends jspb.Message {
  getSubnetworksList(): Array<UsableSubnetwork>;
  setSubnetworksList(value: Array<UsableSubnetwork>): void;
  clearSubnetworksList(): void;
  addSubnetworks(value?: UsableSubnetwork, index?: number): UsableSubnetwork;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUsableSubnetworksResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListUsableSubnetworksResponse): ListUsableSubnetworksResponse.AsObject;
  static serializeBinaryToWriter(message: ListUsableSubnetworksResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUsableSubnetworksResponse;
  static deserializeBinaryFromReader(message: ListUsableSubnetworksResponse, reader: jspb.BinaryReader): ListUsableSubnetworksResponse;
}

export namespace ListUsableSubnetworksResponse {
  export type AsObject = {
    subnetworksList: Array<UsableSubnetwork.AsObject>,
    nextPageToken: string,
  }
}

export class UsableSubnetworkSecondaryRange extends jspb.Message {
  getRangeName(): string;
  setRangeName(value: string): void;

  getIpCidrRange(): string;
  setIpCidrRange(value: string): void;

  getStatus(): UsableSubnetworkSecondaryRange.Status;
  setStatus(value: UsableSubnetworkSecondaryRange.Status): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsableSubnetworkSecondaryRange.AsObject;
  static toObject(includeInstance: boolean, msg: UsableSubnetworkSecondaryRange): UsableSubnetworkSecondaryRange.AsObject;
  static serializeBinaryToWriter(message: UsableSubnetworkSecondaryRange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsableSubnetworkSecondaryRange;
  static deserializeBinaryFromReader(message: UsableSubnetworkSecondaryRange, reader: jspb.BinaryReader): UsableSubnetworkSecondaryRange;
}

export namespace UsableSubnetworkSecondaryRange {
  export type AsObject = {
    rangeName: string,
    ipCidrRange: string,
    status: UsableSubnetworkSecondaryRange.Status,
  }

  export enum Status { 
    UNKNOWN = 0,
    UNUSED = 1,
    IN_USE_SERVICE = 2,
    IN_USE_SHAREABLE_POD = 3,
    IN_USE_MANAGED_POD = 4,
  }
}

export class UsableSubnetwork extends jspb.Message {
  getSubnetwork(): string;
  setSubnetwork(value: string): void;

  getNetwork(): string;
  setNetwork(value: string): void;

  getIpCidrRange(): string;
  setIpCidrRange(value: string): void;

  getSecondaryIpRangesList(): Array<UsableSubnetworkSecondaryRange>;
  setSecondaryIpRangesList(value: Array<UsableSubnetworkSecondaryRange>): void;
  clearSecondaryIpRangesList(): void;
  addSecondaryIpRanges(value?: UsableSubnetworkSecondaryRange, index?: number): UsableSubnetworkSecondaryRange;

  getStatusMessage(): string;
  setStatusMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsableSubnetwork.AsObject;
  static toObject(includeInstance: boolean, msg: UsableSubnetwork): UsableSubnetwork.AsObject;
  static serializeBinaryToWriter(message: UsableSubnetwork, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsableSubnetwork;
  static deserializeBinaryFromReader(message: UsableSubnetwork, reader: jspb.BinaryReader): UsableSubnetwork;
}

export namespace UsableSubnetwork {
  export type AsObject = {
    subnetwork: string,
    network: string,
    ipCidrRange: string,
    secondaryIpRangesList: Array<UsableSubnetworkSecondaryRange.AsObject>,
    statusMessage: string,
  }
}

export class VerticalPodAutoscaling extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerticalPodAutoscaling.AsObject;
  static toObject(includeInstance: boolean, msg: VerticalPodAutoscaling): VerticalPodAutoscaling.AsObject;
  static serializeBinaryToWriter(message: VerticalPodAutoscaling, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerticalPodAutoscaling;
  static deserializeBinaryFromReader(message: VerticalPodAutoscaling, reader: jspb.BinaryReader): VerticalPodAutoscaling;
}

export namespace VerticalPodAutoscaling {
  export type AsObject = {
    enabled: boolean,
  }
}

export class MaxPodsConstraint extends jspb.Message {
  getMaxPodsPerNode(): number;
  setMaxPodsPerNode(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MaxPodsConstraint.AsObject;
  static toObject(includeInstance: boolean, msg: MaxPodsConstraint): MaxPodsConstraint.AsObject;
  static serializeBinaryToWriter(message: MaxPodsConstraint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MaxPodsConstraint;
  static deserializeBinaryFromReader(message: MaxPodsConstraint, reader: jspb.BinaryReader): MaxPodsConstraint;
}

export namespace MaxPodsConstraint {
  export type AsObject = {
    maxPodsPerNode: number,
  }
}

export class ResourceUsageExportConfig extends jspb.Message {
  getBigqueryDestination(): ResourceUsageExportConfig.BigQueryDestination | undefined;
  setBigqueryDestination(value?: ResourceUsageExportConfig.BigQueryDestination): void;
  hasBigqueryDestination(): boolean;
  clearBigqueryDestination(): void;

  getEnableNetworkEgressMetering(): boolean;
  setEnableNetworkEgressMetering(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceUsageExportConfig.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceUsageExportConfig): ResourceUsageExportConfig.AsObject;
  static serializeBinaryToWriter(message: ResourceUsageExportConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceUsageExportConfig;
  static deserializeBinaryFromReader(message: ResourceUsageExportConfig, reader: jspb.BinaryReader): ResourceUsageExportConfig;
}

export namespace ResourceUsageExportConfig {
  export type AsObject = {
    bigqueryDestination?: ResourceUsageExportConfig.BigQueryDestination.AsObject,
    enableNetworkEgressMetering: boolean,
  }

  export class BigQueryDestination extends jspb.Message {
    getDatasetId(): string;
    setDatasetId(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BigQueryDestination.AsObject;
    static toObject(includeInstance: boolean, msg: BigQueryDestination): BigQueryDestination.AsObject;
    static serializeBinaryToWriter(message: BigQueryDestination, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BigQueryDestination;
    static deserializeBinaryFromReader(message: BigQueryDestination, reader: jspb.BinaryReader): BigQueryDestination;
  }

  export namespace BigQueryDestination {
    export type AsObject = {
      datasetId: string,
    }
  }

}

