import React from 'react'
import {
    Card,
    CardHeader,
    CardContent,
    Chip
} from '@material-ui/core'

export default function CalendarItem(props) {

    console.log(props.data)

    return (
        <Card style={{height: '100%'}}>
            <CardHeader title={props.number} titleTypographyProps={{align: 'left'}}/>
            <CardContent>
                <Chip label="Test" />
                <Chip label="Test 2" />
                <Chip label="Test 3" />
            </CardContent>
        </Card>
    )
}