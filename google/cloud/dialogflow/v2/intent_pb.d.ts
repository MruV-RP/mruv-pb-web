import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';
import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb';
import * as google_api_resource_pb from '../../../../google/api/resource_pb';
import * as google_cloud_dialogflow_v2_audio_config_pb from '../../../../google/cloud/dialogflow/v2/audio_config_pb';
import * as google_cloud_dialogflow_v2_context_pb from '../../../../google/cloud/dialogflow/v2/context_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';

export class Intent extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getWebhookState(): Intent.WebhookState;
  setWebhookState(value: Intent.WebhookState): void;

  getPriority(): number;
  setPriority(value: number): void;

  getIsFallback(): boolean;
  setIsFallback(value: boolean): void;

  getMlDisabled(): boolean;
  setMlDisabled(value: boolean): void;

  getInputContextNamesList(): Array<string>;
  setInputContextNamesList(value: Array<string>): void;
  clearInputContextNamesList(): void;
  addInputContextNames(value: string, index?: number): void;

  getEventsList(): Array<string>;
  setEventsList(value: Array<string>): void;
  clearEventsList(): void;
  addEvents(value: string, index?: number): void;

  getTrainingPhrasesList(): Array<Intent.TrainingPhrase>;
  setTrainingPhrasesList(value: Array<Intent.TrainingPhrase>): void;
  clearTrainingPhrasesList(): void;
  addTrainingPhrases(value?: Intent.TrainingPhrase, index?: number): Intent.TrainingPhrase;

  getAction(): string;
  setAction(value: string): void;

  getOutputContextsList(): Array<google_cloud_dialogflow_v2_context_pb.Context>;
  setOutputContextsList(value: Array<google_cloud_dialogflow_v2_context_pb.Context>): void;
  clearOutputContextsList(): void;
  addOutputContexts(value?: google_cloud_dialogflow_v2_context_pb.Context, index?: number): google_cloud_dialogflow_v2_context_pb.Context;

  getResetContexts(): boolean;
  setResetContexts(value: boolean): void;

  getParametersList(): Array<Intent.Parameter>;
  setParametersList(value: Array<Intent.Parameter>): void;
  clearParametersList(): void;
  addParameters(value?: Intent.Parameter, index?: number): Intent.Parameter;

  getMessagesList(): Array<Intent.Message>;
  setMessagesList(value: Array<Intent.Message>): void;
  clearMessagesList(): void;
  addMessages(value?: Intent.Message, index?: number): Intent.Message;

  getDefaultResponsePlatformsList(): Array<Intent.Message.Platform>;
  setDefaultResponsePlatformsList(value: Array<Intent.Message.Platform>): void;
  clearDefaultResponsePlatformsList(): void;
  addDefaultResponsePlatforms(value: Intent.Message.Platform, index?: number): void;

  getRootFollowupIntentName(): string;
  setRootFollowupIntentName(value: string): void;

  getParentFollowupIntentName(): string;
  setParentFollowupIntentName(value: string): void;

  getFollowupIntentInfoList(): Array<Intent.FollowupIntentInfo>;
  setFollowupIntentInfoList(value: Array<Intent.FollowupIntentInfo>): void;
  clearFollowupIntentInfoList(): void;
  addFollowupIntentInfo(value?: Intent.FollowupIntentInfo, index?: number): Intent.FollowupIntentInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Intent.AsObject;
  static toObject(includeInstance: boolean, msg: Intent): Intent.AsObject;
  static serializeBinaryToWriter(message: Intent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Intent;
  static deserializeBinaryFromReader(message: Intent, reader: jspb.BinaryReader): Intent;
}

export namespace Intent {
  export type AsObject = {
    name: string,
    displayName: string,
    webhookState: Intent.WebhookState,
    priority: number,
    isFallback: boolean,
    mlDisabled: boolean,
    inputContextNamesList: Array<string>,
    eventsList: Array<string>,
    trainingPhrasesList: Array<Intent.TrainingPhrase.AsObject>,
    action: string,
    outputContextsList: Array<google_cloud_dialogflow_v2_context_pb.Context.AsObject>,
    resetContexts: boolean,
    parametersList: Array<Intent.Parameter.AsObject>,
    messagesList: Array<Intent.Message.AsObject>,
    defaultResponsePlatformsList: Array<Intent.Message.Platform>,
    rootFollowupIntentName: string,
    parentFollowupIntentName: string,
    followupIntentInfoList: Array<Intent.FollowupIntentInfo.AsObject>,
  }

  export class TrainingPhrase extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    getType(): Intent.TrainingPhrase.Type;
    setType(value: Intent.TrainingPhrase.Type): void;

    getPartsList(): Array<Intent.TrainingPhrase.Part>;
    setPartsList(value: Array<Intent.TrainingPhrase.Part>): void;
    clearPartsList(): void;
    addParts(value?: Intent.TrainingPhrase.Part, index?: number): Intent.TrainingPhrase.Part;

