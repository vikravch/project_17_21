import React from 'react';

type Props = {
    color: string
}
function Payment_icon(props: Props) {
    return (

        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
            <rect x="4" y="8" width="40" height="32" rx="4" stroke={props.color} strokeWidth="2.5"/>
            <circle cx="4" cy="4" r="4" transform="matrix(1 0 0 -1 20 28)" stroke={props.color} strokeWidth="2.5"/>
            <circle cx="2" cy="2" r="2" transform="matrix(1 0 0 -1 34 26)" fill="#141718"/>
            <circle cx="2" cy="2" r="2" transform="matrix(1 0 0 -1 10 26)" fill="#141718"/>
        </svg>
    );
}

export default Payment_icon;