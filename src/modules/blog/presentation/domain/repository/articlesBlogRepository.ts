import Articles from "../model/articles";

export default interface ArticlesBlogRepository {
    getAllArticles: () => Promise<Articles[]>;
}