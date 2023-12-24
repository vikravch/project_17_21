import Price from "../../domain/model/price";
import Category from "../../domain/model/category";
import FilteringRepository from "../../domain/repository/filteringRepository";
import Sort from "../../domain/model/sort";

const testCategories: Category[] = [
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
    {
        id: 0,
        min: null,
        max: null,
        title: `All prices`
    },

    {
        id: 1,
        min: 0.00,
        max: 99.99,
        title: `$0.00-99.99`
    },

    {
        id: 2,
        min: 100.00,
        max: 199.99,
        title: `$100.00-199.99`
    },

    {
        id: 3,
        min: 200.00,
        max: 299.99,
        title: `$200.00-299.99`
    },

    {
        id: 4,
        min: 300.00,
        max: 399.99,
        title: `$300.00-399.99`
    },

    {
        id: 5,
        min: 400.00,
        max: null,
        title: '$400.00+'
    }

];

const testSorting: Sort[] = [
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

export default class FilteringFakeRepository implements FilteringRepository {
    async getAllCategories(): Promise<Category[]> {
        return await Promise.resolve(testCategories);
    };
    async getAllPrices(): Promise<Price[]> {
        return await Promise.resolve(testPrices);
    };
    async getAllSorting(): Promise<Sort[]> {
        return await Promise.resolve(testSorting);
    }
}