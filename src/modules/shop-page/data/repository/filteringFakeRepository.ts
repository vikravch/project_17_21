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

const pricesArr: Price[] = [
    new Price(0, null, null, `All prices`),
    new Price(1, 0.00, 99.99, `$0.00-99.99`),
    new Price(2, 100.00, 199.99, `$100.00-199.99`),
    new Price(3, 200.00, 299.99, `$200.00-299.99`),
    new Price(4, 300.00, 399.99, `$300.00-399.99`),
    new Price(5, 400.00, null, `$400+`)
];

let testPrices: Price[];
pricesArr.forEach((item, index) => {
    console.log(index)
    testPrices[index] = item;
})

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