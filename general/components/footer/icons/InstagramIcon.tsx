import React from 'react';
type Props = {
    color: string
}


const InstagramIcon = (props: Props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none" cursor={'pointer'}>
            <rect x="2.5" y="2" width="20" height="20" rx="4" stroke={props.color} strokeWidth="1.5"/>
            <circle cx="18.5" cy="6" r="1" fill={props.color}/>
            <circle cx="12.5" cy="12" r="5" stroke={props.color} strokeWidth="1.5"/>
        </svg>
    );
};

export default InstagramIcon;