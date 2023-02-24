import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    fullName: String,
    email: String,
    password: String,
    wallet: String,


    confirmedEmail: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const Users = mongoose.model("Users", userSchema);
export default Users;