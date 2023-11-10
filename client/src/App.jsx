import React from 'react'
import "./app.css";
import Navbar from './Components/Navbar';
import Home from './Pages/Home';

const App = () => {
  return (
    <div className='app'>
        <Navbar />
        <Home />
    </div>
  )
}

export default App