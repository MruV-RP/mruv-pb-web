import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_cloud_datalabeling_v1beta1_annotation_spec_set_pb from '../../../../google/cloud/datalabeling/v1beta1/annotation_spec_set_pb';
import * as google_cloud_datalabeling_v1beta1_data_payloads_pb from '../../../../google/cloud/datalabeling/v1beta1/data_payloads_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';

export class Annotation extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getAnnotationSource(): AnnotationSource;
  setAnnotationSource(value: AnnotationSource): void;

  getAnnotationValue(): AnnotationValue | undefined;
  setAnnotationValue(value?: AnnotationValue): void;
  hasAnnotationValue(): boolean;
  clearAnnotationValue(): void;

  getAnnotationMetadata(): AnnotationMetadata | undefined;
  setAnnotationMetadata(value?: AnnotationMetadata): void;
  hasAnnotationMetadata(): boolean;
  clearAnnotationMetadata(): void;

  getAnnotationSentiment(): AnnotationSentiment;
  setAnnotationSentiment(value: AnnotationSentiment): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Annotation.AsObject;
  static toObject(includeInstance: boolean, msg: Annotation): Annotation.AsObject;
  static serializeBinaryToWriter(message: Annotation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Annotation;
  static deserializeBinaryFromReader(message: Annotation, reader: jspb.BinaryReader): Annotation;
}

export namespace Annotation {
  export type AsObject = {
    name: string,
    annotationSource: AnnotationSource,
    annotationValue?: AnnotationValue.AsObject,
    annotationMetadata?: AnnotationMetadata.AsObject,
    annotationSentiment: AnnotationSentiment,
  }
}

export class AnnotationValue extends jspb.Message {
  getImageClassificationAnnotation(): ImageClassificationAnnotation | undefined;
  setImageClassificationAnnotation(value?: ImageClassificationAnnotation): void;
  hasImageClassificationAnnotation(): boolean;
  clearImageClassificationAnnotation(): void;

  getImageBoundingPolyAnnotation(): ImageBoundingPolyAnnotation | undefined;
  setImageBoundingPolyAnnotation(value?: ImageBoundingPolyAnnotation): void;
  hasImageBoundingPolyAnnotation(): boolean;
  clearImageBoundingPolyAnnotation(): void;

  getImagePolylineAnnotation(): ImagePolylineAnnotation | undefined;
  setImagePolylineAnnotation(value?: ImagePolylineAnnotation): void;
  hasImagePolylineAnnotation(): boolean;
  clearImagePolylineAnnotation(): void;

  getImageSegmentationAnnotation(): ImageSegmentationAnnotation | undefined;
  setImageSegmentationAnnotation(value?: ImageSegmentationAnnotation): void;
  hasImageSegmentationAnnotation(): boolean;
  clearImageSegmentationAnnotation(): void;

  getTextClassificationAnnotation(): TextClassificationAnnotation | undefined;
  setTextClassificationAnnotation(value?: TextClassificationAnnotation): void;
  hasTextClassificationAnnotation(): boolean;
  clearTextClassificationAnnotation(): void;

  getTextEntityExtractionAnnotation(): TextEntityExtractionAnnotation | undefined;
  setTextEntityExtractionAnnotation(value?: TextEntityExtractionAnnotation): void;
  hasTextEntityExtractionAnnotation(): boolean;
  clearTextEntityExtractionAnnotation(): void;

  getVideoClassificationAnnotation(): VideoClassificationAnnotation | undefined;
  setVideoClassificationAnnotation(value?: VideoClassificationAnnotation): void;
  hasVideoClassificationAnnotation(): boolean;
  clearVideoClassificationAnnotation(): void;

  getVideoObjectTrackingAnnotation(): VideoObjectTrackingAnnotation | undefined;
  setVideoObjectTrackingAnnotation(value?: VideoObjectTrackingAnnotation): void;
  hasVideoObjectTrackingAnnotation(): boolean;
  clearVideoObjectTrackingAnnotation(): void;

  getVideoEventAnnotation(): VideoEventAnnotation | undefined;
  setVideoEventAnnotation(value?: VideoEventAnnotation): void;
  hasVideoEventAnnotation(): boolean;
  clearVideoEventAnnotation(): void;

