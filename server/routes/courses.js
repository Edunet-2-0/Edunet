const router = require('express').Router();

const handler = require('../handlers');
const auth = require('../middlewares/auth');

router
    .route('/')
    .get(handler.showCourses)

    .post(handler.createCourses);

    router
    .route('/:id')
    .get(handler.getCourse)
    .delete(handler.deleteCourses)
    .post(auth, handler.enroll);

module.exports = router;