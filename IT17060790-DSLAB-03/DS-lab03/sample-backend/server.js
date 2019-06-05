const express=require('express');
const app= express();
const bodyParser=require('body-parser');
const cors=require('cors');
const mongoose=require('mongoose');
const mongoose1=require('mongoose');
const courseRoutes=express.Router();
const subjectRoutes=express.Router();
const PORT=4000;

let Course=require('./course.model');
let Subject=require('./subject.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/course',{useNewUrlParser:true});
const connection=mongoose.connection;

mongoose1.connect('mongodb://127.0.0.1:27017/subject',{useNewUrlParser:true});
const connection1=mongoose1.connection;

connection1.once('open',function(){
    console.log("MongoDB database for Subjects table Connection established Successfully");
});


connection.once('open',function () {
    console.log("MongoDB Course Table database Connection established Successfully");
});



courseRoutes.route('/').get(function (req,res) {
    Course.find(function (err,course) {
        if (err){
            console.log(err);
        } else{
            res.json(course);
        }

    });
});

courseRoutes.route('/:id').get(function (req,res) {
    let id=req.param.id;
    Course.findById(id,function (err,course) {
        res.json(course);
    });

});

courseRoutes.route('/:add').post(function (req,res) {
    let courses=new Course(req.body);
    courses.save().then(courses =>{
        res.status(200).json({'courses' : 'courses added successfully'});
    })
        .catch(err =>{
            res.status(400).send('Adding new courses fail');
        });
});

courseRoutes.route('/:update').post(function (req,res) {
    Course.findById(req.param.id,function (err,course) {
        if(!course)
            res.status(400).send('data is not found');
        else
            course.course_name=req.param.course_name;
            course.subject_code=req.param.subject_code;
            course.pass_mark=req.param.pass_mark;
            course.lectureIn_Charge=req.param.lectureIn_Charge;
            course.completed=req.param.completed;

            course.save().then(course =>{res.json('Course Updated');
    })
        .catch(err=>{
                res.status(400).send('Update not possible');

    });
    });
});

subjectRoutes.route('/').get(function (req,res) {
    Subject.find(function (err,subject) {
        if (err){
            console.log(err);
        } else{
            res.json(subject);
        }

    });
});


// subjectRoutes.route('/:subid').get(function (req,res) {
//     let id=req.param.id;
//     Subject.findBySubId(id,function (err,subject) {
//         res.json(subject);
//     });
//
// });



subjectRoutes.route('/:addSub').post(function (req,res) {
    let subjects=new Subject(req.body);
    subjects.save().then(subjects =>{
        res.status(200).json({'subjects' : 'Subjects added successfully'});
    })
        .catch(err =>{
            res.status(400).send('Adding new Subjects fail');
        });
});

app.use('/course',courseRoutes);

app.use('/subject',subjectRoutes);

app.listen(PORT,function () {
    console.log("Server is Running on Port :"+ PORT);
})