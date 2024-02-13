import ProductsRepository from "../../domain/repository/productsRepository";
import testImage from './testImage.webp'
import Product from "../../domain/model/product";
import {RequestProducts, ResponseProducts} from "../../presentation/redux/types";

let testProducts: Product[] = [];
const count = 12;
for (let i = 0; i < count; i++) {
    testProducts.push({
        id: '' + i,
        name: 'TestProduct',
        image: testImage,
        description: 'Super-soft cushion cover in off-white with a tactile pattern that enhances the different tones in the pile.',
        actualPrice: 169.99,
        sale: 15,
        fullPrice: 199.99,
        isNew: true,
        rating: 4,
        color: 'white',
        amount: 10
    });
}

export default class ProductsFakeRepository implements ProductsRepository {
    async getAllProducts(): Promise<ResponseProducts> {
        return await Promise.resolve({products: testProducts, count: count})
    }
    async getProducts(requestObject: RequestProducts): Promise<ResponseProducts> {
        return await Promise.resolve({products: testProducts, count: count})
    }
}