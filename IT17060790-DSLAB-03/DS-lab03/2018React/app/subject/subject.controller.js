var mongoose        = require('./subject.model');
var subjectSchema   = mongoose.model('Subject');


var subjectController = function() {
    this.insert = (data) => {
        return new Promise((resolve, reject) => {
            var subject = new subjectSchema({
                name: data.name,
                description: data.description,
                amount: data.amount,
                //course:data.courseId
            });
            subject.save().then(() => {
                resolve({status: 200, message: "Added new subject"});
            }).catch(err => {
                reject({status: 500, message: "Error:- "+err});
            })
        })
    }

    this.searchAll = () => {
        return new Promise((resolve, reject) => {
            subjectSchema.find().exec().then(data => {
                resolve({status: 200, data: data});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            });
        });
    }

    // this.search = (id) => {
    //     return new Promise((resolve, reject) => {
    //         subjectSchema.find({_id: id}).populate('course').exec().then(data => {
    //             resolve({status: 200, data: data});
    //         }).catch(err => {
    //             reject({status: 500, message: "Error:- " + err});
    //         })
    //     })
    // }
}

module.exports = new subjectController();