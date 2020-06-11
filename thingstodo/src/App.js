import React from 'react';
import './App.css';
import ThingsToDoContextProvider from './contexts/ThingsToDoContext'
import Header from './components/Header'
import ThingsToDoList from './components/ThingsToDoList'
import AddThingToDoForm from './components/AddThingToDoForm'

function App() {
  return (
    <div>
      <ThingsToDoContextProvider>
        <Header />
        <ThingsToDoList />
        <AddThingToDoForm />
      </ThingsToDoContextProvider>
    </div>
  );
}

export default App;