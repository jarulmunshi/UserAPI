var {d}=require('../config/database');
var user=require('../schema/user.schema');

exports.insert=(body,path,done)=>{
    body.imageName=path;
    var newUser=new user({
        name:body.name,
        email:body.email,
        password:body.password,
        age:body.age,
        imageName:body.imageName
    });
    newUser.save().then((d)=>{
        done(null,d);
    }).catch((err)=>{
        done(err);
    })
}
exports.get = (done) =>{
    user.find().then((d)=>{
        done(null,d);
    }).catch((err)=>{
        done(err);
    })
}
exports.get1 = (id,done) =>{
    console.log(id);
    user.findById({_id:id}).then((d)=>{
        console.log(d);
        done(null,d);
    }).catch((err)=>{
        done(err);
    })
}
exports.del=(id,done)=>{
    user.remove({_id:id}).then((d)=>{
        done(null,d);
    }).catch((err)=>{
        done(err);
    })
}

exports.up = (id,body,done)=>{
    //let b = pick(body,[name,age]);
    user.findByIdAndUpdate(id,{$set:body}).then((d)=>{
        if(d){
            user.find({_id:id}).then((d1)=>{
                done(null,d1);
            }).catch((err)=>{
                done(err)
            })
        }

    }).catch((err)=>{
        done(err);
    })
}