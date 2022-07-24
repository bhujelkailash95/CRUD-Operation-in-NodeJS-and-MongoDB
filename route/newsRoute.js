const express = require("express");

const NewsController = require('../controller/newsController')()

const router = express.Router();

router.get("/view", NewsController.view)

router.get('/news',NewsController.newsPodcast)

router.get('/addNews',NewsController.addNews)

router.get('/getAll', NewsController.getAll)

router.get('/getById', NewsController.getById)

router.post('/create', NewsController.create)

router.put('/updateNews', NewsController.updateNews)

router.delete('/deleteNews', NewsController.deleteNews)

router.get('/delete/:id',NewsController.deleteNewsEjs)

router.get('/edit/:id',NewsController.editNewsEjs)

router.post('/editNews/:id', NewsController.editNews)


module.exports = router;