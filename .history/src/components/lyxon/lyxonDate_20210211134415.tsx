import React from 'react'
import { DateTime } from "luxon";

function lyxonDate() {
const dayNumbersNow = DateTime.local().day
const dayMonthNow = DateTime.local().month
const dayYearNow = DateTime.local().year
const nameMonth = DateTime.local().monthLong
const test =DateTime.local()
.setLocale("fr")
.toLocaleString(DateTime.DATE_FULL); 

var dt = DateTime.fromISO("2017-09-24", { locale: "fr" });

    return (
        <div>
            <h1>Lyxon
            </h1>
            <p>{dayNumbersNow} - {dayMonthNow} - {dayYearNow}</p>
            <p>{nameMonth}</p>
            <p>{test}</p>
            <p>{dt}</p>
        </div>
    )
}

export default lyxonDate
