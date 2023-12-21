
export interface IArticle
{
    title: string
    author: string
    text: string[]
    images: string[]
    date: string
    index: number
}

export const img1: string = require('../styles/images/ImageBlog1.jpg');
export const img2: string = require('../styles/images/img22.jpg');
export const img3: string = require('../styles/images/img33.png');
export const img4: string = require('../styles/images/img4.jpg');
export const img5: string = require('../styles/images/img5.jpeg');
export const img6: string = require('../styles/images/img6.jpg');
export const img7: string = require('../styles/images/img7.jpg');
export const img8: string = require('../styles/images/img8.jpg');
export const img9: string = require('../styles/images/img9.jpg');
export const img10: string = require('../styles/images/headerBlog.jpg');

export const articles: IArticle[] = [
    {
        title: "1How to make a busy bathroom a place to relax",
        author: 'Henrik Annemark',
        text: [" <p> 1Your bathroom serves a string of busy functions on a daily basis. See how you can make all of them work, and still have room for comfort and relaxation. </p>\n" +
        "                <h3>A cleaning hub with built-in ventilation</h3>\n" +
        "                <p>Use a rod and a shower curtain to create a complement to your cleaning cupboard. Unsightly equipment is stored out of sight yet accessibly close – while the air flow helps dry any dampness.</p>",
            "<h3> Storage with a calming effect</h3>\n" +
            "                <p>Having a lot to store doesn’t mean it all has to go in a cupboard. Many bathroom items are better kept out in the open – either to be close at hand or are nice to look at. Add a plant or two to set a calm mood for the entire room (and they’ll thrive in the humid air).</p>\n" +
            "                <h3>Kit your clutter for easy access</h3>\n" +
            "                <p>Even if you have a cabinet ready to swallow the clutter, it’s worth resisting a little. Let containers hold kits for different activities – home spa, make-up, personal hygiene – to bring out or put back at a moment’s notice.</p>\n" +
            "            ",
        "<h3> Make your mop disappear </h3>\n" +
        "            <p>Having your cleaning tools organized makes them easier to both use and return to. When they’re not needed, close the curtain and feel the peace of mind it brings.</p>\n" +
        "            "],
        images: [img1,img2,img3],
        date: 'November, 19, 2023',
        index: 0
    },
    {
        title: "2How to make a busy bathroom a place to relax",
        author: 'Henrik Annemark',
        text: [" <p> 2Your bathroom serves a string of busy functions on a daily basis. See how you can make all of them work, and still have room for comfort and relaxation. </p>\n" +
        "                <h3>A cleaning hub with built-in ventilation</h3>\n" +
        "                <p>Use a rod and a shower curtain to create a complement to your cleaning cupboard. Unsightly equipment is stored out of sight yet accessibly close – while the air flow helps dry any dampness.</p>",
            "<h3> Storage with a calming effect</h3>\n" +
            "                <p>Having a lot to store doesn’t mean it all has to go in a cupboard. Many bathroom items are better kept out in the open – either to be close at hand or are nice to look at. Add a plant or two to set a calm mood for the entire room (and they’ll thrive in the humid air).</p>\n" +
            "                <h3>Kit your clutter for easy access</h3>\n" +
            "                <p>Even if you have a cabinet ready to swallow the clutter, it’s worth resisting a little. Let containers hold kits for different activities – home spa, make-up, personal hygiene – to bring out or put back at a moment’s notice.</p>\n" +
            "            ",
            "<h3> Make your mop disappear </h3>\n" +
            "            <p>Having your cleaning tools organized makes them easier to both use and return to. When they’re not needed, close the curtain and feel the peace of mind it brings.</p>\n" +
            "            "],
        images: [img4,img5,img6],
        date: 'November, 19, 2023',
        index: 1
    },
    {
        title: "3How to make a busy bathroom a place to relax",
        author: 'Henrik Annemark',
        text: [" <p> 3Your bathroom serves a string of busy functions on a daily basis. See how you can make all of them work, and still have room for comfort and relaxation. </p>\n" +
        "                <h3>A cleaning hub with built-in ventilation</h3>\n" +
        "                <p>Use a rod and a shower curtain to create a complement to your cleaning cupboard. Unsightly equipment is stored out of sight yet accessibly close – while the air flow helps dry any dampness.</p>",
            "<h3> Storage with a calming effect</h3>\n" +
            "                <p>Having a lot to store doesn’t mean it all has to go in a cupboard. Many bathroom items are better kept out in the open – either to be close at hand or are nice to look at. Add a plant or two to set a calm mood for the entire room (and they’ll thrive in the humid air).</p>\n" +
            "                <h3>Kit your clutter for easy access</h3>\n" +
            "                <p>Even if you have a cabinet ready to swallow the clutter, it’s worth resisting a little. Let containers hold kits for different activities – home spa, make-up, personal hygiene – to bring out or put back at a moment’s notice.</p>\n" +
            "            ",
            "<h3> Make your mop disappear </h3>\n" +
            "            <p>Having your cleaning tools organized makes them easier to both use and return to. When they’re not needed, close the curtain and feel the peace of mind it brings.</p>\n" +
            "            "],
        images: [img7,img8,img9],
        date: 'November, 19, 2023',
        index: 2
    },
    {
        title: "4How to make a busy bathroom a place to relax",
        author: 'Henrik Annemark',
        text: [" <p> 4Your bathroom serves a string of busy functions on a daily basis. See how you can make all of them work, and still have room for comfort and relaxation. </p>\n" +
        "                <h3>A cleaning hub with built-in ventilation</h3>\n" +
        "                <p>Use a rod and a shower curtain to create a complement to your cleaning cupboard. Unsightly equipment is stored out of sight yet accessibly close – while the air flow helps dry any dampness.</p>",
            "<h3> Storage with a calming effect</h3>\n" +
            "                <p>Having a lot to store doesn’t mean it all has to go in a cupboard. Many bathroom items are better kept out in the open – either to be close at hand or are nice to look at. Add a plant or two to set a calm mood for the entire room (and they’ll thrive in the humid air).</p>\n" +
            "                <h3>Kit your clutter for easy access</h3>\n" +
            "                <p>Even if you have a cabinet ready to swallow the clutter, it’s worth resisting a little. Let containers hold kits for different activities – home spa, make-up, personal hygiene – to bring out or put back at a moment’s notice.</p>\n" +
            "            ",
            "<h3> Make your mop disappear </h3>\n" +
            "            <p>Having your cleaning tools organized makes them easier to both use and return to. When they’re not needed, close the curtain and feel the peace of mind it brings.</p>\n" +
            "            "],
        images: [img8,img3,img4],
        date: 'November, 19, 2023',
        index: 3
    },
    {
        title: "5How to make a busy bathroom a place to relax",
        author: 'Henrik Annemark',
        text: [" <p> 5Your bathroom serves a string of busy functions on a daily basis. See how you can make all of them work, and still have room for comfort and relaxation. </p>\n" +
        "                <h3>A cleaning hub with built-in ventilation</h3>\n" +
        "                <p>Use a rod and a shower curtain to create a complement to your cleaning cupboard. Unsightly equipment is stored out of sight yet accessibly close – while the air flow helps dry any dampness.</p>",
            "<h3> Storage with a calming effect</h3>\n" +
            "                <p>Having a lot to store doesn’t mean it all has to go in a cupboard. Many bathroom items are better kept out in the open – either to be close at hand or are nice to look at. Add a plant or two to set a calm mood for the entire room (and they’ll thrive in the humid air).</p>\n" +
            "                <h3>Kit your clutter for easy access</h3>\n" +
            "                <p>Even if you have a cabinet ready to swallow the clutter, it’s worth resisting a little. Let containers hold kits for different activities – home spa, make-up, personal hygiene – to bring out or put back at a moment’s notice.</p>\n" +
            "            ",
            "<h3> Make your mop disappear </h3>\n" +
            "            <p>Having your cleaning tools organized makes them easier to both use and return to. When they’re not needed, close the curtain and feel the peace of mind it brings.</p>\n" +
            "            "],
        images: [img4,img2,img7],
        date: 'November, 19, 2023',
        index: 4
    },
    {
        title: "6How to make a busy bathroom a place to relax",
        author: 'Henrik Annemark',
        text: [" <p> 6Your bathroom serves a string of busy functions on a daily basis. See how you can make all of them work, and still have room for comfort and relaxation. </p>\n" +
        "                <h3>A cleaning hub with built-in ventilation</h3>\n" +
        "                <p>Use a rod and a shower curtain to create a complement to your cleaning cupboard. Unsightly equipment is stored out of sight yet accessibly close – while the air flow helps dry any dampness.</p>",
            "<h3> Storage with a calming effect</h3>\n" +
            "                <p>Having a lot to store doesn’t mean it all has to go in a cupboard. Many bathroom items are better kept out in the open – either to be close at hand or are nice to look at. Add a plant or two to set a calm mood for the entire room (and they’ll thrive in the humid air).</p>\n" +
            "                <h3>Kit your clutter for easy access</h3>\n" +
            "                <p>Even if you have a cabinet ready to swallow the clutter, it’s worth resisting a little. Let containers hold kits for different activities – home spa, make-up, personal hygiene – to bring out or put back at a moment’s notice.</p>\n" +
            "            ",
            "<h3> Make your mop disappear </h3>\n" +
            "            <p>Having your cleaning tools organized makes them easier to both use and return to. When they’re not needed, close the curtain and feel the peace of mind it brings.</p>\n" +
            "            "],
        images: [img5,img2,img6],
        date: 'November, 19, 2023',
        index: 5
    },
    {
        title: "7How to make a busy bathroom a place to relax",
        author: 'Henrik Annemark',
        text: [" <p> 7Your bathroom serves a string of busy functions on a daily basis. See how you can make all of them work, and still have room for comfort and relaxation. </p>\n" +
        "                <h3>A cleaning hub with built-in ventilation</h3>\n" +
        "                <p>Use a rod and a shower curtain to create a complement to your cleaning cupboard. Unsightly equipment is stored out of sight yet accessibly close – while the air flow helps dry any dampness.</p>",
            "<h3> Storage with a calming effect</h3>\n" +
            "                <p>Having a lot to store doesn’t mean it all has to go in a cupboard. Many bathroom items are better kept out in the open – either to be close at hand or are nice to look at. Add a plant or two to set a calm mood for the entire room (and they’ll thrive in the humid air).</p>\n" +
            "                <h3>Kit your clutter for easy access</h3>\n" +
            "                <p>Even if you have a cabinet ready to swallow the clutter, it’s worth resisting a little. Let containers hold kits for different activities – home spa, make-up, personal hygiene – to bring out or put back at a moment’s notice.</p>\n" +
            "            ",
            "<h3> Make your mop disappear </h3>\n" +
            "            <p>Having your cleaning tools organized makes them easier to both use and return to. When they’re not needed, close the curtain and feel the peace of mind it brings.</p>\n" +
            "            "],
        images: [img3,img2,img5],
        date: 'November, 19, 2023',
        index: 6
    },
    {
        title: "8How to make a busy bathroom a place to relax",
        author: 'Henrik Annemark',
        text: [" <p> 8Your bathroom serves a string of busy functions on a daily basis. See how you can make all of them work, and still have room for comfort and relaxation. </p>\n" +
        "                <h3>A cleaning hub with built-in ventilation</h3>\n" +
        "                <p>Use a rod and a shower curtain to create a complement to your cleaning cupboard. Unsightly equipment is stored out of sight yet accessibly close – while the air flow helps dry any dampness.</p>",
            "<h3> Storage with a calming effect</h3>\n" +
            "                <p>Having a lot to store doesn’t mean it all has to go in a cupboard. Many bathroom items are better kept out in the open – either to be close at hand or are nice to look at. Add a plant or two to set a calm mood for the entire room (and they’ll thrive in the humid air).</p>\n" +
            "                <h3>Kit your clutter for easy access</h3>\n" +
            "                <p>Even if you have a cabinet ready to swallow the clutter, it’s worth resisting a little. Let containers hold kits for different activities – home spa, make-up, personal hygiene – to bring out or put back at a moment’s notice.</p>\n" +
            "            ",
            "<h3> Make your mop disappear </h3>\n" +
            "            <p>Having your cleaning tools organized makes them easier to both use and return to. When they’re not needed, close the curtain and feel the peace of mind it brings.</p>\n" +
            "            "],
        images: [img6,img2,img8],
        date: 'November, 19, 2023',
        index: 7
    },
    {
        title: "9How to make a busy bathroom a place to relax",
        author: 'Henrik Annemark',
        text: [" <p> 9Your bathroom serves a string of busy functions on a daily basis. See how you can make all of them work, and still have room for comfort and relaxation. </p>\n" +
        "                <h3>A cleaning hub with built-in ventilation</h3>\n" +
        "                <p>Use a rod and a shower curtain to create a complement to your cleaning cupboard. Unsightly equipment is stored out of sight yet accessibly close – while the air flow helps dry any dampness.</p>",
            "<h3> Storage with a calming effect</h3>\n" +
            "                <p>Having a lot to store doesn’t mean it all has to go in a cupboard. Many bathroom items are better kept out in the open – either to be close at hand or are nice to look at. Add a plant or two to set a calm mood for the entire room (and they’ll thrive in the humid air).</p>\n" +
            "                <h3>Kit your clutter for easy access</h3>\n" +
            "                <p>Even if you have a cabinet ready to swallow the clutter, it’s worth resisting a little. Let containers hold kits for different activities – home spa, make-up, personal hygiene – to bring out or put back at a moment’s notice.</p>\n" +
            "            ",
            "<h3> Make your mop disappear </h3>\n" +
            "            <p>Having your cleaning tools organized makes them easier to both use and return to. When they’re not needed, close the curtain and feel the peace of mind it brings.</p>\n" +
            "            "],
        images: [img9,img1,img5],
        date: 'November, 19, 2023',
        index: 8
    },
    {
        title: "10How to make a busy bathroom a place to relax",
        author: 'Henrik Annemark',
        text: [" <p> 10Your bathroom serves a string of busy functions on a daily basis. See how you can make all of them work, and still have room for comfort and relaxation. </p>\n" +
        "                <h3>A cleaning hub with built-in ventilation</h3>\n" +
        "                <p>Use a rod and a shower curtain to create a complement to your cleaning cupboard. Unsightly equipment is stored out of sight yet accessibly close – while the air flow helps dry any dampness.</p>",
            "<h3> Storage with a calming effect</h3>\n" +
            "                <p>Having a lot to store doesn’t mean it all has to go in a cupboard. Many bathroom items are better kept out in the open – either to be close at hand or are nice to look at. Add a plant or two to set a calm mood for the entire room (and they’ll thrive in the humid air).</p>\n" +
            "                <h3>Kit your clutter for easy access</h3>\n" +
            "                <p>Even if you have a cabinet ready to swallow the clutter, it’s worth resisting a little. Let containers hold kits for different activities – home spa, make-up, personal hygiene – to bring out or put back at a moment’s notice.</p>\n" +
            "            ",
            "<h3> Make your mop disappear </h3>\n" +
            "            <p>Having your cleaning tools organized makes them easier to both use and return to. When they’re not needed, close the curtain and feel the peace of mind it brings.</p>\n" +
            "            "],
        images: [img4,img1,img3],
        date: 'November, 19, 2023',
        index: 9
    },
    {
        title: "11How to make a busy bathroom a place to relax",
        author: 'Henrik Annemark',
        text: [" <p> 11Your bathroom serves a string of busy functions on a daily basis. See how you can make all of them work, and still have room for comfort and relaxation. </p>\n" +
        "                <h3>A cleaning hub with built-in ventilation</h3>\n" +
        "                <p>Use a rod and a shower curtain to create a complement to your cleaning cupboard. Unsightly equipment is stored out of sight yet accessibly close – while the air flow helps dry any dampness.</p>",
            "<h3> Storage with a calming effect</h3>\n" +
            "                <p>Having a lot to store doesn’t mean it all has to go in a cupboard. Many bathroom items are better kept out in the open – either to be close at hand or are nice to look at. Add a plant or two to set a calm mood for the entire room (and they’ll thrive in the humid air).</p>\n" +
            "                <h3>Kit your clutter for easy access</h3>\n" +
            "                <p>Even if you have a cabinet ready to swallow the clutter, it’s worth resisting a little. Let containers hold kits for different activities – home spa, make-up, personal hygiene – to bring out or put back at a moment’s notice.</p>\n" +
            "            ",
            "<h3> Make your mop disappear </h3>\n" +
            "            <p>Having your cleaning tools organized makes them easier to both use and return to. When they’re not needed, close the curtain and feel the peace of mind it brings.</p>\n" +
            "            "],
        images: [img6,img4,img3],
        date: 'November, 19, 2023',
        index: 10
    },
    {
        title: "12How to make a busy bathroom a place to relax",
        author: 'Henrik Annemark',
        text: [" <p> 12Your bathroom serves a string of busy functions on a daily basis. See how you can make all of them work, and still have room for comfort and relaxation. </p>\n" +
        "                <h3>A cleaning hub with built-in ventilation</h3>\n" +
        "                <p>Use a rod and a shower curtain to create a complement to your cleaning cupboard. Unsightly equipment is stored out of sight yet accessibly close – while the air flow helps dry any dampness.</p>",
            "<h3> Storage with a calming effect</h3>\n" +
            "                <p>Having a lot to store doesn’t mean it all has to go in a cupboard. Many bathroom items are better kept out in the open – either to be close at hand or are nice to look at. Add a plant or two to set a calm mood for the entire room (and they’ll thrive in the humid air).</p>\n" +
            "                <h3>Kit your clutter for easy access</h3>\n" +
            "                <p>Even if you have a cabinet ready to swallow the clutter, it’s worth resisting a little. Let containers hold kits for different activities – home spa, make-up, personal hygiene – to bring out or put back at a moment’s notice.</p>\n" +
            "            ",
            "<h3> Make your mop disappear </h3>\n" +
            "            <p>Having your cleaning tools organized makes them easier to both use and return to. When they’re not needed, close the curtain and feel the peace of mind it brings.</p>\n" +
            "            "],
        images: [img2,img9,img7],
        date: 'November, 19, 2023',
        index: 11
    },
    {
        title: "13How to make a busy bathroom a place to relax",
        author: 'Henrik Annemark',
        text: [" <p> 13Your bathroom serves a string of busy functions on a daily basis. See how you can make all of them work, and still have room for comfort and relaxation. </p>\n" +
        "                <h3>A cleaning hub with built-in ventilation</h3>\n" +
        "                <p>Use a rod and a shower curtain to create a complement to your cleaning cupboard. Unsightly equipment is stored out of sight yet accessibly close – while the air flow helps dry any dampness.</p>",
            "<h3> Storage with a calming effect</h3>\n" +
            "                <p>Having a lot to store doesn’t mean it all has to go in a cupboard. Many bathroom items are better kept out in the open – either to be close at hand or are nice to look at. Add a plant or two to set a calm mood for the entire room (and they’ll thrive in the humid air).</p>\n" +
            "                <h3>Kit your clutter for easy access</h3>\n" +
            "                <p>Even if you have a cabinet ready to swallow the clutter, it’s worth resisting a little. Let containers hold kits for different activities – home spa, make-up, personal hygiene – to bring out or put back at a moment’s notice.</p>\n" +
            "            ",
            "<h3> Make your mop disappear </h3>\n" +
            "            <p>Having your cleaning tools organized makes them easier to both use and return to. When they’re not needed, close the curtain and feel the peace of mind it brings.</p>\n" +
            "            "],
        images: [img7,img4,img3],
        date: 'November, 19, 2023',
        index: 12
    },
    {
        title: "14How to make a busy bathroom a place to relax",
        author: 'Henrik Annemark',
        text: [" <p> 14Your bathroom serves a string of busy functions on a daily basis. See how you can make all of them work, and still have room for comfort and relaxation. </p>\n" +
        "                <h3>A cleaning hub with built-in ventilation</h3>\n" +
        "                <p>Use a rod and a shower curtain to create a complement to your cleaning cupboard. Unsightly equipment is stored out of sight yet accessibly close – while the air flow helps dry any dampness.</p>",
            "<h3> Storage with a calming effect</h3>\n" +
            "                <p>Having a lot to store doesn’t mean it all has to go in a cupboard. Many bathroom items are better kept out in the open – either to be close at hand or are nice to look at. Add a plant or two to set a calm mood for the entire room (and they’ll thrive in the humid air).</p>\n" +
            "                <h3>Kit your clutter for easy access</h3>\n" +
            "                <p>Even if you have a cabinet ready to swallow the clutter, it’s worth resisting a little. Let containers hold kits for different activities – home spa, make-up, personal hygiene – to bring out or put back at a moment’s notice.</p>\n" +
            "            ",
            "<h3> Make your mop disappear </h3>\n" +
            "            <p>Having your cleaning tools organized makes them easier to both use and return to. When they’re not needed, close the curtain and feel the peace of mind it brings.</p>\n" +
            "            "],
        images: [img3,img8,img9],
        date: 'November, 19, 2023',
        index: 13
    },
    {
        title: "15How to make a busy bathroom a place to relax",
        author: 'Henrik Annemark',
        text: [" <p> 15Your bathroom serves a string of busy functions on a daily basis. See how you can make all of them work, and still have room for comfort and relaxation. </p>\n" +
        "                <h3>A cleaning hub with built-in ventilation</h3>\n" +
        "                <p>Use a rod and a shower curtain to create a complement to your cleaning cupboard. Unsightly equipment is stored out of sight yet accessibly close – while the air flow helps dry any dampness.</p>",
            "<h3> Storage with a calming effect</h3>\n" +
            "                <p>Having a lot to store doesn’t mean it all has to go in a cupboard. Many bathroom items are better kept out in the open – either to be close at hand or are nice to look at. Add a plant or two to set a calm mood for the entire room (and they’ll thrive in the humid air).</p>\n" +
            "                <h3>Kit your clutter for easy access</h3>\n" +
            "                <p>Even if you have a cabinet ready to swallow the clutter, it’s worth resisting a little. Let containers hold kits for different activities – home spa, make-up, personal hygiene – to bring out or put back at a moment’s notice.</p>\n" +
            "            ",
            "<h3> Make your mop disappear </h3>\n" +
            "            <p>Having your cleaning tools organized makes them easier to both use and return to. When they’re not needed, close the curtain and feel the peace of mind it brings.</p>\n" +
            "            "],
        images: [img7,img8,img9],
        date: 'November, 19, 2023',
        index: 14
    }

    ]