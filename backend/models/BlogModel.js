import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
    title: String,
    miniDesc: String,
    image: String,
    content: String,

    createdAt: {
        type: Date,
        default: new Date()
    },
    lastUpdate: {
        type: Date,
        default: new Date()
    },
});

const Blogs = mongoose.model("Blogs", blogSchema);
export default Blogs;