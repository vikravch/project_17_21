import article1Img from '../../presentation/page/images/imgArticles/article1Img.png';
import article2Img from '../../presentation/page/images/imgArticles/article2Img.png';
import article3Img from '../../presentation/page/images/imgArticles/article3Img.png';
import article4Img from '../../presentation/page/images/imgArticles/article2Img.png';
import article5Img from '../../presentation/page/images/imgArticles/article3Img.png';
import Article from "../../../blog/presentation/components/Article/Article";

export interface Article {
    id: number;
    img: string;
    title: string;
    text: string;
    date: Date;
}

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

const getAllArticles = (): Article[] => {
    return articles;
};

const getRandomArticlesByCount = (count: number): Article[] => {
    const shuffledArticles = articles.sort(() => Math.random() - 0.5);
    return shuffledArticles.slice(0, count);
};

export const getLatestArticles = (): Article[] => {
    const sortedArticles = articles.sort((a, b) =>
        b.date.getTime() - a.date.getTime());
    return sortedArticles.slice(0, 3);
};

export interface ArticleRepository {
    getAllArticles(): Article[];
    getLatestArticles(): Article[];
    getArticlesByCount(count: number): Article[];

}

export default ArticleRepository;


