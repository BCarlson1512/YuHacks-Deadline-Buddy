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

    const taskInfo = {
        type: "Task",
        due: "Tomorrow at 12 pm!",
        name: "Kill Myself",
        details: "Tis a meme but the urge is getting stronger as the days go by."
    }

    return (
        <Card>
            <CardHeader
                action={
                    <IconButton aria-label="settings">
                        <SettingsIcon />
                    </IconButton>
                }
                title={taskInfo.type}
            />
            <CardContent className={classes.content}>
                <Typography variant="h5" component="h2">
                    {taskInfo.name}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {taskInfo.due}
                </Typography>
                <Typography variant="body2" component="p">
                    {taskInfo.details}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary">
                    Done!
                </Button>
                <Button size="small" color="secondary">
                    Delete
                </Button>
            </CardActions>
        </Card>
    )
}