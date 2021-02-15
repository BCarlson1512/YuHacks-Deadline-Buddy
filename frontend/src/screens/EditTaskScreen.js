import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react'
import EditTaskForm from '../components/EditTaskForm'

export default function EditTaskScreen(props) {
    const id = props.match.params.id;
    const [task, setTask] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get(`/api/tasks/${id}`, {params: { _id:id}})
            .then(res => {
            setTask(res.data.task)
        })
        setLoading(false)
    }, [id, loading])
    return (
        <div>
            {!loading && (
                <EditTaskForm task={task}/>
            )}
            {loading && (
                <h1> Loading </h1>
            )}
        </div>
    )
}
