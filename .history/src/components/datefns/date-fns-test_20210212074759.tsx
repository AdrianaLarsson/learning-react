import React from 'react'
import { format, formatDistance, formatRelative, subDays } from 'date-fns'
import { LocalZone } from 'luxon'

function DateRfnsTest() {
  let textTodayIs =  format(new Date(), "'Today is 'eeee");
  le  let threeDaysAgo = formatDistance(subDays(new Date(), 3), new Date())
  console.log('textTodayIs: ',textTodayIs) 
    return (
        <div>
            <h1>DateRfnsTest</h1>
            <p>{textTodayIs}</p>
            <p>{threeDaysAgo}</p>
        </div>
    )
}

export default DateRfnsTest
