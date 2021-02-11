import React from 'react'
import { DateTime } from "luxon";

function lyxonDate() {
const dayNumbersNow = DateTime.local().day
const dayMonthNow = DateTime.local().month
const dayYearNow = DateTime.local().year
const nameMonth = DateTime.local().monthLong
const holeDate = DateTime.local().setLocale("swe").toLocaleString(DateTime.DATETIME_MED); 
const t = DateTime.fromISO("2016-05-25").toLocaleString();
const today = DateTime.fromISO('yyy-mm-dd').toLocaleString()
const dt = DateTime.local().setLocale('swe').toLocaleString(DateTime.fromISO(()))
    return (
        <div>
            <h1>Lyxon
            </h1>
            <p>{dayNumbersNow} - {dayMonthNow} - {dayYearNow}</p>
            <p>{nameMonth}</p>
            <p>{holeDate}</p>
            <p>{t}</p>
            <p>{today}</p>
            <p>{dt}</p>
        
        </div>
    )
}

export default lyxonDate
