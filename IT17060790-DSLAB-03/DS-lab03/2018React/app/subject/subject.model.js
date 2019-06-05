const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subjectSchema = new Schema({
        name:{
            type:String,
            require:true
        },
        description:{
            type:String,
            require:true
        },

        amount:{
            type:Number,
            require:true
        },
        
  
});

module.exports = mongoose.model('Subject' ,subjectSchema);