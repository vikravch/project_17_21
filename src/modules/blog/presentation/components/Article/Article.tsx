import React, {useEffect} from 'react';
import articleStyle from './Article.module.css';
import {articles} from "../../utils/data/data";
import BlogAlso from "../BlogAlso/BlogAlso";
import UserIcon from "../../utils/icons/UserIcon";
import CalendarIco from "../../utils/icons/CalendarIco";
import {useSelector} from "react-redux";




const Article = () => {


    const articleId = useSelector((store: any) => store.blogArticleId.articleIndex);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, );

    return (
        <div className={articleStyle.articleMain}>
            <div className={articleStyle.articleWrapper}>
                <div className={articleStyle.articleHead}>
                    <h2 className={articleStyle.h2}>{articles[articleId].title}</h2>
                    <div className={articleStyle.authorArt}>
                        <span className={articleStyle.authorName}><div className={articleStyle.userIco}><UserIcon/></div>{articles[articleId].author}</span>
                        <span className={articleStyle.authorName}><div className={articleStyle.userIco}><CalendarIco/></div>{articles[articleId].date}</span>
                    </div>
                </div>

                <img className={articleStyle.images} alt={'img'} src={articles[articleId].images[0]}></img>
                <div dangerouslySetInnerHTML={{ __html: articles[articleId].text[0] }}></div>
                <img className={articleStyle.images} alt={'img'} src={articles[articleId].images[1]}></img>
                <div dangerouslySetInnerHTML={{ __html: articles[articleId].text[1] }}></div>
                <img className={articleStyle.images} alt={'img'} src={articles[articleId].images[2]}></img>
                <div dangerouslySetInnerHTML={{ __html: articles[articleId].text[2] }}></div>
                <BlogAlso/>
            </div>
        </div>

    );
};

export default Article;