    getTimesAddedCount(): number;
    setTimesAddedCount(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TrainingPhrase.AsObject;
    static toObject(includeInstance: boolean, msg: TrainingPhrase): TrainingPhrase.AsObject;
    static serializeBinaryToWriter(message: TrainingPhrase, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TrainingPhrase;
    static deserializeBinaryFromReader(message: TrainingPhrase, reader: jspb.BinaryReader): TrainingPhrase;
  }

  export namespace TrainingPhrase {
    export type AsObject = {
      name: string,
      type: Intent.TrainingPhrase.Type,
      partsList: Array<Intent.TrainingPhrase.Part.AsObject>,
      timesAddedCount: number,
    }

    export class Part extends jspb.Message {
      getText(): string;
      setText(value: string): void;

      getEntityType(): string;
      setEntityType(value: string): void;

      getAlias(): string;
      setAlias(value: string): void;

      getUserDefined(): boolean;
      setUserDefined(value: boolean): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Part.AsObject;
      static toObject(includeInstance: boolean, msg: Part): Part.AsObject;
      static serializeBinaryToWriter(message: Part, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Part;
      static deserializeBinaryFromReader(message: Part, reader: jspb.BinaryReader): Part;
    }

    export namespace Part {
      export type AsObject = {
        text: string,
        entityType: string,
        alias: string,
        userDefined: boolean,
      }
    }


    export enum Type { 
      TYPE_UNSPECIFIED = 0,
      EXAMPLE = 1,
      TEMPLATE = 2,
    }
  }


  export class Parameter extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    getDisplayName(): string;
    setDisplayName(value: string): void;

    getValue(): string;
    setValue(value: string): void;

    getDefaultValue(): string;
    setDefaultValue(value: string): void;

    getEntityTypeDisplayName(): string;
    setEntityTypeDisplayName(value: string): void;

    getMandatory(): boolean;
    setMandatory(value: boolean): void;

    getPromptsList(): Array<string>;
    setPromptsList(value: Array<string>): void;
    clearPromptsList(): void;
    addPrompts(value: string, index?: number): void;

    getIsList(): boolean;
    setIsList(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Parameter.AsObject;
    static toObject(includeInstance: boolean, msg: Parameter): Parameter.AsObject;
    static serializeBinaryToWriter(message: Parameter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Parameter;
    static deserializeBinaryFromReader(message: Parameter, reader: jspb.BinaryReader): Parameter;
  }

  export namespace Parameter {
    export type AsObject = {
      name: string,
      displayName: string,
      value: string,
      defaultValue: string,
      entityTypeDisplayName: string,
      mandatory: boolean,
      promptsList: Array<string>,
      isList: boolean,
    }
  }


  export class Message extends jspb.Message {
    getText(): Intent.Message.Text | undefined;
    setText(value?: Intent.Message.Text): void;
    hasText(): boolean;
    clearText(): void;

    getImage(): Intent.Message.Image | undefined;
    setImage(value?: Intent.Message.Image): void;
    hasImage(): boolean;
    clearImage(): void;

    getQuickReplies(): Intent.Message.QuickReplies | undefined;
    setQuickReplies(value?: Intent.Message.QuickReplies): void;
    hasQuickReplies(): boolean;
    clearQuickReplies(): void;

    getCard(): Intent.Message.Card | undefined;
    setCard(value?: Intent.Message.Card): void;
    hasCard(): boolean;
    clearCard(): void;

    getPayload(): google_protobuf_struct_pb.Struct | undefined;
    setPayload(value?: google_protobuf_struct_pb.Struct): void;
    hasPayload(): boolean;
    clearPayload(): void;

    getSimpleResponses(): Intent.Message.SimpleResponses | undefined;
    setSimpleResponses(value?: Intent.Message.SimpleResponses): void;
    hasSimpleResponses(): boolean;
    clearSimpleResponses(): void;

    getBasicCard(): Intent.Message.BasicCard | undefined;
    setBasicCard(value?: Intent.Message.BasicCard): void;
    hasBasicCard(): boolean;
    clearBasicCard(): void;

    getSuggestions(): Intent.Message.Suggestions | undefined;
    setSuggestions(value?: Intent.Message.Suggestions): void;
    hasSuggestions(): boolean;
    clearSuggestions(): void;

    getLinkOutSuggestion(): Intent.Message.LinkOutSuggestion | undefined;
    setLinkOutSuggestion(value?: Intent.Message.LinkOutSuggestion): void;
    hasLinkOutSuggestion(): boolean;
    clearLinkOutSuggestion(): void;

    getListSelect(): Intent.Message.ListSelect | undefined;
    setListSelect(value?: Intent.Message.ListSelect): void;
    hasListSelect(): boolean;
    clearListSelect(): void;

    getCarouselSelect(): Intent.Message.CarouselSelect | undefined;
    setCarouselSelect(value?: Intent.Message.CarouselSelect): void;
    hasCarouselSelect(): boolean;
    clearCarouselSelect(): void;

    getBrowseCarouselCard(): Intent.Message.BrowseCarouselCard | undefined;
    setBrowseCarouselCard(value?: Intent.Message.BrowseCarouselCard): void;
    hasBrowseCarouselCard(): boolean;
    clearBrowseCarouselCard(): void;

    getTableCard(): Intent.Message.TableCard | undefined;
    setTableCard(value?: Intent.Message.TableCard): void;
    hasTableCard(): boolean;
    clearTableCard(): void;

    getMediaContent(): Intent.Message.MediaContent | undefined;
    setMediaContent(value?: Intent.Message.MediaContent): void;
    hasMediaContent(): boolean;
    clearMediaContent(): void;

    getPlatform(): Intent.Message.Platform;
    setPlatform(value: Intent.Message.Platform): void;

    getMessageCase(): Message.MessageCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Message.AsObject;
    static toObject(includeInstance: boolean, msg: Message): Message.AsObject;
    static serializeBinaryToWriter(message: Message, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Message;
    static deserializeBinaryFromReader(message: Message, reader: jspb.BinaryReader): Message;
  }

  export namespace Message {
    export type AsObject = {
      text?: Intent.Message.Text.AsObject,
      image?: Intent.Message.Image.AsObject,
      quickReplies?: Intent.Message.QuickReplies.AsObject,
      card?: Intent.Message.Card.AsObject,
      payload?: google_protobuf_struct_pb.Struct.AsObject,
      simpleResponses?: Intent.Message.SimpleResponses.AsObject,
      basicCard?: Intent.Message.BasicCard.AsObject,
      suggestions?: Intent.Message.Suggestions.AsObject,
      linkOutSuggestion?: Intent.Message.LinkOutSuggestion.AsObject,
      listSelect?: Intent.Message.ListSelect.AsObject,
      carouselSelect?: Intent.Message.CarouselSelect.AsObject,
      browseCarouselCard?: Intent.Message.BrowseCarouselCard.AsObject,
      tableCard?: Intent.Message.TableCard.AsObject,
      mediaContent?: Intent.Message.MediaContent.AsObject,
      platform: Intent.Message.Platform,
    }

    export class Text extends jspb.Message {
      getTextList(): Array<string>;
      setTextList(value: Array<string>): void;
      clearTextList(): void;
      addText(value: string, index?: number): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Text.AsObject;
      static toObject(includeInstance: boolean, msg: Text): Text.AsObject;
      static serializeBinaryToWriter(message: Text, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Text;
      static deserializeBinaryFromReader(message: Text, reader: jspb.BinaryReader): Text;
    }

    export namespace Text {
      export type AsObject = {
        textList: Array<string>,
      }
    }


    export class Image extends jspb.Message {
      getImageUri(): string;
      setImageUri(value: string): void;

      getAccessibilityText(): string;
      setAccessibilityText(value: string): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Image.AsObject;
      static toObject(includeInstance: boolean, msg: Image): Image.AsObject;
      static serializeBinaryToWriter(message: Image, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Image;
      static deserializeBinaryFromReader(message: Image, reader: jspb.BinaryReader): Image;
    }

    export namespace Image {
      export type AsObject = {
        imageUri: string,
        accessibilityText: string,
      }
    }


    export class QuickReplies extends jspb.Message {
      getTitle(): string;
      setTitle(value: string): void;

      getQuickRepliesList(): Array<string>;
      setQuickRepliesList(value: Array<string>): void;
      clearQuickRepliesList(): void;
      addQuickReplies(value: string, index?: number): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): QuickReplies.AsObject;
      static toObject(includeInstance: boolean, msg: QuickReplies): QuickReplies.AsObject;
      static serializeBinaryToWriter(message: QuickReplies, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): QuickReplies;
      static deserializeBinaryFromReader(message: QuickReplies, reader: jspb.BinaryReader): QuickReplies;
    }

    export namespace QuickReplies {
      export type AsObject = {
        title: string,
        quickRepliesList: Array<string>,
      }
    }


    export class Card extends jspb.Message {
      getTitle(): string;
      setTitle(value: string): void;

      getSubtitle(): string;
      setSubtitle(value: string): void;

      getImageUri(): string;
      setImageUri(value: string): void;

      getButtonsList(): Array<Intent.Message.Card.Button>;
      setButtonsList(value: Array<Intent.Message.Card.Button>): void;
      clearButtonsList(): void;
      addButtons(value?: Intent.Message.Card.Button, index?: number): Intent.Message.Card.Button;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Card.AsObject;
      static toObject(includeInstance: boolean, msg: Card): Card.AsObject;
      static serializeBinaryToWriter(message: Card, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Card;
      static deserializeBinaryFromReader(message: Card, reader: jspb.BinaryReader): Card;
    }

    export namespace Card {
      export type AsObject = {
        title: string,
        subtitle: string,
        imageUri: string,
        buttonsList: Array<Intent.Message.Card.Button.AsObject>,
      }

      export class Button extends jspb.Message {
        getText(): string;
        setText(value: string): void;

        getPostback(): string;
        setPostback(value: string): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Button.AsObject;
        static toObject(includeInstance: boolean, msg: Button): Button.AsObject;
        static serializeBinaryToWriter(message: Button, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Button;
        static deserializeBinaryFromReader(message: Button, reader: jspb.BinaryReader): Button;
      }

      export namespace Button {
        export type AsObject = {
          text: string,
          postback: string,
        }
      }

    }


    export class SimpleResponse extends jspb.Message {
      getTextToSpeech(): string;
      setTextToSpeech(value: string): void;

      getSsml(): string;
      setSsml(value: string): void;

      getDisplayText(): string;
      setDisplayText(value: string): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): SimpleResponse.AsObject;
      static toObject(includeInstance: boolean, msg: SimpleResponse): SimpleResponse.AsObject;
      static serializeBinaryToWriter(message: SimpleResponse, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): SimpleResponse;
      static deserializeBinaryFromReader(message: SimpleResponse, reader: jspb.BinaryReader): SimpleResponse;
    }

    export namespace SimpleResponse {
      export type AsObject = {
        textToSpeech: string,
        ssml: string,
        displayText: string,
      }
    }


    export class SimpleResponses extends jspb.Message {
      getSimpleResponsesList(): Array<Intent.Message.SimpleResponse>;
      setSimpleResponsesList(value: Array<Intent.Message.SimpleResponse>): void;
      clearSimpleResponsesList(): void;
      addSimpleResponses(value?: Intent.Message.SimpleResponse, index?: number): Intent.Message.SimpleResponse;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): SimpleResponses.AsObject;
      static toObject(includeInstance: boolean, msg: SimpleResponses): SimpleResponses.AsObject;
      static serializeBinaryToWriter(message: SimpleResponses, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): SimpleResponses;
      static deserializeBinaryFromReader(message: SimpleResponses, reader: jspb.BinaryReader): SimpleResponses;
    }

    export namespace SimpleResponses {
      export type AsObject = {
        simpleResponsesList: Array<Intent.Message.SimpleResponse.AsObject>,
      }
    }


    export class BasicCard extends jspb.Message {
      getTitle(): string;
      setTitle(value: string): void;

      getSubtitle(): string;
      setSubtitle(value: string): void;

      getFormattedText(): string;
      setFormattedText(value: string): void;

      getImage(): Intent.Message.Image | undefined;
      setImage(value?: Intent.Message.Image): void;
      hasImage(): boolean;
      clearImage(): void;

      getButtonsList(): Array<Intent.Message.BasicCard.Button>;
      setButtonsList(value: Array<Intent.Message.BasicCard.Button>): void;
      clearButtonsList(): void;
      addButtons(value?: Intent.Message.BasicCard.Button, index?: number): Intent.Message.BasicCard.Button;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): BasicCard.AsObject;
      static toObject(includeInstance: boolean, msg: BasicCard): BasicCard.AsObject;
      static serializeBinaryToWriter(message: BasicCard, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): BasicCard;
      static deserializeBinaryFromReader(message: BasicCard, reader: jspb.BinaryReader): BasicCard;
    }

    export namespace BasicCard {
      export type AsObject = {
        title: string,
        subtitle: string,
        formattedText: string,
        image?: Intent.Message.Image.AsObject,
        buttonsList: Array<Intent.Message.BasicCard.Button.AsObject>,
      }

      export class Button extends jspb.Message {
        getTitle(): string;
        setTitle(value: string): void;

        getOpenUriAction(): Intent.Message.BasicCard.Button.OpenUriAction | undefined;
        setOpenUriAction(value?: Intent.Message.BasicCard.Button.OpenUriAction): void;
        hasOpenUriAction(): boolean;
        clearOpenUriAction(): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Button.AsObject;
        static toObject(includeInstance: boolean, msg: Button): Button.AsObject;
        static serializeBinaryToWriter(message: Button, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Button;
        static deserializeBinaryFromReader(message: Button, reader: jspb.BinaryReader): Button;
      }

      export namespace Button {
        export type AsObject = {
          title: string,
          openUriAction?: Intent.Message.BasicCard.Button.OpenUriAction.AsObject,
        }

        export class OpenUriAction extends jspb.Message {
          getUri(): string;
          setUri(value: string): void;

          serializeBinary(): Uint8Array;
          toObject(includeInstance?: boolean): OpenUriAction.AsObject;
          static toObject(includeInstance: boolean, msg: OpenUriAction): OpenUriAction.AsObject;
          static serializeBinaryToWriter(message: OpenUriAction, writer: jspb.BinaryWriter): void;
          static deserializeBinary(bytes: Uint8Array): OpenUriAction;
          static deserializeBinaryFromReader(message: OpenUriAction, reader: jspb.BinaryReader): OpenUriAction;
        }

        export namespace OpenUriAction {
          export type AsObject = {
            uri: string,
          }
        }

      }

    }


    export class Suggestion extends jspb.Message {
      getTitle(): string;
      setTitle(value: string): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Suggestion.AsObject;
      static toObject(includeInstance: boolean, msg: Suggestion): Suggestion.AsObject;
      static serializeBinaryToWriter(message: Suggestion, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Suggestion;
      static deserializeBinaryFromReader(message: Suggestion, reader: jspb.BinaryReader): Suggestion;
    }

    export namespace Suggestion {
      export type AsObject = {
        title: string,
      }
    }


    export class Suggestions extends jspb.Message {
      getSuggestionsList(): Array<Intent.Message.Suggestion>;
      setSuggestionsList(value: Array<Intent.Message.Suggestion>): void;
      clearSuggestionsList(): void;
      addSuggestions(value?: Intent.Message.Suggestion, index?: number): Intent.Message.Suggestion;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Suggestions.AsObject;
      static toObject(includeInstance: boolean, msg: Suggestions): Suggestions.AsObject;
      static serializeBinaryToWriter(message: Suggestions, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Suggestions;
      static deserializeBinaryFromReader(message: Suggestions, reader: jspb.BinaryReader): Suggestions;
    }

    export namespace Suggestions {
      export type AsObject = {
        suggestionsList: Array<Intent.Message.Suggestion.AsObject>,
      }
    }


    export class LinkOutSuggestion extends jspb.Message {
      getDestinationName(): string;
      setDestinationName(value: string): void;

      getUri(): string;
      setUri(value: string): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): LinkOutSuggestion.AsObject;
      static toObject(includeInstance: boolean, msg: LinkOutSuggestion): LinkOutSuggestion.AsObject;
      static serializeBinaryToWriter(message: LinkOutSuggestion, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): LinkOutSuggestion;
      static deserializeBinaryFromReader(message: LinkOutSuggestion, reader: jspb.BinaryReader): LinkOutSuggestion;
    }

    export namespace LinkOutSuggestion {
      export type AsObject = {
        destinationName: string,
        uri: string,
      }
    }


    export class ListSelect extends jspb.Message {
      getTitle(): string;
      setTitle(value: string): void;

      getItemsList(): Array<Intent.Message.ListSelect.Item>;
      setItemsList(value: Array<Intent.Message.ListSelect.Item>): void;
      clearItemsList(): void;
      addItems(value?: Intent.Message.ListSelect.Item, index?: number): Intent.Message.ListSelect.Item;

      getSubtitle(): string;
      setSubtitle(value: string): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): ListSelect.AsObject;
      static toObject(includeInstance: boolean, msg: ListSelect): ListSelect.AsObject;
      static serializeBinaryToWriter(message: ListSelect, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): ListSelect;
      static deserializeBinaryFromReader(message: ListSelect, reader: jspb.BinaryReader): ListSelect;
    }

    export namespace ListSelect {
      export type AsObject = {
        title: string,
        itemsList: Array<Intent.Message.ListSelect.Item.AsObject>,
        subtitle: string,
      }

      export class Item extends jspb.Message {
        getInfo(): Intent.Message.SelectItemInfo | undefined;
        setInfo(value?: Intent.Message.SelectItemInfo): void;
        hasInfo(): boolean;
        clearInfo(): void;

        getTitle(): string;
        setTitle(value: string): void;

        getDescription(): string;
        setDescription(value: string): void;

        getImage(): Intent.Message.Image | undefined;
        setImage(value?: Intent.Message.Image): void;
        hasImage(): boolean;
        clearImage(): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Item.AsObject;
        static toObject(includeInstance: boolean, msg: Item): Item.AsObject;
        static serializeBinaryToWriter(message: Item, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Item;
        static deserializeBinaryFromReader(message: Item, reader: jspb.BinaryReader): Item;
      }

      export namespace Item {
        export type AsObject = {
          info?: Intent.Message.SelectItemInfo.AsObject,
          title: string,
          description: string,
          image?: Intent.Message.Image.AsObject,
        }
      }

    }


    export class CarouselSelect extends jspb.Message {
      getItemsList(): Array<Intent.Message.CarouselSelect.Item>;
      setItemsList(value: Array<Intent.Message.CarouselSelect.Item>): void;
      clearItemsList(): void;
      addItems(value?: Intent.Message.CarouselSelect.Item, index?: number): Intent.Message.CarouselSelect.Item;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): CarouselSelect.AsObject;
      static toObject(includeInstance: boolean, msg: CarouselSelect): CarouselSelect.AsObject;
      static serializeBinaryToWriter(message: CarouselSelect, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): CarouselSelect;
      static deserializeBinaryFromReader(message: CarouselSelect, reader: jspb.BinaryReader): CarouselSelect;
    }

    export namespace CarouselSelect {
      export type AsObject = {
        itemsList: Array<Intent.Message.CarouselSelect.Item.AsObject>,
      }

      export class Item extends jspb.Message {
        getInfo(): Intent.Message.SelectItemInfo | undefined;
        setInfo(value?: Intent.Message.SelectItemInfo): void;
        hasInfo(): boolean;
        clearInfo(): void;

        getTitle(): string;
        setTitle(value: string): void;

        getDescription(): string;
        setDescription(value: string): void;

        getImage(): Intent.Message.Image | undefined;
        setImage(value?: Intent.Message.Image): void;
        hasImage(): boolean;
        clearImage(): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Item.AsObject;
        static toObject(includeInstance: boolean, msg: Item): Item.AsObject;
        static serializeBinaryToWriter(message: Item, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Item;
        static deserializeBinaryFromReader(message: Item, reader: jspb.BinaryReader): Item;
      }

      export namespace Item {
        export type AsObject = {
          info?: Intent.Message.SelectItemInfo.AsObject,
          title: string,
          description: string,
          image?: Intent.Message.Image.AsObject,
        }
      }

    }


    export class SelectItemInfo extends jspb.Message {
      getKey(): string;
      setKey(value: string): void;

      getSynonymsList(): Array<string>;
      setSynonymsList(value: Array<string>): void;
      clearSynonymsList(): void;
      addSynonyms(value: string, index?: number): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): SelectItemInfo.AsObject;
      static toObject(includeInstance: boolean, msg: SelectItemInfo): SelectItemInfo.AsObject;
      static serializeBinaryToWriter(message: SelectItemInfo, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): SelectItemInfo;
      static deserializeBinaryFromReader(message: SelectItemInfo, reader: jspb.BinaryReader): SelectItemInfo;
    }

    export namespace SelectItemInfo {
      export type AsObject = {
        key: string,
        synonymsList: Array<string>,
      }
    }


    export class MediaContent extends jspb.Message {
      getMediaType(): Intent.Message.MediaContent.ResponseMediaType;
      setMediaType(value: Intent.Message.MediaContent.ResponseMediaType): void;

      getMediaObjectsList(): Array<Intent.Message.MediaContent.ResponseMediaObject>;
      setMediaObjectsList(value: Array<Intent.Message.MediaContent.ResponseMediaObject>): void;
      clearMediaObjectsList(): void;
      addMediaObjects(value?: Intent.Message.MediaContent.ResponseMediaObject, index?: number): Intent.Message.MediaContent.ResponseMediaObject;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): MediaContent.AsObject;
      static toObject(includeInstance: boolean, msg: MediaContent): MediaContent.AsObject;
      static serializeBinaryToWriter(message: MediaContent, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): MediaContent;
      static deserializeBinaryFromReader(message: MediaContent, reader: jspb.BinaryReader): MediaContent;
    }

    export namespace MediaContent {
      export type AsObject = {
        mediaType: Intent.Message.MediaContent.ResponseMediaType,
        mediaObjectsList: Array<Intent.Message.MediaContent.ResponseMediaObject.AsObject>,
      }

      export class ResponseMediaObject extends jspb.Message {
        getName(): string;
        setName(value: string): void;

        getDescription(): string;
        setDescription(value: string): void;

        getLargeImage(): Intent.Message.Image | undefined;
        setLargeImage(value?: Intent.Message.Image): void;
        hasLargeImage(): boolean;
        clearLargeImage(): void;

        getIcon(): Intent.Message.Image | undefined;
        setIcon(value?: Intent.Message.Image): void;
        hasIcon(): boolean;
        clearIcon(): void;

        getContentUrl(): string;
        setContentUrl(value: string): void;

        getImageCase(): ResponseMediaObject.ImageCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ResponseMediaObject.AsObject;
        static toObject(includeInstance: boolean, msg: ResponseMediaObject): ResponseMediaObject.AsObject;
        static serializeBinaryToWriter(message: ResponseMediaObject, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ResponseMediaObject;
        static deserializeBinaryFromReader(message: ResponseMediaObject, reader: jspb.BinaryReader): ResponseMediaObject;
      }

      export namespace ResponseMediaObject {
        export type AsObject = {
          name: string,
          description: string,
          largeImage?: Intent.Message.Image.AsObject,
          icon?: Intent.Message.Image.AsObject,
          contentUrl: string,
        }

        export enum ImageCase { 
          IMAGE_NOT_SET = 0,
          LARGE_IMAGE = 3,
          ICON = 4,
        }
      }


      export enum ResponseMediaType { 
        RESPONSE_MEDIA_TYPE_UNSPECIFIED = 0,
        AUDIO = 1,
      }
    }


    export class BrowseCarouselCard extends jspb.Message {
      getItemsList(): Array<Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem>;
      setItemsList(value: Array<Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem>): void;
      clearItemsList(): void;
      addItems(value?: Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem, index?: number): Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem;

      getImageDisplayOptions(): Intent.Message.BrowseCarouselCard.ImageDisplayOptions;
      setImageDisplayOptions(value: Intent.Message.BrowseCarouselCard.ImageDisplayOptions): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): BrowseCarouselCard.AsObject;
      static toObject(includeInstance: boolean, msg: BrowseCarouselCard): BrowseCarouselCard.AsObject;
      static serializeBinaryToWriter(message: BrowseCarouselCard, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): BrowseCarouselCard;
      static deserializeBinaryFromReader(message: BrowseCarouselCard, reader: jspb.BinaryReader): BrowseCarouselCard;
    }

    export namespace BrowseCarouselCard {
      export type AsObject = {
        itemsList: Array<Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem.AsObject>,
        imageDisplayOptions: Intent.Message.BrowseCarouselCard.ImageDisplayOptions,
      }

      export class BrowseCarouselCardItem extends jspb.Message {
        getOpenUriAction(): Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem.OpenUrlAction | undefined;
        setOpenUriAction(value?: Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem.OpenUrlAction): void;
        hasOpenUriAction(): boolean;
        clearOpenUriAction(): void;

        getTitle(): string;
        setTitle(value: string): void;

        getDescription(): string;
        setDescription(value: string): void;

        getImage(): Intent.Message.Image | undefined;
        setImage(value?: Intent.Message.Image): void;
        hasImage(): boolean;
        clearImage(): void;

        getFooter(): string;
        setFooter(value: string): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): BrowseCarouselCardItem.AsObject;
        static toObject(includeInstance: boolean, msg: BrowseCarouselCardItem): BrowseCarouselCardItem.AsObject;
        static serializeBinaryToWriter(message: BrowseCarouselCardItem, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): BrowseCarouselCardItem;
        static deserializeBinaryFromReader(message: BrowseCarouselCardItem, reader: jspb.BinaryReader): BrowseCarouselCardItem;
      }

      export namespace BrowseCarouselCardItem {
        export type AsObject = {
          openUriAction?: Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem.OpenUrlAction.AsObject,
          title: string,
          description: string,
          image?: Intent.Message.Image.AsObject,
          footer: string,
        }

        export class OpenUrlAction extends jspb.Message {
          getUrl(): string;
          setUrl(value: string): void;

          getUrlTypeHint(): Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem.OpenUrlAction.UrlTypeHint;
          setUrlTypeHint(value: Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem.OpenUrlAction.UrlTypeHint): void;

          serializeBinary(): Uint8Array;
          toObject(includeInstance?: boolean): OpenUrlAction.AsObject;
          static toObject(includeInstance: boolean, msg: OpenUrlAction): OpenUrlAction.AsObject;
          static serializeBinaryToWriter(message: OpenUrlAction, writer: jspb.BinaryWriter): void;
          static deserializeBinary(bytes: Uint8Array): OpenUrlAction;
          static deserializeBinaryFromReader(message: OpenUrlAction, reader: jspb.BinaryReader): OpenUrlAction;
        }

        export namespace OpenUrlAction {
          export type AsObject = {
            url: string,
            urlTypeHint: Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem.OpenUrlAction.UrlTypeHint,
          }

          export enum UrlTypeHint { 
            URL_TYPE_HINT_UNSPECIFIED = 0,
            AMP_ACTION = 1,
            AMP_CONTENT = 2,
          }
        }

      }


      export enum ImageDisplayOptions { 
        IMAGE_DISPLAY_OPTIONS_UNSPECIFIED = 0,
        GRAY = 1,
        WHITE = 2,
        CROPPED = 3,
        BLURRED_BACKGROUND = 4,
      }
    }


    export class TableCard extends jspb.Message {
      getTitle(): string;
      setTitle(value: string): void;

      getSubtitle(): string;
      setSubtitle(value: string): void;

      getImage(): Intent.Message.Image | undefined;
      setImage(value?: Intent.Message.Image): void;
      hasImage(): boolean;
      clearImage(): void;

      getColumnPropertiesList(): Array<Intent.Message.ColumnProperties>;
      setColumnPropertiesList(value: Array<Intent.Message.ColumnProperties>): void;
      clearColumnPropertiesList(): void;
      addColumnProperties(value?: Intent.Message.ColumnProperties, index?: number): Intent.Message.ColumnProperties;

      getRowsList(): Array<Intent.Message.TableCardRow>;
      setRowsList(value: Array<Intent.Message.TableCardRow>): void;
      clearRowsList(): void;
      addRows(value?: Intent.Message.TableCardRow, index?: number): Intent.Message.TableCardRow;

      getButtonsList(): Array<Intent.Message.BasicCard.Button>;
      setButtonsList(value: Array<Intent.Message.BasicCard.Button>): void;
      clearButtonsList(): void;
      addButtons(value?: Intent.Message.BasicCard.Button, index?: number): Intent.Message.BasicCard.Button;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): TableCard.AsObject;
      static toObject(includeInstance: boolean, msg: TableCard): TableCard.AsObject;
      static serializeBinaryToWriter(message: TableCard, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): TableCard;
      static deserializeBinaryFromReader(message: TableCard, reader: jspb.BinaryReader): TableCard;
    }

    export namespace TableCard {
      export type AsObject = {
        title: string,
        subtitle: string,
        image?: Intent.Message.Image.AsObject,
        columnPropertiesList: Array<Intent.Message.ColumnProperties.AsObject>,
        rowsList: Array<Intent.Message.TableCardRow.AsObject>,
        buttonsList: Array<Intent.Message.BasicCard.Button.AsObject>,
      }
    }


    export class ColumnProperties extends jspb.Message {
      getHeader(): string;
      setHeader(value: string): void;

      getHorizontalAlignment(): Intent.Message.ColumnProperties.HorizontalAlignment;
      setHorizontalAlignment(value: Intent.Message.ColumnProperties.HorizontalAlignment): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): ColumnProperties.AsObject;
      static toObject(includeInstance: boolean, msg: ColumnProperties): ColumnProperties.AsObject;
      static serializeBinaryToWriter(message: ColumnProperties, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): ColumnProperties;
      static deserializeBinaryFromReader(message: ColumnProperties, reader: jspb.BinaryReader): ColumnProperties;
    }

    export namespace ColumnProperties {
      export type AsObject = {
        header: string,
        horizontalAlignment: Intent.Message.ColumnProperties.HorizontalAlignment,
      }

      export enum HorizontalAlignment { 
        HORIZONTAL_ALIGNMENT_UNSPECIFIED = 0,
        LEADING = 1,
        CENTER = 2,
        TRAILING = 3,
      }
    }


    export class TableCardRow extends jspb.Message {
      getCellsList(): Array<Intent.Message.TableCardCell>;
      setCellsList(value: Array<Intent.Message.TableCardCell>): void;
      clearCellsList(): void;
      addCells(value?: Intent.Message.TableCardCell, index?: number): Intent.Message.TableCardCell;

      getDividerAfter(): boolean;
      setDividerAfter(value: boolean): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): TableCardRow.AsObject;
      static toObject(includeInstance: boolean, msg: TableCardRow): TableCardRow.AsObject;
      static serializeBinaryToWriter(message: TableCardRow, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): TableCardRow;
      static deserializeBinaryFromReader(message: TableCardRow, reader: jspb.BinaryReader): TableCardRow;
    }

    export namespace TableCardRow {
      export type AsObject = {
        cellsList: Array<Intent.Message.TableCardCell.AsObject>,
        dividerAfter: boolean,
      }
    }


    export class TableCardCell extends jspb.Message {
      getText(): string;
      setText(value: string): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): TableCardCell.AsObject;
      static toObject(includeInstance: boolean, msg: TableCardCell): TableCardCell.AsObject;
      static serializeBinaryToWriter(message: TableCardCell, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): TableCardCell;
      static deserializeBinaryFromReader(message: TableCardCell, reader: jspb.BinaryReader): TableCardCell;
    }

