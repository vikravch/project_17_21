import {Category, Price, Sort} from "./filterInterfaces";

export const categoriesArray: Category[] = [

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
export const priceArray: Price[] = [
    {
        id: 0,
        min: null,
        max: null
    },

    {
        id: 1,
        min: 0.00,
        max: 99.99
    },

    {
        id: 2,
        min: 100.00,
        max: 199.99
    },

    {
        id: 3,
        min: 200.00,
        max: 299.99
    },

    {
        id: 4,
        min: 300.00,
        max: 399.99
    },

    {
        id: 5,
        min: 400.00,
        max: null
    }
];

export const sort: Sort[] = [

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
    },
]