import React, { useState } from 'react'


function BtnAddObject() {
   // const [selectedTurnaroundIds, setSelectedTurnaroundIds] = React.useState<number[]>([]);
const [items, setItems] = useState([]);
 
const addItem = () => {
    setItems

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
