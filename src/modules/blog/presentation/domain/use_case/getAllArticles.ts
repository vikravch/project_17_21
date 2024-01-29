import ArticlesBlogFakeRepository from "../../utils/data/articlesBlogFakeRepository";
import Articles from "../model/articles";


const GetAllBlogArticles = (
    articlesBlogFakeRepository: ArticlesBlogFakeRepository
) => async (): Promise<Articles[]> =>
{
    try {
        return  await articlesBlogFakeRepository.getAllArticles();
    }
    catch (e)
    {
        throw e;
    }
}

export default GetAllBlogArticles;