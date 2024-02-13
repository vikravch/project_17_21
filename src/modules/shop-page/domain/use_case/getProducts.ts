import ProductsFakeRepository from "../../data/repository/productsFakeRepository";
import Product from "../model/product";
import {RequestProducts} from "../../presentation/redux/types";
import ProductsRepository from "../repository/productsRepository";

const GetProducts = (
    productsFakeRepository: ProductsFakeRepository,
    productsExpressRepository: ProductsRepository
) => async (requestObject: RequestProducts): Promise<Product[]> => {
    try {
        let products = await productsExpressRepository.getProducts(requestObject);
        console.log(products);
        if (products === null || products[0].name === undefined) {
            products = await productsFakeRepository.getProducts(requestObject);
        }
        return products || [];
    } catch (e) {
        console.log(e);
        return await productsFakeRepository.getProducts(requestObject)
    }
}

export default GetProducts;