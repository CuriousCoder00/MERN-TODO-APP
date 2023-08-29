const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const uri = process.env.MONGO_URI;
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/TODO-List", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected");
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}

module.exports=connectDB;
