import { Article, ArticleRepository } from '../../domain/repository/ArticleRepository';

class ArticleFakeRepository implements ArticleRepository {
    private fakeArticles: Article[];

    constructor(articles: Article[]) {
        this.fakeArticles = articles;
    }

    getLatestArticles(): Article[] {
        return this.fakeArticles.slice(0, 3);
    }

    getAllArticles(): Article[] {
        return this.fakeArticles;
    }

    async getAllArticlesAsync(): Promise<Article[]> {
        return new Promise<Article[]>((resolve) => {
            setTimeout(() => {
                resolve(this.fakeArticles);
            }, 1000);
        });
    }

    getArticlesByCount(count: number): Article[] {
        return this.fakeArticles.slice(0, count);
    }

    async getArticlesByCountAsync(count: number): Promise<Article[]> {
        return new Promise<Article[]>((resolve) => {
            setTimeout(() => {
                const slicedArticles = this.fakeArticles.slice(0, count);
                resolve(slicedArticles);
            }, 1000);
        });
    }
}

export default ArticleFakeRepository;
