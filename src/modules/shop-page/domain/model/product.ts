const rearrangeDate = (stringDate: String): Date => {
    const parts = stringDate.split('/');
    const rearrangedDate = `${parts[1]}/${parts[0]}/${parts[2]}`;
    return new Date(rearrangedDate);
}
const millisecondsInMonth = 30 * 24 * 60 * 60 * 1000;

export default class Product {
    constructor (
        public readonly id: number,
        public readonly name: string,
        public readonly image: string,
        public readonly actualPrice: number | null,
        public readonly fullPrice: number,
        public readonly sale: number,
        public readonly description: string,
        public readonly isNew: boolean,
        public readonly rating: number,
    ) {}

    static fromJson (json: string): Product {
        const obj = JSON.parse(json)
        const actualPrice = obj.discount === 0 ? null :  obj.price - (obj.price * obj.discount / 100);
        const currentData = new Date();
        const isNew = currentData.getTime() - rearrangeDate(obj.date).getTime() < millisecondsInMonth;
        return new Product(obj.productId, obj.productName, obj.image, actualPrice, obj.price, obj.discount, obj.description, isNew, obj.rating)
    }
}



