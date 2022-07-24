const News = require('../model/news')

const NewsRepository = () => {
    const getAll = async(args = {}) =>{
        console.log('repository')
        const result = await News.find(args);
        console.log(result,'repo')
        return result
    }

    const getById = async (args = {}) =>{
        const result = await News.findById(args);
        return result
    }

    const create = async (args = {}) =>{
        console.log('repository', args)
        const result = await News.create(args)
        return result
    }

    const updateNews = async (args = {}) =>{
        const title = args.title;
        const description = args.description;
        const author = args.author;
        const type = args.type;
        console.log('repository', args)
        const result = await News.findByIdAndUpdate( {_id: args._id}, {
            $set: {
                title,
                description,
                author,
                type
            }
        })
        return result
    }

    const deleteNews = async (args = {}) =>{
        console.log('repository',args)
        const result = await News.findByIdAndDelete(args)
        console.log(result, 'repo')
        return result
    }

    return {
        getAll,
        getById,
        create,
        updateNews,
        deleteNews
    }
};

module.exports = NewsRepository;