import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import User from '../Schemas/UserModel.js';
import data from '../data.js';

const userRouter = express.Router();

//database seed
userRouter.get('/seed', expressAsyncHandler(async (req, res) => {
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });
}));

// gets all users
userRouter.get('/', expressAsyncHandler(async (req, res) => {
    const users = await User.find({});
    res.send(users);
}));

//for user login
userRouter.post('/login', expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
        if (req.body.password === user.password) {
            res.send({
                _id: user._id,
                name: user.name,
                email: user.email,
                password: user.password,
                tasks: user.tasks,
            })
        }
        
    }
    res.status(401).send({message: "Invalid email/password"})
}));

// saves user to database
userRouter.post('/register', expressAsyncHandler(async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    });
    const createdUser = await user.save();
    res.send({
        _id: createdUser._id,
        name: createdUser.name,
        email: createdUser.email,
    })
}));

export default userRouter;