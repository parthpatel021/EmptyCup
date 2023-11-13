import React from 'react'
import dataList from '../../data.js'
import Card from './Card.jsx'
import "../../app.css";

const Contact = (props) => {
    const shortlisted = props.shortlisted;
    
    var data = shortlisted ? dataList.filter((contact) => (contact.shortlisted === true)) : dataList;

  return (
    <>
        <div className='card-container'>
            {data.map((d,i) => (
                <Card key={i}  data={d} />
            ))}
        </div>
        
    </>
  )
}

export default Contact