import React, { useState, useEffect } from 'react'
import TodoItem from '../components/TodoItem';
import '../css/card-styling.css'
import Axios from 'axios';

export default function HomeScreen() {

    const [loading, setLoading] = useState(true);
    const [tasks, setTasks] = useState([]);
    
    useEffect(() => {
        Axios.get('/api/tasks/importanceDescending')
        .then(res => {
            setTasks(res.data.tasks)
        })
        setLoading(false);
    }, [loading])
    return (
        <div>
            <h1>Hello! Here is your to do list</h1>
            <div className="card-container">
                
                {!loading &&
                    tasks.map((task) => (
                        <div style={{padding:'0px 10px'}}>
                        <TodoItem key={task._id} task={task} />
                        </div>
                    ))
                }
                {loading &&
                    <h1>Page loading</h1>
                }
            </div>
        </div>
    )
}
