import React, { useState } from 'react'


function BtnAddObject() {
   // const [selectedTurnaroundIds, setSelectedTurnaroundIds] = React.useState<number[]>([]);
const [items, setItems] = useState<number[]>();
 
const addItem = () => {
   items?.push(Math.floor(Math.random()* 10) +)
}

    return (
        <div>
            <h1>Hej</h1>
            {items?.map((item)=>{
                return <p>{item.id}</p>
            })}
        </div>
        
    )
}

export default BtnAddObject
