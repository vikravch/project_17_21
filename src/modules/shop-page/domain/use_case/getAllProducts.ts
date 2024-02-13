import ProductsFakeRepository from "../../data/repository/productsFakeRepository";
import Product from "../model/product";
import ProductsRepository from "../repository/productsRepository";

const GetAllProducts = (
    productsFakeRepository: ProductsFakeRepository,
    productsExpressRepository: ProductsRepository
) => async (): Promise<Product[]> => {
    try {
        let products = await productsExpressRepository.getAllProducts();
        if (products === null || products[0].name === undefined) {
            products = await productsFakeRepository.getAllProducts();
        }
        return products || [];
    } catch (e) {
        throw e;
    }
}

export default GetAllProducts;