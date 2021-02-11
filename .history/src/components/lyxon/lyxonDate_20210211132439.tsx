import React from 'react'
import { DateTime } from "luxon";

function lyxonDate() {

    var now = DateTime.local();
    return (
        <div>
            <h1>Lyxon
            </h1>
            <p>{d}</p>
        </div>
    )
}

export default lyxonDate
