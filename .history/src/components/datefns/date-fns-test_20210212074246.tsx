import React from 'react'
import { format, formatDistance, formatRelative, subDays } from 'date-fns'
import { LocalZone } from 'luxon'

function DateRfnsTest() {
  let g =  format(new Date(), "'Today is a' eeee")
  console.log('g: ', g)
    return (
        <div>
            <h1>DateRfnsTest</h1>
            <p></p>
        </div>
    )
}

export default DateRfnsTest
