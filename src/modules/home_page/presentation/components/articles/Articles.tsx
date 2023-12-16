import React from 'react';
import "./Articles.css"
import image1 from "../../page/images/article1.png";
import image2 from "../../page/images/article2.png";
import image3 from "../../page/images/article3.png";
import ArticleCard from "../../components/Articles/ArticleCard";
import ShopNowArrow from "../../icons/ShopNowArrow";

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
            <div className={'articles_section_inner'}>
                <div className={'title_section'}>
                    <h6 className={'articles_title'}>Articles</h6>
                    <div className={'shop_now_link'}>
                        <button className={'shop_now_btn'}>More Articles</button>
                        <ShopNowArrow color="#141718"/>
                    </div>
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
        </div>
    );
};

export default Articles;
