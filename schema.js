const Joi = require("joi");

module.exports.bookSchema = Joi.object({
    book: Joi.object({
        title: Joi.string().required(),
        author: Joi.string().required(),
        description: Joi.string().required(),
        image: Joi.string().uri().allow(""),
        price: Joi.number().required().min(0)
    }).required()
});

module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required(),
        comment: Joi.string().required()
    }).required()
});