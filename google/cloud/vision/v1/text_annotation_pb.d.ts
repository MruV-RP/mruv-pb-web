import * as jspb from "google-protobuf"

import * as google_cloud_vision_v1_geometry_pb from '../../../../google/cloud/vision/v1/geometry_pb';
import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';

export class TextAnnotation extends jspb.Message {
  getPagesList(): Array<Page>;
  setPagesList(value: Array<Page>): void;
  clearPagesList(): void;
  addPages(value?: Page, index?: number): Page;

  getText(): string;
  setText(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TextAnnotation.AsObject;
  static toObject(includeInstance: boolean, msg: TextAnnotation): TextAnnotation.AsObject;
  static serializeBinaryToWriter(message: TextAnnotation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TextAnnotation;
  static deserializeBinaryFromReader(message: TextAnnotation, reader: jspb.BinaryReader): TextAnnotation;
}

export namespace TextAnnotation {
  export type AsObject = {
    pagesList: Array<Page.AsObject>,
    text: string,
  }

  export class DetectedLanguage extends jspb.Message {
    getLanguageCode(): string;
    setLanguageCode(value: string): void;

    getConfidence(): number;
    setConfidence(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DetectedLanguage.AsObject;
    static toObject(includeInstance: boolean, msg: DetectedLanguage): DetectedLanguage.AsObject;
    static serializeBinaryToWriter(message: DetectedLanguage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DetectedLanguage;
    static deserializeBinaryFromReader(message: DetectedLanguage, reader: jspb.BinaryReader): DetectedLanguage;
  }

  export namespace DetectedLanguage {
    export type AsObject = {
      languageCode: string,
      confidence: number,
    }
  }


  export class DetectedBreak extends jspb.Message {
    getType(): TextAnnotation.DetectedBreak.BreakType;
    setType(value: TextAnnotation.DetectedBreak.BreakType): void;

    getIsPrefix(): boolean;
    setIsPrefix(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DetectedBreak.AsObject;
    static toObject(includeInstance: boolean, msg: DetectedBreak): DetectedBreak.AsObject;
    static serializeBinaryToWriter(message: DetectedBreak, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DetectedBreak;
    static deserializeBinaryFromReader(message: DetectedBreak, reader: jspb.BinaryReader): DetectedBreak;
  }

  export namespace DetectedBreak {
    export type AsObject = {
      type: TextAnnotation.DetectedBreak.BreakType,
      isPrefix: boolean,
    }

    export enum BreakType { 
      UNKNOWN = 0,
      SPACE = 1,
      SURE_SPACE = 2,
      EOL_SURE_SPACE = 3,
      HYPHEN = 4,
      LINE_BREAK = 5,
    }
  }


  export class TextProperty extends jspb.Message {
    getDetectedLanguagesList(): Array<TextAnnotation.DetectedLanguage>;
    setDetectedLanguagesList(value: Array<TextAnnotation.DetectedLanguage>): void;
    clearDetectedLanguagesList(): void;
    addDetectedLanguages(value?: TextAnnotation.DetectedLanguage, index?: number): TextAnnotation.DetectedLanguage;

    getDetectedBreak(): TextAnnotation.DetectedBreak | undefined;
    setDetectedBreak(value?: TextAnnotation.DetectedBreak): void;
    hasDetectedBreak(): boolean;
    clearDetectedBreak(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TextProperty.AsObject;
    static toObject(includeInstance: boolean, msg: TextProperty): TextProperty.AsObject;
    static serializeBinaryToWriter(message: TextProperty, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TextProperty;
    static deserializeBinaryFromReader(message: TextProperty, reader: jspb.BinaryReader): TextProperty;
  }

  export namespace TextProperty {
    export type AsObject = {
      detectedLanguagesList: Array<TextAnnotation.DetectedLanguage.AsObject>,
      detectedBreak?: TextAnnotation.DetectedBreak.AsObject,
    }
  }

}

export class Page extends jspb.Message {
  getProperty(): TextAnnotation.TextProperty | undefined;
  setProperty(value?: TextAnnotation.TextProperty): void;
  hasProperty(): boolean;
  clearProperty(): void;

  getWidth(): number;
  setWidth(value: number): void;

  getHeight(): number;
  setHeight(value: number): void;

  getBlocksList(): Array<Block>;
  setBlocksList(value: Array<Block>): void;
  clearBlocksList(): void;
  addBlocks(value?: Block, index?: number): Block;

  getConfidence(): number;
  setConfidence(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Page.AsObject;
  static toObject(includeInstance: boolean, msg: Page): Page.AsObject;
  static serializeBinaryToWriter(message: Page, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Page;
  static deserializeBinaryFromReader(message: Page, reader: jspb.BinaryReader): Page;
}

export namespace Page {
  export type AsObject = {
    property?: TextAnnotation.TextProperty.AsObject,
    width: number,
    height: number,
    blocksList: Array<Block.AsObject>,
    confidence: number,
  }
}

export class Block extends jspb.Message {
  getProperty(): TextAnnotation.TextProperty | undefined;
  setProperty(value?: TextAnnotation.TextProperty): void;
  hasProperty(): boolean;
  clearProperty(): void;

  getBoundingBox(): google_cloud_vision_v1_geometry_pb.BoundingPoly | undefined;
  setBoundingBox(value?: google_cloud_vision_v1_geometry_pb.BoundingPoly): void;
  hasBoundingBox(): boolean;
  clearBoundingBox(): void;

  getParagraphsList(): Array<Paragraph>;
  setParagraphsList(value: Array<Paragraph>): void;
  clearParagraphsList(): void;
  addParagraphs(value?: Paragraph, index?: number): Paragraph;

  getBlockType(): Block.BlockType;
  setBlockType(value: Block.BlockType): void;

  getConfidence(): number;
  setConfidence(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Block.AsObject;
  static toObject(includeInstance: boolean, msg: Block): Block.AsObject;
  static serializeBinaryToWriter(message: Block, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Block;
  static deserializeBinaryFromReader(message: Block, reader: jspb.BinaryReader): Block;
}

export namespace Block {
  export type AsObject = {
    property?: TextAnnotation.TextProperty.AsObject,
    boundingBox?: google_cloud_vision_v1_geometry_pb.BoundingPoly.AsObject,
    paragraphsList: Array<Paragraph.AsObject>,
    blockType: Block.BlockType,
    confidence: number,
  }

  export enum BlockType { 
    UNKNOWN = 0,
    TEXT = 1,
    TABLE = 2,
    PICTURE = 3,
    RULER = 4,
    BARCODE = 5,
  }
}

export class Paragraph extends jspb.Message {
  getProperty(): TextAnnotation.TextProperty | undefined;
  setProperty(value?: TextAnnotation.TextProperty): void;
  hasProperty(): boolean;
  clearProperty(): void;

  getBoundingBox(): google_cloud_vision_v1_geometry_pb.BoundingPoly | undefined;
  setBoundingBox(value?: google_cloud_vision_v1_geometry_pb.BoundingPoly): void;
  hasBoundingBox(): boolean;
  clearBoundingBox(): void;

  getWordsList(): Array<Word>;
  setWordsList(value: Array<Word>): void;
  clearWordsList(): void;
  addWords(value?: Word, index?: number): Word;

  getConfidence(): number;
  setConfidence(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Paragraph.AsObject;
  static toObject(includeInstance: boolean, msg: Paragraph): Paragraph.AsObject;
  static serializeBinaryToWriter(message: Paragraph, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Paragraph;
  static deserializeBinaryFromReader(message: Paragraph, reader: jspb.BinaryReader): Paragraph;
}

export namespace Paragraph {
  export type AsObject = {
    property?: TextAnnotation.TextProperty.AsObject,
    boundingBox?: google_cloud_vision_v1_geometry_pb.BoundingPoly.AsObject,
    wordsList: Array<Word.AsObject>,
    confidence: number,
  }
}

export class Word extends jspb.Message {
  getProperty(): TextAnnotation.TextProperty | undefined;
  setProperty(value?: TextAnnotation.TextProperty): void;
  hasProperty(): boolean;
  clearProperty(): void;

  getBoundingBox(): google_cloud_vision_v1_geometry_pb.BoundingPoly | undefined;
  setBoundingBox(value?: google_cloud_vision_v1_geometry_pb.BoundingPoly): void;
  hasBoundingBox(): boolean;
  clearBoundingBox(): void;

  getSymbolsList(): Array<Symbol>;
  setSymbolsList(value: Array<Symbol>): void;
  clearSymbolsList(): void;
  addSymbols(value?: Symbol, index?: number): Symbol;

  getConfidence(): number;
  setConfidence(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Word.AsObject;
  static toObject(includeInstance: boolean, msg: Word): Word.AsObject;
  static serializeBinaryToWriter(message: Word, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Word;
  static deserializeBinaryFromReader(message: Word, reader: jspb.BinaryReader): Word;
}

export namespace Word {
  export type AsObject = {
    property?: TextAnnotation.TextProperty.AsObject,
    boundingBox?: google_cloud_vision_v1_geometry_pb.BoundingPoly.AsObject,
    symbolsList: Array<Symbol.AsObject>,
    confidence: number,
  }
}

export class Symbol extends jspb.Message {
  getProperty(): TextAnnotation.TextProperty | undefined;
  setProperty(value?: TextAnnotation.TextProperty): void;
  hasProperty(): boolean;
  clearProperty(): void;

  getBoundingBox(): google_cloud_vision_v1_geometry_pb.BoundingPoly | undefined;
  setBoundingBox(value?: google_cloud_vision_v1_geometry_pb.BoundingPoly): void;
  hasBoundingBox(): boolean;
  clearBoundingBox(): void;

  getText(): string;
  setText(value: string): void;

  getConfidence(): number;
  setConfidence(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Symbol.AsObject;
  static toObject(includeInstance: boolean, msg: Symbol): Symbol.AsObject;
  static serializeBinaryToWriter(message: Symbol, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Symbol;
  static deserializeBinaryFromReader(message: Symbol, reader: jspb.BinaryReader): Symbol;
}

export namespace Symbol {
  export type AsObject = {
    property?: TextAnnotation.TextProperty.AsObject,
    boundingBox?: google_cloud_vision_v1_geometry_pb.BoundingPoly.AsObject,
    text: string,
    confidence: number,
  }
}

