import React from 'react'
import styled from 'styled-components';

function styleBoxComp() {
    const EqualDivider = styled.div`
    background: #f7f6e7;
    display: flex;
    margin: 0.5rem;
    padding: 1rem;
     "flex-"}
    direction: column;"
    


    `
    const Child = styled.div`
    `
  const obj = [
    {
      activity: "Vändstädning",
      cleanTimeStart: "08:30",
      cleanTimeStop: "09:25",
      arrivalTime: "08:15",
      departureTime: "10:00",
      arrivalNumber: "90123",
      departureNumber:"90256",
      track:"20",
      status:'+6',
      trainPosition: "Uppsala C"
    },
    {
        activity: "Grundstäning",
        cleanTimeStart: "10:30",
        cleanTimeStop: "13:05",
        arrivalTime: "10:15",
        departureTime: "15:10",
        arrivalNumber: "90237",
        departureNumber:"90885",
        track:"10",
        status:'-6',
        trainPosition: "Södra Station"
      },
  ];

    return (
        <div>
  <EqualDivider ver>
   <Child>First</Child>
   <Child>Second</Child>
        
    </EqualDivider>

        </div>
    )
}

export default styleBoxComp
