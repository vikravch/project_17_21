import React, {useEffect, useState} from 'react';
import blogStyle from './Blog.module.css';
import {IArticle} from "../presentation/utils/data/data";
import BlogCard from "../presentation/components/BlogCard/BlogCard";
import {Link} from "react-router-dom";
import HeaderBlog from "../presentation/components/OurBlog/HeaderBlog";
import SortWithView from "../presentation/components/SortBlock/SortWithView";
import {useDispatch, useSelector} from "react-redux";
import {getIndex} from "../presentation/redux/articlesIndexSlice";
import {AppDispatch, RootState} from "../../../general/redux/store";
import {getAllArticlesBlogAsync} from "../presentation/redux/asyncBlogActions";


const Blog = () => {
    const [count, setCount] = useState(12);
    const dispatch = useDispatch<AppDispatch>();
    const filter = useSelector((store: any) => store.blogFilter.ourStyle);
    const allBlogArticles = useSelector((state: RootState) => state.getAllBlogArticles.blogArticles);

    const array: IArticle[] = [...allBlogArticles];
    let temp: IArticle[] = count < array.length ? array.slice(0, count) : array.slice(0, array.length);
    temp = filter === 'featured'? temp.filter(el=>el.featured): temp;

    useEffect(() => {
        dispatch(getAllArticlesBlogAsync());
    }, );

    return <div className={blogStyle.blogWrapper}>
        <HeaderBlog/>
        <SortWithView/>
        <div className={blogStyle.blogWrapper}>
            {temp.map((item, index) => <Link id={`${item.index}`}
                                             onClick={(event) => dispatch(getIndex(event.currentTarget.id))} key={index}
                                             className={blogStyle.wrapper} to={"/blog/article"}><BlogCard key={index}
                                                                                                          imgArt={item.images[0]}
                                                                                                          title={item.title}
                                                                                                          date={item.date}></BlogCard></Link>)}
        </div>
        <div className={blogStyle.wrapperBtn}>
            <button className={blogStyle.btnMore} onClick={() => setCount(count + 12)}>Show more</button>
        </div>

    </div>
};

export default Blog;