import React from 'react'


function Objects(){
let object1 = [1,8,10]
let object2 = [
    {id: 9, name: 'jenny'},
    {id: 8, name: 'tina'},
    {id: 7, name: 'marie'}
]
/* let obj;
object2.map((name)=>{
  obj = name ? name.name = 'adriana': name
  return object2
}) */
//console.log('object2: ', object2)
let obj;
let objTest2 = object2.map((object2Id)=>{
return object1.map((id)=>{
       obj = object2Id.id === id ? object2Id.name = 'adriana' : object2Id
       return object2
    })
    
})
console.log('objt 2', objTest2)

    return(
        <div>Objects</div>

    )
}

export default Objects;