import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb';
import * as google_cloud_talent_v4beta1_common_pb from '../../../../google/cloud/talent/v4beta1/common_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_type_date_pb from '../../../../google/type/date_pb';
import * as google_type_latlng_pb from '../../../../google/type/latlng_pb';
import * as google_type_timeofday_pb from '../../../../google/type/timeofday_pb';

export class JobQuery extends jspb.Message {
  getQuery(): string;
  setQuery(value: string): void;

  getQueryLanguageCode(): string;
  setQueryLanguageCode(value: string): void;

  getCompaniesList(): Array<string>;
  setCompaniesList(value: Array<string>): void;
  clearCompaniesList(): void;
  addCompanies(value: string, index?: number): void;

  getLocationFiltersList(): Array<LocationFilter>;
  setLocationFiltersList(value: Array<LocationFilter>): void;
  clearLocationFiltersList(): void;
  addLocationFilters(value?: LocationFilter, index?: number): LocationFilter;

  getJobCategoriesList(): Array<google_cloud_talent_v4beta1_common_pb.JobCategory>;
  setJobCategoriesList(value: Array<google_cloud_talent_v4beta1_common_pb.JobCategory>): void;
  clearJobCategoriesList(): void;
  addJobCategories(value: google_cloud_talent_v4beta1_common_pb.JobCategory, index?: number): void;

  getCommuteFilter(): CommuteFilter | undefined;
  setCommuteFilter(value?: CommuteFilter): void;
  hasCommuteFilter(): boolean;
  clearCommuteFilter(): void;

  getCompanyDisplayNamesList(): Array<string>;
  setCompanyDisplayNamesList(value: Array<string>): void;
  clearCompanyDisplayNamesList(): void;
  addCompanyDisplayNames(value: string, index?: number): void;

  getCompensationFilter(): CompensationFilter | undefined;
  setCompensationFilter(value?: CompensationFilter): void;
  hasCompensationFilter(): boolean;
  clearCompensationFilter(): void;

  getCustomAttributeFilter(): string;
  setCustomAttributeFilter(value: string): void;

  getDisableSpellCheck(): boolean;
  setDisableSpellCheck(value: boolean): void;

  getEmploymentTypesList(): Array<google_cloud_talent_v4beta1_common_pb.EmploymentType>;
  setEmploymentTypesList(value: Array<google_cloud_talent_v4beta1_common_pb.EmploymentType>): void;
  clearEmploymentTypesList(): void;
  addEmploymentTypes(value: google_cloud_talent_v4beta1_common_pb.EmploymentType, index?: number): void;

  getLanguageCodesList(): Array<string>;
  setLanguageCodesList(value: Array<string>): void;
  clearLanguageCodesList(): void;
  addLanguageCodes(value: string, index?: number): void;

  getPublishTimeRange(): google_cloud_talent_v4beta1_common_pb.TimestampRange | undefined;
  setPublishTimeRange(value?: google_cloud_talent_v4beta1_common_pb.TimestampRange): void;
  hasPublishTimeRange(): boolean;
  clearPublishTimeRange(): void;