    export namespace TableCardCell {
      export type AsObject = {
        text: string,
      }
    }


    export enum Platform { 
      PLATFORM_UNSPECIFIED = 0,
      FACEBOOK = 1,
      SLACK = 2,
      TELEGRAM = 3,
      KIK = 4,
      SKYPE = 5,
      LINE = 6,
      VIBER = 7,
      ACTIONS_ON_GOOGLE = 8,
      GOOGLE_HANGOUTS = 11,
    }

    export enum MessageCase { 
      MESSAGE_NOT_SET = 0,
      TEXT = 1,
      IMAGE = 2,
      QUICK_REPLIES = 3,
      CARD = 4,
      PAYLOAD = 5,
      SIMPLE_RESPONSES = 7,
      BASIC_CARD = 8,
      SUGGESTIONS = 9,
      LINK_OUT_SUGGESTION = 10,
      LIST_SELECT = 11,
      CAROUSEL_SELECT = 12,
      BROWSE_CAROUSEL_CARD = 22,
      TABLE_CARD = 23,
      MEDIA_CONTENT = 24,
    }
  }


  export class FollowupIntentInfo extends jspb.Message {
    getFollowupIntentName(): string;
    setFollowupIntentName(value: string): void;

    getParentFollowupIntentName(): string;
    setParentFollowupIntentName(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FollowupIntentInfo.AsObject;
    static toObject(includeInstance: boolean, msg: FollowupIntentInfo): FollowupIntentInfo.AsObject;
    static serializeBinaryToWriter(message: FollowupIntentInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FollowupIntentInfo;
    static deserializeBinaryFromReader(message: FollowupIntentInfo, reader: jspb.BinaryReader): FollowupIntentInfo;
  }

  export namespace FollowupIntentInfo {
    export type AsObject = {
      followupIntentName: string,
      parentFollowupIntentName: string,
    }
  }


  export enum WebhookState { 
    WEBHOOK_STATE_UNSPECIFIED = 0,
    WEBHOOK_STATE_ENABLED = 1,
    WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING = 2,
  }
}

export class ListIntentsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getLanguageCode(): string;
  setLanguageCode(value: string): void;

  getIntentView(): IntentView;
  setIntentView(value: IntentView): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListIntentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListIntentsRequest): ListIntentsRequest.AsObject;
  static serializeBinaryToWriter(message: ListIntentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListIntentsRequest;
  static deserializeBinaryFromReader(message: ListIntentsRequest, reader: jspb.BinaryReader): ListIntentsRequest;
}

