import React, { useEffect, useState } from 'react'
import {
    Card,
    CardHeader,
    CardContent,
    GridList,
    GridListTile,
    Typography,
    Select,
    MenuItem
} from '@material-ui/core'
import CalendarItem from './CalendarItem'
import { FakeData } from './CalendarFakeData'
import axios from 'axios'
import { Animated } from 'react-animated-css'

/**
 * 
 * @param {{}} dateData 
 * @param {Date} monthDate 
 */
const generateDatesFromData = (dateData, year, month) => {
    var dates = []

    //Scuffed search (it works, poggers)
    const monthData = {}

    for (var i = 0 ; i < dateData.length; i++) {
        let day = dateData[i]
        let dayDate = new Date(day.date)
        if(dayDate.getFullYear() === year && dayDate.getMonth() == month) {
            if (monthData['' + dayDate.getDate()] === undefined)
                monthData['' + dayDate.getDate()] = []

            monthData['' + dayDate.getDate()].push(day)
        }

    }

    let firstDay = new Date(year, month, 1)
    let lastDay = new Date(year, month + 1, 0)
    let dayNum = 0
    for (var i = 0; i < firstDay.getDay() + lastDay.getDate(); i++) {
        if (i >= firstDay.getDay())
            dayNum++;
        dates.push((
            <GridListTile key={i} cols={1}>
                <Animated animationIn="rotateInUpLeft">
                    <CalendarItem key={i} number={dayNum} data={monthData['' + dayNum]} />
                </Animated>
            </GridListTile>
        ))
    }
    return dates
}


export default function CalendarInterface(props) {

    const data = FakeData
    const currDate = new Date()
    const year = currDate.getFullYear()

    const [loading, setLoading] = useState(true);
    const [tasks, setTasks] = useState([])
    const [selectedMonth, setMonth] = useState(currDate.getMonth())

    useEffect(() => {
        axios.get('/api/tasks')
            .then(res => {
                setTasks(res.data.tasks);
            })
        setLoading(false);
    }, [loading])

    return (
        <Card>
            <CardHeader title={(
                <Select value={selectedMonth} onChange={event => setMonth(event.target.value)}>
                    <MenuItem value={0}>January</MenuItem>
                    <MenuItem value={1}>February</MenuItem>
                    <MenuItem value={2}>March</MenuItem>
                    <MenuItem value={3}>April</MenuItem>
                    <MenuItem value={4}>May</MenuItem>
                    <MenuItem value={5}>June</MenuItem>
                    <MenuItem value={6}>July</MenuItem>
                    <MenuItem value={7}>August</MenuItem>
                    <MenuItem value={8}>September</MenuItem>
                    <MenuItem value={9}>October</MenuItem>
                    <MenuItem value={10}>November</MenuItem>
                    <MenuItem value={11}>December</MenuItem>
                </Select>)} />
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
                    {!loading && generateDatesFromData(tasks, year, selectedMonth)
                    }
                </GridList>
            </CardContent>

        </Card>
    )
}