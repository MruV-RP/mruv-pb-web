import * as jspb from "google-protobuf"

export class Usage extends jspb.Message {
  getRequirementsList(): Array<string>;
  setRequirementsList(value: Array<string>): void;
  clearRequirementsList(): void;
  addRequirements(value: string, index?: number): void;

  getRulesList(): Array<UsageRule>;
  setRulesList(value: Array<UsageRule>): void;
  clearRulesList(): void;
  addRules(value?: UsageRule, index?: number): UsageRule;

  getProducerNotificationChannel(): string;
  setProducerNotificationChannel(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Usage.AsObject;
  static toObject(includeInstance: boolean, msg: Usage): Usage.AsObject;
  static serializeBinaryToWriter(message: Usage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Usage;
  static deserializeBinaryFromReader(message: Usage, reader: jspb.BinaryReader): Usage;
}

export namespace Usage {
  export type AsObject = {
    requirementsList: Array<string>,
    rulesList: Array<UsageRule.AsObject>,
    producerNotificationChannel: string,
  }
}

export class UsageRule extends jspb.Message {
  getSelector(): string;
  setSelector(value: string): void;

  getAllowUnregisteredCalls(): boolean;
  setAllowUnregisteredCalls(value: boolean): void;

  getSkipServiceControl(): boolean;
  setSkipServiceControl(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsageRule.AsObject;
  static toObject(includeInstance: boolean, msg: UsageRule): UsageRule.AsObject;
  static serializeBinaryToWriter(message: UsageRule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsageRule;
  static deserializeBinaryFromReader(message: UsageRule, reader: jspb.BinaryReader): UsageRule;
}

export namespace UsageRule {
  export type AsObject = {
    selector: string,
    allowUnregisteredCalls: boolean,
    skipServiceControl: boolean,
  }
}

