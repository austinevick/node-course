const { getBootcamp, getBootcamps, createBootcamp, updateBootcamp, deleteBootcamp } = require('../controllers/bootcamps');

const router = require('express').Router()


router.route('/').get(getBootcamps).post(createBootcamp)

router.route('/:id').get(getBootcamp)
.put(updateBootcamp)
.delete(deleteBootcamp)

module.exports=router