import React from 'react'
import {
    Card,
    CardHeader
} from '@material-ui/core'

export default function CalendarItem(props) {

    console.log(props.data)

    return (
        <Card>
            <CardHeader title={props.number} titleTypographyProps={{align: 'left'}}/>
        </Card>
    )
}