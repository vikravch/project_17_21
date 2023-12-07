import ProductForGalleries from "../model/productForGalleries";
import RequestProducts from "../model/requestProducts";

export default interface ProductsRepository {
    getAllProducts: () => Promise<ProductForGalleries[]>
    getProducts: (requestObject: RequestProducts) => Promise<ProductForGalleries[]>
}