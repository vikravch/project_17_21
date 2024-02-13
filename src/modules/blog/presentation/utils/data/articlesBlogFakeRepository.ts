import Articles from "../../domain/model/articles";
import {articles} from "./data";
import ArticlesBlogRepository from "../../domain/repository/articlesBlogRepository";


let articleTest: Articles[] = [...articles];
let articlesForBlog: Articles[] = [];

for (let i = 0; i<articleTest.length; i++)
{
    articlesForBlog.push({
        title: articleTest[i].title,
        author: articleTest[i].author,
        text: articleTest[i].text,
        images: articleTest[i].images,
        date: articleTest[i].date,
        index: articleTest[i].index,
        featured: articleTest[i].featured
    });
}

export default class ArticlesBlogFakeRepository implements ArticlesBlogRepository
{
    async getAllArticles(): Promise<Articles[]> {
        return await Promise.resolve(articlesForBlog);
    }

}