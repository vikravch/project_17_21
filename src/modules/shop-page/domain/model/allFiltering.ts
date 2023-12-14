import Price from "./price";
import {CategoryAndSort} from "./interfaces";

export default class AllFiltering {
    constructor(
        public readonly categories: CategoryAndSort[],
        public readonly prices: Price[],
        public readonly sorting: CategoryAndSort[]
    ) {
        this.categories = categories;
        this.prices = prices;
        this.sorting = sorting;
    }

    static fromJson (json: string) {
        const obj = JSON.parse(json);
        return new AllFiltering(obj.categories, obj.prices, obj.sorting);
    }

}