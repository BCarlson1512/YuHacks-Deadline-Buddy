import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Task from '../Schemas/TaskModel.js';
import data from '../data.js';

const taskRouter = express.Router();

//database seed
taskRouter.get('/seed', expressAsyncHandler(async (req, res) => {
    const createdTasks = Task.insertmany(data.tasks);
    res.send({createdTasks});
}));

taskRouter.get('/', expressAsyncHandler(async (req, res) => {
    const tasks = await Task.find({});
    res.send({tasks});
}));

taskRouter.post('/', expressAsyncHandler(async (req, res) => {
    const task = new Task({
        name: req.body.name,
        type: req.body.type,
        description: req.body.description,
        priority: req.body.priority,
        isComplete: req.body.isComplete,
    });
}))

export default taskRouter;
