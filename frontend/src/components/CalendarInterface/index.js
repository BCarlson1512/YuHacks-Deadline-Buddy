import React, { useState } from 'react'
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

/**
 * 
 * @param {{}} dateData 
 * @param {Date} monthDate 
 */
const generateDatesFromData = (dateData) => {
    var dates = []

    let firstDay = new Date(dateData.year, dateData.month, 1)
    let lastDay = new Date(dateData.year, dateData.month + 1, 0)

    let dayNum = 0
    for (var i = 0; i < firstDay.getDay() + lastDay.getDate(); i++) {
        if (i >= firstDay.getDay())
            dayNum++;

        dates.push((
            <GridListTile key={i} cols={1}>
                { (dayNum > 0) && <CalendarItem number={dayNum} data={dateData.dayData['' + dayNum]}  /> }
            </GridListTile>
        ))
    }

    return dates
}


    


export default function CalendarInterface(props) {
    
    const data = FakeData
    
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
                    {generateDatesFromData(data)}
                </GridList>
            </CardContent>

        </Card>
    )
}