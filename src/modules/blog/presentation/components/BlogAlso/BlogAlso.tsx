import React from 'react';
import alsoStyle from './BlogAlso.module.css';
import {IArticle} from "../../utils/data/data";
import blogStyle from "../../../page/Blog.module.css";
import {Link} from "react-router-dom";
import BlogCard from "../BlogCard/BlogCard";
import ArrowArt from "../../utils/icons/ArrowArt";
import {useDispatch, useSelector} from "react-redux";
import {getIndex} from "../../redux/articlesIndexSlice";
import {AppDispatch, RootState} from "../../../../../general/redux/store";

const BlogAlso = () => {


    const dispatch = useDispatch<AppDispatch>();
    const allBlogArticles = useSelector((state: RootState) => state.getAllBlogArticles.blogArticles);

    const arrayMore: IArticle[] = [...allBlogArticles];
    arrayMore.sort(() => Math.random() - 0.5);
    let tempMore: IArticle[] = arrayMore.slice(0, 3);
    return (
        <div className={alsoStyle.wrapperAlso}>
            <div className={alsoStyle.headerAlso}>
                <p className={alsoStyle.alsoMain}>You might also like</p>
                <Link to={"/blog"} className={alsoStyle.moreAlso}><div>More articles</div> <div className={alsoStyle.arrow}><ArrowArt/></div></Link>
            </div>
            <div className={alsoStyle.cardsAlso}>
                {tempMore.map((item, index) =><div key={index} className={blogStyle.wrapper}><Link className={blogStyle.wrapper} id={`${item.index}`} key={index} to={"/blog/article"} onClick={(event) => dispatch(getIndex(event.currentTarget.id))}><BlogCard key={index} imgArt={item.images[0]} title={item.title} date={item.date.toLocaleDateString("en-US", {year: 'numeric', month: 'long', day: 'numeric'})} ></BlogCard></Link></div>)}
            </div>
        </div>
    );
};

export default BlogAlso;