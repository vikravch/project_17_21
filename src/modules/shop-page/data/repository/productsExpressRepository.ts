import ProductsRepository from "../../domain/repository/productsRepository";
import Product from "../../domain/model/product";
import {RequestProducts} from "../../presentation/redux/types";
import * as Api from "../remote/api";

export default class ProductsExpressRepository implements ProductsRepository {
    async getProducts(requestObject: RequestProducts): Promise<Product[]> {
        return await Api.getProducts(requestObject);
    }

    async getAllProducts(): Promise<Product[]> {
        const requestObject: RequestProducts= {
            filtering: {
                category: null,
                price: null,
                sorting: null,
            },
            page: null
        }
        return await Api.getProducts(requestObject);
    }
}