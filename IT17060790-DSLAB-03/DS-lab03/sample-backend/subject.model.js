const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let Subject=new Schema({
    subject_name:{
        type:String
    },
    description:{
        type:String
    },
    amount:{
        type:String
    }
});

module.exports=mongoose.model('Subject',Subject);