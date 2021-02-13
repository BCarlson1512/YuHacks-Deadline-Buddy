import mongoose from 'mongoose';

const UserModel = new mongoose.Schema({
    name: {type:String, required: true},
    email: {type:String, required: true, unique: true},
    password: {type:String, required: true},
    tasks: {type: mongoose.Schema.Types.ObjectId, ref: "Task", required: false},
})

const User = mongoose.model("User", UserModel);
export default User;