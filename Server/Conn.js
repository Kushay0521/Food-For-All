const mongoose=require("mongoose")

const DB="mongodb+srv://Qusai:qusai@cluster0.wttqe.mongodb.net/merntest?retryWrites=true&w=majority"

mongoose.connect(DB,{useNewUrlParser:true}).then(()=>{
    console.log("Connection sucessful");
}).catch((err)=>{
    console.log(err);
})