import React from 'react'
import "../app.css";
import Contact from '../Components/Contact';
import Sidebar from '../Components/Sidebar';

const Home = () => {
  return (
    <>
        <section className='home'>
            <div className='top-section'>
                <Sidebar />
            </div>
            <div>
                <Contact />
            </div>
        </section>

    </>
  )
}

export default Home