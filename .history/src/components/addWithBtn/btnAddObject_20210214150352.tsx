import React, { useState } from 'react'


function BtnAddObject() {
   // const [selectedTurnaroundIds, setSelectedTurnaroundIds] = React.useState<number[]>([]);
const [items, setItems] = useState<number[]>([]);
 let mtahhh = Math.floor(Math.random() * 10) + 1
const addItem = () => {
let newa = items
   newaa.push(...[mtahhh])
  setItems(items)
  console.log('click ')
}
console.log('items ', items)

    return (
        <div>
            <h1>Hej</h1>
            <button onClick={addItem}> + </button>
            {items?.map((item, key)=>{
                return <p key={key}>{item}</p>
            })}
        </div>
        
    )
}

export default BtnAddObject
