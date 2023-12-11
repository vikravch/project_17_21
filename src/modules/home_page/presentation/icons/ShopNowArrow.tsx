import React from 'react';

type Props = {
    color: string
}
function ShopNowArrow(props: Props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3.33331 8H12.6666" stroke={props.color} strokeWidth="1.25" strokeLinecap="round"
                  strokeLinejoin="round"/>
            <path d="M8.66669 12L12.6667 8" stroke={props.color} strokeWidth="1.25" strokeLinecap="round"
                  strokeLinejoin="round"/>
            <path d="M8.66669 4L12.6667 8" stroke={props.color} strokeWidth="1.25" strokeLinecap="round"
                  strokeLinejoin="round"/>
        </svg>
    );
}

export default ShopNowArrow;
