import React from 'react'
import TodoItem from '../components/TodoItem';
import data from '../data.js';
import '../css/card-styling.css'

export default function HomeScreen() {
    return (
        <div>
            <h1>Hello _____ Here is your to do list</h1>
            <div className="card-container">
                {
                    data.tasks.map((task) => (
                        <TodoItem task={task} />
                    ))
                }
            </div>
        </div>
    )
}
