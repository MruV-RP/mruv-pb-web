import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_cloud_vision_v1p1beta1_geometry_pb from '../../../../google/cloud/vision/v1p1beta1/geometry_pb';
import * as google_cloud_vision_v1p1beta1_text_annotation_pb from '../../../../google/cloud/vision/v1p1beta1/text_annotation_pb';
import * as google_cloud_vision_v1p1beta1_web_detection_pb from '../../../../google/cloud/vision/v1p1beta1/web_detection_pb';
import * as google_rpc_status_pb from '../../../../google/rpc/status_pb';
import * as google_type_color_pb from '../../../../google/type/color_pb';
import * as google_type_latlng_pb from '../../../../google/type/latlng_pb';

export class Feature extends jspb.Message {
  getType(): Feature.Type;
  setType(value: Feature.Type): void;

  getMaxResults(): number;
  setMaxResults(value: number): void;

  getModel(): string;
  setModel(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Feature.AsObject;
  static toObject(includeInstance: boolean, msg: Feature): Feature.AsObject;
  static serializeBinaryToWriter(message: Feature, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Feature;
  static deserializeBinaryFromReader(message: Feature, reader: jspb.BinaryReader): Feature;
}

export namespace Feature {
  export type AsObject = {
    type: Feature.Type,
    maxResults: number,
    model: string,
  }

  export enum Type { 
    TYPE_UNSPECIFIED = 0,
    FACE_DETECTION = 1,
    LANDMARK_DETECTION = 2,
    LOGO_DETECTION = 3,
    LABEL_DETECTION = 4,
    TEXT_DETECTION = 5,
    DOCUMENT_TEXT_DETECTION = 11,
    SAFE_SEARCH_DETECTION = 6,
    IMAGE_PROPERTIES = 7,
    CROP_HINTS = 9,
    WEB_DETECTION = 10,
  }
}

export class ImageSource extends jspb.Message {
  getGcsImageUri(): string;
  setGcsImageUri(value: string): void;

  getImageUri(): string;
  setImageUri(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImageSource.AsObject;
  static toObject(includeInstance: boolean, msg: ImageSource): ImageSource.AsObject;
  static serializeBinaryToWriter(message: ImageSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImageSource;
  static deserializeBinaryFromReader(message: ImageSource, reader: jspb.BinaryReader): ImageSource;
}

export namespace ImageSource {
  export type AsObject = {
    gcsImageUri: string,
    imageUri: string,
  }
}

export class Image extends jspb.Message {
  getContent(): Uint8Array | string;
  getContent_asU8(): Uint8Array;
  getContent_asB64(): string;
  setContent(value: Uint8Array | string): void;

  getSource(): ImageSource | undefined;
  setSource(value?: ImageSource): void;
  hasSource(): boolean;
  clearSource(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Image.AsObject;
  static toObject(includeInstance: boolean, msg: Image): Image.AsObject;
  static serializeBinaryToWriter(message: Image, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Image;
  static deserializeBinaryFromReader(message: Image, reader: jspb.BinaryReader): Image;
}

export namespace Image {
  export type AsObject = {
    content: Uint8Array | string,
    source?: ImageSource.AsObject,
  }
}

export class FaceAnnotation extends jspb.Message {
  getBoundingPoly(): google_cloud_vision_v1p1beta1_geometry_pb.BoundingPoly | undefined;
  setBoundingPoly(value?: google_cloud_vision_v1p1beta1_geometry_pb.BoundingPoly): void;
  hasBoundingPoly(): boolean;
  clearBoundingPoly(): void;

  getFdBoundingPoly(): google_cloud_vision_v1p1beta1_geometry_pb.BoundingPoly | undefined;
  setFdBoundingPoly(value?: google_cloud_vision_v1p1beta1_geometry_pb.BoundingPoly): void;
  hasFdBoundingPoly(): boolean;
  clearFdBoundingPoly(): void;

  getLandmarksList(): Array<FaceAnnotation.Landmark>;
  setLandmarksList(value: Array<FaceAnnotation.Landmark>): void;
  clearLandmarksList(): void;
  addLandmarks(value?: FaceAnnotation.Landmark, index?: number): FaceAnnotation.Landmark;

  getRollAngle(): number;
  setRollAngle(value: number): void;

  getPanAngle(): number;
  setPanAngle(value: number): void;

  getTiltAngle(): number;
  setTiltAngle(value: number): void;

  getDetectionConfidence(): number;
  setDetectionConfidence(value: number): void;

  getLandmarkingConfidence(): number;
  setLandmarkingConfidence(value: number): void;

  getJoyLikelihood(): Likelihood;
  setJoyLikelihood(value: Likelihood): void;

  getSorrowLikelihood(): Likelihood;
  setSorrowLikelihood(value: Likelihood): void;

  getAngerLikelihood(): Likelihood;
  setAngerLikelihood(value: Likelihood): void;

  getSurpriseLikelihood(): Likelihood;
  setSurpriseLikelihood(value: Likelihood): void;

  getUnderExposedLikelihood(): Likelihood;
  setUnderExposedLikelihood(value: Likelihood): void;

  getBlurredLikelihood(): Likelihood;
  setBlurredLikelihood(value: Likelihood): void;

  getHeadwearLikelihood(): Likelihood;
  setHeadwearLikelihood(value: Likelihood): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FaceAnnotation.AsObject;
  static toObject(includeInstance: boolean, msg: FaceAnnotation): FaceAnnotation.AsObject;
  static serializeBinaryToWriter(message: FaceAnnotation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FaceAnnotation;
  static deserializeBinaryFromReader(message: FaceAnnotation, reader: jspb.BinaryReader): FaceAnnotation;
}

export namespace FaceAnnotation {
  export type AsObject = {
    boundingPoly?: google_cloud_vision_v1p1beta1_geometry_pb.BoundingPoly.AsObject,
    fdBoundingPoly?: google_cloud_vision_v1p1beta1_geometry_pb.BoundingPoly.AsObject,
    landmarksList: Array<FaceAnnotation.Landmark.AsObject>,
    rollAngle: number,
    panAngle: number,
    tiltAngle: number,
    detectionConfidence: number,
    landmarkingConfidence: number,
    joyLikelihood: Likelihood,
    sorrowLikelihood: Likelihood,
    angerLikelihood: Likelihood,
    surpriseLikelihood: Likelihood,
    underExposedLikelihood: Likelihood,
    blurredLikelihood: Likelihood,
    headwearLikelihood: Likelihood,
  }

  export class Landmark extends jspb.Message {
    getType(): FaceAnnotation.Landmark.Type;
    setType(value: FaceAnnotation.Landmark.Type): void;

    getPosition(): google_cloud_vision_v1p1beta1_geometry_pb.Position | undefined;
    setPosition(value?: google_cloud_vision_v1p1beta1_geometry_pb.Position): void;
    hasPosition(): boolean;
    clearPosition(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Landmark.AsObject;
    static toObject(includeInstance: boolean, msg: Landmark): Landmark.AsObject;
    static serializeBinaryToWriter(message: Landmark, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Landmark;
    static deserializeBinaryFromReader(message: Landmark, reader: jspb.BinaryReader): Landmark;
  }

  export namespace Landmark {
    export type AsObject = {
      type: FaceAnnotation.Landmark.Type,
      position?: google_cloud_vision_v1p1beta1_geometry_pb.Position.AsObject,
    }

    export enum Type { 
      UNKNOWN_LANDMARK = 0,
      LEFT_EYE = 1,
      RIGHT_EYE = 2,
      LEFT_OF_LEFT_EYEBROW = 3,
      RIGHT_OF_LEFT_EYEBROW = 4,
      LEFT_OF_RIGHT_EYEBROW = 5,
      RIGHT_OF_RIGHT_EYEBROW = 6,
      MIDPOINT_BETWEEN_EYES = 7,
      NOSE_TIP = 8,
      UPPER_LIP = 9,
      LOWER_LIP = 10,
      MOUTH_LEFT = 11,
      MOUTH_RIGHT = 12,
      MOUTH_CENTER = 13,
      NOSE_BOTTOM_RIGHT = 14,
      NOSE_BOTTOM_LEFT = 15,
      NOSE_BOTTOM_CENTER = 16,
      LEFT_EYE_TOP_BOUNDARY = 17,
      LEFT_EYE_RIGHT_CORNER = 18,
      LEFT_EYE_BOTTOM_BOUNDARY = 19,
      LEFT_EYE_LEFT_CORNER = 20,
      RIGHT_EYE_TOP_BOUNDARY = 21,
      RIGHT_EYE_RIGHT_CORNER = 22,
      RIGHT_EYE_BOTTOM_BOUNDARY = 23,
      RIGHT_EYE_LEFT_CORNER = 24,
      LEFT_EYEBROW_UPPER_MIDPOINT = 25,
      RIGHT_EYEBROW_UPPER_MIDPOINT = 26,
      LEFT_EAR_TRAGION = 27,
      RIGHT_EAR_TRAGION = 28,
      LEFT_EYE_PUPIL = 29,
      RIGHT_EYE_PUPIL = 30,
      FOREHEAD_GLABELLA = 31,
      CHIN_GNATHION = 32,
      CHIN_LEFT_GONION = 33,
      CHIN_RIGHT_GONION = 34,
    }
  }

}

export class LocationInfo extends jspb.Message {
  getLatLng(): google_type_latlng_pb.LatLng | undefined;
  setLatLng(value?: google_type_latlng_pb.LatLng): void;
  hasLatLng(): boolean;
  clearLatLng(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocationInfo.AsObject;
  static toObject(includeInstance: boolean, msg: LocationInfo): LocationInfo.AsObject;
  static serializeBinaryToWriter(message: LocationInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocationInfo;
  static deserializeBinaryFromReader(message: LocationInfo, reader: jspb.BinaryReader): LocationInfo;
}

export namespace LocationInfo {
  export type AsObject = {
    latLng?: google_type_latlng_pb.LatLng.AsObject,
  }
}

export class Property extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  getUint64Value(): number;
  setUint64Value(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Property.AsObject;
  static toObject(includeInstance: boolean, msg: Property): Property.AsObject;
  static serializeBinaryToWriter(message: Property, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Property;
  static deserializeBinaryFromReader(message: Property, reader: jspb.BinaryReader): Property;
}

export namespace Property {
  export type AsObject = {
    name: string,
    value: string,
    uint64Value: number,
  }
}

export class EntityAnnotation extends jspb.Message {
  getMid(): string;
  setMid(value: string): void;

  getLocale(): string;
  setLocale(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getScore(): number;
  setScore(value: number): void;

  getConfidence(): number;
  setConfidence(value: number): void;

  getTopicality(): number;
  setTopicality(value: number): void;

  getBoundingPoly(): google_cloud_vision_v1p1beta1_geometry_pb.BoundingPoly | undefined;
  setBoundingPoly(value?: google_cloud_vision_v1p1beta1_geometry_pb.BoundingPoly): void;
  hasBoundingPoly(): boolean;
  clearBoundingPoly(): void;

  getLocationsList(): Array<LocationInfo>;
  setLocationsList(value: Array<LocationInfo>): void;
  clearLocationsList(): void;
  addLocations(value?: LocationInfo, index?: number): LocationInfo;

  getPropertiesList(): Array<Property>;
  setPropertiesList(value: Array<Property>): void;
  clearPropertiesList(): void;
  addProperties(value?: Property, index?: number): Property;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EntityAnnotation.AsObject;
  static toObject(includeInstance: boolean, msg: EntityAnnotation): EntityAnnotation.AsObject;
  static serializeBinaryToWriter(message: EntityAnnotation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EntityAnnotation;
  static deserializeBinaryFromReader(message: EntityAnnotation, reader: jspb.BinaryReader): EntityAnnotation;
}

export namespace EntityAnnotation {
  export type AsObject = {
    mid: string,
    locale: string,
    description: string,
    score: number,
    confidence: number,
    topicality: number,
    boundingPoly?: google_cloud_vision_v1p1beta1_geometry_pb.BoundingPoly.AsObject,
    locationsList: Array<LocationInfo.AsObject>,
    propertiesList: Array<Property.AsObject>,
  }
}

export class SafeSearchAnnotation extends jspb.Message {
  getAdult(): Likelihood;
  setAdult(value: Likelihood): void;

  getSpoof(): Likelihood;
  setSpoof(value: Likelihood): void;

  getMedical(): Likelihood;
  setMedical(value: Likelihood): void;

  getViolence(): Likelihood;
  setViolence(value: Likelihood): void;

  getRacy(): Likelihood;
  setRacy(value: Likelihood): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SafeSearchAnnotation.AsObject;
  static toObject(includeInstance: boolean, msg: SafeSearchAnnotation): SafeSearchAnnotation.AsObject;
  static serializeBinaryToWriter(message: SafeSearchAnnotation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SafeSearchAnnotation;
  static deserializeBinaryFromReader(message: SafeSearchAnnotation, reader: jspb.BinaryReader): SafeSearchAnnotation;
}

export namespace SafeSearchAnnotation {
  export type AsObject = {
    adult: Likelihood,
    spoof: Likelihood,
    medical: Likelihood,
    violence: Likelihood,
    racy: Likelihood,
  }
}

export class LatLongRect extends jspb.Message {
  getMinLatLng(): google_type_latlng_pb.LatLng | undefined;
  setMinLatLng(value?: google_type_latlng_pb.LatLng): void;
  hasMinLatLng(): boolean;
  clearMinLatLng(): void;

  getMaxLatLng(): google_type_latlng_pb.LatLng | undefined;
  setMaxLatLng(value?: google_type_latlng_pb.LatLng): void;
  hasMaxLatLng(): boolean;
  clearMaxLatLng(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LatLongRect.AsObject;
  static toObject(includeInstance: boolean, msg: LatLongRect): LatLongRect.AsObject;
  static serializeBinaryToWriter(message: LatLongRect, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LatLongRect;
  static deserializeBinaryFromReader(message: LatLongRect, reader: jspb.BinaryReader): LatLongRect;
}

export namespace LatLongRect {
  export type AsObject = {
    minLatLng?: google_type_latlng_pb.LatLng.AsObject,
    maxLatLng?: google_type_latlng_pb.LatLng.AsObject,
  }
}

export class ColorInfo extends jspb.Message {
  getColor(): google_type_color_pb.Color | undefined;
  setColor(value?: google_type_color_pb.Color): void;
  hasColor(): boolean;
  clearColor(): void;

  getScore(): number;
  setScore(value: number): void;

  getPixelFraction(): number;
  setPixelFraction(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ColorInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ColorInfo): ColorInfo.AsObject;
  static serializeBinaryToWriter(message: ColorInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ColorInfo;
  static deserializeBinaryFromReader(message: ColorInfo, reader: jspb.BinaryReader): ColorInfo;
}

export namespace ColorInfo {
  export type AsObject = {
    color?: google_type_color_pb.Color.AsObject,
    score: number,
    pixelFraction: number,
  }
}

export class DominantColorsAnnotation extends jspb.Message {
  getColorsList(): Array<ColorInfo>;
  setColorsList(value: Array<ColorInfo>): void;
  clearColorsList(): void;
  addColors(value?: ColorInfo, index?: number): ColorInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DominantColorsAnnotation.AsObject;
  static toObject(includeInstance: boolean, msg: DominantColorsAnnotation): DominantColorsAnnotation.AsObject;
  static serializeBinaryToWriter(message: DominantColorsAnnotation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DominantColorsAnnotation;
  static deserializeBinaryFromReader(message: DominantColorsAnnotation, reader: jspb.BinaryReader): DominantColorsAnnotation;
}

export namespace DominantColorsAnnotation {
  export type AsObject = {
    colorsList: Array<ColorInfo.AsObject>,
  }
}

export class ImageProperties extends jspb.Message {
  getDominantColors(): DominantColorsAnnotation | undefined;
  setDominantColors(value?: DominantColorsAnnotation): void;
  hasDominantColors(): boolean;
  clearDominantColors(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImageProperties.AsObject;
  static toObject(includeInstance: boolean, msg: ImageProperties): ImageProperties.AsObject;
  static serializeBinaryToWriter(message: ImageProperties, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImageProperties;
  static deserializeBinaryFromReader(message: ImageProperties, reader: jspb.BinaryReader): ImageProperties;
}

export namespace ImageProperties {
  export type AsObject = {
    dominantColors?: DominantColorsAnnotation.AsObject,
  }
}

export class CropHint extends jspb.Message {
  getBoundingPoly(): google_cloud_vision_v1p1beta1_geometry_pb.BoundingPoly | undefined;
  setBoundingPoly(value?: google_cloud_vision_v1p1beta1_geometry_pb.BoundingPoly): void;
  hasBoundingPoly(): boolean;
  clearBoundingPoly(): void;

  getConfidence(): number;
  setConfidence(value: number): void;

  getImportanceFraction(): number;
  setImportanceFraction(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CropHint.AsObject;
  static toObject(includeInstance: boolean, msg: CropHint): CropHint.AsObject;
  static serializeBinaryToWriter(message: CropHint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CropHint;
  static deserializeBinaryFromReader(message: CropHint, reader: jspb.BinaryReader): CropHint;
}

export namespace CropHint {
  export type AsObject = {
    boundingPoly?: google_cloud_vision_v1p1beta1_geometry_pb.BoundingPoly.AsObject,
    confidence: number,
    importanceFraction: number,
  }
}

export class CropHintsAnnotation extends jspb.Message {
  getCropHintsList(): Array<CropHint>;
  setCropHintsList(value: Array<CropHint>): void;
  clearCropHintsList(): void;
  addCropHints(value?: CropHint, index?: number): CropHint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CropHintsAnnotation.AsObject;
  static toObject(includeInstance: boolean, msg: CropHintsAnnotation): CropHintsAnnotation.AsObject;
  static serializeBinaryToWriter(message: CropHintsAnnotation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CropHintsAnnotation;
  static deserializeBinaryFromReader(message: CropHintsAnnotation, reader: jspb.BinaryReader): CropHintsAnnotation;
}

export namespace CropHintsAnnotation {
  export type AsObject = {
    cropHintsList: Array<CropHint.AsObject>,
  }
}

export class CropHintsParams extends jspb.Message {
  getAspectRatiosList(): Array<number>;
  setAspectRatiosList(value: Array<number>): void;
  clearAspectRatiosList(): void;
  addAspectRatios(value: number, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CropHintsParams.AsObject;
  static toObject(includeInstance: boolean, msg: CropHintsParams): CropHintsParams.AsObject;
  static serializeBinaryToWriter(message: CropHintsParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CropHintsParams;
  static deserializeBinaryFromReader(message: CropHintsParams, reader: jspb.BinaryReader): CropHintsParams;
}

export namespace CropHintsParams {
  export type AsObject = {
    aspectRatiosList: Array<number>,
  }
}

export class WebDetectionParams extends jspb.Message {
  getIncludeGeoResults(): boolean;
  setIncludeGeoResults(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebDetectionParams.AsObject;
  static toObject(includeInstance: boolean, msg: WebDetectionParams): WebDetectionParams.AsObject;
  static serializeBinaryToWriter(message: WebDetectionParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebDetectionParams;
  static deserializeBinaryFromReader(message: WebDetectionParams, reader: jspb.BinaryReader): WebDetectionParams;
}

export namespace WebDetectionParams {
  export type AsObject = {
    includeGeoResults: boolean,
  }
}

export class ImageContext extends jspb.Message {
  getLatLongRect(): LatLongRect | undefined;
  setLatLongRect(value?: LatLongRect): void;
  hasLatLongRect(): boolean;
  clearLatLongRect(): void;

  getLanguageHintsList(): Array<string>;
  setLanguageHintsList(value: Array<string>): void;
  clearLanguageHintsList(): void;
  addLanguageHints(value: string, index?: number): void;

  getCropHintsParams(): CropHintsParams | undefined;
  setCropHintsParams(value?: CropHintsParams): void;
  hasCropHintsParams(): boolean;
  clearCropHintsParams(): void;

  getWebDetectionParams(): WebDetectionParams | undefined;
  setWebDetectionParams(value?: WebDetectionParams): void;
  hasWebDetectionParams(): boolean;
  clearWebDetectionParams(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImageContext.AsObject;
  static toObject(includeInstance: boolean, msg: ImageContext): ImageContext.AsObject;
  static serializeBinaryToWriter(message: ImageContext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImageContext;
  static deserializeBinaryFromReader(message: ImageContext, reader: jspb.BinaryReader): ImageContext;
}

export namespace ImageContext {
  export type AsObject = {
    latLongRect?: LatLongRect.AsObject,
    languageHintsList: Array<string>,
    cropHintsParams?: CropHintsParams.AsObject,
    webDetectionParams?: WebDetectionParams.AsObject,
  }
}

export class AnnotateImageRequest extends jspb.Message {
  getImage(): Image | undefined;
  setImage(value?: Image): void;
  hasImage(): boolean;
  clearImage(): void;

  getFeaturesList(): Array<Feature>;
  setFeaturesList(value: Array<Feature>): void;
  clearFeaturesList(): void;
  addFeatures(value?: Feature, index?: number): Feature;

  getImageContext(): ImageContext | undefined;
  setImageContext(value?: ImageContext): void;
  hasImageContext(): boolean;
  clearImageContext(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnnotateImageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AnnotateImageRequest): AnnotateImageRequest.AsObject;
  static serializeBinaryToWriter(message: AnnotateImageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnnotateImageRequest;
  static deserializeBinaryFromReader(message: AnnotateImageRequest, reader: jspb.BinaryReader): AnnotateImageRequest;
}

export namespace AnnotateImageRequest {
  export type AsObject = {
    image?: Image.AsObject,
    featuresList: Array<Feature.AsObject>,
    imageContext?: ImageContext.AsObject,
  }
}

export class AnnotateImageResponse extends jspb.Message {
  getFaceAnnotationsList(): Array<FaceAnnotation>;
  setFaceAnnotationsList(value: Array<FaceAnnotation>): void;
  clearFaceAnnotationsList(): void;
  addFaceAnnotations(value?: FaceAnnotation, index?: number): FaceAnnotation;

  getLandmarkAnnotationsList(): Array<EntityAnnotation>;
  setLandmarkAnnotationsList(value: Array<EntityAnnotation>): void;
  clearLandmarkAnnotationsList(): void;
  addLandmarkAnnotations(value?: EntityAnnotation, index?: number): EntityAnnotation;

  getLogoAnnotationsList(): Array<EntityAnnotation>;
  setLogoAnnotationsList(value: Array<EntityAnnotation>): void;
  clearLogoAnnotationsList(): void;
  addLogoAnnotations(value?: EntityAnnotation, index?: number): EntityAnnotation;

  getLabelAnnotationsList(): Array<EntityAnnotation>;
  setLabelAnnotationsList(value: Array<EntityAnnotation>): void;
  clearLabelAnnotationsList(): void;
  addLabelAnnotations(value?: EntityAnnotation, index?: number): EntityAnnotation;

  getTextAnnotationsList(): Array<EntityAnnotation>;
  setTextAnnotationsList(value: Array<EntityAnnotation>): void;
  clearTextAnnotationsList(): void;
  addTextAnnotations(value?: EntityAnnotation, index?: number): EntityAnnotation;

  getFullTextAnnotation(): google_cloud_vision_v1p1beta1_text_annotation_pb.TextAnnotation | undefined;
  setFullTextAnnotation(value?: google_cloud_vision_v1p1beta1_text_annotation_pb.TextAnnotation): void;
  hasFullTextAnnotation(): boolean;
  clearFullTextAnnotation(): void;

  getSafeSearchAnnotation(): SafeSearchAnnotation | undefined;
  setSafeSearchAnnotation(value?: SafeSearchAnnotation): void;
  hasSafeSearchAnnotation(): boolean;
  clearSafeSearchAnnotation(): void;

  getImagePropertiesAnnotation(): ImageProperties | undefined;
  setImagePropertiesAnnotation(value?: ImageProperties): void;
  hasImagePropertiesAnnotation(): boolean;
  clearImagePropertiesAnnotation(): void;

  getCropHintsAnnotation(): CropHintsAnnotation | undefined;
  setCropHintsAnnotation(value?: CropHintsAnnotation): void;
  hasCropHintsAnnotation(): boolean;
  clearCropHintsAnnotation(): void;

  getWebDetection(): google_cloud_vision_v1p1beta1_web_detection_pb.WebDetection | undefined;
  setWebDetection(value?: google_cloud_vision_v1p1beta1_web_detection_pb.WebDetection): void;
  hasWebDetection(): boolean;
  clearWebDetection(): void;

  getError(): google_rpc_status_pb.Status | undefined;
  setError(value?: google_rpc_status_pb.Status): void;
  hasError(): boolean;
  clearError(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnnotateImageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AnnotateImageResponse): AnnotateImageResponse.AsObject;
  static serializeBinaryToWriter(message: AnnotateImageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnnotateImageResponse;
  static deserializeBinaryFromReader(message: AnnotateImageResponse, reader: jspb.BinaryReader): AnnotateImageResponse;
}

export namespace AnnotateImageResponse {
  export type AsObject = {
    faceAnnotationsList: Array<FaceAnnotation.AsObject>,
    landmarkAnnotationsList: Array<EntityAnnotation.AsObject>,
    logoAnnotationsList: Array<EntityAnnotation.AsObject>,
    labelAnnotationsList: Array<EntityAnnotation.AsObject>,
    textAnnotationsList: Array<EntityAnnotation.AsObject>,
    fullTextAnnotation?: google_cloud_vision_v1p1beta1_text_annotation_pb.TextAnnotation.AsObject,
    safeSearchAnnotation?: SafeSearchAnnotation.AsObject,
    imagePropertiesAnnotation?: ImageProperties.AsObject,
    cropHintsAnnotation?: CropHintsAnnotation.AsObject,
    webDetection?: google_cloud_vision_v1p1beta1_web_detection_pb.WebDetection.AsObject,
    error?: google_rpc_status_pb.Status.AsObject,
  }
}

export class BatchAnnotateImagesRequest extends jspb.Message {
  getRequestsList(): Array<AnnotateImageRequest>;
  setRequestsList(value: Array<AnnotateImageRequest>): void;
  clearRequestsList(): void;
  addRequests(value?: AnnotateImageRequest, index?: number): AnnotateImageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchAnnotateImagesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BatchAnnotateImagesRequest): BatchAnnotateImagesRequest.AsObject;
  static serializeBinaryToWriter(message: BatchAnnotateImagesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchAnnotateImagesRequest;
  static deserializeBinaryFromReader(message: BatchAnnotateImagesRequest, reader: jspb.BinaryReader): BatchAnnotateImagesRequest;
}

export namespace BatchAnnotateImagesRequest {
  export type AsObject = {
    requestsList: Array<AnnotateImageRequest.AsObject>,
  }
}

export class BatchAnnotateImagesResponse extends jspb.Message {
  getResponsesList(): Array<AnnotateImageResponse>;
  setResponsesList(value: Array<AnnotateImageResponse>): void;
  clearResponsesList(): void;
  addResponses(value?: AnnotateImageResponse, index?: number): AnnotateImageResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchAnnotateImagesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BatchAnnotateImagesResponse): BatchAnnotateImagesResponse.AsObject;
  static serializeBinaryToWriter(message: BatchAnnotateImagesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchAnnotateImagesResponse;
  static deserializeBinaryFromReader(message: BatchAnnotateImagesResponse, reader: jspb.BinaryReader): BatchAnnotateImagesResponse;
}

export namespace BatchAnnotateImagesResponse {
  export type AsObject = {
    responsesList: Array<AnnotateImageResponse.AsObject>,
  }
}

export enum Likelihood { 
  UNKNOWN = 0,
  VERY_UNLIKELY = 1,
  UNLIKELY = 2,
  POSSIBLE = 3,
  LIKELY = 4,
  VERY_LIKELY = 5,
}
