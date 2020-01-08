import * as jspb from "google-protobuf"

import * as google_ads_googleads_v1_common_ad_asset_pb from '../../../../../google/ads/googleads/v1/common/ad_asset_pb';
import * as google_ads_googleads_v1_enums_call_conversion_reporting_state_pb from '../../../../../google/ads/googleads/v1/enums/call_conversion_reporting_state_pb';
import * as google_ads_googleads_v1_enums_display_ad_format_setting_pb from '../../../../../google/ads/googleads/v1/enums/display_ad_format_setting_pb';
import * as google_ads_googleads_v1_enums_display_upload_product_type_pb from '../../../../../google/ads/googleads/v1/enums/display_upload_product_type_pb';
import * as google_ads_googleads_v1_enums_legacy_app_install_ad_app_store_pb from '../../../../../google/ads/googleads/v1/enums/legacy_app_install_ad_app_store_pb';
import * as google_ads_googleads_v1_enums_mime_type_pb from '../../../../../google/ads/googleads/v1/enums/mime_type_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';

export class TextAdInfo extends jspb.Message {
  getHeadline(): google_protobuf_wrappers_pb.StringValue | undefined;
  setHeadline(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasHeadline(): boolean;
  clearHeadline(): void;

  getDescription1(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDescription1(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasDescription1(): boolean;
  clearDescription1(): void;

  getDescription2(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDescription2(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasDescription2(): boolean;
  clearDescription2(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TextAdInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TextAdInfo): TextAdInfo.AsObject;
  static serializeBinaryToWriter(message: TextAdInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TextAdInfo;
  static deserializeBinaryFromReader(message: TextAdInfo, reader: jspb.BinaryReader): TextAdInfo;
}

export namespace TextAdInfo {
  export type AsObject = {
    headline?: google_protobuf_wrappers_pb.StringValue.AsObject,
    description1?: google_protobuf_wrappers_pb.StringValue.AsObject,
    description2?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class ExpandedTextAdInfo extends jspb.Message {
  getHeadlinePart1(): google_protobuf_wrappers_pb.StringValue | undefined;
  setHeadlinePart1(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasHeadlinePart1(): boolean;
  clearHeadlinePart1(): void;

  getHeadlinePart2(): google_protobuf_wrappers_pb.StringValue | undefined;
  setHeadlinePart2(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasHeadlinePart2(): boolean;
  clearHeadlinePart2(): void;

  getHeadlinePart3(): google_protobuf_wrappers_pb.StringValue | undefined;
  setHeadlinePart3(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasHeadlinePart3(): boolean;
  clearHeadlinePart3(): void;

  getDescription(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDescription(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasDescription(): boolean;
  clearDescription(): void;

  getDescription2(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDescription2(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasDescription2(): boolean;
  clearDescription2(): void;

  getPath1(): google_protobuf_wrappers_pb.StringValue | undefined;
  setPath1(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasPath1(): boolean;
  clearPath1(): void;

  getPath2(): google_protobuf_wrappers_pb.StringValue | undefined;
  setPath2(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasPath2(): boolean;
  clearPath2(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExpandedTextAdInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ExpandedTextAdInfo): ExpandedTextAdInfo.AsObject;
  static serializeBinaryToWriter(message: ExpandedTextAdInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExpandedTextAdInfo;
  static deserializeBinaryFromReader(message: ExpandedTextAdInfo, reader: jspb.BinaryReader): ExpandedTextAdInfo;
}

export namespace ExpandedTextAdInfo {
  export type AsObject = {
    headlinePart1?: google_protobuf_wrappers_pb.StringValue.AsObject,
    headlinePart2?: google_protobuf_wrappers_pb.StringValue.AsObject,
    headlinePart3?: google_protobuf_wrappers_pb.StringValue.AsObject,
    description?: google_protobuf_wrappers_pb.StringValue.AsObject,
    description2?: google_protobuf_wrappers_pb.StringValue.AsObject,
    path1?: google_protobuf_wrappers_pb.StringValue.AsObject,
    path2?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class CallOnlyAdInfo extends jspb.Message {
  getCountryCode(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCountryCode(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasCountryCode(): boolean;
  clearCountryCode(): void;

  getPhoneNumber(): google_protobuf_wrappers_pb.StringValue | undefined;
  setPhoneNumber(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasPhoneNumber(): boolean;
  clearPhoneNumber(): void;

  getBusinessName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setBusinessName(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasBusinessName(): boolean;
  clearBusinessName(): void;

  getHeadline1(): google_protobuf_wrappers_pb.StringValue | undefined;
  setHeadline1(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasHeadline1(): boolean;
  clearHeadline1(): void;

  getHeadline2(): google_protobuf_wrappers_pb.StringValue | undefined;
  setHeadline2(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasHeadline2(): boolean;
  clearHeadline2(): void;

  getDescription1(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDescription1(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasDescription1(): boolean;
  clearDescription1(): void;

  getDescription2(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDescription2(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasDescription2(): boolean;
  clearDescription2(): void;

  getCallTracked(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setCallTracked(value?: google_protobuf_wrappers_pb.BoolValue): void;
  hasCallTracked(): boolean;
  clearCallTracked(): void;

  getDisableCallConversion(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setDisableCallConversion(value?: google_protobuf_wrappers_pb.BoolValue): void;
  hasDisableCallConversion(): boolean;
  clearDisableCallConversion(): void;

  getPhoneNumberVerificationUrl(): google_protobuf_wrappers_pb.StringValue | undefined;
  setPhoneNumberVerificationUrl(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasPhoneNumberVerificationUrl(): boolean;
  clearPhoneNumberVerificationUrl(): void;

  getConversionAction(): google_protobuf_wrappers_pb.StringValue | undefined;
  setConversionAction(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasConversionAction(): boolean;
  clearConversionAction(): void;

  getConversionReportingState(): google_ads_googleads_v1_enums_call_conversion_reporting_state_pb.CallConversionReportingStateEnum.CallConversionReportingState;
  setConversionReportingState(value: google_ads_googleads_v1_enums_call_conversion_reporting_state_pb.CallConversionReportingStateEnum.CallConversionReportingState): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CallOnlyAdInfo.AsObject;
  static toObject(includeInstance: boolean, msg: CallOnlyAdInfo): CallOnlyAdInfo.AsObject;
  static serializeBinaryToWriter(message: CallOnlyAdInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CallOnlyAdInfo;
  static deserializeBinaryFromReader(message: CallOnlyAdInfo, reader: jspb.BinaryReader): CallOnlyAdInfo;
}

export namespace CallOnlyAdInfo {
  export type AsObject = {
    countryCode?: google_protobuf_wrappers_pb.StringValue.AsObject,
    phoneNumber?: google_protobuf_wrappers_pb.StringValue.AsObject,
    businessName?: google_protobuf_wrappers_pb.StringValue.AsObject,
    headline1?: google_protobuf_wrappers_pb.StringValue.AsObject,
    headline2?: google_protobuf_wrappers_pb.StringValue.AsObject,
    description1?: google_protobuf_wrappers_pb.StringValue.AsObject,
    description2?: google_protobuf_wrappers_pb.StringValue.AsObject,
    callTracked?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    disableCallConversion?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    phoneNumberVerificationUrl?: google_protobuf_wrappers_pb.StringValue.AsObject,
    conversionAction?: google_protobuf_wrappers_pb.StringValue.AsObject,
    conversionReportingState: google_ads_googleads_v1_enums_call_conversion_reporting_state_pb.CallConversionReportingStateEnum.CallConversionReportingState,
  }
}

export class ExpandedDynamicSearchAdInfo extends jspb.Message {
  getDescription(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDescription(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasDescription(): boolean;
  clearDescription(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExpandedDynamicSearchAdInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ExpandedDynamicSearchAdInfo): ExpandedDynamicSearchAdInfo.AsObject;
  static serializeBinaryToWriter(message: ExpandedDynamicSearchAdInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExpandedDynamicSearchAdInfo;
  static deserializeBinaryFromReader(message: ExpandedDynamicSearchAdInfo, reader: jspb.BinaryReader): ExpandedDynamicSearchAdInfo;
}

export namespace ExpandedDynamicSearchAdInfo {
  export type AsObject = {
    description?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class HotelAdInfo extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HotelAdInfo.AsObject;
  static toObject(includeInstance: boolean, msg: HotelAdInfo): HotelAdInfo.AsObject;
  static serializeBinaryToWriter(message: HotelAdInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HotelAdInfo;
  static deserializeBinaryFromReader(message: HotelAdInfo, reader: jspb.BinaryReader): HotelAdInfo;
}

export namespace HotelAdInfo {
  export type AsObject = {
  }
}

export class ShoppingSmartAdInfo extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShoppingSmartAdInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ShoppingSmartAdInfo): ShoppingSmartAdInfo.AsObject;
  static serializeBinaryToWriter(message: ShoppingSmartAdInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShoppingSmartAdInfo;
  static deserializeBinaryFromReader(message: ShoppingSmartAdInfo, reader: jspb.BinaryReader): ShoppingSmartAdInfo;
}

export namespace ShoppingSmartAdInfo {
  export type AsObject = {
  }
}

export class ShoppingProductAdInfo extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShoppingProductAdInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ShoppingProductAdInfo): ShoppingProductAdInfo.AsObject;
  static serializeBinaryToWriter(message: ShoppingProductAdInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShoppingProductAdInfo;
  static deserializeBinaryFromReader(message: ShoppingProductAdInfo, reader: jspb.BinaryReader): ShoppingProductAdInfo;
}

export namespace ShoppingProductAdInfo {
  export type AsObject = {
  }
}

export class ShoppingComparisonListingAdInfo extends jspb.Message {
  getHeadline(): google_protobuf_wrappers_pb.StringValue | undefined;
  setHeadline(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasHeadline(): boolean;
  clearHeadline(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShoppingComparisonListingAdInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ShoppingComparisonListingAdInfo): ShoppingComparisonListingAdInfo.AsObject;
  static serializeBinaryToWriter(message: ShoppingComparisonListingAdInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShoppingComparisonListingAdInfo;
  static deserializeBinaryFromReader(message: ShoppingComparisonListingAdInfo, reader: jspb.BinaryReader): ShoppingComparisonListingAdInfo;
}

export namespace ShoppingComparisonListingAdInfo {
  export type AsObject = {
    headline?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class GmailAdInfo extends jspb.Message {
  getTeaser(): GmailTeaser | undefined;
  setTeaser(value?: GmailTeaser): void;
  hasTeaser(): boolean;
  clearTeaser(): void;

  getHeaderImage(): google_protobuf_wrappers_pb.StringValue | undefined;
  setHeaderImage(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasHeaderImage(): boolean;
  clearHeaderImage(): void;

  getMarketingImage(): google_protobuf_wrappers_pb.StringValue | undefined;
  setMarketingImage(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasMarketingImage(): boolean;
  clearMarketingImage(): void;

  getMarketingImageHeadline(): google_protobuf_wrappers_pb.StringValue | undefined;
  setMarketingImageHeadline(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasMarketingImageHeadline(): boolean;
  clearMarketingImageHeadline(): void;

  getMarketingImageDescription(): google_protobuf_wrappers_pb.StringValue | undefined;
  setMarketingImageDescription(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasMarketingImageDescription(): boolean;
  clearMarketingImageDescription(): void;

  getMarketingImageDisplayCallToAction(): DisplayCallToAction | undefined;
  setMarketingImageDisplayCallToAction(value?: DisplayCallToAction): void;
  hasMarketingImageDisplayCallToAction(): boolean;
  clearMarketingImageDisplayCallToAction(): void;

  getProductImagesList(): Array<ProductImage>;
  setProductImagesList(value: Array<ProductImage>): void;
  clearProductImagesList(): void;
  addProductImages(value?: ProductImage, index?: number): ProductImage;

  getProductVideosList(): Array<ProductVideo>;
  setProductVideosList(value: Array<ProductVideo>): void;
  clearProductVideosList(): void;
  addProductVideos(value?: ProductVideo, index?: number): ProductVideo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GmailAdInfo.AsObject;
  static toObject(includeInstance: boolean, msg: GmailAdInfo): GmailAdInfo.AsObject;
  static serializeBinaryToWriter(message: GmailAdInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GmailAdInfo;
  static deserializeBinaryFromReader(message: GmailAdInfo, reader: jspb.BinaryReader): GmailAdInfo;
}

export namespace GmailAdInfo {
  export type AsObject = {
    teaser?: GmailTeaser.AsObject,
    headerImage?: google_protobuf_wrappers_pb.StringValue.AsObject,
    marketingImage?: google_protobuf_wrappers_pb.StringValue.AsObject,
    marketingImageHeadline?: google_protobuf_wrappers_pb.StringValue.AsObject,
    marketingImageDescription?: google_protobuf_wrappers_pb.StringValue.AsObject,
    marketingImageDisplayCallToAction?: DisplayCallToAction.AsObject,
    productImagesList: Array<ProductImage.AsObject>,
    productVideosList: Array<ProductVideo.AsObject>,
  }
}

export class GmailTeaser extends jspb.Message {
  getHeadline(): google_protobuf_wrappers_pb.StringValue | undefined;
  setHeadline(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasHeadline(): boolean;
  clearHeadline(): void;

  getDescription(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDescription(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasDescription(): boolean;
  clearDescription(): void;

  getBusinessName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setBusinessName(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasBusinessName(): boolean;
  clearBusinessName(): void;

  getLogoImage(): google_protobuf_wrappers_pb.StringValue | undefined;
  setLogoImage(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasLogoImage(): boolean;
  clearLogoImage(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GmailTeaser.AsObject;
  static toObject(includeInstance: boolean, msg: GmailTeaser): GmailTeaser.AsObject;
  static serializeBinaryToWriter(message: GmailTeaser, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GmailTeaser;
  static deserializeBinaryFromReader(message: GmailTeaser, reader: jspb.BinaryReader): GmailTeaser;
}

export namespace GmailTeaser {
  export type AsObject = {
    headline?: google_protobuf_wrappers_pb.StringValue.AsObject,
    description?: google_protobuf_wrappers_pb.StringValue.AsObject,
    businessName?: google_protobuf_wrappers_pb.StringValue.AsObject,
    logoImage?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class DisplayCallToAction extends jspb.Message {
  getText(): google_protobuf_wrappers_pb.StringValue | undefined;
  setText(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasText(): boolean;
  clearText(): void;

  getTextColor(): google_protobuf_wrappers_pb.StringValue | undefined;
  setTextColor(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasTextColor(): boolean;
  clearTextColor(): void;

  getUrlCollectionId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setUrlCollectionId(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasUrlCollectionId(): boolean;
  clearUrlCollectionId(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisplayCallToAction.AsObject;
  static toObject(includeInstance: boolean, msg: DisplayCallToAction): DisplayCallToAction.AsObject;
  static serializeBinaryToWriter(message: DisplayCallToAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisplayCallToAction;
  static deserializeBinaryFromReader(message: DisplayCallToAction, reader: jspb.BinaryReader): DisplayCallToAction;
}

export namespace DisplayCallToAction {
  export type AsObject = {
    text?: google_protobuf_wrappers_pb.StringValue.AsObject,
    textColor?: google_protobuf_wrappers_pb.StringValue.AsObject,
    urlCollectionId?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class ProductImage extends jspb.Message {
  getProductImage(): google_protobuf_wrappers_pb.StringValue | undefined;
  setProductImage(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasProductImage(): boolean;
  clearProductImage(): void;

  getDescription(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDescription(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasDescription(): boolean;
  clearDescription(): void;

  getDisplayCallToAction(): DisplayCallToAction | undefined;
  setDisplayCallToAction(value?: DisplayCallToAction): void;
  hasDisplayCallToAction(): boolean;
  clearDisplayCallToAction(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductImage.AsObject;
  static toObject(includeInstance: boolean, msg: ProductImage): ProductImage.AsObject;
  static serializeBinaryToWriter(message: ProductImage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductImage;
  static deserializeBinaryFromReader(message: ProductImage, reader: jspb.BinaryReader): ProductImage;
}

export namespace ProductImage {
  export type AsObject = {
    productImage?: google_protobuf_wrappers_pb.StringValue.AsObject,
    description?: google_protobuf_wrappers_pb.StringValue.AsObject,
    displayCallToAction?: DisplayCallToAction.AsObject,
  }
}

export class ProductVideo extends jspb.Message {
  getProductVideo(): google_protobuf_wrappers_pb.StringValue | undefined;
  setProductVideo(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasProductVideo(): boolean;
  clearProductVideo(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductVideo.AsObject;
  static toObject(includeInstance: boolean, msg: ProductVideo): ProductVideo.AsObject;
  static serializeBinaryToWriter(message: ProductVideo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductVideo;
  static deserializeBinaryFromReader(message: ProductVideo, reader: jspb.BinaryReader): ProductVideo;
}

export namespace ProductVideo {
  export type AsObject = {
    productVideo?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class ImageAdInfo extends jspb.Message {
  getPixelWidth(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setPixelWidth(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasPixelWidth(): boolean;
  clearPixelWidth(): void;

  getPixelHeight(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setPixelHeight(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasPixelHeight(): boolean;
  clearPixelHeight(): void;

  getImageUrl(): google_protobuf_wrappers_pb.StringValue | undefined;
  setImageUrl(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasImageUrl(): boolean;
  clearImageUrl(): void;

  getPreviewPixelWidth(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setPreviewPixelWidth(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasPreviewPixelWidth(): boolean;
  clearPreviewPixelWidth(): void;

  getPreviewPixelHeight(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setPreviewPixelHeight(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasPreviewPixelHeight(): boolean;
  clearPreviewPixelHeight(): void;

  getPreviewImageUrl(): google_protobuf_wrappers_pb.StringValue | undefined;
  setPreviewImageUrl(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasPreviewImageUrl(): boolean;
  clearPreviewImageUrl(): void;

  getMimeType(): google_ads_googleads_v1_enums_mime_type_pb.MimeTypeEnum.MimeType;
  setMimeType(value: google_ads_googleads_v1_enums_mime_type_pb.MimeTypeEnum.MimeType): void;

  getName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setName(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasName(): boolean;
  clearName(): void;

  getMediaFile(): google_protobuf_wrappers_pb.StringValue | undefined;
  setMediaFile(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasMediaFile(): boolean;
  clearMediaFile(): void;

  getData(): google_protobuf_wrappers_pb.BytesValue | undefined;
  setData(value?: google_protobuf_wrappers_pb.BytesValue): void;
  hasData(): boolean;
  clearData(): void;

  getAdIdToCopyImageFrom(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setAdIdToCopyImageFrom(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasAdIdToCopyImageFrom(): boolean;
  clearAdIdToCopyImageFrom(): void;

  getImageCase(): ImageAdInfo.ImageCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImageAdInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ImageAdInfo): ImageAdInfo.AsObject;
  static serializeBinaryToWriter(message: ImageAdInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImageAdInfo;
  static deserializeBinaryFromReader(message: ImageAdInfo, reader: jspb.BinaryReader): ImageAdInfo;
}

export namespace ImageAdInfo {
  export type AsObject = {
    pixelWidth?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    pixelHeight?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    imageUrl?: google_protobuf_wrappers_pb.StringValue.AsObject,
    previewPixelWidth?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    previewPixelHeight?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    previewImageUrl?: google_protobuf_wrappers_pb.StringValue.AsObject,
    mimeType: google_ads_googleads_v1_enums_mime_type_pb.MimeTypeEnum.MimeType,
    name?: google_protobuf_wrappers_pb.StringValue.AsObject,
    mediaFile?: google_protobuf_wrappers_pb.StringValue.AsObject,
    data?: google_protobuf_wrappers_pb.BytesValue.AsObject,
    adIdToCopyImageFrom?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }

  export enum ImageCase { 
    IMAGE_NOT_SET = 0,
    MEDIA_FILE = 1,
    DATA = 2,
    AD_ID_TO_COPY_IMAGE_FROM = 3,
  }
}

export class VideoBumperInStreamAdInfo extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VideoBumperInStreamAdInfo.AsObject;
  static toObject(includeInstance: boolean, msg: VideoBumperInStreamAdInfo): VideoBumperInStreamAdInfo.AsObject;
  static serializeBinaryToWriter(message: VideoBumperInStreamAdInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VideoBumperInStreamAdInfo;
  static deserializeBinaryFromReader(message: VideoBumperInStreamAdInfo, reader: jspb.BinaryReader): VideoBumperInStreamAdInfo;
}

export namespace VideoBumperInStreamAdInfo {
  export type AsObject = {
  }
}

export class VideoNonSkippableInStreamAdInfo extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VideoNonSkippableInStreamAdInfo.AsObject;
  static toObject(includeInstance: boolean, msg: VideoNonSkippableInStreamAdInfo): VideoNonSkippableInStreamAdInfo.AsObject;
  static serializeBinaryToWriter(message: VideoNonSkippableInStreamAdInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VideoNonSkippableInStreamAdInfo;
  static deserializeBinaryFromReader(message: VideoNonSkippableInStreamAdInfo, reader: jspb.BinaryReader): VideoNonSkippableInStreamAdInfo;
}

export namespace VideoNonSkippableInStreamAdInfo {
  export type AsObject = {
  }
}

export class VideoTrueViewInStreamAdInfo extends jspb.Message {
  getActionButtonLabel(): google_protobuf_wrappers_pb.StringValue | undefined;
  setActionButtonLabel(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasActionButtonLabel(): boolean;
  clearActionButtonLabel(): void;

  getActionHeadline(): google_protobuf_wrappers_pb.StringValue | undefined;
  setActionHeadline(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasActionHeadline(): boolean;
  clearActionHeadline(): void;

  getCompanionBanner(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCompanionBanner(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasCompanionBanner(): boolean;
  clearCompanionBanner(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VideoTrueViewInStreamAdInfo.AsObject;
  static toObject(includeInstance: boolean, msg: VideoTrueViewInStreamAdInfo): VideoTrueViewInStreamAdInfo.AsObject;
  static serializeBinaryToWriter(message: VideoTrueViewInStreamAdInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VideoTrueViewInStreamAdInfo;
  static deserializeBinaryFromReader(message: VideoTrueViewInStreamAdInfo, reader: jspb.BinaryReader): VideoTrueViewInStreamAdInfo;
}

export namespace VideoTrueViewInStreamAdInfo {
  export type AsObject = {
    actionButtonLabel?: google_protobuf_wrappers_pb.StringValue.AsObject,
    actionHeadline?: google_protobuf_wrappers_pb.StringValue.AsObject,
    companionBanner?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class VideoOutstreamAdInfo extends jspb.Message {
  getHeadline(): google_protobuf_wrappers_pb.StringValue | undefined;
  setHeadline(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasHeadline(): boolean;
  clearHeadline(): void;

  getDescription(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDescription(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasDescription(): boolean;
  clearDescription(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VideoOutstreamAdInfo.AsObject;
  static toObject(includeInstance: boolean, msg: VideoOutstreamAdInfo): VideoOutstreamAdInfo.AsObject;
  static serializeBinaryToWriter(message: VideoOutstreamAdInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VideoOutstreamAdInfo;
  static deserializeBinaryFromReader(message: VideoOutstreamAdInfo, reader: jspb.BinaryReader): VideoOutstreamAdInfo;
}

export namespace VideoOutstreamAdInfo {
  export type AsObject = {
    headline?: google_protobuf_wrappers_pb.StringValue.AsObject,
    description?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class VideoAdInfo extends jspb.Message {
  getMediaFile(): google_protobuf_wrappers_pb.StringValue | undefined;
  setMediaFile(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasMediaFile(): boolean;
  clearMediaFile(): void;

  getInStream(): VideoTrueViewInStreamAdInfo | undefined;
  setInStream(value?: VideoTrueViewInStreamAdInfo): void;
  hasInStream(): boolean;
  clearInStream(): void;

  getBumper(): VideoBumperInStreamAdInfo | undefined;
  setBumper(value?: VideoBumperInStreamAdInfo): void;
  hasBumper(): boolean;
  clearBumper(): void;

  getOutStream(): VideoOutstreamAdInfo | undefined;
  setOutStream(value?: VideoOutstreamAdInfo): void;
  hasOutStream(): boolean;
  clearOutStream(): void;

  getNonSkippable(): VideoNonSkippableInStreamAdInfo | undefined;
  setNonSkippable(value?: VideoNonSkippableInStreamAdInfo): void;
  hasNonSkippable(): boolean;
  clearNonSkippable(): void;

  getFormatCase(): VideoAdInfo.FormatCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VideoAdInfo.AsObject;
  static toObject(includeInstance: boolean, msg: VideoAdInfo): VideoAdInfo.AsObject;
  static serializeBinaryToWriter(message: VideoAdInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VideoAdInfo;
  static deserializeBinaryFromReader(message: VideoAdInfo, reader: jspb.BinaryReader): VideoAdInfo;
}

export namespace VideoAdInfo {
  export type AsObject = {
    mediaFile?: google_protobuf_wrappers_pb.StringValue.AsObject,
    inStream?: VideoTrueViewInStreamAdInfo.AsObject,
    bumper?: VideoBumperInStreamAdInfo.AsObject,
    outStream?: VideoOutstreamAdInfo.AsObject,
    nonSkippable?: VideoNonSkippableInStreamAdInfo.AsObject,
  }

  export enum FormatCase { 
    FORMAT_NOT_SET = 0,
    IN_STREAM = 2,
    BUMPER = 3,
    OUT_STREAM = 4,
    NON_SKIPPABLE = 5,
  }
}

export class ResponsiveSearchAdInfo extends jspb.Message {
  getHeadlinesList(): Array<google_ads_googleads_v1_common_ad_asset_pb.AdTextAsset>;
  setHeadlinesList(value: Array<google_ads_googleads_v1_common_ad_asset_pb.AdTextAsset>): void;
  clearHeadlinesList(): void;
  addHeadlines(value?: google_ads_googleads_v1_common_ad_asset_pb.AdTextAsset, index?: number): google_ads_googleads_v1_common_ad_asset_pb.AdTextAsset;

  getDescriptionsList(): Array<google_ads_googleads_v1_common_ad_asset_pb.AdTextAsset>;
  setDescriptionsList(value: Array<google_ads_googleads_v1_common_ad_asset_pb.AdTextAsset>): void;
  clearDescriptionsList(): void;
  addDescriptions(value?: google_ads_googleads_v1_common_ad_asset_pb.AdTextAsset, index?: number): google_ads_googleads_v1_common_ad_asset_pb.AdTextAsset;

  getPath1(): google_protobuf_wrappers_pb.StringValue | undefined;
  setPath1(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasPath1(): boolean;
  clearPath1(): void;

  getPath2(): google_protobuf_wrappers_pb.StringValue | undefined;
  setPath2(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasPath2(): boolean;
  clearPath2(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponsiveSearchAdInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ResponsiveSearchAdInfo): ResponsiveSearchAdInfo.AsObject;
  static serializeBinaryToWriter(message: ResponsiveSearchAdInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponsiveSearchAdInfo;
  static deserializeBinaryFromReader(message: ResponsiveSearchAdInfo, reader: jspb.BinaryReader): ResponsiveSearchAdInfo;
}

export namespace ResponsiveSearchAdInfo {
  export type AsObject = {
    headlinesList: Array<google_ads_googleads_v1_common_ad_asset_pb.AdTextAsset.AsObject>,
    descriptionsList: Array<google_ads_googleads_v1_common_ad_asset_pb.AdTextAsset.AsObject>,
    path1?: google_protobuf_wrappers_pb.StringValue.AsObject,
    path2?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class LegacyResponsiveDisplayAdInfo extends jspb.Message {
  getShortHeadline(): google_protobuf_wrappers_pb.StringValue | undefined;
  setShortHeadline(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasShortHeadline(): boolean;
  clearShortHeadline(): void;

  getLongHeadline(): google_protobuf_wrappers_pb.StringValue | undefined;
  setLongHeadline(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasLongHeadline(): boolean;
  clearLongHeadline(): void;

  getDescription(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDescription(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasDescription(): boolean;
  clearDescription(): void;

  getBusinessName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setBusinessName(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasBusinessName(): boolean;
  clearBusinessName(): void;

  getAllowFlexibleColor(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setAllowFlexibleColor(value?: google_protobuf_wrappers_pb.BoolValue): void;
  hasAllowFlexibleColor(): boolean;
  clearAllowFlexibleColor(): void;

  getAccentColor(): google_protobuf_wrappers_pb.StringValue | undefined;
  setAccentColor(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasAccentColor(): boolean;
  clearAccentColor(): void;

  getMainColor(): google_protobuf_wrappers_pb.StringValue | undefined;
  setMainColor(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasMainColor(): boolean;
  clearMainColor(): void;

  getCallToActionText(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCallToActionText(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasCallToActionText(): boolean;
  clearCallToActionText(): void;

  getLogoImage(): google_protobuf_wrappers_pb.StringValue | undefined;
  setLogoImage(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasLogoImage(): boolean;
  clearLogoImage(): void;

  getSquareLogoImage(): google_protobuf_wrappers_pb.StringValue | undefined;
  setSquareLogoImage(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasSquareLogoImage(): boolean;
  clearSquareLogoImage(): void;

  getMarketingImage(): google_protobuf_wrappers_pb.StringValue | undefined;
  setMarketingImage(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasMarketingImage(): boolean;
  clearMarketingImage(): void;

  getSquareMarketingImage(): google_protobuf_wrappers_pb.StringValue | undefined;
  setSquareMarketingImage(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasSquareMarketingImage(): boolean;
  clearSquareMarketingImage(): void;

  getFormatSetting(): google_ads_googleads_v1_enums_display_ad_format_setting_pb.DisplayAdFormatSettingEnum.DisplayAdFormatSetting;
  setFormatSetting(value: google_ads_googleads_v1_enums_display_ad_format_setting_pb.DisplayAdFormatSettingEnum.DisplayAdFormatSetting): void;

  getPricePrefix(): google_protobuf_wrappers_pb.StringValue | undefined;
  setPricePrefix(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasPricePrefix(): boolean;
  clearPricePrefix(): void;

  getPromoText(): google_protobuf_wrappers_pb.StringValue | undefined;
  setPromoText(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasPromoText(): boolean;
  clearPromoText(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LegacyResponsiveDisplayAdInfo.AsObject;
  static toObject(includeInstance: boolean, msg: LegacyResponsiveDisplayAdInfo): LegacyResponsiveDisplayAdInfo.AsObject;
  static serializeBinaryToWriter(message: LegacyResponsiveDisplayAdInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LegacyResponsiveDisplayAdInfo;
  static deserializeBinaryFromReader(message: LegacyResponsiveDisplayAdInfo, reader: jspb.BinaryReader): LegacyResponsiveDisplayAdInfo;
}

export namespace LegacyResponsiveDisplayAdInfo {
  export type AsObject = {
    shortHeadline?: google_protobuf_wrappers_pb.StringValue.AsObject,
    longHeadline?: google_protobuf_wrappers_pb.StringValue.AsObject,
    description?: google_protobuf_wrappers_pb.StringValue.AsObject,
    businessName?: google_protobuf_wrappers_pb.StringValue.AsObject,
    allowFlexibleColor?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    accentColor?: google_protobuf_wrappers_pb.StringValue.AsObject,
    mainColor?: google_protobuf_wrappers_pb.StringValue.AsObject,
    callToActionText?: google_protobuf_wrappers_pb.StringValue.AsObject,
    logoImage?: google_protobuf_wrappers_pb.StringValue.AsObject,
    squareLogoImage?: google_protobuf_wrappers_pb.StringValue.AsObject,
    marketingImage?: google_protobuf_wrappers_pb.StringValue.AsObject,
    squareMarketingImage?: google_protobuf_wrappers_pb.StringValue.AsObject,
    formatSetting: google_ads_googleads_v1_enums_display_ad_format_setting_pb.DisplayAdFormatSettingEnum.DisplayAdFormatSetting,
    pricePrefix?: google_protobuf_wrappers_pb.StringValue.AsObject,
    promoText?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class AppAdInfo extends jspb.Message {
  getMandatoryAdText(): google_ads_googleads_v1_common_ad_asset_pb.AdTextAsset | undefined;
  setMandatoryAdText(value?: google_ads_googleads_v1_common_ad_asset_pb.AdTextAsset): void;
  hasMandatoryAdText(): boolean;
  clearMandatoryAdText(): void;

  getHeadlinesList(): Array<google_ads_googleads_v1_common_ad_asset_pb.AdTextAsset>;
  setHeadlinesList(value: Array<google_ads_googleads_v1_common_ad_asset_pb.AdTextAsset>): void;
  clearHeadlinesList(): void;
  addHeadlines(value?: google_ads_googleads_v1_common_ad_asset_pb.AdTextAsset, index?: number): google_ads_googleads_v1_common_ad_asset_pb.AdTextAsset;

  getDescriptionsList(): Array<google_ads_googleads_v1_common_ad_asset_pb.AdTextAsset>;
  setDescriptionsList(value: Array<google_ads_googleads_v1_common_ad_asset_pb.AdTextAsset>): void;
  clearDescriptionsList(): void;
  addDescriptions(value?: google_ads_googleads_v1_common_ad_asset_pb.AdTextAsset, index?: number): google_ads_googleads_v1_common_ad_asset_pb.AdTextAsset;

  getImagesList(): Array<google_ads_googleads_v1_common_ad_asset_pb.AdImageAsset>;
  setImagesList(value: Array<google_ads_googleads_v1_common_ad_asset_pb.AdImageAsset>): void;
  clearImagesList(): void;
  addImages(value?: google_ads_googleads_v1_common_ad_asset_pb.AdImageAsset, index?: number): google_ads_googleads_v1_common_ad_asset_pb.AdImageAsset;

  getYoutubeVideosList(): Array<google_ads_googleads_v1_common_ad_asset_pb.AdVideoAsset>;
  setYoutubeVideosList(value: Array<google_ads_googleads_v1_common_ad_asset_pb.AdVideoAsset>): void;
  clearYoutubeVideosList(): void;
  addYoutubeVideos(value?: google_ads_googleads_v1_common_ad_asset_pb.AdVideoAsset, index?: number): google_ads_googleads_v1_common_ad_asset_pb.AdVideoAsset;

  getHtml5MediaBundlesList(): Array<google_ads_googleads_v1_common_ad_asset_pb.AdMediaBundleAsset>;
  setHtml5MediaBundlesList(value: Array<google_ads_googleads_v1_common_ad_asset_pb.AdMediaBundleAsset>): void;
  clearHtml5MediaBundlesList(): void;
  addHtml5MediaBundles(value?: google_ads_googleads_v1_common_ad_asset_pb.AdMediaBundleAsset, index?: number): google_ads_googleads_v1_common_ad_asset_pb.AdMediaBundleAsset;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AppAdInfo.AsObject;
  static toObject(includeInstance: boolean, msg: AppAdInfo): AppAdInfo.AsObject;
  static serializeBinaryToWriter(message: AppAdInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AppAdInfo;
  static deserializeBinaryFromReader(message: AppAdInfo, reader: jspb.BinaryReader): AppAdInfo;
}

export namespace AppAdInfo {
  export type AsObject = {
    mandatoryAdText?: google_ads_googleads_v1_common_ad_asset_pb.AdTextAsset.AsObject,
    headlinesList: Array<google_ads_googleads_v1_common_ad_asset_pb.AdTextAsset.AsObject>,
    descriptionsList: Array<google_ads_googleads_v1_common_ad_asset_pb.AdTextAsset.AsObject>,
    imagesList: Array<google_ads_googleads_v1_common_ad_asset_pb.AdImageAsset.AsObject>,
    youtubeVideosList: Array<google_ads_googleads_v1_common_ad_asset_pb.AdVideoAsset.AsObject>,
    html5MediaBundlesList: Array<google_ads_googleads_v1_common_ad_asset_pb.AdMediaBundleAsset.AsObject>,
  }
}

export class AppEngagementAdInfo extends jspb.Message {
  getHeadlinesList(): Array<google_ads_googleads_v1_common_ad_asset_pb.AdTextAsset>;
  setHeadlinesList(value: Array<google_ads_googleads_v1_common_ad_asset_pb.AdTextAsset>): void;
  clearHeadlinesList(): void;
  addHeadlines(value?: google_ads_googleads_v1_common_ad_asset_pb.AdTextAsset, index?: number): google_ads_googleads_v1_common_ad_asset_pb.AdTextAsset;

  getDescriptionsList(): Array<google_ads_googleads_v1_common_ad_asset_pb.AdTextAsset>;
  setDescriptionsList(value: Array<google_ads_googleads_v1_common_ad_asset_pb.AdTextAsset>): void;
  clearDescriptionsList(): void;
  addDescriptions(value?: google_ads_googleads_v1_common_ad_asset_pb.AdTextAsset, index?: number): google_ads_googleads_v1_common_ad_asset_pb.AdTextAsset;

  getImagesList(): Array<google_ads_googleads_v1_common_ad_asset_pb.AdImageAsset>;
  setImagesList(value: Array<google_ads_googleads_v1_common_ad_asset_pb.AdImageAsset>): void;
  clearImagesList(): void;
  addImages(value?: google_ads_googleads_v1_common_ad_asset_pb.AdImageAsset, index?: number): google_ads_googleads_v1_common_ad_asset_pb.AdImageAsset;

  getVideosList(): Array<google_ads_googleads_v1_common_ad_asset_pb.AdVideoAsset>;
  setVideosList(value: Array<google_ads_googleads_v1_common_ad_asset_pb.AdVideoAsset>): void;
  clearVideosList(): void;
  addVideos(value?: google_ads_googleads_v1_common_ad_asset_pb.AdVideoAsset, index?: number): google_ads_googleads_v1_common_ad_asset_pb.AdVideoAsset;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AppEngagementAdInfo.AsObject;
  static toObject(includeInstance: boolean, msg: AppEngagementAdInfo): AppEngagementAdInfo.AsObject;
  static serializeBinaryToWriter(message: AppEngagementAdInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AppEngagementAdInfo;
  static deserializeBinaryFromReader(message: AppEngagementAdInfo, reader: jspb.BinaryReader): AppEngagementAdInfo;
}

export namespace AppEngagementAdInfo {
  export type AsObject = {
    headlinesList: Array<google_ads_googleads_v1_common_ad_asset_pb.AdTextAsset.AsObject>,
    descriptionsList: Array<google_ads_googleads_v1_common_ad_asset_pb.AdTextAsset.AsObject>,
    imagesList: Array<google_ads_googleads_v1_common_ad_asset_pb.AdImageAsset.AsObject>,
    videosList: Array<google_ads_googleads_v1_common_ad_asset_pb.AdVideoAsset.AsObject>,
  }
}

export class LegacyAppInstallAdInfo extends jspb.Message {
  getAppId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setAppId(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasAppId(): boolean;
  clearAppId(): void;

  getAppStore(): google_ads_googleads_v1_enums_legacy_app_install_ad_app_store_pb.LegacyAppInstallAdAppStoreEnum.LegacyAppInstallAdAppStore;
  setAppStore(value: google_ads_googleads_v1_enums_legacy_app_install_ad_app_store_pb.LegacyAppInstallAdAppStoreEnum.LegacyAppInstallAdAppStore): void;

  getHeadline(): google_protobuf_wrappers_pb.StringValue | undefined;
  setHeadline(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasHeadline(): boolean;
  clearHeadline(): void;

  getDescription1(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDescription1(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasDescription1(): boolean;
  clearDescription1(): void;

  getDescription2(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDescription2(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasDescription2(): boolean;
  clearDescription2(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LegacyAppInstallAdInfo.AsObject;
  static toObject(includeInstance: boolean, msg: LegacyAppInstallAdInfo): LegacyAppInstallAdInfo.AsObject;
  static serializeBinaryToWriter(message: LegacyAppInstallAdInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LegacyAppInstallAdInfo;
  static deserializeBinaryFromReader(message: LegacyAppInstallAdInfo, reader: jspb.BinaryReader): LegacyAppInstallAdInfo;
}

export namespace LegacyAppInstallAdInfo {
  export type AsObject = {
    appId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    appStore: google_ads_googleads_v1_enums_legacy_app_install_ad_app_store_pb.LegacyAppInstallAdAppStoreEnum.LegacyAppInstallAdAppStore,
    headline?: google_protobuf_wrappers_pb.StringValue.AsObject,
    description1?: google_protobuf_wrappers_pb.StringValue.AsObject,
    description2?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class ResponsiveDisplayAdInfo extends jspb.Message {
  getMarketingImagesList(): Array<google_ads_googleads_v1_common_ad_asset_pb.AdImageAsset>;
  setMarketingImagesList(value: Array<google_ads_googleads_v1_common_ad_asset_pb.AdImageAsset>): void;
  clearMarketingImagesList(): void;
  addMarketingImages(value?: google_ads_googleads_v1_common_ad_asset_pb.AdImageAsset, index?: number): google_ads_googleads_v1_common_ad_asset_pb.AdImageAsset;

  getSquareMarketingImagesList(): Array<google_ads_googleads_v1_common_ad_asset_pb.AdImageAsset>;
  setSquareMarketingImagesList(value: Array<google_ads_googleads_v1_common_ad_asset_pb.AdImageAsset>): void;
  clearSquareMarketingImagesList(): void;
  addSquareMarketingImages(value?: google_ads_googleads_v1_common_ad_asset_pb.AdImageAsset, index?: number): google_ads_googleads_v1_common_ad_asset_pb.AdImageAsset;

  getLogoImagesList(): Array<google_ads_googleads_v1_common_ad_asset_pb.AdImageAsset>;
  setLogoImagesList(value: Array<google_ads_googleads_v1_common_ad_asset_pb.AdImageAsset>): void;
  clearLogoImagesList(): void;
  addLogoImages(value?: google_ads_googleads_v1_common_ad_asset_pb.AdImageAsset, index?: number): google_ads_googleads_v1_common_ad_asset_pb.AdImageAsset;

  getSquareLogoImagesList(): Array<google_ads_googleads_v1_common_ad_asset_pb.AdImageAsset>;
  setSquareLogoImagesList(value: Array<google_ads_googleads_v1_common_ad_asset_pb.AdImageAsset>): void;
  clearSquareLogoImagesList(): void;
  addSquareLogoImages(value?: google_ads_googleads_v1_common_ad_asset_pb.AdImageAsset, index?: number): google_ads_googleads_v1_common_ad_asset_pb.AdImageAsset;

  getHeadlinesList(): Array<google_ads_googleads_v1_common_ad_asset_pb.AdTextAsset>;
  setHeadlinesList(value: Array<google_ads_googleads_v1_common_ad_asset_pb.AdTextAsset>): void;
  clearHeadlinesList(): void;
  addHeadlines(value?: google_ads_googleads_v1_common_ad_asset_pb.AdTextAsset, index?: number): google_ads_googleads_v1_common_ad_asset_pb.AdTextAsset;

  getLongHeadline(): google_ads_googleads_v1_common_ad_asset_pb.AdTextAsset | undefined;
  setLongHeadline(value?: google_ads_googleads_v1_common_ad_asset_pb.AdTextAsset): void;
  hasLongHeadline(): boolean;
  clearLongHeadline(): void;

  getDescriptionsList(): Array<google_ads_googleads_v1_common_ad_asset_pb.AdTextAsset>;
  setDescriptionsList(value: Array<google_ads_googleads_v1_common_ad_asset_pb.AdTextAsset>): void;
  clearDescriptionsList(): void;
  addDescriptions(value?: google_ads_googleads_v1_common_ad_asset_pb.AdTextAsset, index?: number): google_ads_googleads_v1_common_ad_asset_pb.AdTextAsset;

  getYoutubeVideosList(): Array<google_ads_googleads_v1_common_ad_asset_pb.AdVideoAsset>;
  setYoutubeVideosList(value: Array<google_ads_googleads_v1_common_ad_asset_pb.AdVideoAsset>): void;
  clearYoutubeVideosList(): void;
  addYoutubeVideos(value?: google_ads_googleads_v1_common_ad_asset_pb.AdVideoAsset, index?: number): google_ads_googleads_v1_common_ad_asset_pb.AdVideoAsset;

  getBusinessName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setBusinessName(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasBusinessName(): boolean;
  clearBusinessName(): void;

  getMainColor(): google_protobuf_wrappers_pb.StringValue | undefined;
  setMainColor(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasMainColor(): boolean;
  clearMainColor(): void;

  getAccentColor(): google_protobuf_wrappers_pb.StringValue | undefined;
  setAccentColor(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasAccentColor(): boolean;
  clearAccentColor(): void;

  getAllowFlexibleColor(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setAllowFlexibleColor(value?: google_protobuf_wrappers_pb.BoolValue): void;
  hasAllowFlexibleColor(): boolean;
  clearAllowFlexibleColor(): void;

  getCallToActionText(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCallToActionText(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasCallToActionText(): boolean;
  clearCallToActionText(): void;

  getPricePrefix(): google_protobuf_wrappers_pb.StringValue | undefined;
  setPricePrefix(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasPricePrefix(): boolean;
  clearPricePrefix(): void;

  getPromoText(): google_protobuf_wrappers_pb.StringValue | undefined;
  setPromoText(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasPromoText(): boolean;
  clearPromoText(): void;

  getFormatSetting(): google_ads_googleads_v1_enums_display_ad_format_setting_pb.DisplayAdFormatSettingEnum.DisplayAdFormatSetting;
  setFormatSetting(value: google_ads_googleads_v1_enums_display_ad_format_setting_pb.DisplayAdFormatSettingEnum.DisplayAdFormatSetting): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponsiveDisplayAdInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ResponsiveDisplayAdInfo): ResponsiveDisplayAdInfo.AsObject;
  static serializeBinaryToWriter(message: ResponsiveDisplayAdInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponsiveDisplayAdInfo;
  static deserializeBinaryFromReader(message: ResponsiveDisplayAdInfo, reader: jspb.BinaryReader): ResponsiveDisplayAdInfo;
}

export namespace ResponsiveDisplayAdInfo {
  export type AsObject = {
    marketingImagesList: Array<google_ads_googleads_v1_common_ad_asset_pb.AdImageAsset.AsObject>,
    squareMarketingImagesList: Array<google_ads_googleads_v1_common_ad_asset_pb.AdImageAsset.AsObject>,
    logoImagesList: Array<google_ads_googleads_v1_common_ad_asset_pb.AdImageAsset.AsObject>,
    squareLogoImagesList: Array<google_ads_googleads_v1_common_ad_asset_pb.AdImageAsset.AsObject>,
    headlinesList: Array<google_ads_googleads_v1_common_ad_asset_pb.AdTextAsset.AsObject>,
    longHeadline?: google_ads_googleads_v1_common_ad_asset_pb.AdTextAsset.AsObject,
    descriptionsList: Array<google_ads_googleads_v1_common_ad_asset_pb.AdTextAsset.AsObject>,
    youtubeVideosList: Array<google_ads_googleads_v1_common_ad_asset_pb.AdVideoAsset.AsObject>,
    businessName?: google_protobuf_wrappers_pb.StringValue.AsObject,
    mainColor?: google_protobuf_wrappers_pb.StringValue.AsObject,
    accentColor?: google_protobuf_wrappers_pb.StringValue.AsObject,
    allowFlexibleColor?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    callToActionText?: google_protobuf_wrappers_pb.StringValue.AsObject,
    pricePrefix?: google_protobuf_wrappers_pb.StringValue.AsObject,
    promoText?: google_protobuf_wrappers_pb.StringValue.AsObject,
    formatSetting: google_ads_googleads_v1_enums_display_ad_format_setting_pb.DisplayAdFormatSettingEnum.DisplayAdFormatSetting,
  }
}

export class DisplayUploadAdInfo extends jspb.Message {
  getDisplayUploadProductType(): google_ads_googleads_v1_enums_display_upload_product_type_pb.DisplayUploadProductTypeEnum.DisplayUploadProductType;
  setDisplayUploadProductType(value: google_ads_googleads_v1_enums_display_upload_product_type_pb.DisplayUploadProductTypeEnum.DisplayUploadProductType): void;

  getMediaBundle(): google_ads_googleads_v1_common_ad_asset_pb.AdMediaBundleAsset | undefined;
  setMediaBundle(value?: google_ads_googleads_v1_common_ad_asset_pb.AdMediaBundleAsset): void;
  hasMediaBundle(): boolean;
  clearMediaBundle(): void;

  getMediaAssetCase(): DisplayUploadAdInfo.MediaAssetCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisplayUploadAdInfo.AsObject;
  static toObject(includeInstance: boolean, msg: DisplayUploadAdInfo): DisplayUploadAdInfo.AsObject;
  static serializeBinaryToWriter(message: DisplayUploadAdInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisplayUploadAdInfo;
  static deserializeBinaryFromReader(message: DisplayUploadAdInfo, reader: jspb.BinaryReader): DisplayUploadAdInfo;
}

export namespace DisplayUploadAdInfo {
  export type AsObject = {
    displayUploadProductType: google_ads_googleads_v1_enums_display_upload_product_type_pb.DisplayUploadProductTypeEnum.DisplayUploadProductType,
    mediaBundle?: google_ads_googleads_v1_common_ad_asset_pb.AdMediaBundleAsset.AsObject,
  }

  export enum MediaAssetCase { 
    MEDIA_ASSET_NOT_SET = 0,
    MEDIA_BUNDLE = 2,
  }
}

