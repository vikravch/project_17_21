export default class Price {
    public readonly title: string;
    constructor(
        public readonly id: number,
        public readonly min: number | null,
        public readonly max: number | null
    ) {
        this.id = id;
        this.min = min;
        this.max = max;
        this.title = `${
            (this.min === null && 'All prices') || 
            '$' + this.min + '.00' + (this.max !== null ? '-' + this.max : '+')
        }`
    }

    static fromJson (json: string)  {
        const obj = JSON.parse(json);
        return new Price(obj.id, obj.min, obj.max);
    }

}