import React, { useState } from 'react'


function BtnAddObject() {
   // const [selectedTurnaroundIds, setSelectedTurnaroundIds] = React.useState<number[]>([]);
const set
 let mtahhh = Math.floor(Math.random() * 10) + 1
const addItem = () => {
    setItems([...mtahhh])

}
console.log('items ', items)

    return (
        <div>
            <h1>Hej</h1>
            <button onClick={addItem}> + </button>
            {items?.map((item)=>{
                return <p>{item}</p>
            })}
        </div>
        
    )
}

export default BtnAddObject
