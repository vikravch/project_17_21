import CategoryRepository from "../../domain/repository/categoryRepository";
import Category from "../../domain/model/category";

let testCategories: Category[] = [
    {
        id: 0,
        title: 'All rooms'
    },

    {
        id: 2,
        title: 'Living room'
    },

    {
        id: 3,
        title: 'Bedroom'
    },

    {
        id: 4,
        title: 'Kitchen'
    },

    {
        id: 5,
        title: 'Bathroom'
    },

    {
        id: 6,
        title: 'Dinning',
    },

    {
        id: 7,
        title: 'Outdoor'
    }
]

export default class CategoryFakeRepository implements CategoryRepository {

    async getAllCategories(): Promise<Category[]> {
        console.log('FakeRepos GETALL')
        return await Promise.resolve(testCategories);
    }

}