import Category from "./category";
import Price from "./price";
import Sort from "./sorting";

export interface AllFilteringInterface {

        categories: Category[],
        prices: Price[],
        sorting: Sort[]
}
