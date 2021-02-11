import React from 'react'
import { DateTime } from "luxon";

function lyxonDate() {
const dayNumbersNow = DateTime.local().day
const dayMonthNow = DateTime.local().month
const dayYearNow = DateTime.local().year
const nameMonth = DateTime.local().monthLong
const holdeDate = DateTime.local().setLocale("swe").toLocaleString(DateTime.DATETIME_MED); 
const t = DateTime.fromISO("2016-05-25")

    return (
        <div>
            <h1>Lyxon
            </h1>
            <p>{dayNumbersNow} - {dayMonthNow} - {dayYearNow}</p>
            <p>{nameMonth}</p>
            <p>{holdeDate}</p>
            <p>{holdeDate}</p>
        </div>
    )
}

export default lyxonDate
