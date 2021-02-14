import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react'
import EditTaskForm from '../components/EditTaskForm'

export default function EditTaskScreen(props) {
    const id = props.match.params.id;
    const [task, setTask] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get(`/${id}`, {_id: id})
        .then(res => {
            console.log(res)
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
