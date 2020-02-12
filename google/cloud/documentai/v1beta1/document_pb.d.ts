import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_cloud_documentai_v1beta1_geometry_pb from '../../../../google/cloud/documentai/v1beta1/geometry_pb';
import * as google_rpc_status_pb from '../../../../google/rpc/status_pb';
import * as google_type_color_pb from '../../../../google/type/color_pb';

export class Document extends jspb.Message {
  getUri(): string;
  setUri(value: string): void;

  getContent(): Uint8Array | string;
  getContent_asU8(): Uint8Array;
  getContent_asB64(): string;
  setContent(value: Uint8Array | string): void;

  getMimeType(): string;
  setMimeType(value: string): void;

  getText(): string;
  setText(value: string): void;

  getTextStylesList(): Array<Document.Style>;
  setTextStylesList(value: Array<Document.Style>): void;
  clearTextStylesList(): void;
  addTextStyles(value?: Document.Style, index?: number): Document.Style;

  getPagesList(): Array<Document.Page>;
  setPagesList(value: Array<Document.Page>): void;
  clearPagesList(): void;
  addPages(value?: Document.Page, index?: number): Document.Page;

  getEntitiesList(): Array<Document.Entity>;
  setEntitiesList(value: Array<Document.Entity>): void;
  clearEntitiesList(): void;
  addEntities(value?: Document.Entity, index?: number): Document.Entity;

  getEntityRelationsList(): Array<Document.EntityRelation>;
  setEntityRelationsList(value: Array<Document.EntityRelation>): void;
  clearEntityRelationsList(): void;
  addEntityRelations(value?: Document.EntityRelation, index?: number): Document.EntityRelation;

  getShardInfo(): Document.ShardInfo | undefined;
  setShardInfo(value?: Document.ShardInfo): void;
  hasShardInfo(): boolean;
  clearShardInfo(): void;

  getError(): google_rpc_status_pb.Status | undefined;
  setError(value?: google_rpc_status_pb.Status): void;
  hasError(): boolean;
  clearError(): void;

  getSourceCase(): Document.SourceCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Document.AsObject;
  static toObject(includeInstance: boolean, msg: Document): Document.AsObject;
  static serializeBinaryToWriter(message: Document, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Document;
  static deserializeBinaryFromReader(message: Document, reader: jspb.BinaryReader): Document;
}

export namespace Document {
  export type AsObject = {
    uri: string,
    content: Uint8Array | string,
    mimeType: string,
    text: string,
    textStylesList: Array<Document.Style.AsObject>,
    pagesList: Array<Document.Page.AsObject>,
    entitiesList: Array<Document.Entity.AsObject>,
    entityRelationsList: Array<Document.EntityRelation.AsObject>,
    shardInfo?: Document.ShardInfo.AsObject,
    error?: google_rpc_status_pb.Status.AsObject,
  }

  export class ShardInfo extends jspb.Message {
    getShardIndex(): number;
    setShardIndex(value: number): void;

    getShardCount(): number;
    setShardCount(value: number): void;