  getExcludedJobsList(): Array<string>;
  setExcludedJobsList(value: Array<string>): void;
  clearExcludedJobsList(): void;
  addExcludedJobs(value: string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JobQuery.AsObject;
  static toObject(includeInstance: boolean, msg: JobQuery): JobQuery.AsObject;
  static serializeBinaryToWriter(message: JobQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JobQuery;
  static deserializeBinaryFromReader(message: JobQuery, reader: jspb.BinaryReader): JobQuery;
}

export namespace JobQuery {
  export type AsObject = {
    query: string,
    queryLanguageCode: string,
    companiesList: Array<string>,
    locationFiltersList: Array<LocationFilter.AsObject>,
    jobCategoriesList: Array<google_cloud_talent_v4beta1_common_pb.JobCategory>,
    commuteFilter?: CommuteFilter.AsObject,
    companyDisplayNamesList: Array<string>,
    compensationFilter?: CompensationFilter.AsObject,
    customAttributeFilter: string,
    disableSpellCheck: boolean,
    employmentTypesList: Array<google_cloud_talent_v4beta1_common_pb.EmploymentType>,
    languageCodesList: Array<string>,
    publishTimeRange?: google_cloud_talent_v4beta1_common_pb.TimestampRange.AsObject,
    excludedJobsList: Array<string>,
  }
}

export class ProfileQuery extends jspb.Message {
  getQuery(): string;
  setQuery(value: string): void;

  getLocationFiltersList(): Array<LocationFilter>;
  setLocationFiltersList(value: Array<LocationFilter>): void;
  clearLocationFiltersList(): void;
  addLocationFilters(value?: LocationFilter, index?: number): LocationFilter;

  getJobTitleFiltersList(): Array<JobTitleFilter>;
  setJobTitleFiltersList(value: Array<JobTitleFilter>): void;
  clearJobTitleFiltersList(): void;
  addJobTitleFilters(value?: JobTitleFilter, index?: number): JobTitleFilter;

  getEmployerFiltersList(): Array<EmployerFilter>;
  setEmployerFiltersList(value: Array<EmployerFilter>): void;
  clearEmployerFiltersList(): void;
  addEmployerFilters(value?: EmployerFilter, index?: number): EmployerFilter;

  getEducationFiltersList(): Array<EducationFilter>;
  setEducationFiltersList(value: Array<EducationFilter>): void;
  clearEducationFiltersList(): void;
  addEducationFilters(value?: EducationFilter, index?: number): EducationFilter;

  getSkillFiltersList(): Array<SkillFilter>;
  setSkillFiltersList(value: Array<SkillFilter>): void;
  clearSkillFiltersList(): void;
  addSkillFilters(value?: SkillFilter, index?: number): SkillFilter;

  getWorkExperienceFilterList(): Array<WorkExperienceFilter>;
  setWorkExperienceFilterList(value: Array<WorkExperienceFilter>): void;
  clearWorkExperienceFilterList(): void;
  addWorkExperienceFilter(value?: WorkExperienceFilter, index?: number): WorkExperienceFilter;

  getTimeFiltersList(): Array<TimeFilter>;
  setTimeFiltersList(value: Array<TimeFilter>): void;
  clearTimeFiltersList(): void;
  addTimeFilters(value?: TimeFilter, index?: number): TimeFilter;

  getHirableFilter(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setHirableFilter(value?: google_protobuf_wrappers_pb.BoolValue): void;
  hasHirableFilter(): boolean;
  clearHirableFilter(): void;

  getApplicationDateFiltersList(): Array<ApplicationDateFilter>;
  setApplicationDateFiltersList(value: Array<ApplicationDateFilter>): void;
  clearApplicationDateFiltersList(): void;
  addApplicationDateFilters(value?: ApplicationDateFilter, index?: number): ApplicationDateFilter;

  getApplicationOutcomeNotesFiltersList(): Array<ApplicationOutcomeNotesFilter>;
  setApplicationOutcomeNotesFiltersList(value: Array<ApplicationOutcomeNotesFilter>): void;
  clearApplicationOutcomeNotesFiltersList(): void;
  addApplicationOutcomeNotesFilters(value?: ApplicationOutcomeNotesFilter, index?: number): ApplicationOutcomeNotesFilter;

  getApplicationJobFiltersList(): Array<ApplicationJobFilter>;
  setApplicationJobFiltersList(value: Array<ApplicationJobFilter>): void;
  clearApplicationJobFiltersList(): void;
  addApplicationJobFilters(value?: ApplicationJobFilter, index?: number): ApplicationJobFilter;

  getCustomAttributeFilter(): string;
  setCustomAttributeFilter(value: string): void;

  getCandidateAvailabilityFilter(): CandidateAvailabilityFilter | undefined;
  setCandidateAvailabilityFilter(value?: CandidateAvailabilityFilter): void;
  hasCandidateAvailabilityFilter(): boolean;
  clearCandidateAvailabilityFilter(): void;

  getAvailabilityFiltersList(): Array<AvailabilityFilter>;
  setAvailabilityFiltersList(value: Array<AvailabilityFilter>): void;
  clearAvailabilityFiltersList(): void;
  addAvailabilityFilters(value?: AvailabilityFilter, index?: number): AvailabilityFilter;

  getPersonNameFiltersList(): Array<PersonNameFilter>;
  setPersonNameFiltersList(value: Array<PersonNameFilter>): void;
  clearPersonNameFiltersList(): void;
  addPersonNameFilters(value?: PersonNameFilter, index?: number): PersonNameFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProfileQuery.AsObject;
  static toObject(includeInstance: boolean, msg: ProfileQuery): ProfileQuery.AsObject;
  static serializeBinaryToWriter(message: ProfileQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProfileQuery;
  static deserializeBinaryFromReader(message: ProfileQuery, reader: jspb.BinaryReader): ProfileQuery;
}

export namespace ProfileQuery {
  export type AsObject = {
    query: string,
    locationFiltersList: Array<LocationFilter.AsObject>,
    jobTitleFiltersList: Array<JobTitleFilter.AsObject>,
    employerFiltersList: Array<EmployerFilter.AsObject>,
    educationFiltersList: Array<EducationFilter.AsObject>,
    skillFiltersList: Array<SkillFilter.AsObject>,
    workExperienceFilterList: Array<WorkExperienceFilter.AsObject>,
    timeFiltersList: Array<TimeFilter.AsObject>,
    hirableFilter?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    applicationDateFiltersList: Array<ApplicationDateFilter.AsObject>,
    applicationOutcomeNotesFiltersList: Array<ApplicationOutcomeNotesFilter.AsObject>,
    applicationJobFiltersList: Array<ApplicationJobFilter.AsObject>,
    customAttributeFilter: string,
    candidateAvailabilityFilter?: CandidateAvailabilityFilter.AsObject,
    availabilityFiltersList: Array<AvailabilityFilter.AsObject>,
    personNameFiltersList: Array<PersonNameFilter.AsObject>,
  }
}

export class LocationFilter extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  getRegionCode(): string;
  setRegionCode(value: string): void;

  getLatLng(): google_type_latlng_pb.LatLng | undefined;
  setLatLng(value?: google_type_latlng_pb.LatLng): void;
  hasLatLng(): boolean;
  clearLatLng(): void;

  getDistanceInMiles(): number;
  setDistanceInMiles(value: number): void;

  getTelecommutePreference(): LocationFilter.TelecommutePreference;
  setTelecommutePreference(value: LocationFilter.TelecommutePreference): void;

  getNegated(): boolean;
  setNegated(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocationFilter.AsObject;
  static toObject(includeInstance: boolean, msg: LocationFilter): LocationFilter.AsObject;
  static serializeBinaryToWriter(message: LocationFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocationFilter;
  static deserializeBinaryFromReader(message: LocationFilter, reader: jspb.BinaryReader): LocationFilter;
}

export namespace LocationFilter {
  export type AsObject = {
    address: string,
    regionCode: string,
    latLng?: google_type_latlng_pb.LatLng.AsObject,
    distanceInMiles: number,
    telecommutePreference: LocationFilter.TelecommutePreference,
    negated: boolean,
  }

  export enum TelecommutePreference { 
    TELECOMMUTE_PREFERENCE_UNSPECIFIED = 0,
    TELECOMMUTE_EXCLUDED = 1,
    TELECOMMUTE_ALLOWED = 2,
  }
}

export class CompensationFilter extends jspb.Message {
  getType(): CompensationFilter.FilterType;
  setType(value: CompensationFilter.FilterType): void;

  getUnitsList(): Array<google_cloud_talent_v4beta1_common_pb.CompensationInfo.CompensationUnit>;
  setUnitsList(value: Array<google_cloud_talent_v4beta1_common_pb.CompensationInfo.CompensationUnit>): void;
  clearUnitsList(): void;
  addUnits(value: google_cloud_talent_v4beta1_common_pb.CompensationInfo.CompensationUnit, index?: number): void;

  getRange(): google_cloud_talent_v4beta1_common_pb.CompensationInfo.CompensationRange | undefined;
  setRange(value?: google_cloud_talent_v4beta1_common_pb.CompensationInfo.CompensationRange): void;
  hasRange(): boolean;
  clearRange(): void;

  getIncludeJobsWithUnspecifiedCompensationRange(): boolean;
  setIncludeJobsWithUnspecifiedCompensationRange(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompensationFilter.AsObject;
  static toObject(includeInstance: boolean, msg: CompensationFilter): CompensationFilter.AsObject;
  static serializeBinaryToWriter(message: CompensationFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompensationFilter;
  static deserializeBinaryFromReader(message: CompensationFilter, reader: jspb.BinaryReader): CompensationFilter;
}

export namespace CompensationFilter {
  export type AsObject = {
    type: CompensationFilter.FilterType,
    unitsList: Array<google_cloud_talent_v4beta1_common_pb.CompensationInfo.CompensationUnit>,
    range?: google_cloud_talent_v4beta1_common_pb.CompensationInfo.CompensationRange.AsObject,
    includeJobsWithUnspecifiedCompensationRange: boolean,
  }

  export enum FilterType { 
    FILTER_TYPE_UNSPECIFIED = 0,
    UNIT_ONLY = 1,
    UNIT_AND_AMOUNT = 2,
    ANNUALIZED_BASE_AMOUNT = 3,
    ANNUALIZED_TOTAL_AMOUNT = 4,
  }
}

export class CommuteFilter extends jspb.Message {
  getCommuteMethod(): google_cloud_talent_v4beta1_common_pb.CommuteMethod;
  setCommuteMethod(value: google_cloud_talent_v4beta1_common_pb.CommuteMethod): void;

  getStartCoordinates(): google_type_latlng_pb.LatLng | undefined;
  setStartCoordinates(value?: google_type_latlng_pb.LatLng): void;
  hasStartCoordinates(): boolean;
  clearStartCoordinates(): void;

  getTravelDuration(): google_protobuf_duration_pb.Duration | undefined;
  setTravelDuration(value?: google_protobuf_duration_pb.Duration): void;
  hasTravelDuration(): boolean;
  clearTravelDuration(): void;

  getAllowImpreciseAddresses(): boolean;
  setAllowImpreciseAddresses(value: boolean): void;

  getRoadTraffic(): CommuteFilter.RoadTraffic;
  setRoadTraffic(value: CommuteFilter.RoadTraffic): void;

  getDepartureTime(): google_type_timeofday_pb.TimeOfDay | undefined;
  setDepartureTime(value?: google_type_timeofday_pb.TimeOfDay): void;
  hasDepartureTime(): boolean;
  clearDepartureTime(): void;

  getTrafficOptionCase(): CommuteFilter.TrafficOptionCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommuteFilter.AsObject;
  static toObject(includeInstance: boolean, msg: CommuteFilter): CommuteFilter.AsObject;
  static serializeBinaryToWriter(message: CommuteFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommuteFilter;
  static deserializeBinaryFromReader(message: CommuteFilter, reader: jspb.BinaryReader): CommuteFilter;
}

export namespace CommuteFilter {
  export type AsObject = {
    commuteMethod: google_cloud_talent_v4beta1_common_pb.CommuteMethod,
    startCoordinates?: google_type_latlng_pb.LatLng.AsObject,
    travelDuration?: google_protobuf_duration_pb.Duration.AsObject,
    allowImpreciseAddresses: boolean,
    roadTraffic: CommuteFilter.RoadTraffic,
    departureTime?: google_type_timeofday_pb.TimeOfDay.AsObject,
  }

  export enum RoadTraffic { 
    ROAD_TRAFFIC_UNSPECIFIED = 0,
    TRAFFIC_FREE = 1,
    BUSY_HOUR = 2,
  }

  export enum TrafficOptionCase { 
    TRAFFIC_OPTION_NOT_SET = 0,
    ROAD_TRAFFIC = 5,
    DEPARTURE_TIME = 6,
  }
}

export class JobTitleFilter extends jspb.Message {
  getJobTitle(): string;
  setJobTitle(value: string): void;

  getNegated(): boolean;
  setNegated(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JobTitleFilter.AsObject;
  static toObject(includeInstance: boolean, msg: JobTitleFilter): JobTitleFilter.AsObject;
  static serializeBinaryToWriter(message: JobTitleFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JobTitleFilter;
  static deserializeBinaryFromReader(message: JobTitleFilter, reader: jspb.BinaryReader): JobTitleFilter;
}

export namespace JobTitleFilter {
  export type AsObject = {
    jobTitle: string,
    negated: boolean,
  }
}

export class SkillFilter extends jspb.Message {
  getSkill(): string;
  setSkill(value: string): void;

  getNegated(): boolean;
  setNegated(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SkillFilter.AsObject;
  static toObject(includeInstance: boolean, msg: SkillFilter): SkillFilter.AsObject;
  static serializeBinaryToWriter(message: SkillFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SkillFilter;
  static deserializeBinaryFromReader(message: SkillFilter, reader: jspb.BinaryReader): SkillFilter;
}

export namespace SkillFilter {
  export type AsObject = {
    skill: string,
    negated: boolean,
  }
}

export class EmployerFilter extends jspb.Message {
  getEmployer(): string;
  setEmployer(value: string): void;

  getMode(): EmployerFilter.EmployerFilterMode;
  setMode(value: EmployerFilter.EmployerFilterMode): void;

  getNegated(): boolean;
  setNegated(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmployerFilter.AsObject;
  static toObject(includeInstance: boolean, msg: EmployerFilter): EmployerFilter.AsObject;
  static serializeBinaryToWriter(message: EmployerFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmployerFilter;
  static deserializeBinaryFromReader(message: EmployerFilter, reader: jspb.BinaryReader): EmployerFilter;
}

export namespace EmployerFilter {
  export type AsObject = {
    employer: string,
    mode: EmployerFilter.EmployerFilterMode,
    negated: boolean,
  }

  export enum EmployerFilterMode { 
    EMPLOYER_FILTER_MODE_UNSPECIFIED = 0,
    ALL_EMPLOYMENT_RECORDS = 1,
    CURRENT_EMPLOYMENT_RECORDS_ONLY = 2,
    PAST_EMPLOYMENT_RECORDS_ONLY = 3,
  }
}

export class EducationFilter extends jspb.Message {
  getSchool(): string;
  setSchool(value: string): void;

  getFieldOfStudy(): string;
  setFieldOfStudy(value: string): void;

  getDegreeType(): google_cloud_talent_v4beta1_common_pb.DegreeType;
  setDegreeType(value: google_cloud_talent_v4beta1_common_pb.DegreeType): void;

  getNegated(): boolean;
  setNegated(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EducationFilter.AsObject;
  static toObject(includeInstance: boolean, msg: EducationFilter): EducationFilter.AsObject;
  static serializeBinaryToWriter(message: EducationFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EducationFilter;
  static deserializeBinaryFromReader(message: EducationFilter, reader: jspb.BinaryReader): EducationFilter;
}

export namespace EducationFilter {
  export type AsObject = {
    school: string,
    fieldOfStudy: string,
    degreeType: google_cloud_talent_v4beta1_common_pb.DegreeType,
    negated: boolean,
  }
}

export class WorkExperienceFilter extends jspb.Message {
  getMinExperience(): google_protobuf_duration_pb.Duration | undefined;
  setMinExperience(value?: google_protobuf_duration_pb.Duration): void;
  hasMinExperience(): boolean;
  clearMinExperience(): void;

  getMaxExperience(): google_protobuf_duration_pb.Duration | undefined;
  setMaxExperience(value?: google_protobuf_duration_pb.Duration): void;
  hasMaxExperience(): boolean;
  clearMaxExperience(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkExperienceFilter.AsObject;
  static toObject(includeInstance: boolean, msg: WorkExperienceFilter): WorkExperienceFilter.AsObject;
  static serializeBinaryToWriter(message: WorkExperienceFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkExperienceFilter;
  static deserializeBinaryFromReader(message: WorkExperienceFilter, reader: jspb.BinaryReader): WorkExperienceFilter;
}

export namespace WorkExperienceFilter {
  export type AsObject = {
    minExperience?: google_protobuf_duration_pb.Duration.AsObject,
    maxExperience?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class ApplicationDateFilter extends jspb.Message {
  getStartDate(): google_type_date_pb.Date | undefined;
  setStartDate(value?: google_type_date_pb.Date): void;
  hasStartDate(): boolean;
  clearStartDate(): void;

  getEndDate(): google_type_date_pb.Date | undefined;
  setEndDate(value?: google_type_date_pb.Date): void;
  hasEndDate(): boolean;
  clearEndDate(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplicationDateFilter.AsObject;
  static toObject(includeInstance: boolean, msg: ApplicationDateFilter): ApplicationDateFilter.AsObject;
  static serializeBinaryToWriter(message: ApplicationDateFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplicationDateFilter;
  static deserializeBinaryFromReader(message: ApplicationDateFilter, reader: jspb.BinaryReader): ApplicationDateFilter;
}

export namespace ApplicationDateFilter {
  export type AsObject = {
    startDate?: google_type_date_pb.Date.AsObject,
    endDate?: google_type_date_pb.Date.AsObject,
  }
}

export class ApplicationOutcomeNotesFilter extends jspb.Message {
  getOutcomeNotes(): string;
  setOutcomeNotes(value: string): void;

  getNegated(): boolean;
  setNegated(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplicationOutcomeNotesFilter.AsObject;
  static toObject(includeInstance: boolean, msg: ApplicationOutcomeNotesFilter): ApplicationOutcomeNotesFilter.AsObject;
  static serializeBinaryToWriter(message: ApplicationOutcomeNotesFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplicationOutcomeNotesFilter;
  static deserializeBinaryFromReader(message: ApplicationOutcomeNotesFilter, reader: jspb.BinaryReader): ApplicationOutcomeNotesFilter;
}

export namespace ApplicationOutcomeNotesFilter {
  export type AsObject = {
    outcomeNotes: string,
    negated: boolean,
  }
}

export class ApplicationJobFilter extends jspb.Message {
  getJobRequisitionId(): string;
  setJobRequisitionId(value: string): void;

  getJobTitle(): string;
  setJobTitle(value: string): void;

  getNegated(): boolean;
  setNegated(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplicationJobFilter.AsObject;
  static toObject(includeInstance: boolean, msg: ApplicationJobFilter): ApplicationJobFilter.AsObject;
  static serializeBinaryToWriter(message: ApplicationJobFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplicationJobFilter;
  static deserializeBinaryFromReader(message: ApplicationJobFilter, reader: jspb.BinaryReader): ApplicationJobFilter;
}

export namespace ApplicationJobFilter {
  export type AsObject = {
    jobRequisitionId: string,
    jobTitle: string,
    negated: boolean,
  }
}

export class TimeFilter extends jspb.Message {
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasStartTime(): boolean;
  clearStartTime(): void;

  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasEndTime(): boolean;
  clearEndTime(): void;

  getTimeField(): TimeFilter.TimeField;
  setTimeField(value: TimeFilter.TimeField): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimeFilter.AsObject;
  static toObject(includeInstance: boolean, msg: TimeFilter): TimeFilter.AsObject;
  static serializeBinaryToWriter(message: TimeFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimeFilter;
  static deserializeBinaryFromReader(message: TimeFilter, reader: jspb.BinaryReader): TimeFilter;
}

export namespace TimeFilter {
  export type AsObject = {
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    timeField: TimeFilter.TimeField,
  }

  export enum TimeField { 
    TIME_FIELD_UNSPECIFIED = 0,
    CREATE_TIME = 1,
    UPDATE_TIME = 2,
  }
}

export class CandidateAvailabilityFilter extends jspb.Message {
  getNegated(): boolean;
  setNegated(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CandidateAvailabilityFilter.AsObject;
  static toObject(includeInstance: boolean, msg: CandidateAvailabilityFilter): CandidateAvailabilityFilter.AsObject;
  static serializeBinaryToWriter(message: CandidateAvailabilityFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CandidateAvailabilityFilter;
  static deserializeBinaryFromReader(message: CandidateAvailabilityFilter, reader: jspb.BinaryReader): CandidateAvailabilityFilter;
}

export namespace CandidateAvailabilityFilter {
  export type AsObject = {
    negated: boolean,
  }
}

export class AvailabilityFilter extends jspb.Message {
  getSignalType(): google_cloud_talent_v4beta1_common_pb.AvailabilitySignalType;
  setSignalType(value: google_cloud_talent_v4beta1_common_pb.AvailabilitySignalType): void;

  getRange(): google_cloud_talent_v4beta1_common_pb.TimestampRange | undefined;
  setRange(value?: google_cloud_talent_v4beta1_common_pb.TimestampRange): void;
  hasRange(): boolean;
  clearRange(): void;

  getRequired(): boolean;
  setRequired(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AvailabilityFilter.AsObject;
  static toObject(includeInstance: boolean, msg: AvailabilityFilter): AvailabilityFilter.AsObject;
  static serializeBinaryToWriter(message: AvailabilityFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AvailabilityFilter;
  static deserializeBinaryFromReader(message: AvailabilityFilter, reader: jspb.BinaryReader): AvailabilityFilter;
}

export namespace AvailabilityFilter {
  export type AsObject = {
    signalType: google_cloud_talent_v4beta1_common_pb.AvailabilitySignalType,
    range?: google_cloud_talent_v4beta1_common_pb.TimestampRange.AsObject,
    required: boolean,
  }
}

export class PersonNameFilter extends jspb.Message {
  getPersonName(): string;
  setPersonName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PersonNameFilter.AsObject;
  static toObject(includeInstance: boolean, msg: PersonNameFilter): PersonNameFilter.AsObject;
  static serializeBinaryToWriter(message: PersonNameFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PersonNameFilter;
  static deserializeBinaryFromReader(message: PersonNameFilter, reader: jspb.BinaryReader): PersonNameFilter;
}

export namespace PersonNameFilter {
  export type AsObject = {
    personName: string,
  }
}

