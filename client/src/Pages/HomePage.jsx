import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../app.css";
import Layout from '../Components/Layout/Layout';
import BeatLoader from "react-spinners/BeatLoader";

const HomePage = () => {
    const navigate = useNavigate();
    const [count,setCount] = useState(3);


    useEffect(() => {
        const interval = setInterval(() => {
          setCount((prevValue) => --prevValue);
        }, 1000);
        count === 0 && navigate('/contacts');
        return () => clearInterval(interval);
    }, [count, navigate]);

  return (
    <>
        <Layout >
            <section className='home'>
                <h3>Home - Page</h3>
                <div className='loader'>
                    <h5>Redirecting to Contacts Page in {count}</h5>
                    <BeatLoader color="#E0A64E" />
                </div>
            </section>
        </Layout>

    </>
  )
}

export default HomePage;