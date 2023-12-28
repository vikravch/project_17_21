import ArticleClass from "../model/ArticleClass";
import ArticlesFakeRepository from "../../data/repository/articlesFakeRepository";

const GetLatestArticles = (articleFakeRepository: ArticlesFakeRepository) => {
    return async (): Promise<ArticleClass[]> => {
        try {
            const articles = await articleFakeRepository.getLatestArticles();
            return articles || [];
        } catch (e) {
            throw e;
        }
    };
};

export default GetLatestArticles;



