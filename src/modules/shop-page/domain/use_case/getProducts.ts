import ProductsFakeRepository from "../../data/repository/productsFakeRepository";
import RequestProducts from "../model/requestProducts";
import Product from "../model/product";

const GetProducts = (
    productsFakeRepository: ProductsFakeRepository
) => async (requestObject: RequestProducts): Promise<Product[]> => {
    try {
        const products = await productsFakeRepository.getProducts(requestObject);
        return products || [];
    } catch (e) {
        throw e;
    }
}

export default GetProducts;