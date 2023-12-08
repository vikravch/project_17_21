import ProductForGalleries from "../model/productForGalleries";
import RequestProducts from "../model/requestProducts";

export type ProductsUseCases = {
    getAllProducts: () => Promise<ProductForGalleries[]>,
    getProducts: (requestObject: RequestProducts) => Promise<ProductForGalleries[]>
}