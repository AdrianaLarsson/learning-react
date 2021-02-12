import React from 'react'
import { format, formatDistance, formatRelative, subDays } from 'date-fns'
import { LocalZone } from 'luxon'

function DateRfnsTest() {
  let textTodayIs =  format(new Date(), "'Today is 'eeee")
  console.log('textTodayIs: ',) 
    return (
        <div>
            <h1>DateRfnsTest</h1>
            <p>{}</p>
        </div>
    )
}

export default DateRfnsTest
