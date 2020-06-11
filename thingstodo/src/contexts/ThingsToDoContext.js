import React, { createContext, useState } from 'react'
// import uuid from 'uuid/v1'

export const ThingsToDoContext = createContext()

const ThingsToDoContextProvider = (props) => {

  const [thingsToDo, setThingsToDo] = useState([
    { thing: "Prepare dinner for parents", urgency: "Urgent", id: 1 },
    { thing: "Organize bedroom", urgency: "Not Urgent", id: 2 }
  ]) 

  const addThingToDo = (thing, urgency) => {
    setThingsToDo([...thingsToDo, { thing: thing, urgency: urgency, id: Math.random() }])
  }

  const deleteThingToDo = (id) => {
    setThingsToDo(thingsToDo.filter(thingToDo => thingToDo.id !== id ))
  }
  

  // const changeUrgency = (id) => {
  //   var idMatch
  //   setThingsToDo(
  //      idMatch = thingsToDo.filter(thingToDo => thingToDo.id == id )

  //   )
  // }

  return( 
    <ThingsToDoContext.Provider value={{ addThingToDo, deleteThingToDo, thingsToDo }}>
      {props.children}
    </ThingsToDoContext.Provider>
  );

}

export default ThingsToDoContextProvider