import React from 'react'
import styled from 'styled-components';

function styleBoxComp() {
    const EqualDivider = styled.div`
    display: flex;
    marginb: 10.5rem;
    padding: 1rem;
    background: papayawhip;
    ${props => props.vertical && "flex-direction: column;"}
  
    > * {
      flex: 1;
  
      &:not(:first-child) {
        ${props => props.vertical ? "margin-top" : "margin-left"}: 1rem;
      }
    }
  `;
  
  const Child = styled.div`
    padding: 0.25rem 0.5rem;
    background: palevioletred;
  `;
  
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
        <EqualDivider>
          <Child>First</Child>
          <Child>Second</Child>
          <Child>Third</Child>
          <Child>Third</Child>
          

        </EqualDivider>
        <EqualDivider vertical>
          <Child>First</Child>
          <Child>Second</Child>
          <Child>Third</Child>
          <Child>Third</Child>

        </EqualDivider>
        </div>
       
    )
}

export default styleBoxComp
