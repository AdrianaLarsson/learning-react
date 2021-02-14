import React, { useState } from 'react'


function BtnAddObject() {
   // const [selectedTurnaroundIds, setSelectedTurnaroundIds] = React.useState<number[]>([]);
const [items, setItems] = useState([]);
 let mtahhh = Math.floor(Math.random() * 10) + 1
const addItem = () => {
setItems
}
console.log('items ', items)

    return (
        <div>
            <h1>Hej</h1>
            <button onClick={addItem}> + </button>
            {items.forEach((item, key)=>{
                <p key={key}>{item}</p>
            })}
        </div>
        
    )
}

export default BtnAddObject
