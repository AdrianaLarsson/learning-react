import React from 'react'

function Arrays() {

    let selectedColors = ['red','blue'];
    console.log('selectedColors: ', selectedColors);
    const red = selectedColors[0];
    selectedColors[2] =
    console.log('red: ', red);

 
    return (
        <div>Arrays</div>
    )
}

export default Arrays;