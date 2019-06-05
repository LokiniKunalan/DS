const express = require('express');
const Router = express.Router();

const courseRoutes = require('../course/course.routes');
const subjectRoutes = require('../subject/subject.routes');


Router.use('/course/',courseRoutes);
Router.use('/subject/',subjectRoutes);


module.exports = Router;