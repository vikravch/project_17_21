import React, {useEffect, useState} from 'react';
import articleStyle from './Article.module.css';
import BlogAlso from "../BlogAlso/BlogAlso";
import UserIcon from "../../utils/icons/UserIcon";
import CalendarIco from "../../utils/icons/CalendarIco";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../../../general/redux/store";
import {getAllArticlesBlogAsync} from "../../redux/asyncBlogActions";
import Articles from "../../domain/model/articles";
import {useParams} from "react-router";


const Article = () => {


    const allBlogArticles = useSelector((state: RootState) => state.getAllBlogArticles.blogArticles);
    const dispatch = useDispatch<AppDispatch>();
    const test: Articles[] = [...allBlogArticles];
    const {artId} = useParams() || '0';
    const [flag, setFlag] = useState<boolean>(false)
    const [art, setArt] = useState<Articles>({
        title: 'title',
        author: 'author',
        text: ['','',''],
        images: ['','',''],
        date: new Date(),
        index: 0,
        featured: false
    });

    function allActions()
    {
        dispatch(getAllArticlesBlogAsync());

        let check: Articles = test.find(el => el.index === +(artId || 0))!;
        if(check !== undefined)
        {
            setArt(check)
        }
        
        setFlag(true)
    }
    useEffect(() => {
        window.scrollTo(0, 0);
allActions();
    },);

    function before() {
        return <div>Loading...</div>
    }

    function after() {
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
            </div>)
    }

    return flag ? after() : before();
};

export default Article;