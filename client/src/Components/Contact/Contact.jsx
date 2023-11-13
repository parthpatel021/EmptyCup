import React, { useState } from 'react'
import dataList from '../../data.js'
import Card from './Card.jsx'
import "../../app.css";

const Contact = (props) => {
    const isShortlisted = props.shortlisted;
    
    const [data,setData] = useState([...dataList]);

    const toggleShortlisting = (idx, prev) => {
        var currData = data;
        currData[idx].shortlisted = !prev;
        setData(currData);

        console.log(data);
    }
  return (
    <>
        <div className='card-container'>
            {data.map((d,i) => {
                if(isShortlisted & !d.shortlisted){
                    return <></>
                } else {
                    return <Card key={i} index={i} data={d} toggleShortlisting={toggleShortlisting}/>
                }
            })}
        </div>
        
    </>
  )
}

export default Contact