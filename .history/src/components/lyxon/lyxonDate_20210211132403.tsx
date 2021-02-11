import React from 'react'
import { DateTime } from "luxon";

function lyxonDate() {

    const dt = DateTime.local[2017]
    return (
        <div>
            <h1>Lyxon
            </h1>
            <p>{dt}</p>
        </div>
    )
}

export default lyxonDate
