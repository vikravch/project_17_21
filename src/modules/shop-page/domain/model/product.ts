export default class Product {
    constructor (
        public readonly id: number,
    ) {}

    static fromJson (json: string): Product {
        const obj = JSON.parse(json);
        return new Product(obj.productId);
    }
}



