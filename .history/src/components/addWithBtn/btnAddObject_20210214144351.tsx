import React, { useState } from 'react'


function BtnAddObject() {
   // const [selectedTurnaroundIds, setSelectedTurnaroundIds] = React.useState<number[]>([]);
const [items, setItems] = useState<number[]>();
 
const addItem = () => {
    let newAdd = items
  newAdd = items?.push(Math.floor(Math.random()* 10) + 1)
   setItems(newAdd)
}
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
