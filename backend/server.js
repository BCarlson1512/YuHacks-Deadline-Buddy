import express from 'express';
import mongoose from 'mongoose';
import userRouter from './Routers/UserRouter.js';
import taskRouter from './Routers/TaskRouter.js';

const app = express();
app.use(express.json()); // parse http requests
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb+srv://ben:Pr0ski113f2!@cluster0.nzwg9.mongodb.net/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

app.use('/api/users', userRouter);
app.use('/api/tasks', taskRouter);

app.get("/", (req, res) => {
    res.send('Server is Ready');
})

app.use((err, req, res, next) => {
    res.status(500).send("Server error");
})

const port = 5000;
app.listen(port, () => {
    console.log(`server started on https://localhost:${port}`);
})