import React from 'react'
import { DateTime } from "luxon";

function lyxonDate() {

   const now = DateTime.local().daysInMonth

    return (
        <div>
            <h1>Lyxon
            </h1>
            <p>{now}</p>
        </div>
    )
}

export default lyxonDate
