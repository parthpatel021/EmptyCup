import React from 'react'
import "./app.css";
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ContactPage from './Pages/ContactPage';


const App = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/contacts' element={<ContactPage />} />
        </Routes>
    </>
  )
}

export default App