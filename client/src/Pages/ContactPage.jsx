import React, { useState } from 'react'
import "../app.css";
import Contact from '../Components/Contact/Contact';
import Sidebar from '../Components/Sidebar';
import Layout from '../Components/Layout/Layout';
import Gallary from './../Components/Gallary';
import Map from './../Components/Map';


const ContactPage = () => {
    const [compIndex, setCompIndex] = useState(0);
    const [shortlisted, setShortlisted] = useState(false);
    const componentList = [<Contact shortlisted={shortlisted} />, <Gallary />, <Map />];

    const setComponent = (x) => {
        // console.log(x);
        setCompIndex(x);
    }

    const toggleShortlisted = () => {
        console.log(shortlisted);
        setShortlisted(!shortlisted);
    }


    return (
        <>
            <Layout >
                <section className='contact'>
                    <div className='top-section'>
                        <Sidebar 
                            setComponent={setComponent} 
                            idx={compIndex}
                            toggleShortlisted={toggleShortlisted}
                        />
                    </div>
                    <div>
                        {componentList[compIndex]}
                    </div>
                </section>
            </Layout>
        </>
    )
}

export default ContactPage