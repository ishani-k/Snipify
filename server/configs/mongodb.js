import mongoose from "mongoose";

const connectDB = async () => {

    await mongoose.connect(`${process.env.MONGODB_URI}/Snipify`)

}


export default connectDB