import React, {useEffect, useState} from 'react';
import "./Articles.css"
import ArticleCard from "./ArticleCard";
import ShopNowArrow from "../../icons/ShopNowArrow";
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../../../general/redux/store";
import {getLatestArticlesAsyncAction} from "../../redux/articalAsyncActions";




const Articles = () => {
    const dispatch = useDispatch<AppDispatch>();
    const latestArticles = useSelector((state: RootState) => state.articles.latestArticles);

    useEffect(() => {
        dispatch(getLatestArticlesAsyncAction());
    }, [dispatch]);

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
                        <Link to="/blog/article" className={'shop_now_btn'}>More Articles</Link>
                        <ShopNowArrow color="#141718"/>
                    </div>
                </div>
                <div className={'cards_block'}>
                    {latestArticles.map((article, index) => (
                        <ArticleCard
                            key={index}
                            img={article.img}
                            title={article.title}
                            text={article.text}
                            date={article.date}
                            onClick={() => handleReadMoreClick(article.text)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Articles;
