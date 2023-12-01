import React from 'react';
import "./Articles.css"
import ArticleCard from "./ArticleCard";
import image1 from "../../page/images/article1.png";
import image2 from "../../page/images/article2.png";
import image3 from "../../page/images/article3.png";
import SliderArrowRight from "../../icons/SliderArrowRight";

const Articles = () => {

    const textMock = "This is a placeholder text for the article content.";
    const articles = [
        {
            img: image1,
            title: '7 ways to decor your home',
            text: textMock
        },
        {
            img: image2,
            title: 'Kitchen organization',
            text: textMock
        },
        {
            img: image3,
            title: 'Decor your bedroom',
            text: textMock
        }
    ];

    const handleReadMoreClick = (text: string) => {
        console.log(`Clicked on "Read more" for article: ${text}`);
        // Логика при нажатии на "Read more"
    };


    return (
        <div className={'articles_section'}>
            <div className={'title_section'}>
                <h6 className={'articles_title'}>Articles</h6>
                <button className={'read_more_button'}>More Articles
                    <SliderArrowRight/></button>
            </div>
            <div className={'cards_block'}>
                {articles.map((article, index) => (
                    <ArticleCard
                        key={index}
                        img={article.img}
                        title={article.title}
                        text={article.text}
                        onClick={() => handleReadMoreClick(article.text)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Articles;
