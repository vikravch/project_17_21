import {Article} from "../../presentation/redux/types";


export interface ArticleRepository {

    getAllArticles(): Promise<Article[]>;
    getLatestArticles(): Promise<Article[]>;
}