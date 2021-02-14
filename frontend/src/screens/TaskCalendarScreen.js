import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Animated } from 'react-animated-css';
import CalendarInterface from '../components/CalendarInterface'

export default function TaskCalendar() {
    
    return (
        <div>
            <Animated animationIn="rollIn">
                <h1 style={{fontFamily:"Roboto"}}>Your Monthly Overview</h1>
            </Animated>
            <Animated>
                <CalendarInterface />
            </Animated>
        </div>
    )
}
