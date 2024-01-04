import table from '../images/Paste image.png'
import icon from'../images/Star Icon.svg';

import arrow from '../images/direction-right 01.svg';

import table01 from '../images/table01.png';

import table02 from '../images/table02.png';

import table03 from '../images/table03.png';

import table04 from '../images/table04.png';


import first from '../images/First.png';

import second from '../images/second.png';

import third from '../images/third.png';


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

export const tables: Table[] =[
    {
        title: 'dark',
        img: table01
    },
    {
        title: 'white',
        img: table02
    },
    {
        title: 'red',
        img: table03
    },
    {
        title: 'wood',
        img: table04
    }
];

export const slideElements : Table[] = [
    {
        title: 'first slide',
        img: first
    },
    {
        title: 'second slide',
        img: second
    },
    {
        title: 'third slide',
        img: third
    },

]