import React, { useState } from 'react'
import { Button, TextField } from '@material-ui/core';
import '../css/formStyles.css'
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Animated } from 'react-animated-css';


export default function EditTaskForm(props) {
    
    const { task } = props;

    const [name, setName] = useState(task.name);
    const [desc, setDesc] = useState(task.description);
    const [type, setType] = useState(task.type);
    const [date, setDate] = useState(task.date);
    const [priority, setPriority] = useState(task.priority);
    let history = useHistory();
    
    const parseDate = (e) => {
        const tmpDate = new Date(e);
        setDate(tmpDate);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        Axios.put('/api/tasks/edit', { name: name, type: type, description: desc, date: date, priority: priority})
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
        redirect();
    }


    const redirect = () => {
        history.push('/');
    }

    return (
        <div>
            <Animated>
                <h1>Edit Task Details</h1>
                <form className="form-container" onSubmit={(e) => submitHandler(e)}>
                    <TextField id="standard-basic" label="Name" onChange={(e) => setName(e.target.value)} />
                    <TextField id="standard-basic" label="Description" onChange={(e) => setDesc(e.target.value)}/>
                    <TextField id="standard-basic" label="Type of Task" onChange={(e) => setType(e.target.value)}/>
                    <TextField id="standard-basic" type="number" label="Importance" onChange={(e) => setPriority(e.target.value)}/>
                    <TextField
                        id="datetime-local"
                        label="Date"
                        type="datetime-local"
                        defaultValue="2021-02-13T12:00"
                        className="standard-basic"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={e => parseDate(e.target.value)} />
                    <Button variant="contained" color="primary" type="submit"> Submit </Button>
                </form>
            </Animated>
        </div>
    )
}
