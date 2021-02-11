import React from 'react'
import { DateTime } from "luxon";

function lyxonDate() {
    let dt = DateTime.local(2017, 5, 15, 8, 30);
    return (
        <div>
            <h1>Lyxon</h1>
        </div>
    )
}

export default lyxonDate
