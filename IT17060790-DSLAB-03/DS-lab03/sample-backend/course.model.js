const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let Course=new Schema({
    course_name:{
        type:String
    },
    subject_code:{
        type:String
    },
    pass_mark:{
        type:String
    },
    lectureIn_Charge:{
        type:String
    },
    completed:{
        type:Boolean
    },
});

module.exports=mongoose.model('Course',Course);