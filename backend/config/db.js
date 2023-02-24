import mongoose from "mongoose";
import colors from "colors";

const ConnectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URL.concat("Joint-NFTs"), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        mongoose.set('strictQuery', true);
        console.log(`MongoDB Connected: ${connection.connection.host}`.cyan.underline)
    } catch (error) {
        console.log(`Error: ${error.message}`.red.bold);
        process.exit();
    }
}

export default ConnectDB;