  getValueTypeCase(): AnnotationValue.ValueTypeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnnotationValue.AsObject;
  static toObject(includeInstance: boolean, msg: AnnotationValue): AnnotationValue.AsObject;
  static serializeBinaryToWriter(message: AnnotationValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnnotationValue;
  static deserializeBinaryFromReader(message: AnnotationValue, reader: jspb.BinaryReader): AnnotationValue;
}

export namespace AnnotationValue {
  export type AsObject = {
    imageClassificationAnnotation?: ImageClassificationAnnotation.AsObject,
    imageBoundingPolyAnnotation?: ImageBoundingPolyAnnotation.AsObject,
    imagePolylineAnnotation?: ImagePolylineAnnotation.AsObject,
    imageSegmentationAnnotation?: ImageSegmentationAnnotation.AsObject,
    textClassificationAnnotation?: TextClassificationAnnotation.AsObject,
    textEntityExtractionAnnotation?: TextEntityExtractionAnnotation.AsObject,
    videoClassificationAnnotation?: VideoClassificationAnnotation.AsObject,
    videoObjectTrackingAnnotation?: VideoObjectTrackingAnnotation.AsObject,
    videoEventAnnotation?: VideoEventAnnotation.AsObject,
  }

  export enum ValueTypeCase { 
    VALUE_TYPE_NOT_SET = 0,
    IMAGE_CLASSIFICATION_ANNOTATION = 1,
    IMAGE_BOUNDING_POLY_ANNOTATION = 2,
    IMAGE_POLYLINE_ANNOTATION = 8,
    IMAGE_SEGMENTATION_ANNOTATION = 9,
    TEXT_CLASSIFICATION_ANNOTATION = 3,
    TEXT_ENTITY_EXTRACTION_ANNOTATION = 10,
    VIDEO_CLASSIFICATION_ANNOTATION = 4,
    VIDEO_OBJECT_TRACKING_ANNOTATION = 5,
    VIDEO_EVENT_ANNOTATION = 6,
  }
}

export class ImageClassificationAnnotation extends jspb.Message {
  getAnnotationSpec(): google_cloud_datalabeling_v1beta1_annotation_spec_set_pb.AnnotationSpec | undefined;
  setAnnotationSpec(value?: google_cloud_datalabeling_v1beta1_annotation_spec_set_pb.AnnotationSpec): void;
  hasAnnotationSpec(): boolean;
  clearAnnotationSpec(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImageClassificationAnnotation.AsObject;
  static toObject(includeInstance: boolean, msg: ImageClassificationAnnotation): ImageClassificationAnnotation.AsObject;
  static serializeBinaryToWriter(message: ImageClassificationAnnotation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImageClassificationAnnotation;
  static deserializeBinaryFromReader(message: ImageClassificationAnnotation, reader: jspb.BinaryReader): ImageClassificationAnnotation;
}

export namespace ImageClassificationAnnotation {
  export type AsObject = {
    annotationSpec?: google_cloud_datalabeling_v1beta1_annotation_spec_set_pb.AnnotationSpec.AsObject,
  }
}

export class Vertex extends jspb.Message {
  getX(): number;
  setX(value: number): void;

  getY(): number;
  setY(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Vertex.AsObject;
  static toObject(includeInstance: boolean, msg: Vertex): Vertex.AsObject;
  static serializeBinaryToWriter(message: Vertex, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Vertex;
  static deserializeBinaryFromReader(message: Vertex, reader: jspb.BinaryReader): Vertex;
}

export namespace Vertex {
  export type AsObject = {
    x: number,
    y: number,
  }
}

export class NormalizedVertex extends jspb.Message {
  getX(): number;
  setX(value: number): void;

  getY(): number;
  setY(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NormalizedVertex.AsObject;
  static toObject(includeInstance: boolean, msg: NormalizedVertex): NormalizedVertex.AsObject;
  static serializeBinaryToWriter(message: NormalizedVertex, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NormalizedVertex;
  static deserializeBinaryFromReader(message: NormalizedVertex, reader: jspb.BinaryReader): NormalizedVertex;
}

export namespace NormalizedVertex {
  export type AsObject = {
    x: number,
    y: number,
  }
}

export class BoundingPoly extends jspb.Message {
  getVerticesList(): Array<Vertex>;
  setVerticesList(value: Array<Vertex>): void;
  clearVerticesList(): void;
  addVertices(value?: Vertex, index?: number): Vertex;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BoundingPoly.AsObject;
  static toObject(includeInstance: boolean, msg: BoundingPoly): BoundingPoly.AsObject;
  static serializeBinaryToWriter(message: BoundingPoly, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BoundingPoly;
  static deserializeBinaryFromReader(message: BoundingPoly, reader: jspb.BinaryReader): BoundingPoly;
}

export namespace BoundingPoly {
  export type AsObject = {
    verticesList: Array<Vertex.AsObject>,
  }
}

export class NormalizedBoundingPoly extends jspb.Message {
  getNormalizedVerticesList(): Array<NormalizedVertex>;
  setNormalizedVerticesList(value: Array<NormalizedVertex>): void;
  clearNormalizedVerticesList(): void;
  addNormalizedVertices(value?: NormalizedVertex, index?: number): NormalizedVertex;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NormalizedBoundingPoly.AsObject;
  static toObject(includeInstance: boolean, msg: NormalizedBoundingPoly): NormalizedBoundingPoly.AsObject;
  static serializeBinaryToWriter(message: NormalizedBoundingPoly, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NormalizedBoundingPoly;
  static deserializeBinaryFromReader(message: NormalizedBoundingPoly, reader: jspb.BinaryReader): NormalizedBoundingPoly;
}

export namespace NormalizedBoundingPoly {
  export type AsObject = {
    normalizedVerticesList: Array<NormalizedVertex.AsObject>,
  }
}

export class ImageBoundingPolyAnnotation extends jspb.Message {
  getBoundingPoly(): BoundingPoly | undefined;
  setBoundingPoly(value?: BoundingPoly): void;
  hasBoundingPoly(): boolean;
  clearBoundingPoly(): void;

  getNormalizedBoundingPoly(): NormalizedBoundingPoly | undefined;
  setNormalizedBoundingPoly(value?: NormalizedBoundingPoly): void;
  hasNormalizedBoundingPoly(): boolean;
  clearNormalizedBoundingPoly(): void;

  getAnnotationSpec(): google_cloud_datalabeling_v1beta1_annotation_spec_set_pb.AnnotationSpec | undefined;
  setAnnotationSpec(value?: google_cloud_datalabeling_v1beta1_annotation_spec_set_pb.AnnotationSpec): void;
  hasAnnotationSpec(): boolean;
  clearAnnotationSpec(): void;

  getBoundedAreaCase(): ImageBoundingPolyAnnotation.BoundedAreaCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImageBoundingPolyAnnotation.AsObject;
  static toObject(includeInstance: boolean, msg: ImageBoundingPolyAnnotation): ImageBoundingPolyAnnotation.AsObject;
  static serializeBinaryToWriter(message: ImageBoundingPolyAnnotation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImageBoundingPolyAnnotation;
  static deserializeBinaryFromReader(message: ImageBoundingPolyAnnotation, reader: jspb.BinaryReader): ImageBoundingPolyAnnotation;
}

export namespace ImageBoundingPolyAnnotation {
  export type AsObject = {
    boundingPoly?: BoundingPoly.AsObject,
    normalizedBoundingPoly?: NormalizedBoundingPoly.AsObject,
    annotationSpec?: google_cloud_datalabeling_v1beta1_annotation_spec_set_pb.AnnotationSpec.AsObject,
  }

  export enum BoundedAreaCase { 
    BOUNDED_AREA_NOT_SET = 0,
    BOUNDING_POLY = 2,
    NORMALIZED_BOUNDING_POLY = 3,
  }
}

export class Polyline extends jspb.Message {
  getVerticesList(): Array<Vertex>;
  setVerticesList(value: Array<Vertex>): void;
  clearVerticesList(): void;
  addVertices(value?: Vertex, index?: number): Vertex;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Polyline.AsObject;
  static toObject(includeInstance: boolean, msg: Polyline): Polyline.AsObject;
  static serializeBinaryToWriter(message: Polyline, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Polyline;
  static deserializeBinaryFromReader(message: Polyline, reader: jspb.BinaryReader): Polyline;
}

export namespace Polyline {
  export type AsObject = {
    verticesList: Array<Vertex.AsObject>,
  }
}

export class NormalizedPolyline extends jspb.Message {
  getNormalizedVerticesList(): Array<NormalizedVertex>;
  setNormalizedVerticesList(value: Array<NormalizedVertex>): void;
  clearNormalizedVerticesList(): void;
  addNormalizedVertices(value?: NormalizedVertex, index?: number): NormalizedVertex;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NormalizedPolyline.AsObject;
  static toObject(includeInstance: boolean, msg: NormalizedPolyline): NormalizedPolyline.AsObject;
  static serializeBinaryToWriter(message: NormalizedPolyline, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NormalizedPolyline;
  static deserializeBinaryFromReader(message: NormalizedPolyline, reader: jspb.BinaryReader): NormalizedPolyline;
}

export namespace NormalizedPolyline {
  export type AsObject = {
    normalizedVerticesList: Array<NormalizedVertex.AsObject>,
  }
}

export class ImagePolylineAnnotation extends jspb.Message {
  getPolyline(): Polyline | undefined;
  setPolyline(value?: Polyline): void;
  hasPolyline(): boolean;
  clearPolyline(): void;

  getNormalizedPolyline(): NormalizedPolyline | undefined;
  setNormalizedPolyline(value?: NormalizedPolyline): void;
  hasNormalizedPolyline(): boolean;
  clearNormalizedPolyline(): void;

  getAnnotationSpec(): google_cloud_datalabeling_v1beta1_annotation_spec_set_pb.AnnotationSpec | undefined;
  setAnnotationSpec(value?: google_cloud_datalabeling_v1beta1_annotation_spec_set_pb.AnnotationSpec): void;
  hasAnnotationSpec(): boolean;
  clearAnnotationSpec(): void;

  getPolyCase(): ImagePolylineAnnotation.PolyCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImagePolylineAnnotation.AsObject;
  static toObject(includeInstance: boolean, msg: ImagePolylineAnnotation): ImagePolylineAnnotation.AsObject;
  static serializeBinaryToWriter(message: ImagePolylineAnnotation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImagePolylineAnnotation;
  static deserializeBinaryFromReader(message: ImagePolylineAnnotation, reader: jspb.BinaryReader): ImagePolylineAnnotation;
}

export namespace ImagePolylineAnnotation {
  export type AsObject = {
    polyline?: Polyline.AsObject,
    normalizedPolyline?: NormalizedPolyline.AsObject,
    annotationSpec?: google_cloud_datalabeling_v1beta1_annotation_spec_set_pb.AnnotationSpec.AsObject,
  }

  export enum PolyCase { 
    POLY_NOT_SET = 0,
    POLYLINE = 2,
    NORMALIZED_POLYLINE = 3,
  }
}

export class ImageSegmentationAnnotation extends jspb.Message {
  getAnnotationColorsMap(): jspb.Map<string, google_cloud_datalabeling_v1beta1_annotation_spec_set_pb.AnnotationSpec>;
  clearAnnotationColorsMap(): void;

  getMimeType(): string;
  setMimeType(value: string): void;

  getImageBytes(): Uint8Array | string;
  getImageBytes_asU8(): Uint8Array;
  getImageBytes_asB64(): string;
  setImageBytes(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImageSegmentationAnnotation.AsObject;
  static toObject(includeInstance: boolean, msg: ImageSegmentationAnnotation): ImageSegmentationAnnotation.AsObject;
  static serializeBinaryToWriter(message: ImageSegmentationAnnotation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImageSegmentationAnnotation;
  static deserializeBinaryFromReader(message: ImageSegmentationAnnotation, reader: jspb.BinaryReader): ImageSegmentationAnnotation;
}

export namespace ImageSegmentationAnnotation {
  export type AsObject = {
    annotationColorsMap: Array<[string, google_cloud_datalabeling_v1beta1_annotation_spec_set_pb.AnnotationSpec.AsObject]>,
    mimeType: string,
    imageBytes: Uint8Array | string,
  }
}

export class TextClassificationAnnotation extends jspb.Message {
  getAnnotationSpec(): google_cloud_datalabeling_v1beta1_annotation_spec_set_pb.AnnotationSpec | undefined;
  setAnnotationSpec(value?: google_cloud_datalabeling_v1beta1_annotation_spec_set_pb.AnnotationSpec): void;
  hasAnnotationSpec(): boolean;
  clearAnnotationSpec(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TextClassificationAnnotation.AsObject;
  static toObject(includeInstance: boolean, msg: TextClassificationAnnotation): TextClassificationAnnotation.AsObject;
  static serializeBinaryToWriter(message: TextClassificationAnnotation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TextClassificationAnnotation;
  static deserializeBinaryFromReader(message: TextClassificationAnnotation, reader: jspb.BinaryReader): TextClassificationAnnotation;
}

export namespace TextClassificationAnnotation {
  export type AsObject = {
    annotationSpec?: google_cloud_datalabeling_v1beta1_annotation_spec_set_pb.AnnotationSpec.AsObject,
  }
}

export class TextEntityExtractionAnnotation extends jspb.Message {
  getAnnotationSpec(): google_cloud_datalabeling_v1beta1_annotation_spec_set_pb.AnnotationSpec | undefined;
  setAnnotationSpec(value?: google_cloud_datalabeling_v1beta1_annotation_spec_set_pb.AnnotationSpec): void;
  hasAnnotationSpec(): boolean;
  clearAnnotationSpec(): void;

  getSequentialSegment(): SequentialSegment | undefined;
  setSequentialSegment(value?: SequentialSegment): void;
  hasSequentialSegment(): boolean;
  clearSequentialSegment(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TextEntityExtractionAnnotation.AsObject;
  static toObject(includeInstance: boolean, msg: TextEntityExtractionAnnotation): TextEntityExtractionAnnotation.AsObject;
  static serializeBinaryToWriter(message: TextEntityExtractionAnnotation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TextEntityExtractionAnnotation;
  static deserializeBinaryFromReader(message: TextEntityExtractionAnnotation, reader: jspb.BinaryReader): TextEntityExtractionAnnotation;
}

export namespace TextEntityExtractionAnnotation {
  export type AsObject = {
    annotationSpec?: google_cloud_datalabeling_v1beta1_annotation_spec_set_pb.AnnotationSpec.AsObject,
    sequentialSegment?: SequentialSegment.AsObject,
  }
}

export class SequentialSegment extends jspb.Message {
  getStart(): number;
  setStart(value: number): void;

  getEnd(): number;
  setEnd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SequentialSegment.AsObject;
  static toObject(includeInstance: boolean, msg: SequentialSegment): SequentialSegment.AsObject;
  static serializeBinaryToWriter(message: SequentialSegment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SequentialSegment;
  static deserializeBinaryFromReader(message: SequentialSegment, reader: jspb.BinaryReader): SequentialSegment;
}

export namespace SequentialSegment {
  export type AsObject = {
    start: number,
    end: number,
  }
}

export class TimeSegment extends jspb.Message {
  getStartTimeOffset(): google_protobuf_duration_pb.Duration | undefined;
  setStartTimeOffset(value?: google_protobuf_duration_pb.Duration): void;
  hasStartTimeOffset(): boolean;
  clearStartTimeOffset(): void;

  getEndTimeOffset(): google_protobuf_duration_pb.Duration | undefined;
  setEndTimeOffset(value?: google_protobuf_duration_pb.Duration): void;
  hasEndTimeOffset(): boolean;
  clearEndTimeOffset(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimeSegment.AsObject;
  static toObject(includeInstance: boolean, msg: TimeSegment): TimeSegment.AsObject;
  static serializeBinaryToWriter(message: TimeSegment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimeSegment;
  static deserializeBinaryFromReader(message: TimeSegment, reader: jspb.BinaryReader): TimeSegment;
}

export namespace TimeSegment {
  export type AsObject = {
    startTimeOffset?: google_protobuf_duration_pb.Duration.AsObject,
    endTimeOffset?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class VideoClassificationAnnotation extends jspb.Message {
  getTimeSegment(): TimeSegment | undefined;
  setTimeSegment(value?: TimeSegment): void;
  hasTimeSegment(): boolean;
  clearTimeSegment(): void;

  getAnnotationSpec(): google_cloud_datalabeling_v1beta1_annotation_spec_set_pb.AnnotationSpec | undefined;
  setAnnotationSpec(value?: google_cloud_datalabeling_v1beta1_annotation_spec_set_pb.AnnotationSpec): void;
  hasAnnotationSpec(): boolean;
  clearAnnotationSpec(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VideoClassificationAnnotation.AsObject;
  static toObject(includeInstance: boolean, msg: VideoClassificationAnnotation): VideoClassificationAnnotation.AsObject;
  static serializeBinaryToWriter(message: VideoClassificationAnnotation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VideoClassificationAnnotation;
  static deserializeBinaryFromReader(message: VideoClassificationAnnotation, reader: jspb.BinaryReader): VideoClassificationAnnotation;
}

export namespace VideoClassificationAnnotation {
  export type AsObject = {
    timeSegment?: TimeSegment.AsObject,
    annotationSpec?: google_cloud_datalabeling_v1beta1_annotation_spec_set_pb.AnnotationSpec.AsObject,
  }
}

export class ObjectTrackingFrame extends jspb.Message {
  getBoundingPoly(): BoundingPoly | undefined;
  setBoundingPoly(value?: BoundingPoly): void;
  hasBoundingPoly(): boolean;
  clearBoundingPoly(): void;

  getNormalizedBoundingPoly(): NormalizedBoundingPoly | undefined;
  setNormalizedBoundingPoly(value?: NormalizedBoundingPoly): void;
  hasNormalizedBoundingPoly(): boolean;
  clearNormalizedBoundingPoly(): void;

  getTimeOffset(): google_protobuf_duration_pb.Duration | undefined;
  setTimeOffset(value?: google_protobuf_duration_pb.Duration): void;
  hasTimeOffset(): boolean;
  clearTimeOffset(): void;

  getBoundedAreaCase(): ObjectTrackingFrame.BoundedAreaCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObjectTrackingFrame.AsObject;
  static toObject(includeInstance: boolean, msg: ObjectTrackingFrame): ObjectTrackingFrame.AsObject;
  static serializeBinaryToWriter(message: ObjectTrackingFrame, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObjectTrackingFrame;
  static deserializeBinaryFromReader(message: ObjectTrackingFrame, reader: jspb.BinaryReader): ObjectTrackingFrame;
}

export namespace ObjectTrackingFrame {
  export type AsObject = {
    boundingPoly?: BoundingPoly.AsObject,
    normalizedBoundingPoly?: NormalizedBoundingPoly.AsObject,
    timeOffset?: google_protobuf_duration_pb.Duration.AsObject,
  }

  export enum BoundedAreaCase { 
    BOUNDED_AREA_NOT_SET = 0,
    BOUNDING_POLY = 1,
    NORMALIZED_BOUNDING_POLY = 2,
  }
}

export class VideoObjectTrackingAnnotation extends jspb.Message {
  getAnnotationSpec(): google_cloud_datalabeling_v1beta1_annotation_spec_set_pb.AnnotationSpec | undefined;
  setAnnotationSpec(value?: google_cloud_datalabeling_v1beta1_annotation_spec_set_pb.AnnotationSpec): void;
  hasAnnotationSpec(): boolean;
  clearAnnotationSpec(): void;

  getTimeSegment(): TimeSegment | undefined;
  setTimeSegment(value?: TimeSegment): void;
  hasTimeSegment(): boolean;
  clearTimeSegment(): void;

  getObjectTrackingFramesList(): Array<ObjectTrackingFrame>;
  setObjectTrackingFramesList(value: Array<ObjectTrackingFrame>): void;
  clearObjectTrackingFramesList(): void;
  addObjectTrackingFrames(value?: ObjectTrackingFrame, index?: number): ObjectTrackingFrame;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VideoObjectTrackingAnnotation.AsObject;
  static toObject(includeInstance: boolean, msg: VideoObjectTrackingAnnotation): VideoObjectTrackingAnnotation.AsObject;
  static serializeBinaryToWriter(message: VideoObjectTrackingAnnotation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VideoObjectTrackingAnnotation;
  static deserializeBinaryFromReader(message: VideoObjectTrackingAnnotation, reader: jspb.BinaryReader): VideoObjectTrackingAnnotation;
}

export namespace VideoObjectTrackingAnnotation {
  export type AsObject = {
    annotationSpec?: google_cloud_datalabeling_v1beta1_annotation_spec_set_pb.AnnotationSpec.AsObject,
    timeSegment?: TimeSegment.AsObject,
    objectTrackingFramesList: Array<ObjectTrackingFrame.AsObject>,
  }
}

export class VideoEventAnnotation extends jspb.Message {
  getAnnotationSpec(): google_cloud_datalabeling_v1beta1_annotation_spec_set_pb.AnnotationSpec | undefined;
  setAnnotationSpec(value?: google_cloud_datalabeling_v1beta1_annotation_spec_set_pb.AnnotationSpec): void;
  hasAnnotationSpec(): boolean;
  clearAnnotationSpec(): void;

  getTimeSegment(): TimeSegment | undefined;
  setTimeSegment(value?: TimeSegment): void;
  hasTimeSegment(): boolean;
  clearTimeSegment(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VideoEventAnnotation.AsObject;
  static toObject(includeInstance: boolean, msg: VideoEventAnnotation): VideoEventAnnotation.AsObject;
  static serializeBinaryToWriter(message: VideoEventAnnotation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VideoEventAnnotation;
  static deserializeBinaryFromReader(message: VideoEventAnnotation, reader: jspb.BinaryReader): VideoEventAnnotation;
}

export namespace VideoEventAnnotation {
  export type AsObject = {
    annotationSpec?: google_cloud_datalabeling_v1beta1_annotation_spec_set_pb.AnnotationSpec.AsObject,
    timeSegment?: TimeSegment.AsObject,
  }
}

export class AnnotationMetadata extends jspb.Message {
  getOperatorMetadata(): OperatorMetadata | undefined;
  setOperatorMetadata(value?: OperatorMetadata): void;
  hasOperatorMetadata(): boolean;
  clearOperatorMetadata(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnnotationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: AnnotationMetadata): AnnotationMetadata.AsObject;
  static serializeBinaryToWriter(message: AnnotationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnnotationMetadata;
  static deserializeBinaryFromReader(message: AnnotationMetadata, reader: jspb.BinaryReader): AnnotationMetadata;
}

export namespace AnnotationMetadata {
  export type AsObject = {
    operatorMetadata?: OperatorMetadata.AsObject,
  }
}

export class OperatorMetadata extends jspb.Message {
  getScore(): number;
  setScore(value: number): void;

  getTotalVotes(): number;
  setTotalVotes(value: number): void;

  getLabelVotes(): number;
  setLabelVotes(value: number): void;

  getCommentsList(): Array<string>;
  setCommentsList(value: Array<string>): void;
  clearCommentsList(): void;
  addComments(value: string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OperatorMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: OperatorMetadata): OperatorMetadata.AsObject;
  static serializeBinaryToWriter(message: OperatorMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OperatorMetadata;
  static deserializeBinaryFromReader(message: OperatorMetadata, reader: jspb.BinaryReader): OperatorMetadata;
}

export namespace OperatorMetadata {
  export type AsObject = {
    score: number,
    totalVotes: number,
    labelVotes: number,
    commentsList: Array<string>,
  }
}

export enum AnnotationSource { 
  ANNOTATION_SOURCE_UNSPECIFIED = 0,
  OPERATOR = 3,
}
export enum AnnotationSentiment { 
  ANNOTATION_SENTIMENT_UNSPECIFIED = 0,
  NEGATIVE = 1,
  POSITIVE = 2,
}
export enum AnnotationType { 
  ANNOTATION_TYPE_UNSPECIFIED = 0,
  IMAGE_CLASSIFICATION_ANNOTATION = 1,
  IMAGE_BOUNDING_BOX_ANNOTATION = 2,
  IMAGE_ORIENTED_BOUNDING_BOX_ANNOTATION = 13,
  IMAGE_BOUNDING_POLY_ANNOTATION = 10,
  IMAGE_POLYLINE_ANNOTATION = 11,
  IMAGE_SEGMENTATION_ANNOTATION = 12,
  VIDEO_SHOTS_CLASSIFICATION_ANNOTATION = 3,
  VIDEO_OBJECT_TRACKING_ANNOTATION = 4,
  VIDEO_OBJECT_DETECTION_ANNOTATION = 5,
  VIDEO_EVENT_ANNOTATION = 6,
  TEXT_CLASSIFICATION_ANNOTATION = 8,
  TEXT_ENTITY_EXTRACTION_ANNOTATION = 9,
  GENERAL_CLASSIFICATION_ANNOTATION = 14,
}
