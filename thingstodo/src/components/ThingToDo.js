import React, { useContext, useState, useEffect } from 'react'
import { ThingsToDoContext } from '../contexts/ThingsToDoContext'

const ThingToDo = ({ thingToDo }) => {

 const { deleteThingToDo } = useContext(ThingsToDoContext)

 const [color, setColor] = useState(thingToDo.urgency)

 const backgroundColors = () => {
  switch(color) {
    case "urgent":
      setColor("red")
      break
    case "normal":
      setColor("#FFC900")
      break
    case "not_urgent":
      setColor("green")
      break
  }
 }
  useEffect (() => {
    backgroundColors()
},[color])

  return(
  <li style={{backgroundColor:color}} className="thingToDo">

    <div className="btns_container">
      <div>{thingToDo.thing}</div>
      {/* <div>{thingToDo.urgency}</div> */}
    </div>
    
    <div className="btns_container">
      <button onClick={() => deleteThingToDo(thingToDo.id)} className="btn">Delete</button>
      <button onClick={()=>setColor("urgent")} className="semaphorus red"></button>
      <button onClick={()=>setColor("normal")} className="semaphorus yellow"></button>
      <button onClick={()=>setColor("not_urgent")} className="semaphorus green"></button>
    </div>

  </li> 
  )
}

export default ThingToDo