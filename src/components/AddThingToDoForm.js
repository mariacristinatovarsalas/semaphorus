import React, { useContext, useState } from 'react'
import { ThingsToDoContext } from '../contexts/ThingsToDoContext'

const AddThingToDoForm = () => {

  const { addThingToDo } = useContext(ThingsToDoContext)
  const [thing, setThing] = useState('')
  const [urgency, setUrgency] = useState('')

  const assignUrgency = (e) => {
    setUrgency(e.target.id)
  }

  const createThingToDo = (e) => {
    assignUrgency(e)
    addThingToDo(thing, urgency)
    setThing('');
    setUrgency(''); 
  }

 

  return(
    <div className="form">
      <div className="btns_container">
        <input onChange={(e) => setThing(e.target.value)} value={thing}/>
        {/* <input onChange={(e) => setUrgency(e.target.value)} /> */}
      </div>
      <div className="btns_container">
        <button id="urgent" className="semaphorus red" onClick={(e) => assignUrgency(e)}></button>
        <button id="normal" className="semaphorus yellow" onClick={(e) => assignUrgency(e)}></button>
        <button id="not_urgent" className="semaphorus green" onClick={(e) => assignUrgency(e)}></button>
        <button className="btn" onClick={createThingToDo}>Create</button>
      </div>
    </div>
  )
}

export default AddThingToDoForm