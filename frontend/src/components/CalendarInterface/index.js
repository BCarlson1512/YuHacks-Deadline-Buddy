import React from 'react'
import {
    Card,
    CardHeader,
    CardContent,
    GridList,
    GridListTile,
    Typography
} from '@material-ui/core'

import CalendarItem from './CalendarItem'

import { FakeData } from './CalendarFakeData'

const generateDatesFromData = (dateData) => {
    var dates = []

    for (var i = 0; i < 31; i++) {
        dates.push((
            <GridListTile key={i} cols={1}>
                <CalendarItem number={i + 1} data={dateData['' + (i + 1)]}  />
            </GridListTile>
        ))
    }

    return dates
}

export default function CalendarInterface(props) {

    return (
        <Card>
            <CardHeader title={FakeData.month} />
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
                    {generateDatesFromData(FakeData.dayData)}
                </GridList>
            </CardContent>

        </Card>
    )
}