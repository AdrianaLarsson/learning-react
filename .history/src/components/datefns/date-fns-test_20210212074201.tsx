import React from 'react'
import { format, formatDistance, formatRelative, subDays } from 'date-fns'
import { LocalZone } from 'luxon'

function DateRfnsTest() {
    format(new Date(), "'Today is a' eeee")
    return (
        <div>
            <h1>DateRfnsTest</h1>
        </div>
    )
}

export default DateRfnsTest
