import React from 'react';
import cardStyle from './BlogCard.module.css'
interface PropsArt
{
    imgArt: string
    text: string
    date: string
}
const BlogCard = (props: PropsArt) => {


            return (
                <div className={cardStyle.wrapper}>
                    <div className={cardStyle.articleImg}>
                        <img alt={"img"} src={props.imgArt }></img>
                    </div>
                    <div className={cardStyle.mainField}><p>{props.text}</p></div>
                    <div className={cardStyle.dateField}><p>{props.date}</p></div>
                </div>
            );
        }

export default BlogCard;