import React from 'react';

type Props = {
    color: string}


const YouTubeIcon = (props: Props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none" cursor={'pointer'}>
            <rect x="2.5" y="3" width="20" height="18" rx="4" stroke={props.color} strokeWidth="1.5"/>
            <path
                d="M10.9472 8.72361L15.7111 11.1056C16.4482 11.4741 16.4482 12.5259 15.7111 12.8944L10.9472 15.2764C10.2823 15.6088 9.5 15.1253 9.5 14.382V9.61803C9.5 8.87465 10.2823 8.39116 10.9472 8.72361Z"
                stroke={props.color} strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
    );
};

export default YouTubeIcon;