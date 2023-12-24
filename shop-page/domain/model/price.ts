export default class Price {
    constructor(
        public readonly id: number,
        public readonly min: number | null,
        public readonly max: number | null,
        public readonly title: string
    ) {
        this.id = id;
        this.min = min;
        this.max = max;
        this.title = title;
    }

    static fromJson (json: string)  {
        const obj = JSON.parse(json);
        return new Price(
            obj.id,
            obj.min,
            obj.max,
            `${
            (obj.min === null && 'All prices') ||
            '$' + obj.min + '.00' + (obj.max !== null ? '-' + obj.max : '+')
        }`);
    }

}