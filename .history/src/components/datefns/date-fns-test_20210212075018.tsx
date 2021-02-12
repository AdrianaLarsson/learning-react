import React from 'react'
import { format, formatDistance, formatRelative, subDays } from 'date-fns'
import { LocalZone } from 'luxon'

function DateRfnsTest() {
  let textTodayIs =  format(new Date(), "'Today is 'eeee");
  let threeDaysAgo = formatDistance(subDays(new Date(), 3), new Date())
 let last = formatRelative(subDays(new Date(), 3), new Date())
  console.log('textTodayIs: ',textTodayIs) 
let   format(new Date(2014, 1, 11), 'MM/dd/yyyy')
    return (
        <div>
            <h1>DateRfnsTest</h1>
            <p>{textTodayIs}</p>
            <p>{threeDaysAgo}</p>
            <p>{last}</p>
        </div>
    )
}

export default DateRfnsTest
