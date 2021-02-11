import React from 'react'
import { DateTime } from "luxon";

function lyxonDate() {

    var now = DateTime.local();
    return (
        <div>
            <h1>Lyxon
            </h1>
            <p>{n}</p>
        </div>
    )
}

export default lyxonDate
