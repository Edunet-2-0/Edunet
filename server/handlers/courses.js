const db = require('../database/db');

exports.showCourses = async (req, res, next) => {
    try {
        const courses = await db.Course.findAll({});
        res.status(200).json(courses)
    } catch (err) {
        res.status(400);
        next(err)
    }
};

exports.createCourses = async (req, res, next) => {
    try {
        const {
            title,
            description,
            categoryId,
            photo,
            teacherId
        } = req.body;

        const course = await db.Course.create({
            title,
            description,
            categoryId,
            photo: photo || "https://smartmobilestudio.com/wp-content/uploads/2012/06/leather-book-preview.png",
            teacherId
        });
        res.status(201).json(course)
    } catch (err) {
        res.status(400);

        next(err)
    }
};

exports.getCourse = async (req, res, next) => {
    try {
        const {
            id
        } = req.params;
        const course = await db.Course.findOne({
            where: {
                id: id
            }
        });

        if (!course) {
            res.status(404).json(" No course with this id")
        } else {
            const video = await db.Video.findAll({
                where: {
                    courseId: id
                }
            });
            const teacher = await db.Teacher.findOne({
                where: {
                    id: course.teacherId
                }
            });
            const category = await db.Category.findOne({
                where: {
                    id: course.categoryId
                }
            });
            res.status(200).json({
                teacher,
                course,
                category,
                video
            })
        }
    } catch (err) {
        res.status(400);
        next(err)
    }
};

exports.deleteCourses = async (req, res, next) => {
    try {
        const {
            id
        } = req.params;
        const course = await db.Course.findOne({
            where: {
                id: id
            }
        });
        if (!course) {
            res.status(404).json(" No course with this id")
        } else {

            await course.destroy();
            const enrolled = await db.Course_Student.findAll({
                where: {
                    courseId: id
                }
            });
            res.status(202).json(enrolled)
        }
    } catch (err) {
        res.status(400);
        next(err)
    }
};

exports.showCourseVideos = async (req, res, next) => {
    try {
        const {
            id
        } = req.params;
        const videos = await db.Video.findAll({
            where: {
                courseId: id
            }
        });
        res.status(200).json(videos)
    } catch (err) {
        res.status(400);
        next(err)
    }
};

exports.enroll = async (req, res, next) => {
    try {
        const {
            id
        } = req.params;
        const userId = req.user.id;
        const subscribe = await db.Course_Student.create({
            studentId: userId,
            courseId: id
        });
        console.log('SubBBBBBBBB', subscribe)
        res.status(201).json(subscribe);
    } catch (err) {
        res.status(400);
        next(err)
    }
};
exports.showCoursesByCategory = async (req, res, next) => {
    try {
        const {
            name
        } = req.params;
        const category = await db.Category.findOne({
            where: {
                name: name
            }
        });
        const courses = await db.Course.findAll({
            where: {
                categoryId: category.id
            }
        });
        res.status(200).json(courses)
    } catch (err) {
        res.status(400);
        next(err)
    }
};

exports.showCategories = async (req, res, next) => {
    try {
        const categories = await db.Category.findAll({});
        res.status(200).json(categories)

    } catch (e) {
        res.status(400);
        next(e)
    }
};