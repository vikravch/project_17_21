import ProductsRepository from "../../domain/repository/productsRepository";
import testImage from './testImage.webp'
import Product from "../../domain/model/product";
import Category from "../../domain/model/category";
import Price from "../../domain/model/price";
import Sorting from "../../domain/model/sorting";
import {AllFilteringInterface} from "../../domain/model/interfaces";
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

let testCategories: Category[] = [
    {
        id: 0,
        title: 'All rooms'
    },

    {
        id: 2,
        title: 'Living room'
    },

    {
        id: 3,
        title: 'Bedroom'
    },

    {
        id: 4,
        title: 'Kitchen'
    },

    {
        id: 5,
        title: 'Bathroom'
    },

    {
        id: 6,
        title: 'Dinning',
    },

    {
        id: 7,
        title: 'Outdoor'
    }
];

let testPrices: Price[] = [
    new Price(0, null, null),
    new Price(1, 0.00, 99.99),
    new Price(2, 100.00, 199.99),
    new Price(3, 200.00, 299.99),
    new Price(4, 300.00, 399.99),
    new Price(5, 400.00, null)
];

let testSorting: Sorting[] = [
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
        title: 'Rating',
    }
];

let testAllFiltering: AllFilteringInterface = {
    categories: testCategories,
    prices: testPrices,
    sorting: testSorting
}

export default class ProductsFakeRepository implements ProductsRepository {
    async getAllProducts(): Promise<Product[]> {
        return await Promise.resolve(testProducts)
    }
    async getProducts(requestObject: RequestProducts): Promise<Product[]> {
        return await Promise.resolve(testProducts)
    }
    async getAllFiltering(): Promise<AllFilteringInterface> {
        return await Promise.resolve(testAllFiltering);
    }
}