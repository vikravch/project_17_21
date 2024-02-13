import ProductsFakeRepository from "../../data/repository/productsFakeRepository";
import ProductsRepository from "../repository/productsRepository";
import {ResponseProducts} from "../../presentation/redux/types";

const GetAllProducts = (
    productsFakeRepository: ProductsFakeRepository,
    productsExpressRepository: ProductsRepository
) => async (): Promise<ResponseProducts> => {
    try {
        let responseProducts = await productsExpressRepository.getAllProducts();
        console.log(responseProducts);
        if (responseProducts === null || responseProducts.products === null || responseProducts.products[0].name === undefined) {
            throw new Error("Server sent a trash");
        }
        return responseProducts;
    } catch (e) {
        console.log(e);
        return await productsFakeRepository.getAllProducts();
    }
}

export default GetAllProducts;