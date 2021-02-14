import React, { useEffect, useState } from 'react'
import {
    Card,
    CardHeader,
    CardContent,
    GridList,
    GridListTile,
    Typography
} from '@material-ui/core'

import CalendarItem from './CalendarItem'

import DateUtils from '../../util/dateUtils'

import { FakeData } from './CalendarFakeData'
import axios from 'axios'

/**
 * 
 * @param {{}} dateData 
 * @param {Date} monthDate 
 */
const generateDatesFromData = (dateData) => {
    var dates = []
    console.log(dateData)
    let firstDay = new Date(dateData.date.substring(0,3), dateData.date.substring(5,6) + 1, 1)
    let lastDay = new Date(dateData.date.substring(0,3), dateData.date.substring(5,6) + 2, 0)
    let dayNum = 0
    for (var i = 0; i < firstDay.getDay() + lastDay.getDate(); i++) {
        if (i >= firstDay.getDay())
            dayNum++;
        dates.push((
            <GridListTile key={i} cols={1}>
                <CalendarItem key={i} number={dayNum} data={dateData} />
            </GridListTile>
        ))
    }
    return dates
}


export default function CalendarInterface(props) {
    
    const data = FakeData

    const [loading, setLoading] = useState(true);
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        axios.get('/api/tasks')
        .then(res => {
            setTasks(res.data.tasks);
        })
        setLoading(false);
    }, [loading])

    return (
        <Card>
            <CardHeader title={DateUtils.getMonthName(data.month)} />
            <CardContent>
                <GridList cellHeight={20} cols={7}>
                    {["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map(day => (
                        <GridListTile cols={1}>
                            <Typography variant="body" component="p">
                                {day}
                            </Typography>
                        </GridListTile>
                    ))}
                </GridList>

                <GridList cellHeight={200} cols={7}>
                    {!loading && (
                        tasks.map((task) => { (generateDatesFromData(task)) }
                        )
                    )} 
                </GridList>
            </CardContent>

        </Card>
    )
}