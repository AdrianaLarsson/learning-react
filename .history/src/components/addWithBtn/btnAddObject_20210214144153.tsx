import React, { useState } from 'react'


function BtnAddObject() {
   // const [selectedTurnaroundIds, setSelectedTurnaroundIds] = React.useState<number[]>([]);
const [items, setItems] = useState<number[]>();
 
const addItem = () => {
   items?.push(Math.floor(Math.random()* 10) + 1)
}

    return (
        <div>
            <h1>Hej</h1>
            <b
            {items?.map((item)=>{
                return <p>{item}</p>
            })}
        </div>
        
    )
}

export default BtnAddObject
