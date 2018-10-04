const router=require('express');
const route=router();
const multer=require('multer');
// var upload = multer({dest:'uploads/'});
const {insert,post1,get,get1,del,up} = require('../controller/user.controller');

var storage = multer.diskStorage({
    destination: (req, file, cb)=> {
        cb(null, 'uploads/')
    },
    filename:(req, file, cb)=>{
        cb(null,Date.now() + file.originalname);
    }
});
// const upload=multer({
//         dest:'uploads/'
//     });

// route.post('/',upload.single('image'),(req,res)=>{
//    console.log("Done");
// });

var upload = multer({storage: storage}).single('image');
route.post('/',(req,res)=>{
    // console.log(imageName);
    //console.log(req.file);
    upload(req,res,(error)=>{
        console.log("hi");
        insert(req.body,req.body.imageName,(err,result)=>{
            if(err){
                res.statusCode=400;
                res.json(err);
             }
            else if(result == null){
                res.statusCode=404;
                res.json({msg:"error"});
            }
             else{
                res.statusCode=200;
                res.json(result);
            }
        })
     })

});
route.post('/login',(req,res)=>{
    post1(req.body,(err,result)=>{
        if (err){
            res.statusCode=400;
            res.json(err);
            console.log(err);
        }
        else if(result == null){
            res.statusCode=404;
            res.json({msg:"NOT VALID"});
            console.log("Not Valid");
        }
        else {
            res.statusCode=200;
            //res.setHeader(token,result.token);
            res.json(result);
            //console.log(result.token);
        }
    })
});
route.get('/',(req,res)=>{
    //console.log("Route")
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
});
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
});
route.delete('/:id',(req,res)=>{
    //console.log(req.params.id);
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
});
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
});
module.exports=route;