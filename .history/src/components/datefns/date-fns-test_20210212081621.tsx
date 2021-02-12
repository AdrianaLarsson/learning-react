import React from 'react'
import { format, formatDistance, formatRelative, subDays, compareAsc } from 'date-fns'
import { LocalZone } from 'luxon'

function DateRfnsTest() {
  let textTodayIs =  format(new Date(), "'Today is 'eeee");
  let threeDaysAgo = formatDistance(subDays(new Date(), 3), new Date())
 let last = formatRelative(subDays(new Date(), 3), new Date())
  console.log('textTodayIs: ',textTodayIs) 
let f =  format(new Date(2014, 1, 11), 'MM/dd/yyyy')
const dates = [
    new Date(1995, 6, 2),
    new Date(1987, 1, 11),
    new Date(1989, 6, 10),
  ]
 console.log (dates.sort(compareAsc))
 let sorting = dates.sort(compareAsc).toString()
 let sortingLocaleString = dates.sort(compareAsc).toString()
 let todayDate = format(new Date(), 'eeeeeee')

    return (
        <div>
            <h1>DateRfnsTest</h1>
            <p>{textTodayIs}</p>
            <p>{threeDaysAgo}</p>
            <p>{last}</p>
            <p>{f}</p>
        <p>{sorting}</p>
        <p>{sortingLocaleString}</p>
        <p>{todayDate}</p>

        </div>
    )
}

export default DateRfnsTest
