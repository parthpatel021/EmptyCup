import React from 'react'
import data from '../data.js'
import Card from './Card.jsx'
import "../app.css";

const Contact = () => {
  return (
    <>
        <div className='card-container'>
            {data.map((d,i) => (
                <Card key={i} data={d} />
            ))}
        </div>
        
    </>
  )
}

export default Contact