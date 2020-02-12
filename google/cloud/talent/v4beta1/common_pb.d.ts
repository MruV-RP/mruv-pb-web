import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_type_date_pb from '../../../../google/type/date_pb';
import * as google_type_latlng_pb from '../../../../google/type/latlng_pb';
import * as google_type_money_pb from '../../../../google/type/money_pb';
import * as google_type_postal_address_pb from '../../../../google/type/postal_address_pb';
import * as google_type_timeofday_pb from '../../../../google/type/timeofday_pb';

export class TimestampRange extends jspb.Message {
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasStartTime(): boolean;
  clearStartTime(): void;

  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasEndTime(): boolean;
  clearEndTime(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimestampRange.AsObject;
  static toObject(includeInstance: boolean, msg: TimestampRange): TimestampRange.AsObject;
  static serializeBinaryToWriter(message: TimestampRange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimestampRange;
  static deserializeBinaryFromReader(message: TimestampRange, reader: jspb.BinaryReader): TimestampRange;
}

export namespace TimestampRange {
  export type AsObject = {
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class Location extends jspb.Message {
  getLocationType(): Location.LocationType;
  setLocationType(value: Location.LocationType): void;

  getPostalAddress(): google_type_postal_address_pb.PostalAddress | undefined;
  setPostalAddress(value?: google_type_postal_address_pb.PostalAddress): void;
  hasPostalAddress(): boolean;
  clearPostalAddress(): void;

  getLatLng(): google_type_latlng_pb.LatLng | undefined;
  setLatLng(value?: google_type_latlng_pb.LatLng): void;
  hasLatLng(): boolean;
  clearLatLng(): void;

  getRadiusMiles(): number;
  setRadiusMiles(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Location.AsObject;
  static toObject(includeInstance: boolean, msg: Location): Location.AsObject;
  static serializeBinaryToWriter(message: Location, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Location;
  static deserializeBinaryFromReader(message: Location, reader: jspb.BinaryReader): Location;
}

export namespace Location {
  export type AsObject = {
    locationType: Location.LocationType,
    postalAddress?: google_type_postal_address_pb.PostalAddress.AsObject,
    latLng?: google_type_latlng_pb.LatLng.AsObject,
    radiusMiles: number,
  }

  export enum LocationType { 
    LOCATION_TYPE_UNSPECIFIED = 0,
    COUNTRY = 1,
    ADMINISTRATIVE_AREA = 2,
    SUB_ADMINISTRATIVE_AREA = 3,
    LOCALITY = 4,
    POSTAL_CODE = 5,
    SUB_LOCALITY = 6,
    SUB_LOCALITY_1 = 7,
    SUB_LOCALITY_2 = 8,
    NEIGHBORHOOD = 9,
    STREET_ADDRESS = 10,
  }
}

export class RequestMetadata extends jspb.Message {
  getDomain(): string;
  setDomain(value: string): void;

  getSessionId(): string;
  setSessionId(value: string): void;

  getUserId(): string;
  setUserId(value: string): void;

  getAllowMissingIds(): boolean;
  setAllowMissingIds(value: boolean): void;

  getDeviceInfo(): DeviceInfo | undefined;
  setDeviceInfo(value?: DeviceInfo): void;
  hasDeviceInfo(): boolean;
  clearDeviceInfo(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: RequestMetadata): RequestMetadata.AsObject;
  static serializeBinaryToWriter(message: RequestMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestMetadata;
  static deserializeBinaryFromReader(message: RequestMetadata, reader: jspb.BinaryReader): RequestMetadata;
}

export namespace RequestMetadata {
  export type AsObject = {
    domain: string,
    sessionId: string,
    userId: string,
    allowMissingIds: boolean,
    deviceInfo?: DeviceInfo.AsObject,
  }
}

export class ResponseMetadata extends jspb.Message {
  getRequestId(): string;
  setRequestId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseMetadata): ResponseMetadata.AsObject;
  static serializeBinaryToWriter(message: ResponseMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseMetadata;
  static deserializeBinaryFromReader(message: ResponseMetadata, reader: jspb.BinaryReader): ResponseMetadata;
}

export namespace ResponseMetadata {
  export type AsObject = {
    requestId: string,
  }
}

export class DeviceInfo extends jspb.Message {
  getDeviceType(): DeviceInfo.DeviceType;
  setDeviceType(value: DeviceInfo.DeviceType): void;

  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceInfo.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceInfo): DeviceInfo.AsObject;
  static serializeBinaryToWriter(message: DeviceInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceInfo;
  static deserializeBinaryFromReader(message: DeviceInfo, reader: jspb.BinaryReader): DeviceInfo;
}

export namespace DeviceInfo {
  export type AsObject = {
    deviceType: DeviceInfo.DeviceType,
    id: string,
  }

  export enum DeviceType { 
    DEVICE_TYPE_UNSPECIFIED = 0,
    WEB = 1,
    MOBILE_WEB = 2,
    ANDROID = 3,
    IOS = 4,
    BOT = 5,
    OTHER = 6,
  }
}

export class CustomAttribute extends jspb.Message {
  getStringValuesList(): Array<string>;
  setStringValuesList(value: Array<string>): void;
  clearStringValuesList(): void;
  addStringValues(value: string, index?: number): void;

  getLongValuesList(): Array<number>;
  setLongValuesList(value: Array<number>): void;
  clearLongValuesList(): void;
  addLongValues(value: number, index?: number): void;

  getFilterable(): boolean;
  setFilterable(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomAttribute.AsObject;
  static toObject(includeInstance: boolean, msg: CustomAttribute): CustomAttribute.AsObject;
  static serializeBinaryToWriter(message: CustomAttribute, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomAttribute;
  static deserializeBinaryFromReader(message: CustomAttribute, reader: jspb.BinaryReader): CustomAttribute;
}

export namespace CustomAttribute {
  export type AsObject = {
    stringValuesList: Array<string>,
    longValuesList: Array<number>,
    filterable: boolean,
  }
}

export class SpellingCorrection extends jspb.Message {
  getCorrected(): boolean;
  setCorrected(value: boolean): void;

  getCorrectedText(): string;
  setCorrectedText(value: string): void;

  getCorrectedHtml(): string;
  setCorrectedHtml(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpellingCorrection.AsObject;
  static toObject(includeInstance: boolean, msg: SpellingCorrection): SpellingCorrection.AsObject;
  static serializeBinaryToWriter(message: SpellingCorrection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpellingCorrection;
  static deserializeBinaryFromReader(message: SpellingCorrection, reader: jspb.BinaryReader): SpellingCorrection;
}

export namespace SpellingCorrection {
  export type AsObject = {
    corrected: boolean,
    correctedText: string,
    correctedHtml: string,
  }
}

export class CompensationInfo extends jspb.Message {
  getEntriesList(): Array<CompensationInfo.CompensationEntry>;
  setEntriesList(value: Array<CompensationInfo.CompensationEntry>): void;
  clearEntriesList(): void;
  addEntries(value?: CompensationInfo.CompensationEntry, index?: number): CompensationInfo.CompensationEntry;

  getAnnualizedBaseCompensationRange(): CompensationInfo.CompensationRange | undefined;
  setAnnualizedBaseCompensationRange(value?: CompensationInfo.CompensationRange): void;
  hasAnnualizedBaseCompensationRange(): boolean;
  clearAnnualizedBaseCompensationRange(): void;

  getAnnualizedTotalCompensationRange(): CompensationInfo.CompensationRange | undefined;
  setAnnualizedTotalCompensationRange(value?: CompensationInfo.CompensationRange): void;
  hasAnnualizedTotalCompensationRange(): boolean;
  clearAnnualizedTotalCompensationRange(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompensationInfo.AsObject;
  static toObject(includeInstance: boolean, msg: CompensationInfo): CompensationInfo.AsObject;
  static serializeBinaryToWriter(message: CompensationInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompensationInfo;
  static deserializeBinaryFromReader(message: CompensationInfo, reader: jspb.BinaryReader): CompensationInfo;
}

export namespace CompensationInfo {
  export type AsObject = {
    entriesList: Array<CompensationInfo.CompensationEntry.AsObject>,
    annualizedBaseCompensationRange?: CompensationInfo.CompensationRange.AsObject,
    annualizedTotalCompensationRange?: CompensationInfo.CompensationRange.AsObject,
  }

  export class CompensationEntry extends jspb.Message {
    getType(): CompensationInfo.CompensationType;
    setType(value: CompensationInfo.CompensationType): void;

    getUnit(): CompensationInfo.CompensationUnit;
    setUnit(value: CompensationInfo.CompensationUnit): void;

    getAmount(): google_type_money_pb.Money | undefined;
    setAmount(value?: google_type_money_pb.Money): void;
    hasAmount(): boolean;
    clearAmount(): void;

    getRange(): CompensationInfo.CompensationRange | undefined;
    setRange(value?: CompensationInfo.CompensationRange): void;
    hasRange(): boolean;
    clearRange(): void;

    getDescription(): string;
    setDescription(value: string): void;

    getExpectedUnitsPerYear(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setExpectedUnitsPerYear(value?: google_protobuf_wrappers_pb.DoubleValue): void;
    hasExpectedUnitsPerYear(): boolean;
    clearExpectedUnitsPerYear(): void;

    getCompensationAmountCase(): CompensationEntry.CompensationAmountCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CompensationEntry.AsObject;
    static toObject(includeInstance: boolean, msg: CompensationEntry): CompensationEntry.AsObject;
    static serializeBinaryToWriter(message: CompensationEntry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CompensationEntry;
    static deserializeBinaryFromReader(message: CompensationEntry, reader: jspb.BinaryReader): CompensationEntry;
  }

  export namespace CompensationEntry {
    export type AsObject = {
      type: CompensationInfo.CompensationType,
      unit: CompensationInfo.CompensationUnit,
      amount?: google_type_money_pb.Money.AsObject,
      range?: CompensationInfo.CompensationRange.AsObject,
      description: string,
      expectedUnitsPerYear?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    }

    export enum CompensationAmountCase { 
      COMPENSATION_AMOUNT_NOT_SET = 0,
      AMOUNT = 3,
      RANGE = 4,
    }
  }


  export class CompensationRange extends jspb.Message {
    getMaxCompensation(): google_type_money_pb.Money | undefined;
    setMaxCompensation(value?: google_type_money_pb.Money): void;
    hasMaxCompensation(): boolean;
    clearMaxCompensation(): void;

    getMinCompensation(): google_type_money_pb.Money | undefined;
    setMinCompensation(value?: google_type_money_pb.Money): void;
    hasMinCompensation(): boolean;
    clearMinCompensation(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CompensationRange.AsObject;
    static toObject(includeInstance: boolean, msg: CompensationRange): CompensationRange.AsObject;
    static serializeBinaryToWriter(message: CompensationRange, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CompensationRange;
    static deserializeBinaryFromReader(message: CompensationRange, reader: jspb.BinaryReader): CompensationRange;
  }

  export namespace CompensationRange {
    export type AsObject = {
      maxCompensation?: google_type_money_pb.Money.AsObject,
      minCompensation?: google_type_money_pb.Money.AsObject,
    }
  }


  export enum CompensationType { 
    COMPENSATION_TYPE_UNSPECIFIED = 0,
    BASE = 1,
    BONUS = 2,
    SIGNING_BONUS = 3,
    EQUITY = 4,
    PROFIT_SHARING = 5,
    COMMISSIONS = 6,
    TIPS = 7,
    OTHER_COMPENSATION_TYPE = 8,
  }

  export enum CompensationUnit { 
    COMPENSATION_UNIT_UNSPECIFIED = 0,
    HOURLY = 1,
    DAILY = 2,
    WEEKLY = 3,
    MONTHLY = 4,
    YEARLY = 5,
    ONE_TIME = 6,
    OTHER_COMPENSATION_UNIT = 7,
  }
}

export class Certification extends jspb.Message {
  getDisplayName(): string;
  setDisplayName(value: string): void;

  getAcquireDate(): google_type_date_pb.Date | undefined;
  setAcquireDate(value?: google_type_date_pb.Date): void;
  hasAcquireDate(): boolean;
  clearAcquireDate(): void;

  getExpireDate(): google_type_date_pb.Date | undefined;
  setExpireDate(value?: google_type_date_pb.Date): void;
  hasExpireDate(): boolean;
  clearExpireDate(): void;

  getAuthority(): string;
  setAuthority(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Certification.AsObject;
  static toObject(includeInstance: boolean, msg: Certification): Certification.AsObject;
  static serializeBinaryToWriter(message: Certification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Certification;
  static deserializeBinaryFromReader(message: Certification, reader: jspb.BinaryReader): Certification;
}

export namespace Certification {
  export type AsObject = {
    displayName: string,
    acquireDate?: google_type_date_pb.Date.AsObject,
    expireDate?: google_type_date_pb.Date.AsObject,
    authority: string,
    description: string,
  }
}

export class Skill extends jspb.Message {
  getDisplayName(): string;
  setDisplayName(value: string): void;

  getLastUsedDate(): google_type_date_pb.Date | undefined;
  setLastUsedDate(value?: google_type_date_pb.Date): void;
  hasLastUsedDate(): boolean;
  clearLastUsedDate(): void;

  getLevel(): SkillProficiencyLevel;
  setLevel(value: SkillProficiencyLevel): void;

  getContext(): string;
  setContext(value: string): void;

  getSkillNameSnippet(): string;
  setSkillNameSnippet(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Skill.AsObject;
  static toObject(includeInstance: boolean, msg: Skill): Skill.AsObject;
  static serializeBinaryToWriter(message: Skill, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Skill;
  static deserializeBinaryFromReader(message: Skill, reader: jspb.BinaryReader): Skill;
}

export namespace Skill {
  export type AsObject = {
    displayName: string,
    lastUsedDate?: google_type_date_pb.Date.AsObject,
    level: SkillProficiencyLevel,
    context: string,
    skillNameSnippet: string,
  }
}

export class Interview extends jspb.Message {
  getRating(): Rating | undefined;
  setRating(value?: Rating): void;
  hasRating(): boolean;
  clearRating(): void;

  getOutcome(): Outcome;
  setOutcome(value: Outcome): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Interview.AsObject;
  static toObject(includeInstance: boolean, msg: Interview): Interview.AsObject;
  static serializeBinaryToWriter(message: Interview, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Interview;
  static deserializeBinaryFromReader(message: Interview, reader: jspb.BinaryReader): Interview;
}

export namespace Interview {
  export type AsObject = {
    rating?: Rating.AsObject,
    outcome: Outcome,
  }
}

export class Rating extends jspb.Message {
  getOverall(): number;
  setOverall(value: number): void;

  getMin(): number;
  setMin(value: number): void;

  getMax(): number;
  setMax(value: number): void;

  getInterval(): number;
  setInterval(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Rating.AsObject;
  static toObject(includeInstance: boolean, msg: Rating): Rating.AsObject;
  static serializeBinaryToWriter(message: Rating, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Rating;
  static deserializeBinaryFromReader(message: Rating, reader: jspb.BinaryReader): Rating;
}

export namespace Rating {
  export type AsObject = {
    overall: number,
    min: number,
    max: number,
    interval: number,
  }
}

export class BatchOperationMetadata extends jspb.Message {
  getState(): BatchOperationMetadata.State;
  setState(value: BatchOperationMetadata.State): void;

  getStateDescription(): string;
  setStateDescription(value: string): void;

  getSuccessCount(): number;
  setSuccessCount(value: number): void;

  getFailureCount(): number;
  setFailureCount(value: number): void;

  getTotalCount(): number;
  setTotalCount(value: number): void;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreateTime(): boolean;
  clearCreateTime(): void;

  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasUpdateTime(): boolean;
  clearUpdateTime(): void;

  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasEndTime(): boolean;
  clearEndTime(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchOperationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: BatchOperationMetadata): BatchOperationMetadata.AsObject;
  static serializeBinaryToWriter(message: BatchOperationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchOperationMetadata;
  static deserializeBinaryFromReader(message: BatchOperationMetadata, reader: jspb.BinaryReader): BatchOperationMetadata;
}

export namespace BatchOperationMetadata {
  export type AsObject = {
    state: BatchOperationMetadata.State,
    stateDescription: string,
    successCount: number,
    failureCount: number,
    totalCount: number,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export enum State { 
    STATE_UNSPECIFIED = 0,
    INITIALIZING = 1,
    PROCESSING = 2,
    SUCCEEDED = 3,
    FAILED = 4,
    CANCELLING = 5,
    CANCELLED = 6,
  }
}

export enum CompanySize { 
  COMPANY_SIZE_UNSPECIFIED = 0,
  MINI = 1,
  SMALL = 2,
  SMEDIUM = 3,
  MEDIUM = 4,
  BIG = 5,
  BIGGER = 6,
  GIANT = 7,
}
export enum JobBenefit { 
  JOB_BENEFIT_UNSPECIFIED = 0,
  CHILD_CARE = 1,
  DENTAL = 2,
  DOMESTIC_PARTNER = 3,
  FLEXIBLE_HOURS = 4,
  MEDICAL = 5,
  LIFE_INSURANCE = 6,
  PARENTAL_LEAVE = 7,
  RETIREMENT_PLAN = 8,
  SICK_DAYS = 9,
  VACATION = 10,
  VISION = 11,
}
export enum DegreeType { 
  DEGREE_TYPE_UNSPECIFIED = 0,
  PRIMARY_EDUCATION = 1,
  LOWER_SECONDARY_EDUCATION = 2,
  UPPER_SECONDARY_EDUCATION = 3,
  ADULT_REMEDIAL_EDUCATION = 4,
  ASSOCIATES_OR_EQUIVALENT = 5,
  BACHELORS_OR_EQUIVALENT = 6,
  MASTERS_OR_EQUIVALENT = 7,
  DOCTORAL_OR_EQUIVALENT = 8,
}
export enum EmploymentType { 
  EMPLOYMENT_TYPE_UNSPECIFIED = 0,
  FULL_TIME = 1,
  PART_TIME = 2,
  CONTRACTOR = 3,
  CONTRACT_TO_HIRE = 4,
  TEMPORARY = 5,
  INTERN = 6,
  VOLUNTEER = 7,
  PER_DIEM = 8,
  FLY_IN_FLY_OUT = 9,
  OTHER_EMPLOYMENT_TYPE = 10,
}
export enum JobLevel { 
  JOB_LEVEL_UNSPECIFIED = 0,
  ENTRY_LEVEL = 1,
  EXPERIENCED = 2,
  MANAGER = 3,
  DIRECTOR = 4,
  EXECUTIVE = 5,
}
export enum JobCategory { 
  JOB_CATEGORY_UNSPECIFIED = 0,
  ACCOUNTING_AND_FINANCE = 1,
  ADMINISTRATIVE_AND_OFFICE = 2,
  ADVERTISING_AND_MARKETING = 3,
  ANIMAL_CARE = 4,
  ART_FASHION_AND_DESIGN = 5,
  BUSINESS_OPERATIONS = 6,
  CLEANING_AND_FACILITIES = 7,
  COMPUTER_AND_IT = 8,
  CONSTRUCTION = 9,
  CUSTOMER_SERVICE = 10,
  EDUCATION = 11,
  ENTERTAINMENT_AND_TRAVEL = 12,
  FARMING_AND_OUTDOORS = 13,
  HEALTHCARE = 14,
  HUMAN_RESOURCES = 15,
  INSTALLATION_MAINTENANCE_AND_REPAIR = 16,
  LEGAL = 17,
  MANAGEMENT = 18,
  MANUFACTURING_AND_WAREHOUSE = 19,
  MEDIA_COMMUNICATIONS_AND_WRITING = 20,
  OIL_GAS_AND_MINING = 21,
  PERSONAL_CARE_AND_SERVICES = 22,
  PROTECTIVE_SERVICES = 23,
  REAL_ESTATE = 24,
  RESTAURANT_AND_HOSPITALITY = 25,
  SALES_AND_RETAIL = 26,
  SCIENCE_AND_ENGINEERING = 27,
  SOCIAL_SERVICES_AND_NON_PROFIT = 28,
  SPORTS_FITNESS_AND_RECREATION = 29,
  TRANSPORTATION_AND_LOGISTICS = 30,
}
export enum PostingRegion { 
  POSTING_REGION_UNSPECIFIED = 0,
  ADMINISTRATIVE_AREA = 1,
  NATION = 2,
  TELECOMMUTE = 3,
}
export enum Visibility { 
  VISIBILITY_UNSPECIFIED = 0,
  ACCOUNT_ONLY = 1,
  SHARED_WITH_GOOGLE = 2,
  SHARED_WITH_PUBLIC = 3,
}
export enum ContactInfoUsage { 
  CONTACT_INFO_USAGE_UNSPECIFIED = 0,
  PERSONAL = 1,
  WORK = 2,
  SCHOOL = 3,
}
export enum HtmlSanitization { 
  HTML_SANITIZATION_UNSPECIFIED = 0,
  HTML_SANITIZATION_DISABLED = 1,
  SIMPLE_FORMATTING_ONLY = 2,
}
export enum CommuteMethod { 
  COMMUTE_METHOD_UNSPECIFIED = 0,
  DRIVING = 1,
  TRANSIT = 2,
  WALKING = 3,
  CYCLING = 4,
}
export enum SkillProficiencyLevel { 
  SKILL_PROFICIENCY_LEVEL_UNSPECIFIED = 0,
  UNSKILLED = 6,
  FUNDAMENTAL_AWARENESS = 1,
  NOVICE = 2,
  INTERMEDIATE = 3,
  ADVANCED = 4,
  EXPERT = 5,
}
export enum Outcome { 
  OUTCOME_UNSPECIFIED = 0,
  POSITIVE = 1,
  NEUTRAL = 2,
  NEGATIVE = 3,
  OUTCOME_NOT_AVAILABLE = 4,
}
export enum AvailabilitySignalType { 
  AVAILABILITY_SIGNAL_TYPE_UNSPECIFIED = 0,
  JOB_APPLICATION = 1,
  RESUME_UPDATE = 2,
  CANDIDATE_UPDATE = 3,
  CLIENT_SUBMISSION = 4,
}
