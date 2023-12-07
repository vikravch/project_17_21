import ProductsRepository from "../../domain/repository/productsRepository";
import testImage from './testImage.webp'
import ProductForGalleries from "../../domain/model/productForGalleries";
import RequestProducts from "../../domain/model/requestProducts";

let testProducts: ProductForGalleries[] = [];
for (let i = 0; i < 12; i++) {
    testProducts.push({
        id: i,
        name: 'TestProduct',
        image: testImage,
        description: 'Super-soft cushion cover in off-white with a tactile pattern that enhances the different tones in the pile.',
        actualPrice: 169.99,
        sale: 15,
        fullPrice: 199.99,
        isNew: true,
        rating: 4
    });
}

export default class ProductsFakeRepository implements ProductsRepository {
    async getAllProducts(): Promise<ProductForGalleries[]> {
        return await Promise.resolve(testProducts)
    }
    async getProducts(requestObject: RequestProducts): Promise<ProductForGalleries[]> {
        return await Promise.resolve(testProducts)
    }
}