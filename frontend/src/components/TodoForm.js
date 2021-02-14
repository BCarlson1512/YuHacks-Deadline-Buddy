import React, {useState} from 'react'
import { Button, TextField } from '@material-ui/core';
import '../css/formStyles.css'
import Axios from 'axios';

export default function TodoForm() {
    
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [type, setType] = useState('');
    const [date, setDate] = useState();
    const [priority, setPriority] = useState(25);
    const isComplete = false;

    const parseDate = (e) => {
        const tmpDate = new Date(e);
        setDate(tmpDate);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        Axios.post('/api/tasks', { name: name, type: type, description: desc, date: date, priority: priority, isComplete: isComplete})
            .then(res => {
                console.log(res);
                console.log(res.data);
        })
    }

    return (
        <div>
            <h3>Create a New Task!</h3>
            <form className="form-container" onSubmit={(e) => submitHandler(e)}>
                <TextField id="standard-basic" label="Name" onChange={(e) => setName(e.target.value)}/>
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
        </div>
    )
}
