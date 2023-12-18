import React from 'react';
import "./ArticleCard.css";
import ShopNowArrow from "../../icons/ShopNowArrow";

interface ArticleProps {
    img: string;
    title: string;
    text: string;
    date: Date;
    onClick: () => void;
}

const ArticleCard = (props: ArticleProps) => {
    return (
        <div className={'article-card-wrapper'}>
            <div className={'articles_image'}>
                <img src={`${props.img}`} alt={`Illustration for ${props.title}`}/>
            </div>
            <div className={'img-info'}>
                <h3 className={'article_title'}>{props.title}</h3>
                <div className={'shop_now_link'}>
                    <button onClick={props.onClick} className={'shop_now_btn'}>Read more</button>
                    <ShopNowArrow color="#141718"/>
                </div>
            </div>
        </div>
    );
};

export default ArticleCard;

