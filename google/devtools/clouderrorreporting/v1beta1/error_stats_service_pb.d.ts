import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';
import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb';
import * as google_api_resource_pb from '../../../../google/api/resource_pb';
import * as google_devtools_clouderrorreporting_v1beta1_common_pb from '../../../../google/devtools/clouderrorreporting/v1beta1/common_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class ListGroupStatsRequest extends jspb.Message {
  getProjectName(): string;
  setProjectName(value: string): void;

  getGroupIdList(): Array<string>;
  setGroupIdList(value: Array<string>): void;
  clearGroupIdList(): void;
  addGroupId(value: string, index?: number): void;

  getServiceFilter(): ServiceContextFilter | undefined;
  setServiceFilter(value?: ServiceContextFilter): void;
  hasServiceFilter(): boolean;
  clearServiceFilter(): void;

  getTimeRange(): QueryTimeRange | undefined;
  setTimeRange(value?: QueryTimeRange): void;
  hasTimeRange(): boolean;
  clearTimeRange(): void;

  getTimedCountDuration(): google_protobuf_duration_pb.Duration | undefined;
  setTimedCountDuration(value?: google_protobuf_duration_pb.Duration): void;
  hasTimedCountDuration(): boolean;
  clearTimedCountDuration(): void;

  getAlignment(): TimedCountAlignment;
  setAlignment(value: TimedCountAlignment): void;

  getAlignmentTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setAlignmentTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasAlignmentTime(): boolean;
  clearAlignmentTime(): void;

  getOrder(): ErrorGroupOrder;
  setOrder(value: ErrorGroupOrder): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListGroupStatsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListGroupStatsRequest): ListGroupStatsRequest.AsObject;
  static serializeBinaryToWriter(message: ListGroupStatsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListGroupStatsRequest;
  static deserializeBinaryFromReader(message: ListGroupStatsRequest, reader: jspb.BinaryReader): ListGroupStatsRequest;
}

export namespace ListGroupStatsRequest {
  export type AsObject = {
    projectName: string,
    groupIdList: Array<string>,
    serviceFilter?: ServiceContextFilter.AsObject,
    timeRange?: QueryTimeRange.AsObject,
    timedCountDuration?: google_protobuf_duration_pb.Duration.AsObject,
    alignment: TimedCountAlignment,
    alignmentTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    order: ErrorGroupOrder,
    pageSize: number,
    pageToken: string,
  }
}

