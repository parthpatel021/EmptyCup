import React, { useEffect, useState } from 'react'
import axios from "axios";
import Card from './Card.jsx'
import "../../app.css";

const Contact = (props) => {
    const isShortlisted = props.shortlisted;
    const [data,setData] = useState([]);

    // get all contacts
    const getAllContacts = async (req,res) => {
        try {
            const {data} = await axios.get(`${process.env.REACT_APP_BASE_URL}api/v1/contacts`);
            const contacts = data.contacts;
            // console.log(contacts);
            setData(contacts);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllContacts();
    },[])

    const toggleShortlisting = (idx, prev) => {
        // var currData = data;
        // currData[idx].shortlisted = !prev;
        // setData(currData);

        setData(data => {
            return data.map((d,i) => {
                if(idx === i){
                    d = { ...d, shortlisted: !prev};
                }
                return d;
            })
        })
      
    }

  return (
    <>
        <div className='card-container'>
            { data.map((d,i) => {
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