import React, {useEffect} from 'react';
import blogStyle from "../../../page/Blog.module.css";
import {selectFilter} from "../../redux/galleriesFilterStyleSlice";
import ViewSelector from "../../../../shop-page/presentation/components/view-selector/ViewSelector";
import {useDispatch, useSelector} from "react-redux";
import cardStyle from "../BlogCard/BlogCard.module.css";
import {AppStore} from "../../../../../general/redux/types";
import {Columns} from "../../../../shop-page/presentation/redux/types";
import Sort from "./Sort";

const View = () => {

    const dispatch = useDispatch();
    let allCard = document.getElementsByClassName(blogStyle.wrapper);
    let cards = document.getElementsByClassName(cardStyle.wrapper);

    const filter = useSelector((store: any) => store.blogFilter.ourStyle);
    const columns = useSelector<AppStore, Columns>(
        state => state.galleriesStyle
    );
    useEffect(()=>
    {
        for(let i=0;i<allCard.length;i++)
        {
            if (columns.countDesktop===2)
            {
                allCard[i].setAttribute('style', 'width: 500px');
                cards[i].setAttribute('style', 'width: 450px')
            }
            else if(columns.countDesktop===3)
            {
                allCard[i].setAttribute('style', 'width: 357px')
                cards[i].setAttribute('style', 'width: 327px')
            }
            else if(columns.countDesktop===4)
            {
                allCard[i].setAttribute('style', 'width: 250px')
                cards[i].setAttribute('style', 'width: 250px')
            }
        }

    })
    return (
        <div className={blogStyle.blocSelectorMain}>
            <div className={blogStyle.filterBlog}>
                <select defaultValue={'all'} onChange={(event)=> event.target.value === 'all'?dispatch(selectFilter("all")): dispatch(selectFilter("featured"))}>
                    <option value={'all'}>All blog</option>
                    <option value={'featured'}>Featured</option>
                </select>
            </div>
            <div className={blogStyle.blocSelectorMainSort}><div className={blogStyle.blocSelector}><p onClick={() => dispatch(selectFilter("all"))} className={filter === "all"? blogStyle.activeBlock:''}>All blog</p><p className={filter === "featured"? blogStyle.activeBlock:''} onClick={() => dispatch(selectFilter("featured"))}>Featured</p></div>
                <div className={blogStyle.blocSelector}><Sort/><div className={blogStyle.viewStyle}><ViewSelector/></div></div></div>
        </div>
    );
};

export default View;