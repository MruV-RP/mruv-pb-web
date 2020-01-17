import * as jspb from "google-protobuf"

import * as google_ads_googleads_v2_common_dates_pb from '../../../../../google/ads/googleads/v2/common/dates_pb';
import * as google_ads_googleads_v2_enums_invoice_type_pb from '../../../../../google/ads/googleads/v2/enums/invoice_type_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class Invoice extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  getId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setId(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasId(): boolean;
  clearId(): void;

  getType(): google_ads_googleads_v2_enums_invoice_type_pb.InvoiceTypeEnum.InvoiceType;
  setType(value: google_ads_googleads_v2_enums_invoice_type_pb.InvoiceTypeEnum.InvoiceType): void;

  getBillingSetup(): google_protobuf_wrappers_pb.StringValue | undefined;
  setBillingSetup(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasBillingSetup(): boolean;
  clearBillingSetup(): void;

  getPaymentsAccountId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setPaymentsAccountId(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasPaymentsAccountId(): boolean;
  clearPaymentsAccountId(): void;

  getPaymentsProfileId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setPaymentsProfileId(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasPaymentsProfileId(): boolean;
  clearPaymentsProfileId(): void;

  getIssueDate(): google_protobuf_wrappers_pb.StringValue | undefined;
  setIssueDate(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasIssueDate(): boolean;
  clearIssueDate(): void;

  getDueDate(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDueDate(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasDueDate(): boolean;
  clearDueDate(): void;

  getServiceDateRange(): google_ads_googleads_v2_common_dates_pb.DateRange | undefined;
  setServiceDateRange(value?: google_ads_googleads_v2_common_dates_pb.DateRange): void;
  hasServiceDateRange(): boolean;
  clearServiceDateRange(): void;

  getCurrencyCode(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCurrencyCode(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasCurrencyCode(): boolean;
  clearCurrencyCode(): void;

  getInvoiceLevelAdjustmentsMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setInvoiceLevelAdjustmentsMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasInvoiceLevelAdjustmentsMicros(): boolean;
  clearInvoiceLevelAdjustmentsMicros(): void;

  getSubtotalAmountMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setSubtotalAmountMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasSubtotalAmountMicros(): boolean;
  clearSubtotalAmountMicros(): void;

  getTaxAmountMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setTaxAmountMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasTaxAmountMicros(): boolean;
  clearTaxAmountMicros(): void;

  getTotalAmountMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setTotalAmountMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasTotalAmountMicros(): boolean;
  clearTotalAmountMicros(): void;

  getCorrectedInvoice(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCorrectedInvoice(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasCorrectedInvoice(): boolean;
  clearCorrectedInvoice(): void;

  getReplacedInvoicesList(): Array<google_protobuf_wrappers_pb.StringValue>;
  setReplacedInvoicesList(value: Array<google_protobuf_wrappers_pb.StringValue>): void;
  clearReplacedInvoicesList(): void;
  addReplacedInvoices(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;

  getPdfUrl(): google_protobuf_wrappers_pb.StringValue | undefined;
  setPdfUrl(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasPdfUrl(): boolean;
  clearPdfUrl(): void;

  getAccountBudgetSummariesList(): Array<Invoice.AccountBudgetSummary>;
  setAccountBudgetSummariesList(value: Array<Invoice.AccountBudgetSummary>): void;
  clearAccountBudgetSummariesList(): void;
  addAccountBudgetSummaries(value?: Invoice.AccountBudgetSummary, index?: number): Invoice.AccountBudgetSummary;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Invoice.AsObject;
  static toObject(includeInstance: boolean, msg: Invoice): Invoice.AsObject;
  static serializeBinaryToWriter(message: Invoice, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Invoice;
  static deserializeBinaryFromReader(message: Invoice, reader: jspb.BinaryReader): Invoice;
}

export namespace Invoice {
  export type AsObject = {
    resourceName: string,
    id?: google_protobuf_wrappers_pb.StringValue.AsObject,
    type: google_ads_googleads_v2_enums_invoice_type_pb.InvoiceTypeEnum.InvoiceType,
    billingSetup?: google_protobuf_wrappers_pb.StringValue.AsObject,
    paymentsAccountId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    paymentsProfileId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    issueDate?: google_protobuf_wrappers_pb.StringValue.AsObject,
    dueDate?: google_protobuf_wrappers_pb.StringValue.AsObject,
    serviceDateRange?: google_ads_googleads_v2_common_dates_pb.DateRange.AsObject,
    currencyCode?: google_protobuf_wrappers_pb.StringValue.AsObject,
    invoiceLevelAdjustmentsMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    subtotalAmountMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    taxAmountMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    totalAmountMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    correctedInvoice?: google_protobuf_wrappers_pb.StringValue.AsObject,
    replacedInvoicesList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
    pdfUrl?: google_protobuf_wrappers_pb.StringValue.AsObject,
    accountBudgetSummariesList: Array<Invoice.AccountBudgetSummary.AsObject>,
  }

  export class AccountBudgetSummary extends jspb.Message {
    getCustomer(): google_protobuf_wrappers_pb.StringValue | undefined;
    setCustomer(value?: google_protobuf_wrappers_pb.StringValue): void;
    hasCustomer(): boolean;
    clearCustomer(): void;

    getCustomerDescriptiveName(): google_protobuf_wrappers_pb.StringValue | undefined;
    setCustomerDescriptiveName(value?: google_protobuf_wrappers_pb.StringValue): void;
    hasCustomerDescriptiveName(): boolean;
    clearCustomerDescriptiveName(): void;

    getAccountBudget(): google_protobuf_wrappers_pb.StringValue | undefined;
    setAccountBudget(value?: google_protobuf_wrappers_pb.StringValue): void;
    hasAccountBudget(): boolean;
    clearAccountBudget(): void;

    getAccountBudgetName(): google_protobuf_wrappers_pb.StringValue | undefined;
    setAccountBudgetName(value?: google_protobuf_wrappers_pb.StringValue): void;
    hasAccountBudgetName(): boolean;
    clearAccountBudgetName(): void;

    getPurchaseOrderNumber(): google_protobuf_wrappers_pb.StringValue | undefined;
    setPurchaseOrderNumber(value?: google_protobuf_wrappers_pb.StringValue): void;
    hasPurchaseOrderNumber(): boolean;
    clearPurchaseOrderNumber(): void;

    getSubtotalAmountMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setSubtotalAmountMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;
    hasSubtotalAmountMicros(): boolean;
    clearSubtotalAmountMicros(): void;

    getTaxAmountMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setTaxAmountMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;
    hasTaxAmountMicros(): boolean;
    clearTaxAmountMicros(): void;

    getTotalAmountMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setTotalAmountMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;
    hasTotalAmountMicros(): boolean;
    clearTotalAmountMicros(): void;

    getBillableActivityDateRange(): google_ads_googleads_v2_common_dates_pb.DateRange | undefined;
    setBillableActivityDateRange(value?: google_ads_googleads_v2_common_dates_pb.DateRange): void;
    hasBillableActivityDateRange(): boolean;
    clearBillableActivityDateRange(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AccountBudgetSummary.AsObject;
    static toObject(includeInstance: boolean, msg: AccountBudgetSummary): AccountBudgetSummary.AsObject;
    static serializeBinaryToWriter(message: AccountBudgetSummary, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AccountBudgetSummary;
    static deserializeBinaryFromReader(message: AccountBudgetSummary, reader: jspb.BinaryReader): AccountBudgetSummary;
  }

  export namespace AccountBudgetSummary {
    export type AsObject = {
      customer?: google_protobuf_wrappers_pb.StringValue.AsObject,
      customerDescriptiveName?: google_protobuf_wrappers_pb.StringValue.AsObject,
      accountBudget?: google_protobuf_wrappers_pb.StringValue.AsObject,
      accountBudgetName?: google_protobuf_wrappers_pb.StringValue.AsObject,
      purchaseOrderNumber?: google_protobuf_wrappers_pb.StringValue.AsObject,
      subtotalAmountMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
      taxAmountMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
      totalAmountMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
      billableActivityDateRange?: google_ads_googleads_v2_common_dates_pb.DateRange.AsObject,
    }
  }

}
