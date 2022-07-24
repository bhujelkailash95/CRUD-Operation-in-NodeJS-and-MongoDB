const res = require("express/lib/response")

const NewsRepository = require("../repository/newsRepository")()

const NewsService = () => {
    const getAll = async(args = {}) => {
        console.log('service')
        let result = await NewsRepository.getAll(args)
        console.log(result,'service')
        return result
      };

      const getById = async(args = {}) => {
        console.log('service')
        let result = await NewsRepository.getById(args)
        console.log(result,'service')
        return result
      };

      const create = async (args={})=>{
        console.log(args,'service');
        let result  = await NewsRepository.create(args)
        console.log(result, 'result')
        return result
      }
    
      const updateNews = async (args={})=>{
        let result  = await NewsRepository.updateNews(args)
        console.log(result, 'result')
        return result
      }
    
      const deleteNews = async (args={})=>{
        let result  = await NewsRepository.deleteNews(args)
        console.log(result, 'result')
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

    module.exports = NewsService;

    