import React from 'react'
import { format, formatDistance, formatRelative, subDays } from 'date-fns'

function DateRfnsTest() {
    const a = format(new Date(),locale)
    return (
        <div>
            <h1>DateRfnsTest</h1>
        </div>
    )
}

export default DateRfnsTest