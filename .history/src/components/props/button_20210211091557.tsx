import React from 'react'


interface Button {
text: string;
}

function Button(props: Button) {


    return (
        <buttonclassName='btn'> {props.text} </button>
        
    )
}

export default Button
