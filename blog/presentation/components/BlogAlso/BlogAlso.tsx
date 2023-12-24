import React from 'react';
import alsoStyle from './BlogAlso.module.css';
import {IArticle, articles} from "../../utils/data";
import blogStyle from "../../../page/Blog.module.css";
import {Link} from "react-router-dom";
import BlogCard from "../BlogCard/BlogCard";
import ArrowArt from "../../utils/icons/ArrowArt";
import {useDispatch} from "react-redux";
import {getIndex} from "../../redux/articlesIndexSlice";

const BlogAlso = () => {


    const arrayMore: IArticle[] = [...articles];
    arrayMore.sort(() => Math.random() - 0.5);
    let tempMore: IArticle[] = arrayMore.slice(0, 3);
    const dispatch = useDispatch();

    return (
        <div className={alsoStyle.wrapperAlso}>
            <div className={alsoStyle.headerAlso}>
                <p className={alsoStyle.alsoMain}>You might also like</p>
                <Link to={"/blog"} className={alsoStyle.moreAlso}><div>More articles</div> <div className={alsoStyle.arrow}><ArrowArt/></div></Link>
            </div>
            <div className={alsoStyle.cardsAlso}>
                {tempMore.map((item, index) =><div key={index} className={blogStyle.wrapper}><Link className={blogStyle.wrapper} id={`${item.index}`} key={index} to={"/blog/article"} onClick={(event) => dispatch(getIndex(event.currentTarget.id))}><BlogCard key={index} imgArt={item.images[0]} title={item.title} date={item.date} ></BlogCard></Link></div>)}
            </div>
        </div>
    );
};

export default BlogAlso;