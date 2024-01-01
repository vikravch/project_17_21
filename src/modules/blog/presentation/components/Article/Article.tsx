import React, {useEffect, useState} from 'react';
import articleStyle from './Article.module.css';
import BlogAlso from "../BlogAlso/BlogAlso";
import UserIcon from "../../utils/icons/UserIcon";
import CalendarIco from "../../utils/icons/CalendarIco";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../../../general/redux/store";
import {getAllArticlesBlogAsync} from "../../redux/asyncBlogActions";
import Articles from "../../domain/model/articles";


const Article = () => {


    const articleId = +useSelector((state: RootState) => state.blogArticleId.articleIndex);
    const allBlogArticles = useSelector((state: RootState) => state.getAllBlogArticles.blogArticles);
    const dispatch = useDispatch<AppDispatch>();
    const test: Articles[] = [...allBlogArticles];
    const [art, setArt] = useState<Articles>({
        title: '',
        author: '',
        text: [],
        images: [],
        date: new Date(),
        index: articleId,
        featured: false
    });

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(getAllArticlesBlogAsync());

        let check: Articles = test.find(el => el.index === articleId)!;
        setArt(check)
    },);


    return (
        <div className={articleStyle.articleMain}>
            <div className={articleStyle.articleWrapper}>
                <div className={articleStyle.articleHead}>
                    <h2 className={articleStyle.h2}>{art.title}</h2>
                    <div className={articleStyle.authorArt}>
                        <span className={articleStyle.authorName}><div
                            className={articleStyle.userIco}><UserIcon/></div>
                            {art.author}</span>
                        <span className={articleStyle.authorName}><div
                            className={articleStyle.userIco}><CalendarIco/></div>
                            {art.date.toLocaleDateString("en-US", {year: 'numeric', month: 'long', day: 'numeric'})}</span>
                    </div>
                </div>

                <img className={articleStyle.images} alt={'img'} src={art.images[0]}></img>
                <div dangerouslySetInnerHTML={{__html: art.text[0]}}></div>
                <img className={articleStyle.images} alt={'img'} src={art.images[1]}></img>
                <div dangerouslySetInnerHTML={{__html: art.text[1]}}></div>
                <img className={articleStyle.images} alt={'img'} src={art.images[2]}></img>
                <div dangerouslySetInnerHTML={{__html: art.text[2]}}></div>
                <BlogAlso/>
            </div>
        </div>

    );
};

export default Article;