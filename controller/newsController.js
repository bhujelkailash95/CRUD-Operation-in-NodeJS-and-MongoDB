const addNewsValidation = require("../newsValidation/newsValidation");
const NewsService = require ("../services/newsService")()

const NewsController = () => {
    const view = async(req,res) =>{
        res.render('index',{name:'News Portal'})
    }

    const addNews = (req,res) => {
      res.render('addNews')
    }

    const newsPodcast = async(req,res) => {
      const result = await NewsService.getAll(req.body)
      res.render('news',{value:result})
    }

    const getAll = async (req,res) => {
        console.log('controller')
        const result = await NewsService.getAll(req.body)
        console.log(result)
        res.send({
          data: result
        })
      }

      const getById = async (req,res) => {
        console.log('controller')
        const result = await NewsService.getById(req.body)
        console.log(result)
        res.send({
          data: result
        })
      }

      const create = async(req,res) =>{
        console.log(req.body,'newsController')
        try {
        const title = req.body.title;
        const description = req.body.description;
        const author = req.body.author;
        const type = req.body.type;
        console.log(req.body)
        let {value, error} = addNewsValidation.validate({
          title,
          description,
          author,
          type
        })
        console.log(value)
        if (error) {
          throw new Error(error)
        }
        const result = await NewsService.create({
          title,
          description,
          author,
          type
        })
        console.log(result)
        res.redirect('/news')
      }
      catch (err) {
        console.log(err.message)
        res.send({
          err: err.message
        })
      }
    }

    const updateNews = async(req,res) =>{
        console.log(req.body)
        const result = await NewsService.updateNews(req.body)
        res.send({
          data:result
        })
        return result
      }
    
      const deleteNews = async(req,res) =>{
        console.log(req.body)
        const result = await NewsService.deleteNews(req.body)
        res.send({
          data:result
        })
        return result
      }

      const deleteNewsEjs = async(req,res) =>{
        console.log(req.params)
        const result = await NewsService.deleteNews({
          _id:req.params.id
        })
        res.redirect('/news')
      }

      const editNewsEjs = async(req,res) =>{
        const id = req.params.id;
        const news = await NewsService.getById({_id:id})
        console.log(news)
        res.render('editNews', {values: news})
      }

      const editNews = async (req,res) => {
        const _id = req.params.id;
        const title = req.body.title;
        const description = req.body.description;
        const author = req.body.author;
        const type = req.body.type;
        const result = await NewsService.updateNews({
          _id,
          title,
          description,
          author,
          type
        })
        res.redirect('/news')
      }

      return {
          view,
          addNews,
          getAll,
          newsPodcast,
          getById,
          create,
          updateNews,
          deleteNews,
          deleteNewsEjs,
          editNewsEjs,
          editNews
      }
};

module.exports = NewsController;