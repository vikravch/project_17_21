import React, {useEffect} from 'react';
import alsoStyle from './BlogAlso.module.css';
import {IArticle} from "../../utils/data/data";
import {Link} from "react-router-dom";
import BlogCard from "../BlogCard/BlogCard";
import ArrowArt from "../../utils/icons/ArrowArt";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../../../general/redux/store";
import {getAllArticlesBlogAsync} from "../../redux/asyncBlogActions";

const BlogAlso = () => {



    const allBlogArticles = useSelector((state: RootState) => state.getAllBlogArticles.blogArticles);
    const dispatch = useDispatch<AppDispatch>();
    const arrayMore: IArticle[] = [...allBlogArticles];
    arrayMore.sort((a, b) => b.date.getTime() - a.date.getTime());
    let tempMore: IArticle[] = arrayMore.slice(0, 3);

    useEffect(() => {
        dispatch(getAllArticlesBlogAsync());
    },);
    return (
        <div className={alsoStyle.wrapperAlso}>
            <div className={alsoStyle.headerAlso}>
                <p className={alsoStyle.alsoMain}>You might also like</p>
                <Link to={"/blog"} className={alsoStyle.moreAlso}>
                    <div>More articles</div>
                    <div className={alsoStyle.arrow}><ArrowArt/></div>
                </Link>
            </div>
            <div className={alsoStyle.cardsAlso}>
                {tempMore.map((item, index) =><Link
                    className={alsoStyle.wrapperCard} id={`${item.index}`} key={index}
                    to={`/blog/article/${item.index}`}><BlogCard key={index}
                                                                 imgArt={item.images[0]}
                                                                 title={item.title}
                                                                 date={item.date.toLocaleDateString("en-US", {
                                                                     year: 'numeric',
                                                                     month: 'long',
                                                                     day: 'numeric'
                                                                 })}></BlogCard></Link>
                )}
            </div>
        </div>
    );
};

export default BlogAlso;