import React from 'react';
import style from './Badge.module.css';

interface Props{
    type: "sale" | "new",
    sale?: number
}
const Badge = (props: Props) => {
    return (
        <div className={`${style.badge} ${props.type === "sale" ? style.sale : style.new}`}>
            <p>{props.type === "sale" ? `-${props.sale}%` : props.type.toUpperCase()}</p>
        </div>
    );
};

export default Badge;