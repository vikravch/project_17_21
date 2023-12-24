import ProductsFakeRepository from "../../data/repository/productsFakeRepository";
import Product from "../model/product";

const GetAllProducts = (
    productsFakeRepository: ProductsFakeRepository
) => async (): Promise<Product[]> => {
    try {
        const products = await productsFakeRepository.getAllProducts();
        return products || [];
    } catch (e) {
        throw e;
    }
}

export default GetAllProducts;