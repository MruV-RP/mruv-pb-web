/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.vision.v1p4beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';
import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb';
import * as google_api_resource_pb from '../../../../google/api/resource_pb';
import * as google_cloud_vision_v1p4beta1_geometry_pb from '../../../../google/cloud/vision/v1p4beta1/geometry_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_rpc_status_pb from '../../../../google/rpc/status_pb';

import {
  AddProductToProductSetRequest,
  CreateProductRequest,
  CreateProductSetRequest,
  CreateReferenceImageRequest,
  DeleteProductRequest,
  DeleteProductSetRequest,
  DeleteReferenceImageRequest,
  GetProductRequest,
  GetProductSetRequest,
  GetReferenceImageRequest,
  ImportProductSetsRequest,
  ListProductSetsRequest,
  ListProductSetsResponse,
  ListProductsInProductSetRequest,
  ListProductsInProductSetResponse,
  ListProductsRequest,
  ListProductsResponse,
  ListReferenceImagesRequest,
  ListReferenceImagesResponse,
  Product,
  ProductSet,
  PurgeProductsRequest,
  ReferenceImage,
  RemoveProductFromProductSetRequest,
  UpdateProductRequest,
  UpdateProductSetRequest} from './product_search_service_pb';

export class ProductSearchClient {
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

  methodInfoCreateProductSet = new grpcWeb.AbstractClientBase.MethodInfo(
    ProductSet,
    (request: CreateProductSetRequest) => {
      return request.serializeBinary();
    },
    ProductSet.deserializeBinary
  );

