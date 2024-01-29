import { ArticleRepository } from "../../domain/repository/ArticleRepository";
import article1Img from '../../presentation/page/images/imgArticles/article1Img.png';
import article2Img from '../../presentation/page/images/imgArticles/article2Img.png';
import article3Img from '../../presentation/page/images/imgArticles/article3Img.png';
import article4Img from '../../presentation/page/images/imgArticles/article2Img.png';
import article5Img from '../../presentation/page/images/imgArticles/article3Img.png';
import {Article} from "../../presentation/redux/types";

export const articles: Article[] = [
    {
        id: 1,
        img: article1Img,
        title: '7 ways to decor your home',
        text: 'This is a placeholder text for the article content.',
        date: new Date('2023-12-17')
    },
    {
        id: 2,
        img: article2Img,
        title: 'Kitchen organization',
        text: 'This is a placeholder text for the article content.',
        date: new Date('2023-12-17')
    },
    {
        id: 3,
        img: article3Img,
        title: '7 ways to decor your home',
        text: 'This is a placeholder text for the article content.',
        date: new Date('2023-12-10')
    },
    {
        id: 4,
        img: article4Img,
        title: 'Decor your bedroom',
        text: 'This is a placeholder text for the article content.',
        date: new Date('2023-12-24')
    },
    {
        id: 5,
        img: article5Img,
        title: 'Decor your bedroom',
        text: 'This is a placeholder text for the article content.',
        date: new Date('2023-12-20')
    }
];

export default class ArticlesFakeRepository implements ArticleRepository {

    async getAllArticles(): Promise<Article[]> {
        return Promise.resolve(articles)
    }
    async getLatestArticles(): Promise<Article[]> {
        const sortedArticles = articles
            .slice()
            .sort((a, b) => b.date.getTime() - a.date.getTime());
        const latestArticles = sortedArticles.slice(0, 3);
        return Promise.resolve(latestArticles);
    }
}
