var router=require('express');
const route=router();
var multer=require('multer');
var fs=require('fs');
var upload = multer({dest:'uploads/'});
const {insert,get,get1,del,up} = require('../controller/user.controller');

var storage = multer.diskStorage({
    destination: (req, file, cb)=> {
        cb(null, 'uploads/')
    },
    filename:(req, file, cb)=>{
        cb(null, file.fieldname + '-' + Date.now() + '.jpg')
    }
});

var upload = multer({storage: storage}).any();
route.post('/',(req,res)=>{
    console.log(req.body);
    upload(req,res,(error)=>{
        //var contents=fs.readFileSync(req.body.imageName,'utf-8');
        //console.log("Contents"+contents);
        // insert(req.body,req.body.imageName,(err,result)=>{
        //     if(err){
        //         res.statusCode=400;
        //         res.json(err);
        //     }
        //     else if(result == null){
        //         res.statusCode=404;
        //         res.json({msg:"error"});
        //     }
        //     else{
        //         res.statusCode=200;
        //         res.json(result);
        //     }
        // })
    })

})
route.get('/',(req,res)=>{
    get((err,result)=>{
        if(err){
            res.statusCode=400;
            res.json(err);
        }
        else if(result == null){
            res.statusCode=404;
            res.json({msg:"NOT GET"});
        }
        else {
            res.statusCode=200;
            res.json(result);
        }
    })
})
route.get('/:id',(req,res)=>{
    get1(req.params.id,(err,result)=>{
        if(err){
            res.statusCode=400;
            res.json(err);
        }
        else if (result == null){
            res.statusCode=404;
            res.json({msg:"NOT GET !"});
        }
        else {
            res.statusCode=200;
            res.json(result);
        }
    })
})
route.delete('/:id',(req,res)=>{
    del(req.params.id,(err,result)=>{
        if(err){
            res.statusCode=400;
            res.json(err);
        }
        else if(result == null){
            res.statusCode=404;
            res.json({msg:"NOT DELETE"});
        }
        else {
            res.statusCode=200;
            res.json(result);
        }
    })
})
route.put('/:id',(req,res)=>{
    up(req.params.id,req.body,(err,result)=>{
        if(err){
            res.statusCode=400;
            res.json(err);
        }
        else if(result == null){
            res.statusCode=404;
            res.json({msg:"NOT PUT"});
        }
        else {
            res.statusCode=200;
            res.json(result);
        }
    })
})
module.exports=route;