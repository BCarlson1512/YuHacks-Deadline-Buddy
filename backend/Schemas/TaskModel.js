import mongoose from 'mongoose';

const TaskModel = new mongoose.Schema({
    
});

const Task = mongoose.model('Task', TaskModel);
export default Task;