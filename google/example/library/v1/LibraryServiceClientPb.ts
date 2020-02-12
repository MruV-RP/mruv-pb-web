/**
 * @fileoverview gRPC-Web generated client stub for google.example.library.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';
import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb';
import * as google_api_resource_pb from '../../../../google/api/resource_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';

import {
  Book,
  CreateBookRequest,
  CreateShelfRequest,
  DeleteBookRequest,
  DeleteShelfRequest,
  GetBookRequest,
  GetShelfRequest,
  ListBooksRequest,
  ListBooksResponse,
  ListShelvesRequest,
  ListShelvesResponse,
  MergeShelvesRequest,
  MoveBookRequest,
  Shelf,
  UpdateBookRequest} from './library_pb';

export class LibraryServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoCreateShelf = new grpcWeb.AbstractClientBase.MethodInfo(
    Shelf,
    (request: CreateShelfRequest) => {
      return request.serializeBinary();
    },
    Shelf.deserializeBinary
  );

  createShelf(
    request: CreateShelfRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Shelf) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.example.library.v1.LibraryService/CreateShelf',
      request,
      metadata || {},
      this.methodInfoCreateShelf,
      callback);
  }

  methodInfoGetShelf = new grpcWeb.AbstractClientBase.MethodInfo(
    Shelf,
    (request: GetShelfRequest) => {
      return request.serializeBinary();
    },
    Shelf.deserializeBinary
  );

  getShelf(
    request: GetShelfRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Shelf) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.example.library.v1.LibraryService/GetShelf',
      request,
      metadata || {},
      this.methodInfoGetShelf,
      callback);
  }

  methodInfoListShelves = new grpcWeb.AbstractClientBase.MethodInfo(
    ListShelvesResponse,
    (request: ListShelvesRequest) => {
      return request.serializeBinary();
    },
    ListShelvesResponse.deserializeBinary
  );

  listShelves(
    request: ListShelvesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListShelvesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.example.library.v1.LibraryService/ListShelves',
      request,
      metadata || {},
      this.methodInfoListShelves,
      callback);
  }

  methodInfoDeleteShelf = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteShelfRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteShelf(
    request: DeleteShelfRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.example.library.v1.LibraryService/DeleteShelf',
      request,
      metadata || {},
      this.methodInfoDeleteShelf,
      callback);
  }

  methodInfoMergeShelves = new grpcWeb.AbstractClientBase.MethodInfo(
    Shelf,
    (request: MergeShelvesRequest) => {
      return request.serializeBinary();
    },
    Shelf.deserializeBinary
  );

  mergeShelves(
    request: MergeShelvesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Shelf) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.example.library.v1.LibraryService/MergeShelves',
      request,
      metadata || {},
      this.methodInfoMergeShelves,
      callback);
  }

  methodInfoCreateBook = new grpcWeb.AbstractClientBase.MethodInfo(
    Book,
    (request: CreateBookRequest) => {
      return request.serializeBinary();
    },
    Book.deserializeBinary
  );

  createBook(
    request: CreateBookRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Book) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.example.library.v1.LibraryService/CreateBook',
      request,
      metadata || {},
      this.methodInfoCreateBook,
      callback);
  }

  methodInfoGetBook = new grpcWeb.AbstractClientBase.MethodInfo(
    Book,
    (request: GetBookRequest) => {
      return request.serializeBinary();
    },
    Book.deserializeBinary
  );

  getBook(
    request: GetBookRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Book) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.example.library.v1.LibraryService/GetBook',
      request,
      metadata || {},
      this.methodInfoGetBook,
      callback);
  }

  methodInfoListBooks = new grpcWeb.AbstractClientBase.MethodInfo(
    ListBooksResponse,
    (request: ListBooksRequest) => {
      return request.serializeBinary();
    },
    ListBooksResponse.deserializeBinary
  );

  listBooks(
    request: ListBooksRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListBooksResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.example.library.v1.LibraryService/ListBooks',
      request,
      metadata || {},
      this.methodInfoListBooks,
      callback);
  }

  methodInfoDeleteBook = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteBookRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteBook(
    request: DeleteBookRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.example.library.v1.LibraryService/DeleteBook',
      request,
      metadata || {},
      this.methodInfoDeleteBook,
      callback);
  }

  methodInfoUpdateBook = new grpcWeb.AbstractClientBase.MethodInfo(
    Book,
    (request: UpdateBookRequest) => {
      return request.serializeBinary();
    },
    Book.deserializeBinary
  );

  updateBook(
    request: UpdateBookRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Book) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.example.library.v1.LibraryService/UpdateBook',
      request,
      metadata || {},
      this.methodInfoUpdateBook,
      callback);
  }

  methodInfoMoveBook = new grpcWeb.AbstractClientBase.MethodInfo(
    Book,
    (request: MoveBookRequest) => {
      return request.serializeBinary();
    },
    Book.deserializeBinary
  );

  moveBook(
    request: MoveBookRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Book) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.example.library.v1.LibraryService/MoveBook',
      request,
      metadata || {},
      this.methodInfoMoveBook,
      callback);
  }

}

