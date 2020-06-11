import React, { useContext, useState } from 'react'
import { ThingsToDoContext } from '../contexts/ThingsToDoContext'

const AddThingToDoForm = () => {

  const { addThingToDo } = useContext(ThingsToDoContext)
  const [thing, setThing] = useState('')
  const [urgency, setUrgency] = useState('')

  const assignUrgency = (e) => {
    setUrgency(e.target.innerHTML)
  }

  const createThingToDo = (e) => {
    assignUrgency(e)
    addThingToDo(thing, urgency)
    setThing('');
    setUrgency(''); 
  }

 

  return(
    <div>
      <div>
        <input onChange={(e) => setThing(e.target.value)} />
        {/* <input onChange={(e) => setUrgency(e.target.value)} /> */}
        <button onClick={createThingToDo}>Create</button>
      </div>
      <div>
        <button onClick={(e) => assignUrgency(e)}>Urgent</button>
        <button onClick={(e) => assignUrgency(e)}>Normal</button>
        <button onClick={(e) => assignUrgency(e)}>Not Urgent</button>
      </div>
    </div>
  )
}

export default AddThingToDoForm