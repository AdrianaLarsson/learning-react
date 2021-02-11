import React from 'react'
import { DateTime } from "luxon";

function lyxonDate() {

   const nosw DateTime.local().setZone('America/New_York').minus({ weeks: 1 }).endOf('day').toISO();

    return (
        <div>
            <h1>Lyxon
            </h1>
            <p>{now}</p>
        </div>
    )
}

export default lyxonDate