export namespace ListIntentsRequest {
  export type AsObject = {
    parent: string,
    languageCode: string,
    intentView: IntentView,
    pageSize: number,
    pageToken: string,
  }
}

export class ListIntentsResponse extends jspb.Message {
  getIntentsList(): Array<Intent>;
  setIntentsList(value: Array<Intent>): void;
  clearIntentsList(): void;
  addIntents(value?: Intent, index?: number): Intent;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListIntentsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListIntentsResponse): ListIntentsResponse.AsObject;
  static serializeBinaryToWriter(message: ListIntentsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListIntentsResponse;
  static deserializeBinaryFromReader(message: ListIntentsResponse, reader: jspb.BinaryReader): ListIntentsResponse;
}

export namespace ListIntentsResponse {
  export type AsObject = {
    intentsList: Array<Intent.AsObject>,
    nextPageToken: string,
  }
}

export class GetIntentRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getLanguageCode(): string;
  setLanguageCode(value: string): void;

  getIntentView(): IntentView;
  setIntentView(value: IntentView): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetIntentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetIntentRequest): GetIntentRequest.AsObject;
  static serializeBinaryToWriter(message: GetIntentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetIntentRequest;
  static deserializeBinaryFromReader(message: GetIntentRequest, reader: jspb.BinaryReader): GetIntentRequest;
}

