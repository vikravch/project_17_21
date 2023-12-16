import ProductsRepository from "../../domain/repository/productsRepository";
import testImage from './testImage.webp'
import Product from "../../domain/model/product";
import Price from "../../domain/model/price";
import {CategoryAndSort} from "../../domain/model/interfaces";
import AllFiltering from "../../domain/model/allFiltering";
import {RequestProducts} from "../../presentation/redux/types";

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
        amount: 10
    });
}

let testCategories: CategoryAndSort[] = [
    {
        id: 0,
        title: 'All rooms'
    },

    {
        id: 1,
        title: 'Living room'
    },

    {
        id: 2,
        title: 'Bedroom'
    },

    {
        id: 3,
        title: 'Kitchen'
    },

    {
        id: 4,
        title: 'Bathroom'
    },

    {
        id: 5,
        title: 'Dinning',
    },

    {
        id: 6,
        title: 'Outdoor'
    }
];

const testPrices: Price[] = [
    new Price(0, null, null),
    new Price(1, 0.00, 99.99),
    new Price(2, 100.00, 199.99),
    new Price(3, 200.00, 299.99),
    new Price(4, 300.00, 399.99),
    new Price(5, 400.00, null)
];

const testSorting: CategoryAndSort[] = [
    {
        id: 0,
        title: 'Default',
    },

    {
        id: 1,
        title: 'Price up',
    },

    {
        id: 2,
        title: 'Price down',
    },

    {
        id: 3,
        title: 'New first',
    },

    {
        id: 4,
        title: 'Rating up',
    },
    {
        id: 5,
        title: 'Rating down',
    }
];

const testAllFiltering: AllFiltering = new AllFiltering(testCategories, testPrices, testSorting);


export default class ProductsFakeRepository implements ProductsRepository {
    async getAllProducts(): Promise<Product[]> {
        return await Promise.resolve(testProducts)
    }
    async getProducts(requestObject: RequestProducts): Promise<Product[]> {
        return await Promise.resolve(testProducts)
    }
    async getAllFiltering(): Promise<AllFiltering> {
        return await Promise.resolve(testAllFiltering);
    }
}