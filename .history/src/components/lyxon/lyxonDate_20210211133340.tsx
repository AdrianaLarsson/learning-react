import React from 'react'
import { DateTime } from "luxon";

function lyxonDate() {
const dayTodayINumbers = DateTime.local().day
const dayMonthToday = DateTime.local().month
const dayMToday = DateTime.local().month

    return (
        <div>
            <h1>Lyxon
            </h1>
            <p>{dayTodayINumbers} - {dayMonthToday}</p>
        </div>
    )
}

export default lyxonDate