export namespace GetIntentRequest {
  export type AsObject = {
    name: string,
    languageCode: string,
    intentView: IntentView,
  }
}

export class CreateIntentRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getIntent(): Intent | undefined;
  setIntent(value?: Intent): void;
  hasIntent(): boolean;
  clearIntent(): void;

  getLanguageCode(): string;
  setLanguageCode(value: string): void;

  getIntentView(): IntentView;
  setIntentView(value: IntentView): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateIntentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateIntentRequest): CreateIntentRequest.AsObject;
  static serializeBinaryToWriter(message: CreateIntentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateIntentRequest;
  static deserializeBinaryFromReader(message: CreateIntentRequest, reader: jspb.BinaryReader): CreateIntentRequest;
}

export namespace CreateIntentRequest {
  export type AsObject = {
    parent: string,
    intent?: Intent.AsObject,
    languageCode: string,
    intentView: IntentView,
  }
}

export class UpdateIntentRequest extends jspb.Message {
  getIntent(): Intent | undefined;
  setIntent(value?: Intent): void;
  hasIntent(): boolean;
  clearIntent(): void;

  getLanguageCode(): string;
  setLanguageCode(value: string): void;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;

  getIntentView(): IntentView;
  setIntentView(value: IntentView): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateIntentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateIntentRequest): UpdateIntentRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateIntentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateIntentRequest;
  static deserializeBinaryFromReader(message: UpdateIntentRequest, reader: jspb.BinaryReader): UpdateIntentRequest;
}

