export default class Sort {

    constructor(
        public readonly id: number,
        public readonly title: string
    ) {
        this.id = id;
        this.title = title;
    }

    static fromJson(json: string) {
        const obj = JSON.parse(json);
        return new Sort(obj.id, obj.title);
    }

}