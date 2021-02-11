import React from 'react'
import { DateTime } from "luxon";

function lyxonDate() {
const dayNumbersNow = DateTime.local().day
const dayMonthNow = DateTime.local().month
const dayYearNow = DateTime.local().year
const allAtTheSameTime = DateTime.local().diffNow

    return (
        <div>
            <h1>Lyxon
            </h1>
            <p>{dayNumbersNow} - {dayMonthNow} - {dayYearNow}</p>
    )
}

export default lyxonDate
