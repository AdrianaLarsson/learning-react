import React from 'react'
import { DateTime } from "luxon";

function lyxonDate() {
    let dt = DateTime.local()
    return (
        <div>
            <h1>Lyxon</h1>
        </div>
    )
}

export default lyxonDate
