import table from '../images/Paste-image.webp'
import icon from'../images/Star Icon.svg';

import arrow from '../images/direction-right 01.svg';



import line from '../images/Line.svg';

interface Table {
    title: string
    img: string
}

export const Img: Table[] = [
    {
        title: 'table',
        img: table
    },
    {
        title: 'icon',
        img: icon
    },
    {
        title: 'arrow right',
        img: arrow
    },
    {
        title: 'heart',
        img: line
    }
];


