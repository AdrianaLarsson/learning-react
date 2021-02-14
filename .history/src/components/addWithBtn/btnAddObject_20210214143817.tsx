import React, { useState } from 'react'


function BtnAddObject() {
   // const [selectedTurnaroundIds, setSelectedTurnaroundIds] = React.useState<number[]>([]);
const [items, setItems] = useState<number[]>();
 
const addItem = () => {

}

    return (
        <div>
            <h1>Hej</h1>
            {items?.map((item)=>{
                return <h1></h1>
            })}
        </div>
        
    )
}

export default BtnAddObject
