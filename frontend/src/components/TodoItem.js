import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {
    Card,
    CardContent,
    CardHeader,
    CardActions,
    IconButton,
    Typography,
    Button
} from '@material-ui/core'
import SettingsIcon from '@material-ui/icons/Settings'
import Axios from 'axios';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    content: {
        display: 'flex',
        alignItems: 'start',
        flexDirection: 'column'
    }
});

export default function TodoList(props) {
    const classes = useStyles();

    const { task } = props;

    const deleteTaskHandler = (tid) => {
        console.log(tid);
        Axios.delete('/api/tasks/delete', { data : {_id: tid}})
            .then(res => {
            console.log(res)
        })
    }

    const completeTaskHandler = (tid) => {
        Axios.put('/api/tasks/update', { _id: tid, isComplete: "true" })
            .then(res => {
            })
    }

    const dateJS = new Date(task.date)
    const options = {
        year: 'numeric', month: 'numeric', day: 'numeric',
        hour: 'numeric', minute: 'numeric', second: 'numeric',
        hour12: false,
        timeZone: 'America/Los_Angeles'
    };

    return (
        <Card raised style={{ backgroundColor:" #3C4B64", color:"#ffffff"}}>
            <CardHeader
                action={
                    <IconButton aria-label="settings">
                        <SettingsIcon />
                    </IconButton>
                }
                title={task.type}
            />
            <CardContent className={classes.content}>
                <Typography variant="h5" component="h2">
                    {task.name}
                </Typography>
                <Typography variant="h8" component="p">
                    Importance: {task.priority}
                </Typography>
                <Typography className={classes.pos} color="textSecondary" style={{color: "#ffffff"}}>
                    {new Intl.DateTimeFormat('en-US', options).format(dateJS)}
                </Typography>
                
                <Typography variant="body2" component="p">
                    {task.description}
                </Typography>
                
            </CardContent>
            <CardActions>
                <Button size="small" style={{color:"#AFB6F0"}} onClick={() => completeTaskHandler(task._id)}>
                    Done!
                </Button>
                <Button size="small" style={{color:"#ffffff"}} onClick={() => deleteTaskHandler(task._id)}>
                    Delete
                </Button>
            </CardActions>
        </Card>
    )
}