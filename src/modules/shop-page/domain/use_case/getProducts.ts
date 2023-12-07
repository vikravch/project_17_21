import ProductsFakeRepository from "../../data/repository/productsFakeRepository";
import ProductForGalleries from "../model/productForGalleries";
import RequestProducts from "../model/requestProducts";

const GetProducts = (
    productsFakeRepository: ProductsFakeRepository
) => async (requestObject: RequestProducts): Promise<ProductForGalleries[]> => {
    try {
        const products = await productsFakeRepository.getProducts(requestObject);
        return products || [];
    } catch (e) {
        throw e;
    }
}

export default GetProducts;