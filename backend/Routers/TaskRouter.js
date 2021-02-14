import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Task from '../Schemas/TaskModel.js';
import data from '../data.js';

const taskRouter = express.Router();

//database seed
taskRouter.get('/seed', expressAsyncHandler(async (req, res) => {
    await Task.remove({});
    const createdTasks = Task.insertMany(data.tasks);
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
        date: req.body.date,
    });
    const createdTask = await task.save();
    res.send("Task Created successfully" );
}))

taskRouter.put('/update', expressAsyncHandler(async (req, res) => {
    const task = await Task.findById(req.task._id);
    if (task) {
        task.isComplete = req.body.isComplete;
        const updatedTask = await task.save();
        res.send("Task completed");
    } 
}))

taskRouter.delete('/delete', expressAsyncHandler(async (req, res) => {
    const task = await Task.findById(req.task._id);
    if (task) {
        const deleteTask = await task.remove();
        res.send("task deleted");
    } else {
        res.status(401).send("task not found");
    }
}))

export default taskRouter;
