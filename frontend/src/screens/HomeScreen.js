import React, { useState, useEffect } from 'react'
import TodoItem from '../components/TodoItem';
import '../css/card-styling.css'
import Axios from 'axios';
import { Button } from '@material-ui/core';

export default function HomeScreen() {

    const [loading, setLoading] = useState(true);
    const [tasks, setTasks] = useState([]);
    const [query, setQuery] = useState(0);

    useEffect(() => {
        
        switch (query) {
            case 0:
                    Axios.get('/api/tasks/importanceDescending')
                    .then(res => {
                        setTasks(res.data.tasks)
                    })
                break;
            case 1:
                    Axios.get('/api/tasks/importanceAscending')
                    .then(res => {
                        setTasks(res.data.tasks)
                    })
                break;
            case 2:
                Axios.get('/api/tasks/typeAlphabetical')
                .then(res => {
                    setTasks(res.data.tasks)
                })
            break;
            case 3:
                    Axios.get('/api/tasks/dateDescending')
                    .then(res => {
                        setTasks(res.data.tasks)
                    })
                break;
            default:
                    Axios.get('/api/tasks/dateAscending')
                    .then(res => {
                        setTasks(res.data.tasks)
                    })
                break;
        }
        
        Axios.get('/api/tasks/importanceDescending')
        .then(res => {
            setTasks(res.data.tasks)
        })
        setLoading(false);
    }, [loading])

    function setQueryState(q) {
        setLoading(true);
        setQuery(q);
    }


    return (
        <div>
            <h1>Hello! Here is your to do list</h1>
            <div>
                Sort by:
                <div>
                    <Button onClick={() => setQueryState(0)}>Most Important</Button>
                    <Button onClick={() => setQueryState(1)}>Least Important</Button>
                    <Button onClick={() => setQueryState(2)}>Type</Button>
                    <Button onClick={() => setQueryState(3)}>Upcoming</Button>
                    <Button onClick={() => setQueryState(4)}>Furthest Away</Button>
                </div>
            </div>
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
