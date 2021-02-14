import React from 'react'
import {
    Card,
    CardHeader,
    CardContent,
    Chip,
    Table,
    TableContainer,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Paper,
    Button
} from '@material-ui/core'

export default function CalendarItem(props) {

    console.log(props.data)

    let tasks = []
    if (props.data !== undefined)
        tasks = props.data.tasks

    return (
        <Card style={{ height: '100%' }}>
            <CardHeader title={props.number} titleTypographyProps={{ align: 'left' }} />
            <CardContent style={{ margin: '-30px -10px' }}>
                {(props.data !== undefined) && (
                    <Paper>
                        <TableContainer style={{ width: '100%', maxHeight: '150px', margin: '0px 0px' }}>
                            <Table stickyHeader>
                                <TableHead>
                                    <TableRow tabIndex={-1}>
                                        <TableCell style={{ width: '1000px', height: '5px', backgroundColor: 'yellow' }} align='center'>
                                            TO DO
                                    </TableCell>
                                    </TableRow>
                                </TableHead>

                                <TableBody>
                                    {tasks.map(taskInfo => (
                                        <TableRow>
                                            <TableCell align='center'>
                                                <Button variant="outlined" color="primary" fullWidth>{taskInfo.name}</Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                )}
            </CardContent>
        </Card>
    )
}