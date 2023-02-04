
const Course = require("../models/Course");



const getCourses = async (req, res, next) =>
{
    try {
        let query;
        if (req.params.bootcampId) {
            query = Course.find({ bootcamp: req.params.bootcampId })
        }



    } catch (error) {

    }


}



