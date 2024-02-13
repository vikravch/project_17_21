import React from 'react';
import styles from "../button/button.module.css";

interface IProps{
    children:string
    type?: "button" | "submit" | "reset"
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const Button = ({children, type, onClick}: IProps) => {
    return (
        <button type={type} onClick={onClick} className={styles.button}>{children}</button>
    );
};

export default Button;