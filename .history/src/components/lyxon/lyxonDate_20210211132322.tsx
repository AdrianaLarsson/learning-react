import React from 'react'
import { DateTime } from "luxon";

function lyxonDate() {

    const dt = DateTime.DATETIME_F
    return (
        <div>
            <h1>Lyxon
            </h1>
            <p>{dt}</p>
        </div>
    )
}

export default lyxonDate
