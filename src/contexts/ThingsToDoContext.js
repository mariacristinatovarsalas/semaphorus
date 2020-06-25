import React, { createContext, useState } from 'react'
// import uuid from 'uuid/v1'

export const ThingsToDoContext = createContext()

const ThingsToDoContextProvider = (props) => {

  const [thingsToDo, setThingsToDo] = useState([
    { thing: "Prepare dinner", urgency: "urgent", id: 1 },
    { thing: "Organize bedroom", urgency: "not_urgent", id: 2 },
    { thing: "Do homework", urgency: "normal", id: 3 }
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