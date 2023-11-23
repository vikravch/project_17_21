import React from 'react';
import cardStyle from './BlogCard.module.css'
interface Props
{
    imgArt: string
    text: string
    date: string
}
const BlogCard = (props: Props) => {


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