const Joi = require("joi");

const addNewsValidation = Joi.object({
    title: Joi.string().required(),
    description:Joi.string(),
    author:Joi.string().required(),
    type:Joi.string()
})

module.exports = addNewsValidation;