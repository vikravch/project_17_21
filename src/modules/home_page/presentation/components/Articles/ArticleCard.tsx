import React from 'react';
import "./ArticleCard.css";
import SliderArrowRight from "../../icons/SliderArrowRight";

interface ArticleProps {
    img: string;
    title: string;
    text: string;
    onClick: () => void;
}

const ArticleCard= (props: ArticleProps) =>
{
    return (
        <div className={'wrapper'}>
            <div className={'articles_image'} style={{background: `url(${props.img}) lightgray 50% / cover no-repeat`}}>

            </div>
            <div className={'img-info'}>
            <h3 className={'article_title'}>{props.title}</h3>
            <button onClick={props.onClick} className={'read_more_button'}>
                Read more <SliderArrowRight/>
            </button>
            </div>
        </div>
    );
};

export default ArticleCard;

