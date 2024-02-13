import ProductsFakeRepository from "../../data/repository/productsFakeRepository";
import {RequestProducts, ResponseProducts} from "../../presentation/redux/types";
import ProductsRepository from "../repository/productsRepository";

const GetProducts = (
    productsFakeRepository: ProductsFakeRepository,
    productsExpressRepository: ProductsRepository
) => async (requestObject: RequestProducts): Promise<ResponseProducts> => {
    try {
        let responseProducts = await productsExpressRepository.getProducts(requestObject);
        console.log(responseProducts);
        if (responseProducts === null || responseProducts.products === null || responseProducts.products[0].name === undefined) {
            throw new Error("Server sent a trash");
        }
        return responseProducts;
    } catch (e) {
        console.log(e);
        return await productsFakeRepository.getProducts(requestObject);
    }
}

export default GetProducts;