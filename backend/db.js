import mongoose from "mongoose";

const connectDB = async()=>{
    try {
        const cnct =  await mongoose.connect(process.env.MONGO_URI)
        console.log(`Database connected  ${cnct.connection.host}`)
    } catch(err){
        console.log(err.message);
        process.exit(1);
    }
}

export default connectDB;