export namespace UpdateIntentRequest {
  export type AsObject = {
    intent?: Intent.AsObject,
    languageCode: string,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    intentView: IntentView,
  }
}

export class DeleteIntentRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteIntentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteIntentRequest): DeleteIntentRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteIntentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteIntentRequest;
  static deserializeBinaryFromReader(message: DeleteIntentRequest, reader: jspb.BinaryReader): DeleteIntentRequest;
}

export namespace DeleteIntentRequest {
  export type AsObject = {
    name: string,
  }
}

export class BatchUpdateIntentsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getIntentBatchUri(): string;
  setIntentBatchUri(value: string): void;

  getIntentBatchInline(): IntentBatch | undefined;
  setIntentBatchInline(value?: IntentBatch): void;
  hasIntentBatchInline(): boolean;
  clearIntentBatchInline(): void;

  getLanguageCode(): string;
  setLanguageCode(value: string): void;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;

  getIntentView(): IntentView;
  setIntentView(value: IntentView): void;

  getIntentBatchCase(): BatchUpdateIntentsRequest.IntentBatchCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchUpdateIntentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BatchUpdateIntentsRequest): BatchUpdateIntentsRequest.AsObject;
  static serializeBinaryToWriter(message: BatchUpdateIntentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchUpdateIntentsRequest;
  static deserializeBinaryFromReader(message: BatchUpdateIntentsRequest, reader: jspb.BinaryReader): BatchUpdateIntentsRequest;
}

