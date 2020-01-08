import * as jspb from "google-protobuf"

import * as google_ads_googleads_v2_enums_month_of_year_pb from '../../../../../google/ads/googleads/v2/enums/month_of_year_pb';
import * as google_ads_googleads_v2_resources_invoice_pb from '../../../../../google/ads/googleads/v2/resources/invoice_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../../google/api/client_pb';

export class ListInvoicesRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  getBillingSetup(): string;
  setBillingSetup(value: string): void;

  getIssueYear(): string;
  setIssueYear(value: string): void;

  getIssueMonth(): google_ads_googleads_v2_enums_month_of_year_pb.MonthOfYearEnum.MonthOfYear;
  setIssueMonth(value: google_ads_googleads_v2_enums_month_of_year_pb.MonthOfYearEnum.MonthOfYear): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListInvoicesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListInvoicesRequest): ListInvoicesRequest.AsObject;
  static serializeBinaryToWriter(message: ListInvoicesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListInvoicesRequest;
  static deserializeBinaryFromReader(message: ListInvoicesRequest, reader: jspb.BinaryReader): ListInvoicesRequest;
}

export namespace ListInvoicesRequest {
  export type AsObject = {
    customerId: string,
    billingSetup: string,
    issueYear: string,
    issueMonth: google_ads_googleads_v2_enums_month_of_year_pb.MonthOfYearEnum.MonthOfYear,
  }
}

export class ListInvoicesResponse extends jspb.Message {
  getInvoicesList(): Array<google_ads_googleads_v2_resources_invoice_pb.Invoice>;
  setInvoicesList(value: Array<google_ads_googleads_v2_resources_invoice_pb.Invoice>): void;
  clearInvoicesList(): void;
  addInvoices(value?: google_ads_googleads_v2_resources_invoice_pb.Invoice, index?: number): google_ads_googleads_v2_resources_invoice_pb.Invoice;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListInvoicesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListInvoicesResponse): ListInvoicesResponse.AsObject;
  static serializeBinaryToWriter(message: ListInvoicesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListInvoicesResponse;
  static deserializeBinaryFromReader(message: ListInvoicesResponse, reader: jspb.BinaryReader): ListInvoicesResponse;
}

export namespace ListInvoicesResponse {
  export type AsObject = {
    invoicesList: Array<google_ads_googleads_v2_resources_invoice_pb.Invoice.AsObject>,
  }
}

