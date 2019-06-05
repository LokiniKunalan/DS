const Course = require('./course.model');


var CourseController = function(){
    
    this.insert = (data)=>{
        return new Promise((resolve,reject)=>{

            const course = new Course({
                name:data.name,
                code:data.code,
                pass:data.pass,
                lecture:data.lecture,
                subjects:data.subjects
            });

            course.save().then(()=>{
                resolve({status:200,message:"Course Added",data:course});
            }).catch(err => {
                reject({status: 500, message: "Error:- "+err});
            });

        });
    }


    this.getAll = ()=>{
        
        return new Promise((resolve,reject)=>{

            Course.find().exec().then(data=>{
                console.log(data);
                resolve({status:200,data:data});
            }).catch(err=>{
                reject({status:500,message:"Error :"+err});
            });

        });
    }

    this.search = (id) => {
        return new Promise((resolve, reject) => {
            Course.find({_id: id}).populate('subjects').exec().then(data => {
                resolve({status: 200, data: data});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }





}

module.exports = new CourseController();