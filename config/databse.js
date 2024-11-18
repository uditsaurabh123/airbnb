import mongoose from "mongoose"

let connected = false;

const connectDB = async () => {
    console.log("...the connect db is called...")
    mongoose.set("strictQuery", true)
    if (connected) {
        console.log("MongoDB already connected...")
        return
    }
    //connect with mongodb
    try {
        await mongoose.connect(process.env.URI)
        connected = true
    } catch (error) {
        console.log(error)
    }
};
export default connectDB