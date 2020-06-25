import React, { useContext } from 'react'
import { ThingsToDoContext } from '../contexts/ThingsToDoContext'

const Header = () => {

 const { thingsToDo } = useContext(ThingsToDoContext)

  return(
    <div className="header">
      <h1>Things To Do! :)</h1>
      <h2>{thingsToDo.length} things to go</h2>
    </div>
  )
}

export default Header