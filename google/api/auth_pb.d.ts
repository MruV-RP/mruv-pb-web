import * as jspb from "google-protobuf"

export class Authentication extends jspb.Message {
  getRulesList(): Array<AuthenticationRule>;
  setRulesList(value: Array<AuthenticationRule>): void;
  clearRulesList(): void;
  addRules(value?: AuthenticationRule, index?: number): AuthenticationRule;

  getProvidersList(): Array<AuthProvider>;
  setProvidersList(value: Array<AuthProvider>): void;
  clearProvidersList(): void;
  addProviders(value?: AuthProvider, index?: number): AuthProvider;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Authentication.AsObject;
  static toObject(includeInstance: boolean, msg: Authentication): Authentication.AsObject;
  static serializeBinaryToWriter(message: Authentication, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Authentication;
  static deserializeBinaryFromReader(message: Authentication, reader: jspb.BinaryReader): Authentication;
}

export namespace Authentication {
  export type AsObject = {
    rulesList: Array<AuthenticationRule.AsObject>,
    providersList: Array<AuthProvider.AsObject>,
  }
}

export class AuthenticationRule extends jspb.Message {
  getSelector(): string;
  setSelector(value: string): void;

  getOauth(): OAuthRequirements | undefined;
  setOauth(value?: OAuthRequirements): void;
  hasOauth(): boolean;
  clearOauth(): void;

  getAllowWithoutCredential(): boolean;
  setAllowWithoutCredential(value: boolean): void;

  getRequirementsList(): Array<AuthRequirement>;
  setRequirementsList(value: Array<AuthRequirement>): void;
  clearRequirementsList(): void;
  addRequirements(value?: AuthRequirement, index?: number): AuthRequirement;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthenticationRule.AsObject;
  static toObject(includeInstance: boolean, msg: AuthenticationRule): AuthenticationRule.AsObject;
  static serializeBinaryToWriter(message: AuthenticationRule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthenticationRule;
  static deserializeBinaryFromReader(message: AuthenticationRule, reader: jspb.BinaryReader): AuthenticationRule;
}

export namespace AuthenticationRule {
  export type AsObject = {
    selector: string,
    oauth?: OAuthRequirements.AsObject,
    allowWithoutCredential: boolean,
    requirementsList: Array<AuthRequirement.AsObject>,
  }
}

export class AuthProvider extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getIssuer(): string;
  setIssuer(value: string): void;

  getJwksUri(): string;
  setJwksUri(value: string): void;

  getAudiences(): string;
  setAudiences(value: string): void;

  getAuthorizationUrl(): string;
  setAuthorizationUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthProvider.AsObject;
  static toObject(includeInstance: boolean, msg: AuthProvider): AuthProvider.AsObject;
  static serializeBinaryToWriter(message: AuthProvider, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthProvider;
  static deserializeBinaryFromReader(message: AuthProvider, reader: jspb.BinaryReader): AuthProvider;
}

export namespace AuthProvider {
  export type AsObject = {
    id: string,
    issuer: string,
    jwksUri: string,
    audiences: string,
    authorizationUrl: string,
  }
}

export class OAuthRequirements extends jspb.Message {
  getCanonicalScopes(): string;
  setCanonicalScopes(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OAuthRequirements.AsObject;
  static toObject(includeInstance: boolean, msg: OAuthRequirements): OAuthRequirements.AsObject;
  static serializeBinaryToWriter(message: OAuthRequirements, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OAuthRequirements;
  static deserializeBinaryFromReader(message: OAuthRequirements, reader: jspb.BinaryReader): OAuthRequirements;
}

export namespace OAuthRequirements {
  export type AsObject = {
    canonicalScopes: string,
  }
}

export class AuthRequirement extends jspb.Message {
  getProviderId(): string;
  setProviderId(value: string): void;

  getAudiences(): string;
  setAudiences(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthRequirement.AsObject;
  static toObject(includeInstance: boolean, msg: AuthRequirement): AuthRequirement.AsObject;
  static serializeBinaryToWriter(message: AuthRequirement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthRequirement;
  static deserializeBinaryFromReader(message: AuthRequirement, reader: jspb.BinaryReader): AuthRequirement;
}

export namespace AuthRequirement {
  export type AsObject = {
    providerId: string,
    audiences: string,
  }
}