export namespace BatchUpdateIntentsRequest {
  export type AsObject = {
    parent: string,
    intentBatchUri: string,
    intentBatchInline?: IntentBatch.AsObject,
    languageCode: string,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    intentView: IntentView,
  }

  export enum IntentBatchCase { 
    INTENT_BATCH_NOT_SET = 0,
    INTENT_BATCH_URI = 2,
    INTENT_BATCH_INLINE = 3,
  }
}

export class BatchUpdateIntentsResponse extends jspb.Message {
  getIntentsList(): Array<Intent>;
  setIntentsList(value: Array<Intent>): void;
  clearIntentsList(): void;
  addIntents(value?: Intent, index?: number): Intent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchUpdateIntentsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BatchUpdateIntentsResponse): BatchUpdateIntentsResponse.AsObject;
  static serializeBinaryToWriter(message: BatchUpdateIntentsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchUpdateIntentsResponse;
  static deserializeBinaryFromReader(message: BatchUpdateIntentsResponse, reader: jspb.BinaryReader): BatchUpdateIntentsResponse;
}

export namespace BatchUpdateIntentsResponse {
  export type AsObject = {
    intentsList: Array<Intent.AsObject>,
  }
}

export class BatchDeleteIntentsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getIntentsList(): Array<Intent>;
  setIntentsList(value: Array<Intent>): void;
  clearIntentsList(): void;
  addIntents(value?: Intent, index?: number): Intent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchDeleteIntentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BatchDeleteIntentsRequest): BatchDeleteIntentsRequest.AsObject;
  static serializeBinaryToWriter(message: BatchDeleteIntentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchDeleteIntentsRequest;
  static deserializeBinaryFromReader(message: BatchDeleteIntentsRequest, reader: jspb.BinaryReader): BatchDeleteIntentsRequest;
}

export namespace BatchDeleteIntentsRequest {
  export type AsObject = {
    parent: string,
    intentsList: Array<Intent.AsObject>,
  }
}

export class IntentBatch extends jspb.Message {
  getIntentsList(): Array<Intent>;
  setIntentsList(value: Array<Intent>): void;
  clearIntentsList(): void;
  addIntents(value?: Intent, index?: number): Intent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntentBatch.AsObject;
  static toObject(includeInstance: boolean, msg: IntentBatch): IntentBatch.AsObject;
  static serializeBinaryToWriter(message: IntentBatch, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntentBatch;
  static deserializeBinaryFromReader(message: IntentBatch, reader: jspb.BinaryReader): IntentBatch;
}

export namespace IntentBatch {
  export type AsObject = {
    intentsList: Array<Intent.AsObject>,
  }
}

export enum IntentView { 
  INTENT_VIEW_UNSPECIFIED = 0,
  INTENT_VIEW_FULL = 1,
}
