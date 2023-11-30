import React from 'react';

type Props = {
    color: string
}

const FacebookIcon = (props: Props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none" cursor={'pointer'}>
            <path d="M18.5 3H15.5C12.7386 3 10.5 5.23858 10.5 8V10H6.5V14H10.5V21H14.5V14H18.5V10H14.5V8C14.5 7.44772 14.9477 7 15.5 7H18.5V3Z" stroke={props.color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    );
};

export default FacebookIcon;