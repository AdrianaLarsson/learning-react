import React from 'react'
import { format, formatDistance, formatRelative, subDays } from 'date-fns'
import { LocalZone } from 'luxon'

function DateRfnsTest() {
    const a = format(new Date(),)
    return (
        <div>
            <h1>DateRfnsTest</h1>
        </div>
    )
}

export default DateRfnsTest
