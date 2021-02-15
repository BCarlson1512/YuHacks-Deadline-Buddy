import React, { useEffect, useState } from 'react'
import { Button, TextField } from '@material-ui/core';
import '../css/formStyles.css'
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Animated } from 'react-animated-css';
import axios from 'axios';

export default function EditTaskForm(props) {
    const {id} = props;

    const [taska, setTask] = useState({});
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [type, setType] = useState('');
    const [date, setDate] = useState('');
    const [priority, setPriority] = useState('');
    const [loading, setLoading] = useState(true);

    let history = useHistory();
    
    const parseDate = (e) => {
        const tmpDate = new Date(e);
        setDate(tmpDate);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        Axios.put('/api/tasks/edit', { name: name, type: type, description: desc, date: date, priority: priority })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
        redirect();
    }

    const redirect = () => {
        history.push('/');
    }

    const setState = () => {
        setName(taska.name);
        setDesc(taska.description)
        setType(taska.type)
        setDate(taska.date)
        setPriority(taska.priority)
    }

    useEffect(() => {
        axios.get(`/api/tasks/${id}`, {params: { _id:id}})
        .then(res => {
            setTask(res.data.task)
        })
        setState()
        setLoading(false)
    }, [id, loading])
    console.log(name)
    return (
        <div>
            {!loading && (
                <Animated>
                    <h1>Edit Task Details</h1>
                    <form className="form-container" onSubmit={(e) => submitHandler(e)}>
                        <TextField id="standard-basic" label="Name" value={ name } onChange={(e) => setName(e.target.value)} />
                        <TextField id="standard-basic" label="Description" value={ desc } onChange={(e) => setDesc(e.target.value)}/>
                        <TextField id="standard-basic" label="Type of Task" value={ type } onChange={(e) => setType(e.target.value)}/>
                        <TextField id="standard-basic" type="number" label="Importance" value={ priority } onChange={(e) => setPriority(e.target.value)}/>
                        <TextField
                            id="datetime-local"
                            label="Date"
                            type="datetime-local"
                            className="standard-basic"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={e => parseDate(e.target.value)} />
                        <Button variant="contained" color="primary" type="submit"> Submit </Button>
                    </form>
                </Animated>
            )}
        </div>
    )
}
