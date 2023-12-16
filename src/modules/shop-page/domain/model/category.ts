export default class Category {

    constructor(
        public readonly id: number,
        public readonly title: string
    ) {
        this.id = id;
        this.title = title;
    }

    static fromJson(json: string) {
        const obj = JSON.parse(json);
        return new Category(obj.id, obj.title);
    }

}