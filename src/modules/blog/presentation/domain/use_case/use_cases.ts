import Articles from "../model/articles";


export type ArticleBlogUseCases = {
    getAllBlogArticles: () => Promise<Articles[]>
}