  createProductSet(
    request: CreateProductSetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ProductSet) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.vision.v1p4beta1.ProductSearch/CreateProductSet',
      request,
      metadata || {},
      this.methodInfoCreateProductSet,
      callback);
  }

  methodInfoListProductSets = new grpcWeb.AbstractClientBase.MethodInfo(
    ListProductSetsResponse,
    (request: ListProductSetsRequest) => {
      return request.serializeBinary();
    },
    ListProductSetsResponse.deserializeBinary
  );

  listProductSets(
    request: ListProductSetsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListProductSetsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.vision.v1p4beta1.ProductSearch/ListProductSets',
      request,
      metadata || {},
      this.methodInfoListProductSets,
      callback);
  }

  methodInfoGetProductSet = new grpcWeb.AbstractClientBase.MethodInfo(
    ProductSet,
    (request: GetProductSetRequest) => {
      return request.serializeBinary();
    },
    ProductSet.deserializeBinary
  );

  getProductSet(
    request: GetProductSetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ProductSet) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.vision.v1p4beta1.ProductSearch/GetProductSet',
      request,
      metadata || {},
      this.methodInfoGetProductSet,
      callback);
  }

  methodInfoUpdateProductSet = new grpcWeb.AbstractClientBase.MethodInfo(
    ProductSet,
    (request: UpdateProductSetRequest) => {
      return request.serializeBinary();
    },
    ProductSet.deserializeBinary
  );

  updateProductSet(
    request: UpdateProductSetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ProductSet) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.vision.v1p4beta1.ProductSearch/UpdateProductSet',
      request,
      metadata || {},
      this.methodInfoUpdateProductSet,
      callback);
  }

  methodInfoDeleteProductSet = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteProductSetRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteProductSet(
    request: DeleteProductSetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.vision.v1p4beta1.ProductSearch/DeleteProductSet',
      request,
      metadata || {},
      this.methodInfoDeleteProductSet,
      callback);
  }

  methodInfoCreateProduct = new grpcWeb.AbstractClientBase.MethodInfo(
    Product,
    (request: CreateProductRequest) => {
      return request.serializeBinary();
    },
    Product.deserializeBinary
  );

  createProduct(
    request: CreateProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Product) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.vision.v1p4beta1.ProductSearch/CreateProduct',
      request,
      metadata || {},
      this.methodInfoCreateProduct,
      callback);
  }

  methodInfoListProducts = new grpcWeb.AbstractClientBase.MethodInfo(
    ListProductsResponse,
    (request: ListProductsRequest) => {
      return request.serializeBinary();
    },
    ListProductsResponse.deserializeBinary
  );

  listProducts(
    request: ListProductsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListProductsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.vision.v1p4beta1.ProductSearch/ListProducts',
      request,
      metadata || {},
      this.methodInfoListProducts,
      callback);
  }

  methodInfoGetProduct = new grpcWeb.AbstractClientBase.MethodInfo(
    Product,
    (request: GetProductRequest) => {
      return request.serializeBinary();
    },
    Product.deserializeBinary
  );

  getProduct(
    request: GetProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Product) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.vision.v1p4beta1.ProductSearch/GetProduct',
      request,
      metadata || {},
      this.methodInfoGetProduct,
      callback);
  }

  methodInfoUpdateProduct = new grpcWeb.AbstractClientBase.MethodInfo(
    Product,
    (request: UpdateProductRequest) => {
      return request.serializeBinary();
    },
    Product.deserializeBinary
  );

  updateProduct(
    request: UpdateProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Product) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.vision.v1p4beta1.ProductSearch/UpdateProduct',
      request,
      metadata || {},
      this.methodInfoUpdateProduct,
      callback);
  }

  methodInfoDeleteProduct = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteProductRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteProduct(
    request: DeleteProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.vision.v1p4beta1.ProductSearch/DeleteProduct',
      request,
      metadata || {},
      this.methodInfoDeleteProduct,
      callback);
  }

  methodInfoCreateReferenceImage = new grpcWeb.AbstractClientBase.MethodInfo(
    ReferenceImage,
    (request: CreateReferenceImageRequest) => {
      return request.serializeBinary();
    },
    ReferenceImage.deserializeBinary
  );

  createReferenceImage(
    request: CreateReferenceImageRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ReferenceImage) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.vision.v1p4beta1.ProductSearch/CreateReferenceImage',
      request,
      metadata || {},
      this.methodInfoCreateReferenceImage,
      callback);
  }

  methodInfoDeleteReferenceImage = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteReferenceImageRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteReferenceImage(
    request: DeleteReferenceImageRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.vision.v1p4beta1.ProductSearch/DeleteReferenceImage',
      request,
      metadata || {},
      this.methodInfoDeleteReferenceImage,
      callback);
  }

  methodInfoListReferenceImages = new grpcWeb.AbstractClientBase.MethodInfo(
    ListReferenceImagesResponse,
    (request: ListReferenceImagesRequest) => {
      return request.serializeBinary();
    },
    ListReferenceImagesResponse.deserializeBinary
  );

  listReferenceImages(
    request: ListReferenceImagesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListReferenceImagesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.vision.v1p4beta1.ProductSearch/ListReferenceImages',
      request,
      metadata || {},
      this.methodInfoListReferenceImages,
      callback);
  }

  methodInfoGetReferenceImage = new grpcWeb.AbstractClientBase.MethodInfo(
    ReferenceImage,
    (request: GetReferenceImageRequest) => {
      return request.serializeBinary();
    },
    ReferenceImage.deserializeBinary
  );

  getReferenceImage(
    request: GetReferenceImageRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ReferenceImage) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.vision.v1p4beta1.ProductSearch/GetReferenceImage',
      request,
      metadata || {},
      this.methodInfoGetReferenceImage,
      callback);
  }

  methodInfoAddProductToProductSet = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: AddProductToProductSetRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  addProductToProductSet(
    request: AddProductToProductSetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.vision.v1p4beta1.ProductSearch/AddProductToProductSet',
      request,
      metadata || {},
      this.methodInfoAddProductToProductSet,
      callback);
  }

  methodInfoRemoveProductFromProductSet = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: RemoveProductFromProductSetRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  removeProductFromProductSet(
    request: RemoveProductFromProductSetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.vision.v1p4beta1.ProductSearch/RemoveProductFromProductSet',
      request,
      metadata || {},
      this.methodInfoRemoveProductFromProductSet,
      callback);
  }

  methodInfoListProductsInProductSet = new grpcWeb.AbstractClientBase.MethodInfo(
    ListProductsInProductSetResponse,
    (request: ListProductsInProductSetRequest) => {
      return request.serializeBinary();
    },
    ListProductsInProductSetResponse.deserializeBinary
  );

  listProductsInProductSet(
    request: ListProductsInProductSetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListProductsInProductSetResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.vision.v1p4beta1.ProductSearch/ListProductsInProductSet',
      request,
      metadata || {},
      this.methodInfoListProductsInProductSet,
      callback);
  }

  methodInfoImportProductSets = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: ImportProductSetsRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  importProductSets(
    request: ImportProductSetsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.vision.v1p4beta1.ProductSearch/ImportProductSets',
      request,
      metadata || {},
      this.methodInfoImportProductSets,
      callback);
  }

  methodInfoPurgeProducts = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: PurgeProductsRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  purgeProducts(
    request: PurgeProductsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.vision.v1p4beta1.ProductSearch/PurgeProducts',
      request,
      metadata || {},
      this.methodInfoPurgeProducts,
      callback);
  }

}

