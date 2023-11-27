import {Price} from "./filterInterface";

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
        min: 0.00,
        max: 99.99
    },

    {
        min: 100.00,
        max: 199.99
    },

    {
        min: 200.00,
        max: 299.99
    },

    {
        min: 300.00,
        max: 399.99
    },

    {
        min: 400.00,
        max: null
    }
];

export const sort: string[] = [
    'Price up',
    'Price down',
    'New first'
]