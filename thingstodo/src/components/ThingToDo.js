import React, { useContext, useState, useEffect } from 'react'
import { ThingsToDoContext } from '../contexts/ThingsToDoContext'

const ThingToDo = ({ thingToDo }) => {

 const { deleteThingToDo } = useContext(ThingsToDoContext)

 const [color, setColor] = useState(thingToDo.urgency)

 const backgroundColors=()=>{
  switch(color) {
    case "Urgent":
      setColor("red")
      break
    case "Normal":
      setColor("yellow")
      break
    case "Not Urgent":
      setColor("green")
      break
  }
 }
  useEffect (() => {
    backgroundColors()
},[color])

  return(
  <li style={{backgroundColor:color}}>
    <div>{thingToDo.thing}</div>
    <div>{thingToDo.urgency}</div>
    <button onClick={() => deleteThingToDo(thingToDo.id)}>Delete</button>
    <div>
      <button onClick={()=>setColor("Urgent")}>Urgent</button>
      <button>Normal</button>
      <button>Not Urgent</button>
    </div>
  </li> 
  )
}

export default ThingToDo