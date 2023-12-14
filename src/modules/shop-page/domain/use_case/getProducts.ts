import ProductsFakeRepository from "../../data/repository/productsFakeRepository";
import Product from "../model/product";
import {RequestProducts} from "../../presentation/redux/types";

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