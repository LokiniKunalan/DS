var express     = require('express');
var router      = express.Router();
var courseController  = require('./course.controller');

router.post('/',(req,res)=>{

    courseController.insert(req.body).then(data=>{
        res.status(data.status).send({message:data.message,course:data.data});
    }).catch(err=>{
        res.status(err.status).send({message:err.message});
    });

});

router.get('/',(req,res)=>{

    courseController.getAll().then(data=>{
        res.status(data.status).send({courses:data.data});
    }).catch(err=>{
        res.status(err.status).send({message:err.message});
    });
    
});


router.get('/:id', (req, res) => {
    courseController.search(req.params.id).then(data => {
        res.status(data.status).send({data: data.data});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    });
});




module.exports = router;