
export interface IArticle
{
    title: string
    author: string
    text: string[]
    images: string[]
    date: Date
    index: number

    featured: boolean
}

export const img1: string = require('../../styles/images/ImageBlog1.webp');
export const img2: string = require('../../styles/images/img22.webp');
export const img3: string = require('../../styles/images/img33.webp');
export const img4: string = require('../../styles/images/img4.webp');
export const img5: string = require('../../styles/images/img5.webp');
export const img6: string = require('../../styles/images/img6.webp');
export const img7: string = require('../../styles/images/img7.webp');
export const img8: string = require('../../styles/images/img8.webp');
export const img9: string = require('../../styles/images/img9.webp');
export const img10: string = require('../../styles/images/headerBlog.webp');

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
        date: new Date('2023-10-10'),
        index: 0,
        featured: false
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
        date: new Date('2023-10-10'),
        index: 35,
        featured: true
    },
    {
        title: "3How to make a busy bathroom a place to relax",
        author: 'Stephen King',
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
        date: new Date('2022-11-17'),
        index: 22,
        featured: true
    },
    {
        title: "4How to make a busy bathroom a place to relax",
        author: 'Stephen King',
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
        date: new Date('2022-11-17'),
        index: 33,
        featured: true
    },
    {
        title: "5How to make a busy bathroom a place to relax",
        author: 'Christian Andersen',
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
        date: new Date('2022-11-17'),
        index: 4,
        featured: false
    },
    {
        title: "6How to make a busy bathroom a place to relax",
        author: 'Christian Andersen',
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
        date: new Date('2022-11-17'),
        index: 5,
        featured: false
    },
    {
        title: "7How to make a busy bathroom a place to relax",
        author: 'Christian Andersen',
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
        date: new Date('2020-08-10'),
        index: 6,
        featured: false
    },
    {
        title: "8How to make a busy bathroom a place to relax",
        author: 'Franz Kafka',
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
        date: new Date('2020-08-10'),
        index: 7,
        featured: true
    },
    {
        title: "9How to make a busy bathroom a place to relax",
        author: 'Franz Kafka',
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
        date: new Date('2020-08-10'),
        index: 8,
        featured: false
    },
    {
        title: "10How to make a busy bathroom a place to relax",
        author: 'Franz Kafka',
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
        date: new Date('2024-01-01'),
        index: 9,
        featured: false
    },
    {
        title: "11How to make a busy bathroom a place to relax",
        author: 'George Orwell',
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
        date: new Date('2024-01-01'),
        index: 10,
        featured: false
    },
    {
        title: "12How to make a busy bathroom a place to relax",
        author: 'George Orwell',
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
        date: new Date('2023-01-01'),
        index: 11,
        featured: true
    },
    {
        title: "13How to make a busy bathroom a place to relax",
        author: 'George Orwell',
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
        date: new Date('2023-01-01'),
        index: 12,
        featured: false
    },
    {
        title: "14How to make a busy bathroom a place to relax",
        author: 'Stephen King',
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
        date: new Date('2023-04-01'),
        index: 13,
        featured: true
    },
    {
        title: "15How to make a busy bathroom a place to relax",
        author: 'Christian Andersen',
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
        date: new Date('2023-06-01'),
        index: 14,
        featured: false
    }

    ]