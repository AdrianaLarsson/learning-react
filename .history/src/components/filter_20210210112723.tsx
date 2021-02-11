import React from "react";

function Filter() {
    const objadriana = [
        {id:4, name:'adriana'},
        {id:8, name:'pedroza'},
        {id:9, name:'larsson'},
    ]
     const a = 'adriana'
    const filt = objadriana.filter((n)=> n.name === a)
    console.log('filter: ', filt)
  return <div>Filter</div>;
}

export default Filter;
