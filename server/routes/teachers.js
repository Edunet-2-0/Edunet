const router = require('express').Router();

const handler = require('../handlers');

const app = require('../middlewares/auth');

router
    .route('/')
    .get(handler.showTeachers);

router
    .route('/public/:id')
    .get(handler.getTeacher) ;

router
    .route('/:id')
    .get(handler.getTeacher)
    .post(app, handler.postVideo);

 

module.exports = router;