import React from 'react'
import { DateTime } from "luxon";

function lyxonDate() {
const dayTodayINumbers = DateTime.local().day
co

    return (
        <div>
            <h1>Lyxon
            </h1>
            <p>{dayTodayINumbers}</p>
        </div>
    )
}

export default lyxonDate