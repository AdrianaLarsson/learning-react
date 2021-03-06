import React from 'react'
import { DateTime } from "luxon";
import Datepicker from './datepicker'


function lyxonDate() {
const dayNumbersNow = DateTime.local().day
const dayMonthNow = DateTime.local().month
const dayYearNow = DateTime.local().year
const nameMonth = DateTime.local().monthLong
const holeDate = DateTime.local().setLocale("swe").toLocaleString(DateTime.DATETIME_MED); 
const t = DateTime.fromISO("2016-05-25").toLocaleString();
const today = DateTime.fromISO('2021--dd').toLocaleString();
const dt = DateTime.local().setLocale('swe').toLocaleString(DateTime.DATE_FULL);

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

        <Datepicker />
        </div>
    )
}

export default lyxonDate
