const express = require("express"),
    { check } = require('express-validator'),
    router  = express.Router({mergeParams: true});

const multer = require('../middleware/multer');
const callbacks       = require("./callbacks.js");

// POST
router.post(
    "/savet", // endpoint name
    multer.upload.single('resume'), // handle multipart/form-data
    [
        check('tcconsent').isBoolean().toBoolean(),
        check('linkedin').trim().isURL(/* SET OPTIONS LATER TO FIT LINKEDIN SPECIFIC URLS ONLY https://github.com/validatorjs/validator.js#validators */),
        check('jobposting').not().isEmpty(),
        // check('resume'), 
    ],
    callbacks.api.post.savet // business logic
);

module.exports = router;
