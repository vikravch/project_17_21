export default class Articles{
    constructor(
        public readonly title: string,
        public readonly author: string,
        public readonly text: string[],
        public readonly images: string[],
        public readonly date: string,
        public readonly index: number
    ) {
        this.title = title;
        this.author = author;
        this.text = text;
        this.images = images;
        this.date = date;
        this.index = index;

    }
    static fromJson (json: string): Articles {
        const art = JSON.parse(json)
        return new Articles(art.title, art.author, art.text, art.images, art.date, art.index);
    }
}