import mongoose from 'mongoose';

const TaskModel = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true},
    description: { type: String, required: true },
    priority: { type: Number, required: false, default: 27, required: true },
    isComplete: { type: Boolean, default: false, required: true },
    date: {type: Date },
});

const Task = mongoose.model('Task', TaskModel);
export default Task;
