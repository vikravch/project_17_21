import ProductsRepository from "../../domain/repository/productsRepository";
import Product from "../../domain/model/product";
import testImage from './testImage.webp'

let testProducts: Product[] = [];
for (let i = 0; i < 5; i++) {
    testProducts.push({
        id: i,
        name: 'TestProduct',
        image: testImage,
        description: 'Super-soft cushion cover in off-white with a tactile pattern that enhances the different tones in the pile.',
        actualPrice: 169.99,
        fullPrice: 199.99,
        sale: 15,
        isNew: true,
        rating: 4
    });
}

export default class ProductsFakeRepository implements ProductsRepository {
    async getAllProducts(): Promise<Product[]> {
        return await Promise.resolve(testProducts)
    }
}