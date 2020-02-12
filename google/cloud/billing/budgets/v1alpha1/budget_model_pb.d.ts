import * as jspb from "google-protobuf"

import * as google_api_field_behavior_pb from '../../../../../google/api/field_behavior_pb';
import * as google_api_resource_pb from '../../../../../google/api/resource_pb';
import * as google_type_money_pb from '../../../../../google/type/money_pb';

export class Budget extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getBudgetFilter(): Filter | undefined;
  setBudgetFilter(value?: Filter): void;
  hasBudgetFilter(): boolean;
  clearBudgetFilter(): void;

  getAmount(): BudgetAmount | undefined;
  setAmount(value?: BudgetAmount): void;
  hasAmount(): boolean;
  clearAmount(): void;

  getThresholdRulesList(): Array<ThresholdRule>;
  setThresholdRulesList(value: Array<ThresholdRule>): void;
  clearThresholdRulesList(): void;
  addThresholdRules(value?: ThresholdRule, index?: number): ThresholdRule;

  getAllUpdatesRule(): AllUpdatesRule | undefined;
  setAllUpdatesRule(value?: AllUpdatesRule): void;
  hasAllUpdatesRule(): boolean;
  clearAllUpdatesRule(): void;

  getEtag(): string;
  setEtag(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Budget.AsObject;
  static toObject(includeInstance: boolean, msg: Budget): Budget.AsObject;
  static serializeBinaryToWriter(message: Budget, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Budget;
  static deserializeBinaryFromReader(message: Budget, reader: jspb.BinaryReader): Budget;
}

export namespace Budget {
  export type AsObject = {
    name: string,
    displayName: string,
    budgetFilter?: Filter.AsObject,
    amount?: BudgetAmount.AsObject,
    thresholdRulesList: Array<ThresholdRule.AsObject>,
    allUpdatesRule?: AllUpdatesRule.AsObject,
    etag: string,
  }
}

export class BudgetAmount extends jspb.Message {
  getSpecifiedAmount(): google_type_money_pb.Money | undefined;
  setSpecifiedAmount(value?: google_type_money_pb.Money): void;
  hasSpecifiedAmount(): boolean;
  clearSpecifiedAmount(): void;

  getLastPeriodAmount(): LastPeriodAmount | undefined;
  setLastPeriodAmount(value?: LastPeriodAmount): void;
  hasLastPeriodAmount(): boolean;
  clearLastPeriodAmount(): void;

  getBudgetAmountCase(): BudgetAmount.BudgetAmountCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BudgetAmount.AsObject;
  static toObject(includeInstance: boolean, msg: BudgetAmount): BudgetAmount.AsObject;
  static serializeBinaryToWriter(message: BudgetAmount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BudgetAmount;
  static deserializeBinaryFromReader(message: BudgetAmount, reader: jspb.BinaryReader): BudgetAmount;
}

export namespace BudgetAmount {
  export type AsObject = {
    specifiedAmount?: google_type_money_pb.Money.AsObject,
    lastPeriodAmount?: LastPeriodAmount.AsObject,
  }

  export enum BudgetAmountCase { 
    BUDGET_AMOUNT_NOT_SET = 0,
    SPECIFIED_AMOUNT = 1,
    LAST_PERIOD_AMOUNT = 2,
  }
}

export class LastPeriodAmount extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LastPeriodAmount.AsObject;
  static toObject(includeInstance: boolean, msg: LastPeriodAmount): LastPeriodAmount.AsObject;
  static serializeBinaryToWriter(message: LastPeriodAmount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LastPeriodAmount;
  static deserializeBinaryFromReader(message: LastPeriodAmount, reader: jspb.BinaryReader): LastPeriodAmount;
}

export namespace LastPeriodAmount {
  export type AsObject = {
  }
}

export class ThresholdRule extends jspb.Message {
  getThresholdPercent(): number;
  setThresholdPercent(value: number): void;

  getSpendBasis(): ThresholdRule.Basis;
  setSpendBasis(value: ThresholdRule.Basis): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ThresholdRule.AsObject;
  static toObject(includeInstance: boolean, msg: ThresholdRule): ThresholdRule.AsObject;
  static serializeBinaryToWriter(message: ThresholdRule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ThresholdRule;
  static deserializeBinaryFromReader(message: ThresholdRule, reader: jspb.BinaryReader): ThresholdRule;
}

export namespace ThresholdRule {
  export type AsObject = {
    thresholdPercent: number,
    spendBasis: ThresholdRule.Basis,
  }

  export enum Basis { 
    BASIS_UNSPECIFIED = 0,
    CURRENT_SPEND = 1,
    FORECASTED_SPEND = 2,
  }
}

export class AllUpdatesRule extends jspb.Message {
  getPubsubTopic(): string;
  setPubsubTopic(value: string): void;

  getSchemaVersion(): string;
  setSchemaVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllUpdatesRule.AsObject;
  static toObject(includeInstance: boolean, msg: AllUpdatesRule): AllUpdatesRule.AsObject;
  static serializeBinaryToWriter(message: AllUpdatesRule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllUpdatesRule;
  static deserializeBinaryFromReader(message: AllUpdatesRule, reader: jspb.BinaryReader): AllUpdatesRule;
}

export namespace AllUpdatesRule {
  export type AsObject = {
    pubsubTopic: string,
    schemaVersion: string,
  }
}

export class Filter extends jspb.Message {
  getProjectsList(): Array<string>;
  setProjectsList(value: Array<string>): void;
  clearProjectsList(): void;
  addProjects(value: string, index?: number): void;

  getCreditTypesTreatment(): Filter.CreditTypesTreatment;
  setCreditTypesTreatment(value: Filter.CreditTypesTreatment): void;

  getServicesList(): Array<string>;
  setServicesList(value: Array<string>): void;
  clearServicesList(): void;
  addServices(value: string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Filter.AsObject;
  static toObject(includeInstance: boolean, msg: Filter): Filter.AsObject;
  static serializeBinaryToWriter(message: Filter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Filter;
  static deserializeBinaryFromReader(message: Filter, reader: jspb.BinaryReader): Filter;
}

export namespace Filter {
  export type AsObject = {
    projectsList: Array<string>,
    creditTypesTreatment: Filter.CreditTypesTreatment,
    servicesList: Array<string>,
  }

  export enum CreditTypesTreatment { 
    CREDIT_TYPES_TREATMENT_UNSPECIFIED = 0,
    INCLUDE_ALL_CREDITS = 1,
    EXCLUDE_ALL_CREDITS = 2,
  }
}

