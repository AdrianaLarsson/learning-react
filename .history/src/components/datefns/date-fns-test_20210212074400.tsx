import React from 'react'
import { format, formatDistance, formatRelative, subDays } from 'date-fns'
import { LocalZone } from 'luxon'

function DateRfnsTest() {
  let g =  format(new Date(), "Id 'eee")
  console.log('g: ', g)
    return (
        <div>
            <h1>DateRfnsTest</h1>
            <p>{g}</p>
        </div>
    )
}

export default DateRfnsTest
