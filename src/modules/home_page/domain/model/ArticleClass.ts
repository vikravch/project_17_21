export default class ArticleClass {
    constructor(
        public readonly id: number,
        public readonly img: string,
        public readonly title: string,
        public readonly text: string,
        public readonly date: Date
    ) {}

    static fromJson(json: string): ArticleClass {
        const obj = JSON.parse(json);
        return new ArticleClass(
            obj.id,
            obj.img,
            obj.title,
            obj.text,
            new Date(obj.date)
        );
    }
    static getLatestThree(articles: ArticleClass[]): ArticleClass[] {
        const sortedArticles = articles.slice().sort((a, b) => b.date.getTime() - a.date.getTime());
        return sortedArticles.slice(0, 3);
    }
}
