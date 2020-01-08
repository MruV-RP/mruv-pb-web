import * as jspb from "google-protobuf"

import * as google_api_resource_pb from '../../../../google/api/resource_pb';
import * as google_cloud_websecurityscanner_v1beta_finding_addon_pb from '../../../../google/cloud/websecurityscanner/v1beta/finding_addon_pb';

export class Finding extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getFindingType(): string;
  setFindingType(value: string): void;

  getHttpMethod(): string;
  setHttpMethod(value: string): void;

  getFuzzedUrl(): string;
  setFuzzedUrl(value: string): void;

  getBody(): string;
  setBody(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getReproductionUrl(): string;
  setReproductionUrl(value: string): void;

  getFrameUrl(): string;
  setFrameUrl(value: string): void;

  getFinalUrl(): string;
  setFinalUrl(value: string): void;

  getTrackingId(): string;
  setTrackingId(value: string): void;

  getForm(): google_cloud_websecurityscanner_v1beta_finding_addon_pb.Form | undefined;
  setForm(value?: google_cloud_websecurityscanner_v1beta_finding_addon_pb.Form): void;
  hasForm(): boolean;
  clearForm(): void;

  getOutdatedLibrary(): google_cloud_websecurityscanner_v1beta_finding_addon_pb.OutdatedLibrary | undefined;
  setOutdatedLibrary(value?: google_cloud_websecurityscanner_v1beta_finding_addon_pb.OutdatedLibrary): void;
  hasOutdatedLibrary(): boolean;
  clearOutdatedLibrary(): void;

  getViolatingResource(): google_cloud_websecurityscanner_v1beta_finding_addon_pb.ViolatingResource | undefined;
  setViolatingResource(value?: google_cloud_websecurityscanner_v1beta_finding_addon_pb.ViolatingResource): void;
  hasViolatingResource(): boolean;
  clearViolatingResource(): void;

  getVulnerableHeaders(): google_cloud_websecurityscanner_v1beta_finding_addon_pb.VulnerableHeaders | undefined;
  setVulnerableHeaders(value?: google_cloud_websecurityscanner_v1beta_finding_addon_pb.VulnerableHeaders): void;
  hasVulnerableHeaders(): boolean;
  clearVulnerableHeaders(): void;

  getVulnerableParameters(): google_cloud_websecurityscanner_v1beta_finding_addon_pb.VulnerableParameters | undefined;
  setVulnerableParameters(value?: google_cloud_websecurityscanner_v1beta_finding_addon_pb.VulnerableParameters): void;
  hasVulnerableParameters(): boolean;
  clearVulnerableParameters(): void;

  getXss(): google_cloud_websecurityscanner_v1beta_finding_addon_pb.Xss | undefined;
  setXss(value?: google_cloud_websecurityscanner_v1beta_finding_addon_pb.Xss): void;
  hasXss(): boolean;
  clearXss(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Finding.AsObject;
  static toObject(includeInstance: boolean, msg: Finding): Finding.AsObject;
  static serializeBinaryToWriter(message: Finding, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Finding;
  static deserializeBinaryFromReader(message: Finding, reader: jspb.BinaryReader): Finding;
}

export namespace Finding {
  export type AsObject = {
    name: string,
    findingType: string,
    httpMethod: string,
    fuzzedUrl: string,
    body: string,
    description: string,
    reproductionUrl: string,
    frameUrl: string,
    finalUrl: string,
    trackingId: string,
    form?: google_cloud_websecurityscanner_v1beta_finding_addon_pb.Form.AsObject,
    outdatedLibrary?: google_cloud_websecurityscanner_v1beta_finding_addon_pb.OutdatedLibrary.AsObject,
    violatingResource?: google_cloud_websecurityscanner_v1beta_finding_addon_pb.ViolatingResource.AsObject,
    vulnerableHeaders?: google_cloud_websecurityscanner_v1beta_finding_addon_pb.VulnerableHeaders.AsObject,
    vulnerableParameters?: google_cloud_websecurityscanner_v1beta_finding_addon_pb.VulnerableParameters.AsObject,
    xss?: google_cloud_websecurityscanner_v1beta_finding_addon_pb.Xss.AsObject,
  }
}

