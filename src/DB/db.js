const mongoose =require ("mongoose");

async function connectDB() {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("database is connect")
    }
    catch(err){
        console.log("database conection error",err)
    }
}
module.exports=connectDB