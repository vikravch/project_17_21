import ProductsRepository from "../../domain/repository/productsRepository";
import testImage from './testImage.webp'
import RequestProducts from "../../domain/model/requestProducts";
import Product from "../../domain/model/product";

let testProducts: Product[] = [];
for (let i = 0; i < 12; i++) {
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
        quantity: 10
    });
}

export default class ProductsFakeRepository implements ProductsRepository {
    async getAllProducts(): Promise<Product[]> {
        return await Promise.resolve(testProducts)
    }
    async getProducts(requestObject: RequestProducts): Promise<Product[]> {
        return await Promise.resolve(testProducts)
    }
}