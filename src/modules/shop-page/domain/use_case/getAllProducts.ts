import ProductsFakeRepository from "../../data/repository/productsFakeRepository";
import ProductForGalleries from "../model/productForGalleries";

const GetAllProducts = (
    productsFakeRepository: ProductsFakeRepository
) => async (): Promise<ProductForGalleries[]> => {
    try {
        const products = await productsFakeRepository.getAllProducts();
        return products || [];
    } catch (e) {
        throw e;
    }
}

export default GetAllProducts;