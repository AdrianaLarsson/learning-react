import React from 'react'

function Arrays() {

    const selectedColors = ['red','blue'];
    console.log('selectedColors: ', selectedColors);
    const red = selectedColors[0];
    selectedColors[2] = 'green';
    console.log('red: ', red);
    console.log('selectedColors: ', selectedColors);

 
    return (
        <div>Arrays</div>
    )
}

export default Arrays;