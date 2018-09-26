const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/mongoDemo',(err)=>{
    if(err){
        console.log(err);
    }
    console.log('Connected')
})