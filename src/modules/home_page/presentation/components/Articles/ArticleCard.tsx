import React from 'react';
import "../../page/HomePage.css";
import "./ArticleCard.css";
import Arrow from "../../icons/Arrow";

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
                Read more <Arrow color='#141718'/>
            </button>
            </div>
        </div>
    );
};

export default ArticleCard;

