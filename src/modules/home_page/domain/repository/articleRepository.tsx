import article1Img from '../../presentation/page/images/article1.png'
import article2Img from '../../presentation/page/images/article2.png'
import article3Img from '../../presentation/page/images/article3.png'

interface Article {
    img: string;
    title: string;
    text: string;
    date: Date;
}

const articles: Article[] = [
    {
        img: article1Img,
        title: '7 ways to decor your home',
        text: 'This is a placeholder text for the article content.',
        date: new Date('2023-12-17')
    },
    {
        img: article2Img,
        title: 'Kitchen organization',
        text: 'This is a placeholder text for the article content.',
        date: new Date('2023-12-17')
    },
    {
        img: article1Img,
        title: '7 ways to decor your home',
        text: 'This is a placeholder text for the article content.',
        date: new Date('2023-12-10')
    },
    {
        img: article3Img,
        title: 'Decor your bedroom',
        text: 'This is a placeholder text for the article content.',
        date: new Date('2023-12-25')
    }
];

export const getLatestArticles = (): Article[] => {
    const sortedArticles = articles.sort((a, b) =>
        b.date.getTime() - a.date.getTime());
    return sortedArticles.slice(0, 3);
};

export default {
    getLatestArticles
};