    getTextOffset(): number;
    setTextOffset(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ShardInfo.AsObject;
    static toObject(includeInstance: boolean, msg: ShardInfo): ShardInfo.AsObject;
    static serializeBinaryToWriter(message: ShardInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ShardInfo;
    static deserializeBinaryFromReader(message: ShardInfo, reader: jspb.BinaryReader): ShardInfo;
  }

  export namespace ShardInfo {
    export type AsObject = {
      shardIndex: number,
      shardCount: number,
      textOffset: number,
    }
  }


  export class Style extends jspb.Message {
    getTextAnchor(): Document.TextAnchor | undefined;
    setTextAnchor(value?: Document.TextAnchor): void;
    hasTextAnchor(): boolean;
    clearTextAnchor(): void;

    getColor(): google_type_color_pb.Color | undefined;
    setColor(value?: google_type_color_pb.Color): void;
    hasColor(): boolean;
    clearColor(): void;

    getBackgroundColor(): google_type_color_pb.Color | undefined;
    setBackgroundColor(value?: google_type_color_pb.Color): void;
    hasBackgroundColor(): boolean;
    clearBackgroundColor(): void;

    getFontWeight(): string;
    setFontWeight(value: string): void;

    getTextStyle(): string;
    setTextStyle(value: string): void;

    getTextDecoration(): string;
    setTextDecoration(value: string): void;

    getFontSize(): Document.Style.FontSize | undefined;
    setFontSize(value?: Document.Style.FontSize): void;
    hasFontSize(): boolean;
    clearFontSize(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Style.AsObject;
    static toObject(includeInstance: boolean, msg: Style): Style.AsObject;
    static serializeBinaryToWriter(message: Style, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Style;
    static deserializeBinaryFromReader(message: Style, reader: jspb.BinaryReader): Style;
  }

  export namespace Style {
    export type AsObject = {
      textAnchor?: Document.TextAnchor.AsObject,
      color?: google_type_color_pb.Color.AsObject,
      backgroundColor?: google_type_color_pb.Color.AsObject,
      fontWeight: string,
      textStyle: string,
      textDecoration: string,
      fontSize?: Document.Style.FontSize.AsObject,
    }

    export class FontSize extends jspb.Message {
      getSize(): number;
      setSize(value: number): void;

      getUnit(): string;
      setUnit(value: string): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): FontSize.AsObject;
      static toObject(includeInstance: boolean, msg: FontSize): FontSize.AsObject;
      static serializeBinaryToWriter(message: FontSize, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): FontSize;
      static deserializeBinaryFromReader(message: FontSize, reader: jspb.BinaryReader): FontSize;
    }

    export namespace FontSize {
      export type AsObject = {
        size: number,
        unit: string,
      }
    }

  }


  export class Page extends jspb.Message {
    getPageNumber(): number;
    setPageNumber(value: number): void;

    getDimension(): Document.Page.Dimension | undefined;
    setDimension(value?: Document.Page.Dimension): void;
    hasDimension(): boolean;
    clearDimension(): void;

    getLayout(): Document.Page.Layout | undefined;
    setLayout(value?: Document.Page.Layout): void;
    hasLayout(): boolean;
    clearLayout(): void;

    getDetectedLanguagesList(): Array<Document.Page.DetectedLanguage>;
    setDetectedLanguagesList(value: Array<Document.Page.DetectedLanguage>): void;
    clearDetectedLanguagesList(): void;
    addDetectedLanguages(value?: Document.Page.DetectedLanguage, index?: number): Document.Page.DetectedLanguage;

    getBlocksList(): Array<Document.Page.Block>;
    setBlocksList(value: Array<Document.Page.Block>): void;
    clearBlocksList(): void;
    addBlocks(value?: Document.Page.Block, index?: number): Document.Page.Block;

    getParagraphsList(): Array<Document.Page.Paragraph>;
    setParagraphsList(value: Array<Document.Page.Paragraph>): void;
    clearParagraphsList(): void;
    addParagraphs(value?: Document.Page.Paragraph, index?: number): Document.Page.Paragraph;

    getLinesList(): Array<Document.Page.Line>;
    setLinesList(value: Array<Document.Page.Line>): void;
    clearLinesList(): void;
    addLines(value?: Document.Page.Line, index?: number): Document.Page.Line;

    getTokensList(): Array<Document.Page.Token>;
    setTokensList(value: Array<Document.Page.Token>): void;
    clearTokensList(): void;
    addTokens(value?: Document.Page.Token, index?: number): Document.Page.Token;

    getVisualElementsList(): Array<Document.Page.VisualElement>;
    setVisualElementsList(value: Array<Document.Page.VisualElement>): void;
    clearVisualElementsList(): void;
    addVisualElements(value?: Document.Page.VisualElement, index?: number): Document.Page.VisualElement;

    getTablesList(): Array<Document.Page.Table>;
    setTablesList(value: Array<Document.Page.Table>): void;
    clearTablesList(): void;
    addTables(value?: Document.Page.Table, index?: number): Document.Page.Table;

    getFormFieldsList(): Array<Document.Page.FormField>;
    setFormFieldsList(value: Array<Document.Page.FormField>): void;
    clearFormFieldsList(): void;
    addFormFields(value?: Document.Page.FormField, index?: number): Document.Page.FormField;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Page.AsObject;
    static toObject(includeInstance: boolean, msg: Page): Page.AsObject;
    static serializeBinaryToWriter(message: Page, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Page;
    static deserializeBinaryFromReader(message: Page, reader: jspb.BinaryReader): Page;
  }

  export namespace Page {
    export type AsObject = {
      pageNumber: number,
      dimension?: Document.Page.Dimension.AsObject,
      layout?: Document.Page.Layout.AsObject,
      detectedLanguagesList: Array<Document.Page.DetectedLanguage.AsObject>,
      blocksList: Array<Document.Page.Block.AsObject>,
      paragraphsList: Array<Document.Page.Paragraph.AsObject>,
      linesList: Array<Document.Page.Line.AsObject>,
      tokensList: Array<Document.Page.Token.AsObject>,
      visualElementsList: Array<Document.Page.VisualElement.AsObject>,
      tablesList: Array<Document.Page.Table.AsObject>,
      formFieldsList: Array<Document.Page.FormField.AsObject>,
    }

    export class Dimension extends jspb.Message {
      getWidth(): number;
      setWidth(value: number): void;

      getHeight(): number;
      setHeight(value: number): void;

      getUnit(): string;
      setUnit(value: string): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Dimension.AsObject;
      static toObject(includeInstance: boolean, msg: Dimension): Dimension.AsObject;
      static serializeBinaryToWriter(message: Dimension, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Dimension;
      static deserializeBinaryFromReader(message: Dimension, reader: jspb.BinaryReader): Dimension;
    }

    export namespace Dimension {
      export type AsObject = {
        width: number,
        height: number,
        unit: string,
      }
    }


    export class Layout extends jspb.Message {
      getTextAnchor(): Document.TextAnchor | undefined;
      setTextAnchor(value?: Document.TextAnchor): void;
      hasTextAnchor(): boolean;
      clearTextAnchor(): void;

      getConfidence(): number;
      setConfidence(value: number): void;

      getBoundingPoly(): google_cloud_documentai_v1beta1_geometry_pb.BoundingPoly | undefined;
      setBoundingPoly(value?: google_cloud_documentai_v1beta1_geometry_pb.BoundingPoly): void;
      hasBoundingPoly(): boolean;
      clearBoundingPoly(): void;

      getOrientation(): Document.Page.Layout.Orientation;
      setOrientation(value: Document.Page.Layout.Orientation): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Layout.AsObject;
      static toObject(includeInstance: boolean, msg: Layout): Layout.AsObject;
      static serializeBinaryToWriter(message: Layout, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Layout;
      static deserializeBinaryFromReader(message: Layout, reader: jspb.BinaryReader): Layout;
    }

    export namespace Layout {
      export type AsObject = {
        textAnchor?: Document.TextAnchor.AsObject,
        confidence: number,
        boundingPoly?: google_cloud_documentai_v1beta1_geometry_pb.BoundingPoly.AsObject,
        orientation: Document.Page.Layout.Orientation,
      }

      export enum Orientation { 
        ORIENTATION_UNSPECIFIED = 0,
        PAGE_UP = 1,
        PAGE_RIGHT = 2,
        PAGE_DOWN = 3,
        PAGE_LEFT = 4,
      }
    }


    export class Block extends jspb.Message {
      getLayout(): Document.Page.Layout | undefined;
      setLayout(value?: Document.Page.Layout): void;
      hasLayout(): boolean;
      clearLayout(): void;

      getDetectedLanguagesList(): Array<Document.Page.DetectedLanguage>;
      setDetectedLanguagesList(value: Array<Document.Page.DetectedLanguage>): void;
      clearDetectedLanguagesList(): void;
      addDetectedLanguages(value?: Document.Page.DetectedLanguage, index?: number): Document.Page.DetectedLanguage;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Block.AsObject;
      static toObject(includeInstance: boolean, msg: Block): Block.AsObject;
      static serializeBinaryToWriter(message: Block, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Block;
      static deserializeBinaryFromReader(message: Block, reader: jspb.BinaryReader): Block;
    }

    export namespace Block {
      export type AsObject = {
        layout?: Document.Page.Layout.AsObject,
        detectedLanguagesList: Array<Document.Page.DetectedLanguage.AsObject>,
      }
    }


    export class Paragraph extends jspb.Message {
      getLayout(): Document.Page.Layout | undefined;
      setLayout(value?: Document.Page.Layout): void;
      hasLayout(): boolean;
      clearLayout(): void;

      getDetectedLanguagesList(): Array<Document.Page.DetectedLanguage>;
      setDetectedLanguagesList(value: Array<Document.Page.DetectedLanguage>): void;
      clearDetectedLanguagesList(): void;
      addDetectedLanguages(value?: Document.Page.DetectedLanguage, index?: number): Document.Page.DetectedLanguage;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Paragraph.AsObject;
      static toObject(includeInstance: boolean, msg: Paragraph): Paragraph.AsObject;
      static serializeBinaryToWriter(message: Paragraph, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Paragraph;
      static deserializeBinaryFromReader(message: Paragraph, reader: jspb.BinaryReader): Paragraph;
    }

    export namespace Paragraph {
      export type AsObject = {
        layout?: Document.Page.Layout.AsObject,
        detectedLanguagesList: Array<Document.Page.DetectedLanguage.AsObject>,
      }
    }


    export class Line extends jspb.Message {
      getLayout(): Document.Page.Layout | undefined;
      setLayout(value?: Document.Page.Layout): void;
      hasLayout(): boolean;
      clearLayout(): void;

      getDetectedLanguagesList(): Array<Document.Page.DetectedLanguage>;
      setDetectedLanguagesList(value: Array<Document.Page.DetectedLanguage>): void;
      clearDetectedLanguagesList(): void;
      addDetectedLanguages(value?: Document.Page.DetectedLanguage, index?: number): Document.Page.DetectedLanguage;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Line.AsObject;
      static toObject(includeInstance: boolean, msg: Line): Line.AsObject;
      static serializeBinaryToWriter(message: Line, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Line;
      static deserializeBinaryFromReader(message: Line, reader: jspb.BinaryReader): Line;
    }

    export namespace Line {
      export type AsObject = {
        layout?: Document.Page.Layout.AsObject,
        detectedLanguagesList: Array<Document.Page.DetectedLanguage.AsObject>,
      }
    }


    export class Token extends jspb.Message {
      getLayout(): Document.Page.Layout | undefined;
      setLayout(value?: Document.Page.Layout): void;
      hasLayout(): boolean;
      clearLayout(): void;

      getDetectedBreak(): Document.Page.Token.DetectedBreak | undefined;
      setDetectedBreak(value?: Document.Page.Token.DetectedBreak): void;
      hasDetectedBreak(): boolean;
      clearDetectedBreak(): void;

      getDetectedLanguagesList(): Array<Document.Page.DetectedLanguage>;
      setDetectedLanguagesList(value: Array<Document.Page.DetectedLanguage>): void;
      clearDetectedLanguagesList(): void;
      addDetectedLanguages(value?: Document.Page.DetectedLanguage, index?: number): Document.Page.DetectedLanguage;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Token.AsObject;
      static toObject(includeInstance: boolean, msg: Token): Token.AsObject;
      static serializeBinaryToWriter(message: Token, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Token;
      static deserializeBinaryFromReader(message: Token, reader: jspb.BinaryReader): Token;
    }

    export namespace Token {
      export type AsObject = {
        layout?: Document.Page.Layout.AsObject,
        detectedBreak?: Document.Page.Token.DetectedBreak.AsObject,
        detectedLanguagesList: Array<Document.Page.DetectedLanguage.AsObject>,
      }

      export class DetectedBreak extends jspb.Message {
        getType(): Document.Page.Token.DetectedBreak.Type;
        setType(value: Document.Page.Token.DetectedBreak.Type): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): DetectedBreak.AsObject;
        static toObject(includeInstance: boolean, msg: DetectedBreak): DetectedBreak.AsObject;
        static serializeBinaryToWriter(message: DetectedBreak, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): DetectedBreak;
        static deserializeBinaryFromReader(message: DetectedBreak, reader: jspb.BinaryReader): DetectedBreak;
      }

      export namespace DetectedBreak {
        export type AsObject = {
          type: Document.Page.Token.DetectedBreak.Type,
        }

        export enum Type { 
          TYPE_UNSPECIFIED = 0,
          SPACE = 1,
          WIDE_SPACE = 2,
          HYPHEN = 3,
        }
      }

    }


    export class VisualElement extends jspb.Message {
      getLayout(): Document.Page.Layout | undefined;
      setLayout(value?: Document.Page.Layout): void;
      hasLayout(): boolean;
      clearLayout(): void;

      getType(): string;
      setType(value: string): void;

      getDetectedLanguagesList(): Array<Document.Page.DetectedLanguage>;
      setDetectedLanguagesList(value: Array<Document.Page.DetectedLanguage>): void;
      clearDetectedLanguagesList(): void;
      addDetectedLanguages(value?: Document.Page.DetectedLanguage, index?: number): Document.Page.DetectedLanguage;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): VisualElement.AsObject;
      static toObject(includeInstance: boolean, msg: VisualElement): VisualElement.AsObject;
      static serializeBinaryToWriter(message: VisualElement, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): VisualElement;
      static deserializeBinaryFromReader(message: VisualElement, reader: jspb.BinaryReader): VisualElement;
    }

    export namespace VisualElement {
      export type AsObject = {
        layout?: Document.Page.Layout.AsObject,
        type: string,
        detectedLanguagesList: Array<Document.Page.DetectedLanguage.AsObject>,
      }
    }


    export class Table extends jspb.Message {
      getLayout(): Document.Page.Layout | undefined;
      setLayout(value?: Document.Page.Layout): void;
      hasLayout(): boolean;
      clearLayout(): void;

      getHeaderRowsList(): Array<Document.Page.Table.TableRow>;
      setHeaderRowsList(value: Array<Document.Page.Table.TableRow>): void;
      clearHeaderRowsList(): void;
      addHeaderRows(value?: Document.Page.Table.TableRow, index?: number): Document.Page.Table.TableRow;

      getBodyRowsList(): Array<Document.Page.Table.TableRow>;
      setBodyRowsList(value: Array<Document.Page.Table.TableRow>): void;
      clearBodyRowsList(): void;
      addBodyRows(value?: Document.Page.Table.TableRow, index?: number): Document.Page.Table.TableRow;

      getDetectedLanguagesList(): Array<Document.Page.DetectedLanguage>;
      setDetectedLanguagesList(value: Array<Document.Page.DetectedLanguage>): void;
      clearDetectedLanguagesList(): void;
      addDetectedLanguages(value?: Document.Page.DetectedLanguage, index?: number): Document.Page.DetectedLanguage;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Table.AsObject;
      static toObject(includeInstance: boolean, msg: Table): Table.AsObject;
      static serializeBinaryToWriter(message: Table, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Table;
      static deserializeBinaryFromReader(message: Table, reader: jspb.BinaryReader): Table;
    }

    export namespace Table {
      export type AsObject = {
        layout?: Document.Page.Layout.AsObject,
        headerRowsList: Array<Document.Page.Table.TableRow.AsObject>,
        bodyRowsList: Array<Document.Page.Table.TableRow.AsObject>,
        detectedLanguagesList: Array<Document.Page.DetectedLanguage.AsObject>,
      }

      export class TableRow extends jspb.Message {
        getCellsList(): Array<Document.Page.Table.TableCell>;
        setCellsList(value: Array<Document.Page.Table.TableCell>): void;
        clearCellsList(): void;
        addCells(value?: Document.Page.Table.TableCell, index?: number): Document.Page.Table.TableCell;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): TableRow.AsObject;
        static toObject(includeInstance: boolean, msg: TableRow): TableRow.AsObject;
        static serializeBinaryToWriter(message: TableRow, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): TableRow;
        static deserializeBinaryFromReader(message: TableRow, reader: jspb.BinaryReader): TableRow;
      }

      export namespace TableRow {
        export type AsObject = {
          cellsList: Array<Document.Page.Table.TableCell.AsObject>,
        }
      }


      export class TableCell extends jspb.Message {
        getLayout(): Document.Page.Layout | undefined;
        setLayout(value?: Document.Page.Layout): void;
        hasLayout(): boolean;
        clearLayout(): void;

        getRowSpan(): number;
        setRowSpan(value: number): void;

        getColSpan(): number;
        setColSpan(value: number): void;

        getDetectedLanguagesList(): Array<Document.Page.DetectedLanguage>;
        setDetectedLanguagesList(value: Array<Document.Page.DetectedLanguage>): void;
        clearDetectedLanguagesList(): void;
        addDetectedLanguages(value?: Document.Page.DetectedLanguage, index?: number): Document.Page.DetectedLanguage;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): TableCell.AsObject;
        static toObject(includeInstance: boolean, msg: TableCell): TableCell.AsObject;
        static serializeBinaryToWriter(message: TableCell, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): TableCell;
        static deserializeBinaryFromReader(message: TableCell, reader: jspb.BinaryReader): TableCell;
      }

      export namespace TableCell {
        export type AsObject = {
          layout?: Document.Page.Layout.AsObject,
          rowSpan: number,
          colSpan: number,
          detectedLanguagesList: Array<Document.Page.DetectedLanguage.AsObject>,
        }
      }

    }


    export class FormField extends jspb.Message {
      getFieldName(): Document.Page.Layout | undefined;
      setFieldName(value?: Document.Page.Layout): void;
      hasFieldName(): boolean;
      clearFieldName(): void;

      getFieldValue(): Document.Page.Layout | undefined;
      setFieldValue(value?: Document.Page.Layout): void;
      hasFieldValue(): boolean;
      clearFieldValue(): void;

      getNameDetectedLanguagesList(): Array<Document.Page.DetectedLanguage>;
      setNameDetectedLanguagesList(value: Array<Document.Page.DetectedLanguage>): void;
      clearNameDetectedLanguagesList(): void;
      addNameDetectedLanguages(value?: Document.Page.DetectedLanguage, index?: number): Document.Page.DetectedLanguage;

      getValueDetectedLanguagesList(): Array<Document.Page.DetectedLanguage>;
      setValueDetectedLanguagesList(value: Array<Document.Page.DetectedLanguage>): void;
      clearValueDetectedLanguagesList(): void;
      addValueDetectedLanguages(value?: Document.Page.DetectedLanguage, index?: number): Document.Page.DetectedLanguage;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): FormField.AsObject;
      static toObject(includeInstance: boolean, msg: FormField): FormField.AsObject;
      static serializeBinaryToWriter(message: FormField, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): FormField;
      static deserializeBinaryFromReader(message: FormField, reader: jspb.BinaryReader): FormField;
    }

    export namespace FormField {
      export type AsObject = {
        fieldName?: Document.Page.Layout.AsObject,
        fieldValue?: Document.Page.Layout.AsObject,
        nameDetectedLanguagesList: Array<Document.Page.DetectedLanguage.AsObject>,
        valueDetectedLanguagesList: Array<Document.Page.DetectedLanguage.AsObject>,
      }
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

  }


  export class Entity extends jspb.Message {
    getTextAnchor(): Document.TextAnchor | undefined;
    setTextAnchor(value?: Document.TextAnchor): void;
    hasTextAnchor(): boolean;
    clearTextAnchor(): void;

    getType(): string;
    setType(value: string): void;

    getMentionText(): string;
    setMentionText(value: string): void;

    getMentionId(): string;
    setMentionId(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Entity.AsObject;
    static toObject(includeInstance: boolean, msg: Entity): Entity.AsObject;
    static serializeBinaryToWriter(message: Entity, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Entity;
    static deserializeBinaryFromReader(message: Entity, reader: jspb.BinaryReader): Entity;
  }

  export namespace Entity {
    export type AsObject = {
      textAnchor?: Document.TextAnchor.AsObject,
      type: string,
      mentionText: string,
      mentionId: string,
    }
  }


  export class EntityRelation extends jspb.Message {
    getSubjectId(): string;
    setSubjectId(value: string): void;

    getObjectId(): string;
    setObjectId(value: string): void;

    getRelation(): string;
    setRelation(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EntityRelation.AsObject;
    static toObject(includeInstance: boolean, msg: EntityRelation): EntityRelation.AsObject;
    static serializeBinaryToWriter(message: EntityRelation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EntityRelation;
    static deserializeBinaryFromReader(message: EntityRelation, reader: jspb.BinaryReader): EntityRelation;
  }

  export namespace EntityRelation {
    export type AsObject = {
      subjectId: string,
      objectId: string,
      relation: string,
    }
  }


  export class TextAnchor extends jspb.Message {
    getTextSegmentsList(): Array<Document.TextAnchor.TextSegment>;
    setTextSegmentsList(value: Array<Document.TextAnchor.TextSegment>): void;
    clearTextSegmentsList(): void;
    addTextSegments(value?: Document.TextAnchor.TextSegment, index?: number): Document.TextAnchor.TextSegment;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TextAnchor.AsObject;
    static toObject(includeInstance: boolean, msg: TextAnchor): TextAnchor.AsObject;
    static serializeBinaryToWriter(message: TextAnchor, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TextAnchor;
    static deserializeBinaryFromReader(message: TextAnchor, reader: jspb.BinaryReader): TextAnchor;
  }

  export namespace TextAnchor {
    export type AsObject = {
      textSegmentsList: Array<Document.TextAnchor.TextSegment.AsObject>,
    }

    export class TextSegment extends jspb.Message {
      getStartIndex(): number;
      setStartIndex(value: number): void;

      getEndIndex(): number;
      setEndIndex(value: number): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): TextSegment.AsObject;
      static toObject(includeInstance: boolean, msg: TextSegment): TextSegment.AsObject;
      static serializeBinaryToWriter(message: TextSegment, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): TextSegment;
      static deserializeBinaryFromReader(message: TextSegment, reader: jspb.BinaryReader): TextSegment;
    }

    export namespace TextSegment {
      export type AsObject = {
        startIndex: number,
        endIndex: number,
      }
    }

  }


  export enum SourceCase { 
    SOURCE_NOT_SET = 0,
    URI = 1,
    CONTENT = 2,
  }
}

