import React, { useContext } from 'react'
import { ThingsToDoContext } from '../contexts/ThingsToDoContext'
import ThingToDo from './ThingToDo'

const ThingsToDoList = () => {

 const { thingsToDo } = useContext(ThingsToDoContext)

  return(
    <div className="thingsToDoList">
      <ul>
        {thingsToDo.map(thingToDo => { 
          return <ThingToDo thingToDo={thingToDo} key={thingToDo.id}/> 
        })}
      </ul>
    </div>
  )
}

export default ThingsToDoList