export class ListGroupStatsResponse extends jspb.Message {
  getErrorGroupStatsList(): Array<ErrorGroupStats>;
  setErrorGroupStatsList(value: Array<ErrorGroupStats>): void;
  clearErrorGroupStatsList(): void;
  addErrorGroupStats(value?: ErrorGroupStats, index?: number): ErrorGroupStats;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  getTimeRangeBegin(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimeRangeBegin(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasTimeRangeBegin(): boolean;
  clearTimeRangeBegin(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListGroupStatsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListGroupStatsResponse): ListGroupStatsResponse.AsObject;
  static serializeBinaryToWriter(message: ListGroupStatsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListGroupStatsResponse;
  static deserializeBinaryFromReader(message: ListGroupStatsResponse, reader: jspb.BinaryReader): ListGroupStatsResponse;
}

export namespace ListGroupStatsResponse {
  export type AsObject = {
    errorGroupStatsList: Array<ErrorGroupStats.AsObject>,
    nextPageToken: string,
    timeRangeBegin?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ErrorGroupStats extends jspb.Message {
  getGroup(): google_devtools_clouderrorreporting_v1beta1_common_pb.ErrorGroup | undefined;
  setGroup(value?: google_devtools_clouderrorreporting_v1beta1_common_pb.ErrorGroup): void;
  hasGroup(): boolean;
  clearGroup(): void;

  getCount(): number;
  setCount(value: number): void;

  getAffectedUsersCount(): number;
  setAffectedUsersCount(value: number): void;

  getTimedCountsList(): Array<TimedCount>;
  setTimedCountsList(value: Array<TimedCount>): void;
  clearTimedCountsList(): void;
  addTimedCounts(value?: TimedCount, index?: number): TimedCount;

  getFirstSeenTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFirstSeenTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasFirstSeenTime(): boolean;
  clearFirstSeenTime(): void;

  getLastSeenTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastSeenTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasLastSeenTime(): boolean;
  clearLastSeenTime(): void;

  getAffectedServicesList(): Array<google_devtools_clouderrorreporting_v1beta1_common_pb.ServiceContext>;
  setAffectedServicesList(value: Array<google_devtools_clouderrorreporting_v1beta1_common_pb.ServiceContext>): void;
  clearAffectedServicesList(): void;
  addAffectedServices(value?: google_devtools_clouderrorreporting_v1beta1_common_pb.ServiceContext, index?: number): google_devtools_clouderrorreporting_v1beta1_common_pb.ServiceContext;

  getNumAffectedServices(): number;
  setNumAffectedServices(value: number): void;

  getRepresentative(): google_devtools_clouderrorreporting_v1beta1_common_pb.ErrorEvent | undefined;
  setRepresentative(value?: google_devtools_clouderrorreporting_v1beta1_common_pb.ErrorEvent): void;
  hasRepresentative(): boolean;
  clearRepresentative(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ErrorGroupStats.AsObject;
  static toObject(includeInstance: boolean, msg: ErrorGroupStats): ErrorGroupStats.AsObject;
  static serializeBinaryToWriter(message: ErrorGroupStats, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ErrorGroupStats;
  static deserializeBinaryFromReader(message: ErrorGroupStats, reader: jspb.BinaryReader): ErrorGroupStats;
}

export namespace ErrorGroupStats {
  export type AsObject = {
    group?: google_devtools_clouderrorreporting_v1beta1_common_pb.ErrorGroup.AsObject,
    count: number,
    affectedUsersCount: number,
    timedCountsList: Array<TimedCount.AsObject>,
    firstSeenTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastSeenTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    affectedServicesList: Array<google_devtools_clouderrorreporting_v1beta1_common_pb.ServiceContext.AsObject>,
    numAffectedServices: number,
    representative?: google_devtools_clouderrorreporting_v1beta1_common_pb.ErrorEvent.AsObject,
  }
}

export class TimedCount extends jspb.Message {
  getCount(): number;
  setCount(value: number): void;

  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasStartTime(): boolean;
  clearStartTime(): void;

  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasEndTime(): boolean;
  clearEndTime(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimedCount.AsObject;
  static toObject(includeInstance: boolean, msg: TimedCount): TimedCount.AsObject;
  static serializeBinaryToWriter(message: TimedCount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimedCount;
  static deserializeBinaryFromReader(message: TimedCount, reader: jspb.BinaryReader): TimedCount;
}

export namespace TimedCount {
  export type AsObject = {
    count: number,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ListEventsRequest extends jspb.Message {
  getProjectName(): string;
  setProjectName(value: string): void;

  getGroupId(): string;
  setGroupId(value: string): void;

  getServiceFilter(): ServiceContextFilter | undefined;
  setServiceFilter(value?: ServiceContextFilter): void;
  hasServiceFilter(): boolean;
  clearServiceFilter(): void;

  getTimeRange(): QueryTimeRange | undefined;
  setTimeRange(value?: QueryTimeRange): void;
  hasTimeRange(): boolean;
  clearTimeRange(): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListEventsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListEventsRequest): ListEventsRequest.AsObject;
  static serializeBinaryToWriter(message: ListEventsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListEventsRequest;
  static deserializeBinaryFromReader(message: ListEventsRequest, reader: jspb.BinaryReader): ListEventsRequest;
}

export namespace ListEventsRequest {
  export type AsObject = {
    projectName: string,
    groupId: string,
    serviceFilter?: ServiceContextFilter.AsObject,
    timeRange?: QueryTimeRange.AsObject,
    pageSize: number,
    pageToken: string,
  }
}

export class ListEventsResponse extends jspb.Message {
  getErrorEventsList(): Array<google_devtools_clouderrorreporting_v1beta1_common_pb.ErrorEvent>;
  setErrorEventsList(value: Array<google_devtools_clouderrorreporting_v1beta1_common_pb.ErrorEvent>): void;
  clearErrorEventsList(): void;
  addErrorEvents(value?: google_devtools_clouderrorreporting_v1beta1_common_pb.ErrorEvent, index?: number): google_devtools_clouderrorreporting_v1beta1_common_pb.ErrorEvent;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  getTimeRangeBegin(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimeRangeBegin(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasTimeRangeBegin(): boolean;
  clearTimeRangeBegin(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListEventsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListEventsResponse): ListEventsResponse.AsObject;
  static serializeBinaryToWriter(message: ListEventsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListEventsResponse;
  static deserializeBinaryFromReader(message: ListEventsResponse, reader: jspb.BinaryReader): ListEventsResponse;
}

export namespace ListEventsResponse {
  export type AsObject = {
    errorEventsList: Array<google_devtools_clouderrorreporting_v1beta1_common_pb.ErrorEvent.AsObject>,
    nextPageToken: string,
    timeRangeBegin?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class QueryTimeRange extends jspb.Message {
  getPeriod(): QueryTimeRange.Period;
  setPeriod(value: QueryTimeRange.Period): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryTimeRange.AsObject;
  static toObject(includeInstance: boolean, msg: QueryTimeRange): QueryTimeRange.AsObject;
  static serializeBinaryToWriter(message: QueryTimeRange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryTimeRange;
  static deserializeBinaryFromReader(message: QueryTimeRange, reader: jspb.BinaryReader): QueryTimeRange;
}

export namespace QueryTimeRange {
  export type AsObject = {
    period: QueryTimeRange.Period,
  }

  export enum Period { 
    PERIOD_UNSPECIFIED = 0,
    PERIOD_1_HOUR = 1,
    PERIOD_6_HOURS = 2,
    PERIOD_1_DAY = 3,
    PERIOD_1_WEEK = 4,
    PERIOD_30_DAYS = 5,
  }
}

export class ServiceContextFilter extends jspb.Message {
  getService(): string;
  setService(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  getResourceType(): string;
  setResourceType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceContextFilter.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceContextFilter): ServiceContextFilter.AsObject;
  static serializeBinaryToWriter(message: ServiceContextFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceContextFilter;
  static deserializeBinaryFromReader(message: ServiceContextFilter, reader: jspb.BinaryReader): ServiceContextFilter;
}

export namespace ServiceContextFilter {
  export type AsObject = {
    service: string,
    version: string,
    resourceType: string,
  }
}

export class DeleteEventsRequest extends jspb.Message {
  getProjectName(): string;
  setProjectName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteEventsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteEventsRequest): DeleteEventsRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteEventsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteEventsRequest;
  static deserializeBinaryFromReader(message: DeleteEventsRequest, reader: jspb.BinaryReader): DeleteEventsRequest;
}

export namespace DeleteEventsRequest {
  export type AsObject = {
    projectName: string,
  }
}

export class DeleteEventsResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteEventsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteEventsResponse): DeleteEventsResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteEventsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteEventsResponse;
  static deserializeBinaryFromReader(message: DeleteEventsResponse, reader: jspb.BinaryReader): DeleteEventsResponse;
}

export namespace DeleteEventsResponse {
  export type AsObject = {
  }
}

export enum TimedCountAlignment { 
  ERROR_COUNT_ALIGNMENT_UNSPECIFIED = 0,
  ALIGNMENT_EQUAL_ROUNDED = 1,
  ALIGNMENT_EQUAL_AT_END = 2,
}
export enum ErrorGroupOrder { 
  GROUP_ORDER_UNSPECIFIED = 0,
  COUNT_DESC = 1,
  LAST_SEEN_DESC = 2,
  CREATED_DESC = 3,
  AFFECTED_USERS_DESC = 4,
}
