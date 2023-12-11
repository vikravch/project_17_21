import {Price} from "./filterInterfaces";

export const categoriesArray: string[] = [
    'All rooms',
    'Living room',
    'Bedroom',
    'Kitchen',
    'Bathroom',
    'Dinning',
    'Outdoor'
];
export const priceArray: Price[] = [
    {
        title: 'All prices',
        min: 0.00,
        max: null
    },

    {
        title: '0.00 - 99.99',
        min: 0.00,
        max: 99.99
    },

    {
        title: '100.00 - 199.99',
        min: 100.00,
        max: 199.99
    },

    {
        title: '200.00 - 299.99',
        min: 200.00,
        max: 299.99
    },

    {
        title: '300.00 - 399.99',
        min: 300.00,
        max: 399.99
    },

    {
        title: '400.00',
        min: 400.00,
        max: null
    }
];

export const sort: string[] = [
    'Default',
    'Price up',
    'Price down',
    'New first',
    'Rating'
]