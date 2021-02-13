import React, {useState} from 'react'
import { Button, FormControlLabel, makeStyles, RadioGroup, TextField } from '@material-ui/core';
import '../css/formStyles.css'
export default function TodoForm() {
    
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [date, setDate] = useState('');

    const submitForm = (e) => {
        e.preventDefault();
        console.log(name);
        console.log(desc);
        console.log(date);
    }

    return (
        <div>
            <h3>Create a New Task!</h3>
            <form className="form-container" onSubmit={(e) => submitForm(e)}>
                <TextField id="standard-basic" label="Name" onChange={(e) => setName(e.target.value)}/>
                <TextField id="standard-basic" label="Description" onChange={(e) => setDesc(e.target.value)}/>
                <TextField
                    id="datetime-local"
                    label="Date"
                    type="datetime-local"
                    defaultValue="2021-02-13T12:00"
                    className="standard-basic"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={e => setDate(e.target.value)}/>
                <Button variant="contained" color="primary" type="submit"> Submit </Button>
            </form>
        </div>
    )
}
